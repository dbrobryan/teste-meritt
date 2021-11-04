import { useState, useContext } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';

import {ExamContext} from '../../contexts/ExamContext'

import { useTheme } from '@mui/material/styles';
import { 
  Icon, 
  IconButton,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  DialogContentText,
} from '@mui/material';

export function ResponsiveDialog() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const context = useContext(ExamContext);
  const fullScreen = useMediaQuery(theme.breakpoints.only('md'));

  const handleClickOpen = () => {
    setOpen(true);
    context.exam?.questions()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const touchClosed = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} color="primary">
        <Icon>apps</Icon>
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-header">
        
          <IconButton onClick={touchClosed} sx={{display: 'flex', alignItems: 'flex-end'}} >
            <Icon >close</Icon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      </div>
  );
}