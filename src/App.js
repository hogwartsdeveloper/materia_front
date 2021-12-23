import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import AppRouter from './components/router/AppRouter';
import Posts from './pages/Posts';

function App() {
  return (
      // <><MyNavbar /><Posts /></>
      <BrowserRouter>
        <MyNavbar />
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
