import { useState, useCallback, useEffect } from "react";

import {ResponsiveDialog} from '../../components/Dialog';

import {
  Typography,
  AppBar,
  Toolbar,
  LinearProgress,
  Icon,
  Button,
  IconButton,
  Box,
  Paper,
  Skeleton,
} from "@mui/material";

import {useTimer, useNotify} from '../../hooks';
import { Exam } from "../../models";

export function Exams(exam: Exam) {
  const {timer, start} = useTimer(25);
  const notify = useNotify();

  console.log({exam})

  const [eyeIcon, setEyeIcon] = useState<"visibility_off" | "visibility">(
    "visibility_off"
  );
  const [saveIcon, setSaveIcon] = useState<"turned_in_not" | "turned_in">(
    "turned_in_not"
  );

  const handleToggleVisibility = useCallback(() => {
    setEyeIcon((oldState) => {
      if (oldState === "visibility") {
        return "visibility_off";
      }

      return "visibility";
    });
  }, []);

  useEffect(() => {
    start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleTouchSave = useCallback(() => {
    setSaveIcon((oldState) => {
      if (oldState === "turned_in") {
        return "turned_in_not";
      }

      return "turned_in";
    });

    if (saveIcon === 'turned_in_not') {
      notify('Marcada para revisar mais tarde')
    }

  }, [notify, saveIcon]);

  return (
    <>
      <AppBar
        color="default"
        sx={{
          marginTop: "64px",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: (theme) => theme.palette.common.white,
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" onClick={handleToggleVisibility}>
              <Icon color="primary">{eyeIcon}</Icon>
            </IconButton>
            <Typography sx={{ marginLeft: (theme) => theme.spacing(1)}}>
              {eyeIcon === "visibility" ? timer : (
                <Skeleton animation="wave"
                height={20} width={62} 
                sx={{ transform: "none" }}/>
              )}
            </Typography>
          </Box>  
          <IconButton size="large">
              <ResponsiveDialog description={exam.description}
               name={exam.name} type={"SIMULATED"}
              data={exam.data} events={exam.events}/>
           <Typography sx={{fontSize: 15}}> Questões </Typography>
          </IconButton>
          <Button
            component="span"
            variant="outlined"
            sx={{
              paddingLeft: (theme) => theme.spacing(3),
              paddingRight: (theme) => theme.spacing(3),
            }}
            endIcon={<Icon>send</Icon>}
          >
            Entregar Prova
          </Button>
        </Toolbar>
        <LinearProgress
          variant="determinate"
          value={80}
          valueBuffer={100}
          sx={{
            height: 6,
            borderRadius: 0.5,
            backgroundColor: (theme) => theme.palette.grey[500],
          }}
        />
      </AppBar>
        <Paper sx={{display: 'flex', flexDirection: "column", padding: 3.75}} elevation={0}>
          <Box display="flex" justifyContent="space-between" paddingBottom={1}>
          <Typography>1</Typography>
          <Typography>
            <IconButton size="large" sx={{padding: 0}} onClick={handleTouchSave}>
              <Icon color="primary">{saveIcon}</Icon>
            </IconButton>
          </Typography>
          </Box>
          <Button
            component="span"
            variant="outlined"
            sx={{
              paddingLeft: (theme) => theme.spacing(3),
              paddingRight: (theme) => theme.spacing(3),
            }}
            startIcon={<Icon>arrow_back_ios</Icon>}
          >
            Anterior
          </Button>
          <Button
            component="span"
            variant="contained"
            sx={{
              paddingLeft: (theme) => theme.spacing(3),
              paddingRight: (theme) => theme.spacing(3),
            }}
            endIcon={<Icon>arrow_forward_ios</Icon>}
          >
            Proximo
          </Button>
        </Paper>
    </>
  );
}
