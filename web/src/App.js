import React from 'react';
import Main from './components/Main';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Header />
      <Main />
      <GlobalStyle />
    </div>
  );
}

export default App;
