import { useMemo, useCallback } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Icon,
  useTheme,
  Box,
} from "@mui/material";
import { parseISO, format } from "date-fns";

import { Exam } from "../../models";

import { BorderLinearProgress, StyledBox } from "./styles";
import { useHistory } from "react-router";

export interface CustomCardProps {
  exam: Exam;
  onSelectExam(exam: Exam): void;
}

export function CustomCard({
  exam,
  onSelectExam,
}: CustomCardProps): JSX.Element {
  const theme = useTheme();
  const history = useHistory()

  console.log({exam})

  const memoExamColor = useMemo(() => {
    return exam.type === "EXAM" ? "#5653FF" : theme.palette.secondary.main;
  }, [exam.type, theme.palette.secondary.main]);

  const handleSelectExam = useCallback(() => {
    onSelectExam(exam);
    history.push('/exams')
  }, [onSelectExam, exam, history]);

  const memoHour = useCallback(() => {
    return format(parseISO((exam?.events?.date || new Date().toISOString()) as string), "HH:mm:ss");
  }, [exam?.events?.date]);

  const memoDate = useCallback(() => {
    const fromDate = format(parseISO((exam.events.date || new Date().toISOString()) as string), "dd/MM/yy");
    const toDate = format(
      parseISO((exam.events.limitDate || new Date().toISOString()) as string),
      "dd/MM/yy"
    ); 

    return `De ${fromDate} a ${toDate}`;
  }, [exam?.events?.date, exam?.events?.limitDate]);

  const memoTotalQuestions = useCallback(() => {
    return `${exam.data?.answeredItems}/${exam.data?.itemsTotal} questões`;
  }, [exam]);

  return (
    <Card
      sx={{ 
        width: 300,
        marginTop: 3.5,
        boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardActionArea onClick={handleSelectExam}>
        <CardContent>
          <Button
            component="span"
            size="small"
            variant="contained"
            sx={{
              boxShadow: "none",
              backgroundColor: memoExamColor,
              color: theme.palette.common.white,
            }}  
          >
            {exam.name}
          </Button>
          <Typography 
            sx={{ fontSize: 22, marginBottom: 4 }}
            variant="h1"
            component="div"
            color="text.primary"
            gutterBottom
          >
             {exam.description}
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={25}
            valueBuffer={100}
            sx={{ height: 6, borderRadius: 0.5 }}
          />
          <StyledBox display="flex" alignItems="center">
            <Box display="flex" alignItems="center" >
              <Icon>access_time</Icon>
              <Typography
                variant="subtitle2"
                sx={{ color: (theme) => theme.palette.grey[500] }}
              >
                {memoHour}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Icon>apps</Icon>
              <Typography
                variant="subtitle2"
                sx={{ color: (theme) => theme.palette.grey[500] }}
              >
               {memoTotalQuestions}
              </Typography>
            </Box>
          </StyledBox> 
          <Typography
            variant="subtitle2"
            sx={{ color: (theme) => theme.palette.grey[500] }}
          >
            {memoDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
