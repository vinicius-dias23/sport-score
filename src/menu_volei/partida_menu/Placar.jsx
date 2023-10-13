import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DialogJogador from './DialogJogador';
import './style.css'

const Placar = () => {
  const [dialogAberto, setDialogAberto] = useState(false);

  return (
    <>
      <DialogJogador dialogAberto={dialogAberto} setDialogAberto={setDialogAberto} />
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group">
        <Button className="botao-marcar-ponto" variant="outlined" onClick={() => setDialogAberto(true)}>
            <ArrowDropUpIcon style={{ height: '5vh', fontSize: '100px' }} />
        </Button>
        <Button variant="outlined" className="botao-marcar-ponto" onClick={() => setDialogAberto(true)}>
            <ArrowDropUpIcon style={{ height: '5vh', fontSize: '100px' }} />
        </Button> 
      </ButtonGroup>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group">
        <Button style={{ width: '100%', height: '30vh', fontSize: '100px' }}>00</Button>
        <Button style={{ width: '100%', height: '30vh', fontSize: '100px' }}>00</Button>
      </ButtonGroup>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group">
        <Button className="botao-marcar-ponto" variant="outlined">
            <ArrowDropDownIcon style={{ height: '5vh', fontSize: '100px' }} />
        </Button>
        <Button className="botao-marcar-ponto" variant="outlined">
            <ArrowDropDownIcon style={{ height: '5vh', fontSize: '100px' }} />
        </Button>
      </ButtonGroup>
    </>
  )
}

export default Placar;