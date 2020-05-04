import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  
}

function Sidebar({}) {
  return (
    <div
      style={{
        width: '300px',
        height: '100%',
        background: 'white',
      }}
    >
      <div
        style={{
          width: '290px',
          background: '#f4f4f4',
          height: '100%',
          borderRadius: '34px 0px 0px 34px',
        }}
      >
        <h2
          style={{
            color: '#2b2b2b',
            fontSize: '16px',
            padding: '34px 0px 17px 34px',
          }}
        >
          Últimas perguntas
        </h2>
        
        <div
          style={{
            height: '254px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#0045ff',
            lineHeight: '30px',
          }}
        >
          <p
            style={{
              paddingLeft: '34px',
              fontSize: '16px',
              width: '300px',
              background: '#0045ff',
              color: 'white',
              borderRadius: '0px 34px 34px 0px'
            }}
          >
            Todas as perguntas
          </p>
          <p
            style={{
              paddingLeft: '34px',
              fontSize: '16px'
            }}
          >Entrega</p>
          <p
            style={{
              paddingLeft: '34px',
              fontSize: '16px'
            }}
          >Funcionalidade</p>
          <p
            style={{
              paddingLeft: '34px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >Pagamento
            <span
              style={{
                height: '24px',
                padding: '0px 7px',
                background: '#ff1515',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '10px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >100</span>
          </p>
          <p
            style={{
              paddingLeft: '34px',
              fontSize: '16px'
            }}
          >Cancelamento</p>
          <p
            style={{
              paddingLeft: '34px',
              fontSize: '16px'
            }}
          >Descrição</p>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = propTypes

export default Sidebar;
