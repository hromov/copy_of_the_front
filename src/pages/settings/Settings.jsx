import { useDispatch, useSelector } from "react-redux";
import { BankDialog } from "../../shared/dialog/Dialog";
import { BanksTable } from "../../shared/table/BanksTable";
import * as React from 'react';
import { Button } from "@mui/material";
import { bankChanged, bankDeleted } from "../../features/banks/banksSlice";
import { ErrorMessage } from "../../shared/errors/errorMessage/ErrorMessage";
import { banksAPI } from "../../api/banksApi";

export const Settings = () => {
  const banksState = useSelector((state) => state.banks)

  const [open, setOpen] = React.useState(false);
  const [saveError, setSaveError] = React.useState('');
  const [deleteError, setDeleteError] = React.useState('');
  const [selectedBank, setSelectedBank] = React.useState({});

  const dispatch = useDispatch();

  const handleSelection = (bank) => {
    setSelectedBank(bank);
    setOpen(true);
  };

  const handleCreate = () => {
    setSelectedBank({});
    setOpen(true);
  }

  const handleClose = (bank) => {
    if (bank) {
      //TODO: is it's the right place?
      banksAPI.saveBank(bank)
        .then((resp) => {
          setSaveError('');
          dispatch(bankChanged({ bank: resp.data || bank }));
          setOpen(false);
        })
        .catch((err) => {
          setSaveError(err.message);
        });
    } else {
      setSaveError('');
      setOpen(false);
    }
  };

  const handleDelete = (id) => {
    banksAPI.deleteBank(id)
      .then(() => {
        setDeleteError('');
        dispatch(bankDeleted({id: id}));
      })
      .catch((err) => setDeleteError(err.message));
  }

  return (
    <main>
      <h2>Settings</h2>
      <BanksTable banks={banksState.banks} onSelection={handleSelection} onDelete={handleDelete}/>
      <ErrorMessage error={deleteError} />
      <br />
      <Button variant="outlined" onClick={handleCreate}>
        New Bank
      </Button>
      <BankDialog
        bank={selectedBank}
        open={open}
        error={saveError}
        onClose={handleClose}
      />
    </main>
  );
};
