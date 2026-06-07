import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Params = () => {
  const { username } = useParams();

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header */}
        <header className="border-b border-slate-900 pb-8 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-4 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-white to-indigo-400 bg-clip-text text-transparent">
            Dynamic Router Params
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Reads dynamic wildcard variables passed from the matching React Router pattern.
          </p>
        </header>

        <main className="space-y-6">
          {/* Debug Console Box */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 backdrop-blur-md">
            <h2 className="text-base font-bold text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              Dynamic Route Debugger
            </h2>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-sm space-y-3">
              <div className="flex justify-between border-b border-slate-900 pb-2">
                <span className="text-slate-500">Route Pattern:</span>
                <span className="text-indigo-400">/params/:username</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-2">
                <span className="text-slate-500">Current URL Path:</span>
                <span className="text-slate-300">/params/{username || ':username'}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">Parsed Param (`username`):</span>
                <span className="text-emerald-400 font-bold">{username || 'undefined'}</span>
              </div>
            </div>
          </div>

          {/* Interactive message card */}
          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md text-center py-8">
            <h3 className="text-lg font-bold text-slate-200">
              Hello, <span className="text-indigo-400 font-extrabold">{username || 'Developer'}</span>!
            </h3>
            <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
              You can change the name displayed here by editing the route parameter in your browser address bar.
            </p>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Params;