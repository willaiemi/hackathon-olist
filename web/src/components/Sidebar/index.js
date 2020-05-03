import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  
}

function Sidebar({}) {
  return (
    <div
      style={{
        width: '200px',
        height: '100%',
        background: 'white',
      }}
    >
      <div
        style={{
          width: '195px',
          background: '#f4f4f4',
          height: '100%',
          borderRadius: '25px 0px 0px 25px',
        }}
      >
        <h2
          style={{
            color: '#2b2b2b',
            fontSize: '12px',
            padding: '25px 0px 15px 25px',
          }}
        >
          Últimas perguntas
        </h2>
        
        <div
          style={{
            height: '190px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#0045ff',
            lineHeight: '22px',
          }}
        >
          <p
            style={{
              paddingLeft: '25px',
              fontSize: '12px',
              width: '200px',
              background: '#0045ff',
              color: 'white',
              borderRadius: '0px 25px 25px 0px'
            }}
          >
            Todas as perguntas
          </p>
          <p
            style={{
              paddingLeft: '25px',
              fontSize: '12px'
            }}
          >Entrega</p>
          <p
            style={{
              paddingLeft: '25px',
              fontSize: '12px'
            }}
          >Funcionalidade</p>
          <p
            style={{
              paddingLeft: '25px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >Pagamento
            <span
              style={{
                height: '18px',
                padding: '0px 5px',
                background: '#ff1515',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '10px',
                borderRadius: '50px',
                fontSize: '9px',
                fontWeight: 'bold',
              }}
            >100</span>
          </p>
          <p
            style={{
              paddingLeft: '25px',
              fontSize: '12px'
            }}
          >Cancelamento</p>
          <p
            style={{
              paddingLeft: '25px',
              fontSize: '12px'
            }}
          >Descrição</p>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = propTypes

export default Sidebar;
