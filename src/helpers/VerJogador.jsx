import React from 'react';
import { ListItemButton, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';

const VerJogador = ({ jogador, setDialogVerJogadorAberto }) => {
  return (
    <ListItemButton style={{ alignItems: 'baseline' }} onClick={() => setDialogVerJogadorAberto(false)}>
      <Avatar style={{ marginRight: '2vh' }}>
        <AccountCircleIcon />
      </Avatar>
      <Stack spacing={1} alignSelf={'flex-end'}>
        <ListItemText primary={jogador.nome} secondary={`Nota Jogador: ${jogador.nota}`} />
        <Rating name="read-only" value={jogador.nota / 2} precision={0.5} readOnly />
      </Stack>
    </ListItemButton>
  );
};

export default VerJogador;
