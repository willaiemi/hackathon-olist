import React from 'react'

import {
  SidebarContainer,
  GreyContainer,
  Navbar,
  NavbarItem,
} from './style';

function Sidebar({ 
  tabActive,
  setTabActive,
 }) {
  return (
    <SidebarContainer>
      <GreyContainer>
        <h2>Últimas perguntas</h2>
        
        <Navbar>
          <NavbarItem
            onClick={() => setTabActive('all')}
            active={tabActive === 'all'}
          >
            Todas as perguntas
          </NavbarItem>

          <NavbarItem
            onClick={() => setTabActive('delivery')}
            active={tabActive === 'delivery'}
          >
            Entrega
            <span>1</span>
          </NavbarItem>

          <NavbarItem
            onClick={() => setTabActive('functionality')}
            active={tabActive === 'functionality'}
          >
            Funcionalidade
          </NavbarItem>

          <NavbarItem
            onClick={() => setTabActive('payment')}
            active={tabActive === 'payment'}
          >
            Pagamento
            <span>3</span>
          </NavbarItem>

          <NavbarItem
            onClick={() => setTabActive('cancellation')}
            active={tabActive === 'cancellation'}
          >
            Cancelamento
          </NavbarItem>

          <NavbarItem
            onClick={() => setTabActive('description')}
            active={tabActive === 'description'}
          >
            Descrição
            <span>1</span>
          </NavbarItem>
        </Navbar>
      </GreyContainer>
    </SidebarContainer>
  )
}

export default Sidebar;
