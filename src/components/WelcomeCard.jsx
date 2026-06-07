import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeCard = ({ to, title, description, badge, info, icon }) => {
    return (
        <Link
            to={to}
            className="group relative bg-slate-900/20 hover:bg-slate-900/40 backdrop-blur-md border border-slate-900 hover:border-slate-800/80 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/[0.02]"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                textDecoration: 'none',
                height: '100%',
                minHeight: '260px',
                boxSizing: 'border-box'
            }}
        >
            {/* Card Accent Glow */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            
            <div>
                <div 
                    className="flex justify-between items-start mb-6"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '1.5rem'
                    }}
                >
                    <div 
                        className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800/60 group-hover:bg-indigo-600/10 group-hover:text-indigo-400 group-hover:border-indigo-500/30 flex items-center justify-center text-slate-400 transition-all duration-300"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '2.5rem',
                            height: '2.5rem'
                        }}
                    >
                        {icon}
                    </div>
                    <div 
                        className="flex flex-col items-end gap-1.5"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '0.375rem'
                        }}
                    >
                        <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">
                            {badge}
                        </span>
                        {info && (
                            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">
                                {info}
                            </span>
                        )}
                    </div>
                </div>

                <h2 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors duration-200">
                    {title}
                </h2>
                <p 
                    className="text-xs text-slate-400 mt-3 leading-relaxed"
                    style={{
                        marginTop: '0.75rem',
                        fontSize: '0.75rem',
                        color: '#94a3b8',
                        lineHeight: '1.625'
                    }}
                >
                    {description}
                </p>
            </div>

            <div 
                className="mt-8 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-500 group-hover:text-indigo-400 transition-all duration-200"
                style={{
                    marginTop: '2rem',
                    paddingTop: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #0f172a'
                }}
            >
                <span className="font-semibold">Launch Demo</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
};

export default WelcomeCard;
