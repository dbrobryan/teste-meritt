
import { makeStyles, createStyles } from '@mui/styles'

export const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '300px'
  },
  img: {
    width: '500px',
    height: 'auto',
  }
}))