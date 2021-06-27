// Pages/Dashboard/index.js

import React from 'react'
import styles from './Dashboard.module.css'
import { useAuthDispatch, logout, useAuthState } from '../../Context'

function Dashboard(props) {

    const dispath = useAuthDispatch();
    const userDetails = useAuthState();

    const handleLogout = () => {
        logout(dispath)

        props.history.push('/login');
    }
   
    return (
        <div style={{ padding: 10 }}>
            <div className={styles.dashboardPage} >
                <h1>
                    Dashboard
                </h1>
                <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            </div>
            <p>Welcome {userDetails.user.email}</p>
        </div>
    )
}

export default Dashboard