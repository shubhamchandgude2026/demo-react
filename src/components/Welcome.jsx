import React, { useContext } from 'react';
import { userContext } from '../context/UserContextProvider';
import { Link } from 'react-router-dom';
import WelcomeCard from './WelcomeCard';

const Welcome = () => {
    const { formikFormData } = useContext(userContext);

    // Cards configuration for navigation dashboard
    const cards = [
        {
            to: '/es6',
            title: 'ES6 Playground',
            description: 'Explore modern JavaScript features including array operations, destructuring, and async promises.',
            badge: 'JS ES6',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            to: '/api',
            title: 'Products Store',
            description: 'Fetch, filter, and render product listings using Axios and global Context API architecture.',
            badge: 'Context + API',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            to: '/params/Admin',
            title: 'Dynamic Routing',
            description: 'Inspect URL dynamic parameters and query strings parsed through React Router hooks.',
            badge: 'Router Params',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        },
        {
            to: '/form',
            title: 'Formik Validation',
            description: 'Premium form entry flow utilizing custom validation rules powered by Yup and Formik state.',
            badge: 'Formik & Yup',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            to: '/formik',
            title: 'Material UI Forms',
            description: 'Responsive validation controls showcasing material design standard forms.',
            badge: 'Material UI',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            )
        },
        {
            to: '/user',
            title: 'User Context Settings',
            description: 'Read and update global user profile states from context provider values.',
            badge: 'Context',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            to: '/fetch-user',
            title: 'User Profiles Directory',
            description: 'Async API data visualizer presenting avatar grids and interactive cards.',
            badge: 'HTTP Async',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            to: '/books',
            title: 'Books Library Dashboard',
            description: 'Retrieve external database items utilizing automated state caching mechanisms.',
            badge: 'TanStack Query',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            to: '/coverphoto',
            title: 'Cover Photos Gallery',
            description: 'Beautiful image layouts linked dynamically using photo api response structures.',
            badge: 'Media UI',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            to: '/infinite-scroll',
            title: 'Infinite Scroll Listings',
            description: 'Continuous content retrieval utilizing high efficiency intersection observers.',
            badge: 'Performance',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12" />
                </svg>
            )
        }
    ];

    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
            {/* Elegant backdrop gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-900 pb-8 mb-12">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-white to-indigo-400 bg-clip-text text-transparent">
                            Demo Project Sandbox
                        </h1>
                        <p className="text-sm md:text-base text-slate-400 mt-2">
                            Explore dynamic styling, APIs, validation forms, and state management endpoints.
                        </p>
                    </div>

                </header>

                {/* Form Data Banner if context exists */}
                {formikFormData && Object.keys(formikFormData).length > 0 && (
                    <div className="mb-10 p-6 bg-indigo-950/20 backdrop-blur-md border border-indigo-500/20 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h3 className="text-base font-bold text-indigo-300">Active Formik State Detected</h3>
                            <p className="text-xs text-slate-400 mt-1">Context data saved from the validations sandbox:</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {Object.entries(formikFormData).map(([key, val]) => (
                                    <span key={key} className="text-xs bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded-lg font-mono">
                                        <span className="text-indigo-400 font-semibold">{key}:</span> {String(val)}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Link
                            to="/form"
                            className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-900/50"
                        >
                            Update Fields
                        </Link>
                    </div>
                )}

                {/* Main Cards Grid */}
                <main 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}
                >
                    {cards.map((card, index) => (
                        <WelcomeCard
                            key={index}
                            to={card.to}
                            title={card.title}
                            description={card.description}
                            badge={card.badge}
                            info={card.info}
                            icon={card.icon}
                        />
                    ))}
                </main>

                {/* Footer */}
                <footer className="mt-20 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} DemoReact Playground. Powered by Tailwind CSS v4.</p>
                </footer>
            </div>
        </div>
    );
};

export default Welcome;