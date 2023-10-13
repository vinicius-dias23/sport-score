import React from 'react';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Placar from './Placar';
import './style.css';

const Partida = () => {
  return (
    <div className="conteudo-partida">
      <Placar />
      <p className="timer">Timer: 00:00:00</p>
      <Button
        variant="contained"
        color="success"
        endIcon={<PlayCircleOutlineIcon style={{ fontSize: '4vh' }} />}
        style={{ fontSize: '2vh' }}
        onClick={() => {}}>
          Começar Partida
      </Button>
    </div>
  );
};

export default Partida;
