import { Box, Button, Typography, Card, CardActionArea, CardContent, Icon } from '@mui/material'

import {useHistory} from 'react-router-dom';

import {BorderLinearProgress} from './styles';

export const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export function BasicCard() {
  const history = useHistory()

  function handleNavegate() {
    history.push('/exams');
  }

  return (
    <Card
      sx={{
        width: 300,
        marginTop: 3.5,
        boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
      }}
      elevation={0}
    >
      <CardActionArea onClick={handleNavegate}>
        <CardContent>
          <Button
            component="span"
            color="secondary"
            size="small"
            variant="contained"
            sx={{ boxShadow: "none" }}
          >
          </Button>
          <Typography sx={{ fontSize: 22, marginBottom: 4 }} variant="h1" component="div" color="text.primary" gutterBottom>
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={25}
            valueBuffer={100}
            sx={{height: 6, borderRadius: 0.5}}
          />
          <Typography variant="subtitle2" sx={{color: (theme) => theme.palette.grey[500]}}>
            <Icon>access_time</Icon> <Icon>apps</Icon>
          </Typography>
          <br/>
          <Typography variant="subtitle2" sx={{color: (theme) => theme.palette.grey[500]}}>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
