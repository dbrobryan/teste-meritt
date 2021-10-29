import { IconButton, Paper, Icon } from "@mui/material";
import { Box } from "@mui/system";

import { CustomCard } from "../../components/CustomCard";
import {CustomNextExam} from "../../components/CustomNextExam";
import {dbData} from "../../db";
import { Exam, Proof } from "../../models";

export function Home(exam: Exam) {
   console.log({dbData, exam})
  return (
    <>
      <Paper
        sx={{ display: 'flex', justifyContent: 'space-between' , padding: 3}}
        elevation={0}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" paddingBottom={2}>
        {(dbData.proofs as Proof[]).map((proof) => {
          console.log({exam})
          return (
            <CustomCard
              key={proof.id}
              exam={proof.exam}
              onSelectExam={console.log}
            /> 
          )
        })}
        </Box>
        <IconButton size="large" disableRipple>
          <Icon sx={{ color: (theme) => theme.palette.grey[300], fontSize: 38}}>arrow_forward_ios</Icon>
        </IconButton>
      </Paper>
      <br/>
      <Paper
        sx={{ display: 'flex', justifyContent: 'space-between' , padding: 3}}
        elevation={0}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" paddingBottom={2}>
        {(dbData.proofs as Proof[]).map((proof) => {
          console.log({exam})
          return (
            <CustomNextExam
              key={proof.id}
              exam={proof.exam}
              onSelectExam={console.log}
            /> 
          )
        })}
        </Box>
      </Paper>
      </>
  );
}
