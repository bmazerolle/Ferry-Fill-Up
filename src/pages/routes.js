import React from 'react'
import Layout from '../components/Layout'
import { Router, Link } from "@reach/router"
import Default from '../components/Default'
import DashboardDefault from '../components/DashboardDefault'
import Dashboard from '../components/DataDashboard'
import Data from '../components/Data'

const Routes = ({location}) => {
    return (
        <Layout>
            <div className="background-div">
                <div className="route-content">
                    <Router basepath="/routes">
                        <Default path="/" />
                        <Dashboard path="/">
                            <DashboardDefault path="/" />
                            <Data path=":dataId" />
                        </Dashboard>
                    </Router>
                </div>
            </div>
        </Layout>
    )
}
export default Routes;