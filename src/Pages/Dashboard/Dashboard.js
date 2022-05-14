import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content lg:ml-3">
                    {/* <!-- Page content here --> */}

                    <h1 className="text-3xl font-bold text-secondary">Welcome To Dashboard</h1>

                    <Outlet />


                </div>
                <div class="drawer-side ">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/review'>Reviews</Link></li>
                        <li><Link to='/dashboard/history'>History</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;