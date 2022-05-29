import { useDispatch, useSelector } from "react-redux";
import { BankDialog } from "../../shared/dialog/Dialog";
import { BanksTable } from "../../shared/table/BanksTable";
import * as React from 'react';
import { Button } from "@mui/material";
import { bankChanged, bankDeleted } from "../../redux/features/banks/banksSlice";
import { deleteBank, saveBank } from "../../redux/features/banks/banksApi";
import { ErrorMessage } from "../../shared/errors/errorMessage/ErrorMessage";

export const Settings = () => {
  const banksState = useSelector((state) => state.banks)

  //TODO: not clear. Is it the new way of working with local state without a component?
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
      saveBank(bank)
        .then((resp) => {
          setSaveError('');
          //no data if it was an update
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
    deleteBank(id)
      .then(() => {
        setDeleteError('');
        dispatch(bankDeleted({id: id}));
      })
      .catch((err) => setDeleteError(err.message));
  }

  return (
    <main>
      <h1>Settings</h1>
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
