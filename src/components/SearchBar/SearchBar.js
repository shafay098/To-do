import { Input } from 'antd';
import React from 'react'
import './SearchBar.css'

const { Search } = Input;

const SearchBar = ({style}) => {
  return (
    <>
    <Search style={style} placeholder="input search text" enterButton />
    </>
  )
}


export default SearchBar
