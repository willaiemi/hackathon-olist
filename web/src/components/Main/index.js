import React from 'react';
import Sidebar from '../Sidebar';

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
      }}
    >
      <Sidebar></Sidebar>
    </div>
  );
}

export default Main;
