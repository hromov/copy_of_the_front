import { useDispatch, useSelector } from "react-redux";
import { BankDialog } from "../../shared/dialog/Dialog";
import { BanksTable } from "../../shared/table/BanksTable";
import * as React from 'react';
import { Button } from "@mui/material";
import { saveBank, deleteBank, selectBanks } from "../../features/banks/banksSlice";
import { ErrorMessages } from "../../shared/errors/Errors";
import styles from "./Settings.module.css";

export const Settings = () => {

  const banks = useSelector(selectBanks);
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

  const handleClose = (bank) => {
    bank && dispatch(saveBank(bank));
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteBank(id));
  }

  return (
    <main>
      <h2>Settings</h2>
      <BanksTable banks={banks} onSelection={handleSelection} onDelete={handleDelete} />
      <ErrorMessages />
      <Button className={styles.button} variant="outlined" onClick={handleCreate}>New Bank</Button>
      <BankDialog bank={selectedBank} open={open} onClose={handleClose} />
    </main>
  );
};
