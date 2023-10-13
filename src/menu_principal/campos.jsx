import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';

const Campos  = () => {
  const [clicouBotaoEntrarGrupo, setClicouBotaoEntrarGrupo] = useState(false);
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/CadastrarGrupoVolei')}>
          Criar Grupo/Volleyboll
        </Button>
      <Button
        variant="contained"
        color="primary">
          Criar Grupo/Futebol
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setClicouBotaoEntrarGrupo(!clicouBotaoEntrarGrupo)}>
          Entrar num Grupo
      </Button>
      {clicouBotaoEntrarGrupo &&
        <>
          <TextField
            id="outlined-basic"
            color="primary"
            label="Código do Grupo"
            variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            endIcon={<EastIcon />}
            onClick={() => navigate('/MenuVolei')}>
              Entrar
          </Button>
        </>}
      
    </Stack>
  )
}

export default Campos;