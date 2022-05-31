import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { MaterialBankForm } from './BankForm/BankForm';

export const BankDialog = (props) => {
  const { onClose, bank, open } = props;

  const handleClose = () => {
    onClose(null);
  };

  const handleBankSave = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Bank editor</DialogTitle>
      <MaterialBankForm bank={bank} onSave={handleBankSave} />
    </Dialog>
  );
}

//TODO: not clear - why do we have it hear but not in the other components?
BankDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  bank: PropTypes.object.isRequired,
};
