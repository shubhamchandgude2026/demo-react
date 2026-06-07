import React from 'react';
import useFetchUsers from '../hooks/useFetchUsers';
import UserCard from './utils/UserCard';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    background: {
      default: '#020617',
      paper: '#0f172a',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundColor: 'rgba(15, 23, 42, 0.4)',
          border: '1px solid #0f172a',
          '&:hover': {
            borderColor: 'rgba(99, 102, 241, 0.3)',
          },
        },
      },
    },
  },
});

const ShowUsers = () => {
    const [data, loading, error] = useFetchUsers('https://dummyuser.vercel.app/users');

    return (
      <ThemeProvider theme={muiDarkTheme}>
        <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
            
            {/* Header */}
            <header className="border-b border-slate-900 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-4 group"
                >
                  <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Dashboard
                </Link>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-white to-indigo-400 bg-clip-text text-transparent">
                  Users Gallery
                </h1>
                <p className="text-sm text-slate-400 mt-2">
                  Interactive directory loading user records from external JSON service.
                </p>
              </div>

              {data && data.length > 0 && (
                <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-3 rounded-2xl">
                  <span className="text-xs font-semibold text-slate-300">
                    Total Profiles: <span className="font-mono text-indigo-400">{data.length}</span>
                  </span>
                </div>
              )}
            </header>

            <main>
              {loading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
                  <p className="text-xs text-slate-400 font-semibold font-mono">Syncing directories...</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <h2 className="text-lg font-bold text-rose-400 font-mono">Failed to load users</h2>
                  <p className="text-xs text-slate-500 mt-1">{String(error)}</p>
                </div>
              ) : data && data.length > 0 ? (
                <div 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem'
                  }}
                >
                  {data.map(user => (
                    <UserCard key={user.userid || user.id} user={user} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-base font-bold text-slate-400">No users found</h2>
                </div>
              )}
            </main>
          </div>
        </div>
      </ThemeProvider>
    );
};

export default ShowUsers;