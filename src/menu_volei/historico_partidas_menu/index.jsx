import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const HistoricoPartidas = () => {
  return (
    <div className="conteudo-partida">
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" secondary="teste" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" secondary="teste" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" secondary="teste" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" secondary="teste" />
      </ListItemButton>
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" secondary="teste" />
      </ListItemButton>
    </div>
  )
}

export default HistoricoPartidas;
