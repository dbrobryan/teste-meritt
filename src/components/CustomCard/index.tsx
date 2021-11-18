import { useMemo, useCallback } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Icon,
  useTheme,
} from "@mui/material";
import { parseISO, format } from "date-fns";

import { Proof } from "../../models";

import { BorderLinearProgress, StyledBox } from "./styles";
import { useHistory } from "react-router";
import {} from "../../contexts";
export interface CustomCardProps {
  proof: Proof;
  onSelectExam(exam: Proof): void;
}

export function CustomCard({
  proof,
  onSelectExam,
}: CustomCardProps): JSX.Element {
  const theme = useTheme();
  const history = useHistory();

  console.log({ proof });

  const memoExamColor = useMemo(() => {
    return proof.exam.type === "EXAM" ? "#5653FF" : theme.palette.secondary.main;
  }, [proof.exam.type, theme.palette.secondary.main]);

  const handleSelectExam = useCallback(() => {
    onSelectExam(proof);
    history.push("/exams");
  }, [onSelectExam, proof, history]);

  const memoHour = useMemo(() => {
    return format(
       new Date(proof?.events?.date),
      "HH:mm:ss"
    );
  }, [proof?.events?.date]);

  console.log({memoHour})

  const memoDate = useCallback(() => {
    const fromDate = format(
      parseISO((proof?.exam.events.date || new Date().toISOString()) as string),
      "dd/MM/yy"
    );
    const toDate = format(
      parseISO((proof?.exam.events.limitDate || new Date().toISOString()) as string),
      "dd/MM/yy"
    );

    return `De ${fromDate} a ${toDate}`;
  }, [proof?.exam?.events?.date, proof?.exam?.events?.limitDate]);

  const memoTotalQuestions = useMemo(() => {
    return `${proof?.exam?.data?.answeredItems || 0}/${proof?.exam.data?.itemsTotal} questões`;
  }, [proof]);

  console.log({proof})

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
            {proof?.exam.name}
          </Button>
          <Typography
            sx={{ fontSize: 22, marginBottom: 4 }}
            variant="h1"
            component="div"
            color="text.primary"
            gutterBottom
          >
            {proof?.exam.description}
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={proof?.exam?.data?.answeredItems}
            valueBuffer={proof?.exam.data?.itemsTotal}
            sx={{ height: 6, borderRadius: 0.5 }}
          />
          <StyledBox display="flex" alignItems="center">
            <Icon>access_time</Icon>
            <Typography
              variant="subtitle2"
              sx={{ color: (theme) => theme.palette.grey[500] }}
            >
              {memoHour}
            </Typography>
            <Icon>apps</Icon>
            <Typography
              variant="subtitle2"
              sx={{ color: (theme) => theme.palette.grey[500] }}
            >
              {memoTotalQuestions}
            </Typography>
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
