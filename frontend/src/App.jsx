import React from 'react';
import Navbar from './components/Navbar';
import LoginView from './components/LoginView';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <LoginView />
      </main>
    </>
  );
};

export default App;
