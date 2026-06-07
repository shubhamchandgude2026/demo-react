import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const ES6 = () => {
    const [input,setInput] = useState('');
    const inputRef = useRef(null);
    const arr = ["Apple","banana","carrot"];

    const users = [
        {
            name:"Shubham",
            age: 22
        },
        {
            name:"Yash",
            age: 17
        },
        {
            name:"Omkar",
            age: 36
        }
    ];
    const [a,,b] = arr;
    // filter users
    const filteredUsers =  users.filter((user)=> user.age>18);
    
    //focus input when page first time loads
    useEffect(()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    },[]);

    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-16">
                
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
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-white to-indigo-400 bg-clip-text text-transparent">
                        ES6 Playground
                    </h1>
                    <p className="text-sm text-slate-400 mt-2">
                        Interactive console showcasing destructuring, mapping, filtering, and hook focus behaviors.
                    </p>
                </header>

                <main className="space-y-8">
                    {/* Interactive Input Card */}
                    <div 
                        className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md"
                        style={{ padding: '1.5rem' }}
                    >
                        <h2 className="text-lg font-bold text-slate-200 mb-3">Interactive Focus Input</h2>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="es6-input" className="text-xs text-slate-400">
                                This input focuses automatically upon loading:
                            </label>
                            <input 
                                id="es6-input"
                                ref={inputRef} 
                                type="text" 
                                value={input} 
                                onChange={(e)=>setInput(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                                style={{ padding: '1rem 1.5rem' }}
                                placeholder="Type something here..."
                            />
                            {input && (
                                <p className="text-xs text-indigo-400 mt-1.5 font-mono">
                                    Current value: {input}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Destructuring Example */}
                        <div 
                            className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between"
                            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
                        >
                            <div>
                                <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">
                                    Destructuring
                                </span>
                                <h2 className="text-base font-bold text-slate-200 mt-3 mb-2">Destructured Array Items</h2>
                                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                    Extracting specific indices from <code className="bg-slate-950 px-1 py-0.5 rounded text-indigo-300 font-mono">["Apple", "banana", "carrot"]</code> using:
                                    <br />
                                    <code className="bg-slate-950 px-1 py-0.5 rounded text-indigo-300 font-mono block mt-1">const [a,,b] = arr;</code>
                                </p>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs bg-slate-950/60 border border-slate-900 p-2.5 rounded-xl">
                                    <span className="text-indigo-400 font-bold font-mono">a (index 0):</span>
                                    <span className="font-semibold text-slate-200">{a}</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs bg-slate-950/60 border border-slate-900 p-2.5 rounded-xl">
                                    <span className="text-indigo-400 font-bold font-mono">b (index 2):</span>
                                    <span className="font-semibold text-slate-200">{b}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Array Map Card */}
                        <div 
                            className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between"
                            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
                        >
                            <div>
                                <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">
                                    Array.map()
                                </span>
                                <h2 className="text-base font-bold text-slate-200 mt-3 mb-2">Iterating with Map</h2>
                                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                    Looping through fruit arrays to dynamically render item markup elements:
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {arr.map((item, i) => (
                                    <li key={`${item+i}`} className="flex items-center justify-between text-xs bg-slate-950/60 border border-slate-900 p-2.5 rounded-xl">
                                        <span className="text-slate-300 font-medium">{item}</span>
                                        <span className="text-[10px] font-mono text-slate-500">index: {i}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Filter Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Before Filter */}
                        <div 
                            className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between"
                            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
                        >
                            <div>
                                <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">
                                    Full Dataset
                                </span>
                                <h2 className="text-base font-bold text-slate-200 mt-3 mb-2">Before Array.filter()</h2>
                                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                    List of all user objects with their respective ages:
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {users.map((item, i) => (
                                    <li key={`${item.name+i}`} className="flex justify-between items-center text-xs bg-slate-950/60 border border-slate-900 p-2.5 rounded-xl">
                                        <span className="font-semibold text-slate-200">{item.name}</span>
                                        <span className="text-slate-400 font-mono text-[11px]">{item.age} yrs old</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* After Filter */}
                        <div 
                            className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between"
                            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
                        >
                            <div>
                                <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">
                                    Filter Criteria (Age &gt; 18)
                                </span>
                                <h2 className="text-base font-bold text-slate-200 mt-3 mb-2">After Array.filter()</h2>
                                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                    Only showing users who satisfy the adult filter criteria:
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {filteredUsers.map((item, i) => (
                                    <li key={`${item.name+i}`} className="flex justify-between items-center text-xs bg-indigo-950/20 border border-indigo-500/10 p-2.5 rounded-xl">
                                        <span className="font-semibold text-indigo-300">{item.name}</span>
                                        <span className="text-emerald-400 font-mono text-[11px]">{item.age} yrs old</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
}

export default ES6;