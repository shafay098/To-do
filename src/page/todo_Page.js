import React, { useEffect, useState } from 'react';
import { Button, Divider, Layout, Radio, Typography } from 'antd';
import Ant_Design_layout from '../layout/ant_Design_layout';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import './index.css'
import SearchBar from '../components/SearchBar/SearchBar';
import CustomModal from '../components/Modal/Modal';
import Custom_Card from '../components/Card/Card';


import { useDispatch, useSelector } from 'react-redux';
import { Model_Action } from '../store/redux/slices/ModelSlice';
import { Get_Form_Data_Async } from '../store/redux/slices/FormDataSlice';
import CustomForm from '../components/Form/Form';

const { Content } = Layout;
const { Title } = Typography;




const Index = () => {

 // filter option
 const [openfilteroption , setopenfilteroption] = useState(false)

 const filterControl = () => {
   setopenfilteroption(!openfilteroption)
 }

   // getting form data here
   const formData = useSelector((state) => state.formdata.Form_Data);
   const loading = useSelector((state)=> state.formdata.loading)
   const display_screen_updatation = useSelector((state)=> state.formdata.PostResult)
   const modelSocket = useSelector((state)=> state.Model.ModelSocket)
 

   console.log(formData)

    // modal functionality
    const dispatch = useDispatch();
  const OpenModel_Action = () => {
    dispatch(Model_Action.actions.showModal())
  }

  //get data functionality
  const GetData = () => {
    dispatch(Get_Form_Data_Async())
  }


useEffect(() => {
  GetData()
}, [display_screen_updatation])





  return (

    <Ant_Design_layout>

      <Content style={{ margin: '25px', borderRadius: '20px', height: '100%', backgroundColor: 'white' }} >

        <div className='Content-inner-container1'>

          <Title level={2}>Task List</Title>


          <div className='second-divider-cont'>
            <SearchBar style={{ width: '20%', height: '50%' }} />
            <div style={{ justifyContent: 'flex-start', gap: '20px' , display:'flex' }}>
              <Button onClick={OpenModel_Action} type='primary' shape='circle' icon={<PlusOutlined />} />
              <Button shape='circle' onClick={filterControl} icon={<FilterOutlined />} />
            </div>
            {
              modelSocket && (<CustomModal title={'Add Todo'} >
            <CustomForm editing={false}/>
            </CustomModal>)
            }
            
          </div>


        </div>

        <Divider/>

        <div className='Content-inner-container2'>

        {
          openfilteroption && ( 
          <>
          <div style={{display:'flex',justifyContent:'end'}}>
          <Radio.Group  >
            <Radio value={'All'}>All</Radio>
            <Radio value={'To do'}>To do</Radio>
            <Radio value={'In progress'}>In progress</Radio>
            <Radio value={'Completed'}>Completed</Radio>
          </Radio.Group>
        </div>

        <Divider/>
        </>
        )
        }

         

          <div style={{width:'100%'}}>
          { loading ? (
            <Custom_Card data={formData} />
          ) : (
            <div>Loading...</div>
          )}
          </div>

        </div>
      </Content>

    </Ant_Design_layout>

  )
}

export default Index
