import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import BoxMenu from '../helpers/BoxMenu';

const FormGrupoVolei = () => {
  const navigate = useNavigate();
  return (
    <BoxMenu>
      <Stack spacing={2}>
        <TextField
          focused
          id="nomeGrupo"
          color="primary"
          label="Nome do Grupo"
          variant="filled" />
        <Grid container alignItems="center">
          <Grid item xs={6} display="flex" justifyContent="flex-start" paddingRight="2%">
            <TextField
              focused
              id="senhaGrupo"
              label="Senha Grupo"
              type="password"
              autoComplete="current-password"
              // helperText="Senha p/ Participantes"
              variant="filled"
              fullWidth />
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end" paddingLeft="2%">
            <TextField
              focused
              id="confirmarSenhaGrupo"
              label="Confirmar Senha Grupo"
              type="password"
              autoComplete="current-password"
              // helperText=" "
              variant="filled"
              fullWidth />
          </Grid>
        </Grid>
        <p style={{
          color: 'rgba(0, 0, 0, 0.6)',
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fontWeight: '400',
          fontSize: '0.75rem',
          lineHeight: 1.66,
          letterSpacing: '0.03333em',
          textAlign: 'left',
          marginTop: '3px',
          marginFight: '14px',
          marginBottom: 0,
          marginLeft: '14px',
        }}>Senha para entrar no grupo</p>
        <TextField
          focused
          id="senhaAdministrador"
          label="Senha Administrador"
          type="password"
          autoComplete="current-password"
          helperText="Senha para o administrador alterar o time"
          variant="filled" />
        <TextField
          focused
          id="confirmarSenhaAdministrador"
          label="Confirmar Senha Administrador"
          type="password"
          autoComplete="current-password"
          variant="filled" />
        <Grid container alignItems="center">
          <Grid item xs={6} display="flex" justifyContent="center">
            <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>VOLTAR</Button>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="center">
            <Button variant="contained" color="success">SALVAR</Button>
          </Grid>
        </Grid>
      </Stack>
    </BoxMenu>
  );
}

export default FormGrupoVolei;
