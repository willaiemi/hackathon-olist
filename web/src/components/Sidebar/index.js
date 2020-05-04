import React from 'react'
// import PropTypes from 'prop-types'
import {
  SidebarContainer,
  GreyContainer,
  Navbar,
  NavbarItem,
} from './style';

const propTypes = {
  
}

function Sidebar({}) {
  return (
    <SidebarContainer>
      <GreyContainer>
        <h2>Últimas perguntas</h2>
        
        <Navbar>
          <NavbarItem active>
            Todas as perguntas
          </NavbarItem>
          <NavbarItem>Entrega</NavbarItem>
          <NavbarItem>Funcionalidade</NavbarItem>
          <NavbarItem>
            Pagamento
            <span>100</span>
          </NavbarItem>
          <NavbarItem>Cancelamento</NavbarItem>
          <NavbarItem>Descrição</NavbarItem>
        </Navbar>
      </GreyContainer>
    </SidebarContainer>
  )
}

Sidebar.propTypes = propTypes

export default Sidebar;
