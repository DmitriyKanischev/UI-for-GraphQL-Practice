import React from 'react';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BlockIcon from '@mui/icons-material/Block';

import withHocs from './DirectorsDialogHoc'

class DirectorsDialog extends React.Component {

  handleDelete = () => {
    const { id, handleClose, deleteDirector } = this.props;
    deleteDirector(id)
    handleClose();
  }

  render() {
    const { open, handleClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sire that you want to delete element?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you click 'Confirm' this element will be removed from data base.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <BlockIcon /> Cancel
          </Button>
          <Button onClick={this.handleDelete} color="primary" autoFocus>
            <DeleteForeverIcon /> Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withHocs(DirectorsDialog);
