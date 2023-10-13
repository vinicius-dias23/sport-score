import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HistoryIcon from '@mui/icons-material/History';
import DrawerTime from './Drawer';
import Jogadores from './grupo_menu/Jogadores';
import Partida from './partida_menu';
import './style.css';
import HistoricoPartidas from './historico_partidas_menu';

const MenuVolei = () => {
  const [value, setValue] = useState(0);
	const [drawerAberto, setDrawerAberto] = useState(false);
	const navigate = useNavigate();

	const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerAberto(open);
  };

  return (
    <div id="menu" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh', }}>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
							onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
						<DrawerTime drawerAberto={drawerAberto} toggleDrawer={toggleDrawer} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Nome do Grupo
            </Typography>
            <Button color="inherit" onClick={() => navigate('/')}>Sair</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {value === 0  && <Jogadores />}
			{value === 1  && <Partida />}
      {value === 2  && <HistoricoPartidas />}
      <Box elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Grupo" icon={<HomeIcon />} />
          <BottomNavigationAction label="Partida" icon={<PlayCircleOutlineIcon />} />
          <BottomNavigationAction label="Histórico Partidas" icon={<HistoryIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default MenuVolei;