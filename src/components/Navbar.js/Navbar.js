import React from 'react';
import { Layout , Button} from 'antd';
import './Navbar.css'

const { Header, } = Layout;

const Navbar = () => {
  return (
    <Header style={{background:'white'}}>
    <div className='Navbar-Main-Container'>
    <div className='Navbar-first-btn'>
    <Button type="text">Tasky</Button>
    </div>
    </div>
    </Header>
  )
}

export default Navbar
