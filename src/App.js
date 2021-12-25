import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components//navbar/MyNavbar';
import AppRouter from './components/router/AppRouter';
import { AuthProvider } from './context/context';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <MyNavbar />
          <AppRouter/>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
