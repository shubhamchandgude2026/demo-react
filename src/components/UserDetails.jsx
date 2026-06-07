import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import Personaldetails from './user/Personaldetails';
import Address from './user/Address';
import Notes from './user/Notes';
import { FormContext } from '../context/FormContextProvider';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom dark theme to align MUI components with the slate/indigo system
const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo 500
    },
    background: {
      default: '#020617', // Slate 950
      paper: 'rgba(15, 23, 42, 0.4)', // Slate 900/40
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '& .MuiOutlinedInput-input': {
              padding: '16px 20px', // Custom increased padding
            },
            '& fieldset': {
              borderColor: '#1e293b', // Slate 800
            },
            '&:hover fieldset': {
              borderColor: '#4f46e5', // Indigo 600
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6366f1', // Indigo 500
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1e293b',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4f46e5',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6366f1',
          },
        },
      },
    },
  },
});

const UserDetails = () => {
  const { formik } = useContext(FormContext);
  
  return (
    <ThemeProvider theme={muiDarkTheme}>
      <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
        {/* Background radial overlays */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-16">
          
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
                Profile Registration
              </h1>
              <p className="text-sm text-slate-400 mt-2">
                Multi-step session profile manager synchronized through context bindings.
              </p>
            </div>
          </header>

          <main>
            <form onSubmit={formik.handleSubmit} className="space-y-8">
              {/* Form Grid Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Personal Details Card */}
                <div 
                  className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-6"
                  style={{ padding: '1.75rem' }}
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/10">
                      Step 1
                    </span>
                    <h2 className="text-lg font-bold text-slate-200 mt-3">Personal Details</h2>
                    <p className="text-xs text-slate-400 mt-1">Provide your primary identification details.</p>
                  </div>
                  <Personaldetails />
                </div>

                <div className="flex flex-col gap-8">
                  {/* Address Info Card */}
                  <div 
                    className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-6"
                    style={{ padding: '1.75rem' }}
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/10">
                        Step 2
                      </span>
                      <h2 className="text-lg font-bold text-slate-200 mt-3">Address Info</h2>
                      <p className="text-xs text-slate-400 mt-1">Specify geographical and mailing details.</p>
                    </div>
                    <Address />
                  </div>

                  {/* Additional Notes Card */}
                  <div 
                    className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-6"
                    style={{ padding: '1.75rem' }}
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/10">
                        Step 3
                      </span>
                      <h2 className="text-lg font-bold text-slate-200 mt-3">Additional Notes</h2>
                      <p className="text-xs text-slate-400 mt-1">Enter any supplemental profile remarks.</p>
                    </div>
                    <Notes />
                  </div>
                </div>

              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)',
                    backgroundColor: '#4f46e5',
                    '&:hover': {
                      backgroundColor: '#6366f1',
                    },
                  }}
                >
                  Submit Profile
                </Button>
              </div>

            </form>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default UserDetails;