import { Layout } from 'antd'
import { Header } from 'antd/es/layout/layout';
import React from 'react'
import Navbar from '../components/Navbar.js/Navbar';

const Ant_Design_layout = ({ children }) => {
  return (
    <Layout style={{backgroundColor:'#e6f4f1'}}>
    <Navbar/>
    {children}
    </Layout>
  );
};

export default Ant_Design_layout
