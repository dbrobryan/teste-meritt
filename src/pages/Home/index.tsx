import { IconButton, Paper, Icon } from "@mui/material";
import { Box } from "@mui/system";

import { CustomCard } from "../../components/CustomCard";
import {CustomNextExam} from "../../components/CustomNextExam";
import {dbData} from "../../db";
import { Proof } from "../../models";
import {useExamContext} from '../../contexts';

export function Home() {
  const {updateExam} = useExamContext(); 
  

  return (
    <>
      <Paper
        sx={{ display: 'flex', justifyContent: 'space-between' , padding: 3}}
        elevation={0}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" paddingBottom={2}>
        {(dbData.proofs as Proof[]).map((proof: Proof) => {
          return (
            <CustomCard
              key={proof.id}
              exam={proof.exam}
              onSelectExam={() => updateExam(proof)}
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
        {(dbData.proofs as Proof[]).map((proof: Proof) => {
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
