
import React from 'react';
import { Sidebar } from '../components/Sidebar';

export default function DashBoardLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar/>

        {children}


      </div>
    </div>

    );
  }