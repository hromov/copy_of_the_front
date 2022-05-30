import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { MaterialBankForm } from './BankForm/BankForm';
import { ErrorMessage } from '../errors/errorMessage/ErrorMessage';

export const BankDialog = (props) => {
  const { onClose, bank, error, open } = props;

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
      <ErrorMessage error={error} />
    </Dialog>
  );
}

//TODO: not clear - why do we have it hear but not in the other components?
BankDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  bank: PropTypes.object.isRequired,
};
