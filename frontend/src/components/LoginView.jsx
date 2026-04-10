import React, { useState } from 'react';

// Authentication form with glassmorphic design and simulated login flow
const LoginView = ({ setCurrentPage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Simulated authentication with 1.5s delay and redirect to home on completion
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentPage('home');
    }, 1500);
  };

  return (
    <div className="flex-grow flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-12 rounded-2xl shadow-xl border border-slate-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Login Portal</h2>
          <p className="text-slate-600 mt-3">Access your workshop account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              className="w-full bg-slate-50 border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full bg-slate-50 border border-slate-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50"
              placeholder="Enter your password"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <button className="text-sm text-slate-600 hover:text-blue-600 font-semibold">
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
