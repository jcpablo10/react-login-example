import React from 'react'
import Login from '../Pages/Login/index.jsx'
import Dashboard from '../Pages/Dashboard/Dashboard.jsx'
import PageNotFound from '../Pages/PageNotFound/PageNotFound.jsx'

const routes = [
    {
        path:'/',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/*',
        component: PageNotFound
    }
]

export default routes;