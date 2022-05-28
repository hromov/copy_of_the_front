import { useSelector } from "react-redux";
import { BankDialog } from "../../shared/dialog/Dialog";
import { BanksTable } from "../../shared/table/BanksTable";
import * as React from 'react';
import { Button } from "@mui/material";

export const Settings = () => {
  const banksState = useSelector((state) => state.banks)
  console.log(banksState)

  const [open, setOpen] = React.useState(false);
  const [selectedBank, setSelectedBank] = React.useState({});

  const handleClickOpen = (value) => {
    setSelectedBank(value);
    setOpen(true);
  };

  const handleClose = (value) => {
    //TODO: dispatch event here. Show error and do not close if there is one
    if (value) {
      console.log(`save the bank: ${value}`)
      setSelectedBank(value);
    }
    setOpen(false);
    
  };

  return (
    <main>
      <h1>Settings</h1>
      <BanksTable banks={banksState.banks} onSelection={handleClickOpen} />
      <Button variant="outlined" onClick={handleClickOpen}>
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
