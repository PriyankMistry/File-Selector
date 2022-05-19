import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OneDriveExample from './Components/OneDrive';
import { Box } from '@mui/system';
import DropboxExample from './Components/Dropbox';
import { Input } from '@mui/material';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Upload
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select File(s) to Upload...</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can select file from Google Drive, Dropbox, OneDrive or Local PC
          </DialogContentText>
          <DialogContentText>
            Select files to upload
          </DialogContentText>
          <Input
            accept=".pdf"
            style={{ display: 'none' }}
            id="raised-button-file"
            single
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" color="success"  component="span">
              Browse Files
            </Button>
          </label> 
          <OneDriveExample/>
          <Button variant='contained' color="success">Drive</Button>
          <DropboxExample/>
        </DialogContent>
        <DialogActions>
        <Button variant='contained' color="success">Remove selected file</Button>
        <Button variant='contained' color="success">Clear file selection</Button>
        <Button variant='contained' color="success">Upload Files</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


