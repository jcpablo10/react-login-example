import React from 'react'
import Login from '../Pages/Login/index.jsx'
import Dashboard from '../Pages/Dashboard/Dashboard.jsx'
import PageNotFound from '../Pages/PageNotFound/PageNotFound.jsx'

const routes = [
    {
        path:'/',
        component: Login,
        isPrivate: false
    },
    {
        path:'/login',
        component: Login,
        isPrivate: false
    },
    {
        path: '/dashboard',
        component: Dashboard,
        isPrivate: true
    },
    {
        path: '/*',
        component: PageNotFound,
        isPrivate: true
    }
]

export default routes;