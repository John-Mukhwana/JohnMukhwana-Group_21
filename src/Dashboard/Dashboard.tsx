import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Dashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex flex-col md:flex-row min-h-screen w-full">
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                <main className="flex-1 p-4 bg-gray-950 w-full md:w-screen">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;