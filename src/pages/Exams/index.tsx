import { useState, useCallback, useEffect, useMemo } from "react";

import { ResponsiveDialog } from "../../components/Dialog";

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

import { useTimer, useNotify,  } from "../../hooks";
import {useExamContext} from '../../contexts';

export function Exams() {
  const { timer, start } = useTimer(25);
  const notify = useNotify();
  const {exam} = useExamContext();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const [eyeIcon, setEyeIcon] = useState<"visibility_off" | "visibility">(
    "visibility_off"
  );
  const [saveIcon, setSaveIcon] = useState<"turned_in_not" | "turned_in">(
    "turned_in_not"
  );

  console.log({exam});

  const memoQuestions = useMemo(() => {
    return Object.entries<any>(exam?.questions || {}).reduce((accumulator: Record<string, any>[], [key, value]) => {
      accumulator = [...accumulator, {
        id: key,
        ...value,
        answers: Object.entries<any>(value.answers).reduce((acc: Record<string, any>[], [answerKey, answerValue]) => {
          acc = [...acc, {
            id: answerKey,
            ...answerValue
          }]

          return acc;
        }, [])
      }]

      return accumulator;
    }, [])
  }, [exam?.questions])

  console.log({memoQuestions})

  const handleToggleVisibility = useCallback(() => {
    setEyeIcon((oldState) => {
      if (oldState === "visibility") {
        return "visibility_off";
      }

      return "visibility";
    });
  }, []);

  const handleChangeQuestion = useCallback((type: 'prev' | 'next') => () => {
    setCurrentQuestionIndex(oldIndex => {
      if (type === 'prev' && oldIndex - 1 >= 0) {
        return oldIndex - 1;
      }
  
      if (type === 'next' && oldIndex + 1 < memoQuestions.length) {
        return oldIndex + 1
      }

      return oldIndex;

    })
  }, [memoQuestions.length])

  useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const handleTouchSave = useCallback(() => {
    setSaveIcon((oldState) => {
      if (oldState === "turned_in") {
        return "turned_in_not";
      }

      return "turned_in";
    });

    if (saveIcon === "turned_in_not") {
      notify("Marcada para revisar mais tarde");
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
          <Box display="flex" alignItems="center">
            <IconButton size="large" onClick={handleToggleVisibility}>
              <Icon color="primary">{eyeIcon}</Icon>
            </IconButton>
            <Typography sx={{ marginLeft: (theme) => theme.spacing(1) }}>
              {eyeIcon === "visibility" ? (
                timer
              ) : (
                <Skeleton
                  animation="wave"
                  height={20}
                  width={62}
                  sx={{ transform: "none" }}
                />
              )}
            </Typography>
          </Box>
          <IconButton size="large" disableRipple>
            <ResponsiveDialog />
            <Typography sx={{ fontSize: 15 }}>Questões</Typography>
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
          value={50}
          valueBuffer={100}
          sx={{
            height: 6,
            borderRadius: 0.5,
            backgroundColor: (theme) => theme.palette.grey[300],
          }}
        />
      </AppBar>
      <Paper
        sx={{ display: "flex", flexDirection: "column", padding: 3.75 }}
        elevation={0}
      >
        <Box display="flex" justifyContent="space-between" paddingBottom={1}>
          <Typography>1</Typography>
          <Typography>
            <IconButton
              size="large"
              sx={{ padding: 0 }}
              onClick={handleTouchSave}
            >
              <Icon color="primary">{saveIcon}</Icon>
            </IconButton>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
        <div
          dangerouslySetInnerHTML=
          {{
            __html:  memoQuestions[currentQuestionIndex]?.question || '',
          }}
        >
        </div>
        </Box>
        <Box marginTop="30px" display="flex" flexDirection="column">
          {memoQuestions[currentQuestionIndex]?.answers.map((answer: any) => (
            <div key={answer.id} dangerouslySetInnerHTML={{__html: answer.value}} />
          ))}
        </Box>
        <Box display="flex" 
        alignItems="center"
        justifyContent="center"
        paddingTop={9.75}
        >
        <Button
          component="span"
          variant="outlined"
          startIcon={<Icon>arrow_back_ios</Icon>}
          onClick={handleChangeQuestion('prev')}
          disabled={currentQuestionIndex === 0}
        >
          Anterior
        </Button>
        <Button
          component="span"
          variant="contained"
          endIcon={<Icon>arrow_forward_ios</Icon>}
          onClick={handleChangeQuestion('next')}
          disabled={currentQuestionIndex === memoQuestions.length - 1}
        >
          Proximo
        </Button>
        </Box>
      </Paper>
    </>
  );
}
