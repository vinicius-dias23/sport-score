import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { ListItemButton } from '@mui/material';
import VerJogador from './VerJogador';

const ListaJogadores = ({ listaJogadores, setDialogAberto, visualizarJogador }) => {
  const [dialogVerJogadorAberto, setDialogVerJogadorAberto] = useState(false);
  const [jogadorCorrente, setJogadorCorrente] = useState({});
  const retornarEstiloListaAddPonto = visualizarJogador ? { padding: '0px', marginBottom: '1vh' } : {};
  
  return (
    <>
      <Dialog onClose={() => setDialogVerJogadorAberto(false)} open={dialogVerJogadorAberto}>
        <DialogTitle>{jogadorCorrente.nome}</DialogTitle>
        <VerJogador jogador={jogadorCorrente} setDialogVerJogadorAberto={setDialogVerJogadorAberto} />
      </Dialog>
      <List sx={{ width: '100%', maxHeight: '50vh', bgcolor: 'background.paper' }}>
        {!visualizarJogador &&
          <ListItemButton onClick={() => setDialogAberto(false)}>
            <Avatar style={{ marginRight: '2vh' }}>
              <ThumbDownIcon />
            </Avatar>
            <ListItemText primary="Erro do adversário" secondary="Marcar aqui caso seja um erro" />
          </ListItemButton>}
        {listaJogadores && listaJogadores.map(jogador => (
          <ListItemButton
            key={jogador.id}
            style={retornarEstiloListaAddPonto}
            onClick={() => {
              if (!visualizarJogador) {
                setDialogAberto(false);
              } else {
                setJogadorCorrente(jogador)
                setDialogVerJogadorAberto(true);
              }
            }}>
            <Avatar style={{ marginRight: '2vh' }}>
              <AccountCircleIcon />
            </Avatar>
            <ListItemText primary={jogador.nome} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default ListaJogadores;
