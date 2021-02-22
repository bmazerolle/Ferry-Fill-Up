import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Layout from '../components/Layout'
import SearchPage from '../components/SearchPage'
const Home = ({location}) => {

  return (
    <Layout>
      <div className="background-div-home">
        <h1 className='home-page-title'>Ferry Fill Up</h1>
        <div className='search-container'>
          <SearchPage/>
        </div>
      </div>
    </Layout>
  )
}
export default Home;