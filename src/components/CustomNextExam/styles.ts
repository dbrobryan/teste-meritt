import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledBox = styled(Box)(({theme}) => ({
  '& > * + *': {
    marginLeft: theme.spacing(2.5),
  }
}))