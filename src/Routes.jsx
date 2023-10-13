import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MenuPrincipal from './menu_principal';
import FormGrupoVolei from './form_criar_grupoVolei';
import MenuVolei from './menu_volei';

const AppRouter = () => {
  return (
    <Router>
      {/* <Menu /> */}
      <Routes>
        <Route path='/' element={<Outlet />} >
          {/* <Route index element={<Inicio />} /> */}
          <Route index element={<MenuPrincipal />} />
          <Route path='CadastrarGrupoVolei' element={<FormGrupoVolei />} />
          <Route path='MenuVolei' element={<MenuVolei />} />
        </Route>
        {/* <Route path='prato/:id' element={<Prato />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
};

export default AppRouter;