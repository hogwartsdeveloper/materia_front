import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components//navbar/MyNavbar';
import AppRouter from './components/router/AppRouter';

function App() {
  return (
      <BrowserRouter>
        <MyNavbar />
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
