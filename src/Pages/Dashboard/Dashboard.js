import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:ml-3">
                    {/* <!-- Page content here --> */}

                    <h1 className="text-3xl font-bold text-secondary">Welcome To Dashboard</h1>

                    <Outlet />


                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/review'>Reviews</Link></li>
                        <li><Link to='/dashboard/history'>History</Link></li>
                        {
                            admin &&
                            <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;