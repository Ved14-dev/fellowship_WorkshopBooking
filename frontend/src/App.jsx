import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginView from './components/LoginView';
import StatsView from './components/StatsView';

// Root component managing state-based SPA routing for the FOSSEE workshop portal
const App = () => {
  // Centralized routing state controls page transitions without external router library
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'stats':
        return <StatsView />;
      case 'login':
        return <LoginView setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <footer className="py-6 text-center text-slate-600 text-sm border-t border-slate-200">
        Developed by <span className="font-bold text-blue-600">FOSSEE group, IIT Bombay</span>
      </footer>
    </div>
  );
};

export default App;
