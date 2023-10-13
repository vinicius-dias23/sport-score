import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ListaJogadores from '../../helpers/ListaJogadores';
import { listaJogadores1 } from '../../helpers/constants';


const DialogJogador = ({ dialogAberto, setDialogAberto }) => {
  return  (
    <Dialog onClose={() => setDialogAberto(false)} open={dialogAberto}>
      <DialogTitle>Selecione o Jogador que marcou o ponto:</DialogTitle>
      <ListaJogadores listaJogadores={listaJogadores1} setDialogAberto={setDialogAberto} visualizarJogador={false} />
    </Dialog>
  )
}

export default DialogJogador;
