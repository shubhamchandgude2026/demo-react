import React, { useContext } from 'react';
import Card from './ui/Card';
import useFetchProducts from '../hooks/useFetchProducts';
import { userContext } from '../context/UserContextProvider';
import { Link } from 'react-router-dom';

const API = () => {
  const [data, error, isLoading] = useFetchProducts("https://dummyjson.com/products");
  const { user } = useContext(userContext);

  return (
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
              Products Catalog
            </h1>
            <p className="text-sm text-slate-400 mt-2">
              Viewing global state product sync fetched via custom Axios queries.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-3 rounded-2xl">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs font-semibold text-slate-300">
              Active User: <span className="text-indigo-400">{user || 'Guest'}</span>
            </span>
          </div>
        </header>

        {/* Loading and Data Catalog */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
            <p className="text-xs text-slate-400 font-semibold font-mono">Syncing Axios store...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <h2 className="text-lg font-bold text-rose-400">Failed to fetch products</h2>
            <p className="text-xs text-slate-500 mt-1">{String(error)}</p>
          </div>
        ) : (
          <main 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {data[0]?.products?.map((item) => (
              <Card 
                key={item.id} 
                title={item.title} 
                dec={item.description} 
                cat={item.category} 
              />
            ))}
          </main>
        )}
      </div>
    </div>
  );
};

export default API;