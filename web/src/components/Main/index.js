import React from 'react';
import Sidebar from '../Sidebar';

import Graph from '../Graph';

function Main() {
  return (
    <div
      style={{
        height: 'calc(100vh - 170px)', // 78px header + 92px title = 170px
        background: 'rgba(255, 255, 0, 0.1)',
        margin: '10px auto auto',
        maxWidth: '1280px',
    // \/ remove \/
        position: 'absolute',
        bottom: '0px',
        width: '100%',
    // /\ remove /\
        display: 'flex',
      }}
    >
      <Sidebar></Sidebar>
      <div
        style={{
          height: '100%',
          width: '980px',
          background: 'rgba(0, 255, 0, 0.1)',
          padding: '34px 34px 0 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            style={{
              height: '30px',
              width: '120px',
              border: '1px solid #97a3b5',
              color: '#97a3b5',
              background: 'white',
              borderRadius: '24px',
            }}
          >
            Exportar
          </button>
        </div>
        <Graph />
      </div>
    </div>
  );
}

export default Main;
