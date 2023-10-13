import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import '../style.css';
import { listaJogadores1, listaJogadores2 } from '../../helpers/constants';

const Jogadores = () => {
  return (
    <div className="conteudo-jogadores">
      <div id="time1" className="time1">
        <Grid container spacing={7}>
          {listaJogadores1.map(jogador => (
            <Grid key={jogador.nome} style={{
              display: 'flex',
              flexDirection: 'column-reverse',
            }} item xs={4}>
              <IconButton aria-label="cart">
                <Badge badgeContent={jogador.nota} color="primary">
                  <Avatar alt={jogador.nome} src="teste" />
                </Badge>
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </div>
      <div id="time2" className="time2">
        <Grid container spacing={7}>
            {listaJogadores2.map(jogador => (
              <Grid key={jogador.nome} style={{
                display: 'flex',
                flexDirection: 'column-reverse',
              }} item xs={4}>
                <IconButton aria-label="cart">
                  <Badge badgeContent={jogador.nota} color="primary">
                    <Avatar alt={jogador.nome} src="teste" />
                  </Badge>
                </IconButton>
              </Grid>
            ))}
          </Grid>
      </div>
    </div>
  );
};

export default Jogadores;
