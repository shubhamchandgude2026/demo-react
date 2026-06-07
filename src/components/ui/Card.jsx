import React from 'react';

const Card = ({ title, dec, cat }) => {
  return (
    <div 
      className="group relative bg-slate-900/20 hover:bg-slate-900/40 backdrop-blur-md border border-slate-900 hover:border-slate-800/80 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/[0.02]"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
        height: '100%',
        minHeight: '240px',
        boxSizing: 'border-box'
      }}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">
            {cat}
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors duration-200 line-clamp-1">
          {title}
        </h3>
        <p 
          className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-3"
          style={{
            marginTop: '0.625rem',
            fontSize: '0.75rem',
            color: '#94a3b8',
            lineHeight: '1.625'
          }}
        >
          {dec}
        </p>
      </div>

      <button 
        className="mt-6 w-full text-center text-xs bg-slate-900/60 hover:bg-indigo-650 text-slate-300 hover:text-white py-2 rounded-xl transition-all border border-slate-800 hover:border-indigo-500/30 font-bold cursor-pointer"
        style={{ marginTop: '1.5rem' }}
      >
        Read More
      </button>
    </div>
  );
};

export default Card;