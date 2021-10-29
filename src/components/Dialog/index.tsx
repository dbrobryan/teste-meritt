import { useState, useCallback } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { 
  Icon, 
  IconButton,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  DialogContentText
} from '@mui/material';
import { Exam } from '../../models';

export function ResponsiveDialog(exam: Exam) {

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.only('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const touchClosed = () => {
    setOpen(false);
  } 

  const memoTotalQuestions = useCallback(() => {
    return `${exam.data?.answeredItems}/${exam.data?.itemsTotal} questões`;
  }, [exam]);

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
        <DialogTitle id="responsive-dialog-title">
          {memoTotalQuestions}
          <IconButton onClick={touchClosed} sx={{display: 'flex', alignItems: 'flex-end'}}>
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