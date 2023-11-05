import React, { useEffect } from 'react';
import { Card, Typography, Button, Divider ,} from 'antd';
import { EditOutlined , DeleteOutlined , CopyOutlined} from '@ant-design/icons';

import './Card.css'
import { useDispatch , useSelector } from 'react-redux';
import  FormDataSlice, { Delete_Form_data } from '../../store/redux/slices/FormDataSlice';
import { Model_Action } from '../../store/redux/slices/ModelSlice';
import CustomModal from '../Modal/Modal';
import CustomForm from '../Form/Form';

const {Text,Title} = Typography

const Custom_Card = ({ data }) => {

  

  const modelSocket = useSelector((state)=> state.Model.ModelSocket)


  const dispatch = useDispatch()

  const DeleteControl = (id) => {
    dispatch(Delete_Form_data(id))
    
  }

  const EditControl = (id) => {
    dispatch(Model_Action.actions.showModal());
    dispatch(FormDataSlice.actions.EditFunctionality(id));
    console.log('model open');
    console.log('check')
  }
  return (

    <>
    <div className='Custom_Card'> 
    {
      data.map((item)=>{
        return (
          <div className='card-container' >
          <Card
          className='CardCustomClass'
          bordered={true}
          style={{
            width: 300,
            paddingTop: '2px'
          }}
        >
          
          <div style={{display:'flex',gap:'20px', paddingTop:'10px'}}>
          <Button icon={<CopyOutlined style={{color:"black"}}/>}/>
          <Text style={{paddingTop:"5px"}}>{item.TaskName}</Text>
          </div>

          <Divider/>

          <Title level={5}>Description</Title>
          <Text>{item.Description}</Text>
          <br/>
          <br/>
          <Button>{item.Status}</Button>
          <Divider/>

          <div style={{display:'flex', justifyContent:'space-between'}}>
          <Text>{item.Pirority}</Text>
          <div style={{gap:'10px',display:'flex'}}>
          <Button  icon={<EditOutlined onClick={()=>{EditControl(item.id)}}/>}/>
          <Button icon={<DeleteOutlined onClick={()=>{DeleteControl(item.id)}}/>}/>
          </div>
          </div >
        </Card>
        {/* <CustomModal title={'Edit TodoList'}>
        <CustomForm editing={true}/>
        </CustomModal> */}

        </div>
        
        )
      })
    }
   </div>
   
    </>

  )



}

export default Custom_Card;

