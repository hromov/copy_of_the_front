import { useDispatch, useSelector } from "react-redux";
import { BankDialog } from "../../shared/dialog/Dialog";
import { BanksTable } from "../../shared/table/BanksTable";
import * as React from 'react';
import { Button } from "@mui/material";
import { bankChanged } from "../../redux/features/banks/banksSlice";

export const Settings = () => {
  const banksState = useSelector((state) => state.banks)
  console.log(banksState)

  const [open, setOpen] = React.useState(false);
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

  const handleClose = (value) => {
    //TODO: dispatch event here. Show error and do not close if there is one
    if (value) {
      console.log(value);
      setSelectedBank(value);
      dispatch(bankChanged({ bank: value }));
    }
    setOpen(false);

  };

  return (
    <main>
      <h1>Settings</h1>
      <BanksTable banks={banksState.banks} onSelection={handleSelection} />
      <Button variant="outlined" onClick={handleCreate}>
        New Bank
      </Button>
      <BankDialog
        bank={selectedBank}
        open={open}
        onClose={handleClose}
      />
    </main>
  );
};
