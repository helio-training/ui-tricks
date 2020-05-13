import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DeleteIcon from '@material-ui/icons/Delete';


function DeleteDialog({ poke, remove, onClose, open}) {
    const handleClose = () => {
        onClose();
    };

    const handleDelete = () => {
        onClose();
        remove();
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Delete {poke.name}?</DialogTitle>
            <Button variant="outlined" color="secondary" onClick={handleDelete}>
                Yes
            </Button>
            <Button variant="outlined" onClick={handleClose}>
                No
            </Button>
        </Dialog>
    );
}

DeleteDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default function DeletePoke({poke, remove}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <DeleteIcon color="secondary"/>
            </Button>
            <DeleteDialog poke={poke} remove={remove} open={open} onClose={handleClose} />
        </div>
    );
}
