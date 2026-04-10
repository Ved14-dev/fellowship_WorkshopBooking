import React from 'react';

/**
 * LoginView Component
 * A clean, accessible replacement for the original workshop_app/login.html.
 * Focuses on vertical rhythm and large touch targets for mobile users.
 */
const LoginView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-10 border border-slate-100">
        {/* Branding/Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Login Portal</h2>
          <p className="text-slate-500 mt-3 font-medium">Access your FOSSEE workshop account</p>
        </div>

        {/* Input Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Username</label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium"
              placeholder="Your username"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2.5 ml-1">Password</label>
            <input 
              type="password" 
              className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium"
              placeholder="••••••••"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4.5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-200 active:scale-[0.98]">
            Sign In
          </button>
        </form>

        {/* Support Links */}
        <div className="mt-10 pt-8 border-t border-slate-100 text-center space-y-4">
          <p className="text-slate-600 font-medium">
            New here? <a href="/signup" className="text-blue-600 font-bold hover:underline decoration-2">Create an account</a>
          </p>
          <button className="text-sm text-slate-400 hover:text-blue-600 font-semibold transition-colors">
            Forgot your password?
          </button>
        </div>
      </div>
      {/* Footer Branding - Keeps context with IIT Bombay origin */}
      <p className="mt-8 text-slate-400 text-sm font-medium">
        Developed by FOSSEE group, IIT Bombay
      </p>
    </div>
  );
};

export default LoginView;
