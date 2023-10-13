import React from 'react';
import Box from '@mui/material/Box';
import '../menu_principal/style.css';

const BoxMenu = ({ children }) => {
  return (
    <div id="box-principal" className="box-principal">
      <Box
        sx={{
          margin: '15px',
          width: '600px',
          height: 'auto',
          backgroundColor: '#F1F1F1',
          padding: '20px',
          borderRadius: '10px',
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 'initial',
          '&:hover': {
          },
        }}>
          {children}
        </Box>
    </div>
  );
}

export default BoxMenu;
