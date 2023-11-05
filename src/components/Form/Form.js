import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio, Modal, Select } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { Form_Data_async } from '../../store/redux/slices/FormDataSlice';
import { Model_Action } from '../../store/redux/slices/ModelSlice';


const CustomForm = ({editing}) => {

    console.log(editing)

    const [editdata,SeteditData] = useState()

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };


    // custom style applied to all
    const custom_style = {
        height: '40px'
    }

    // Form use form feature but ant d
    const [form] = Form.useForm();

    // handling form submit
    const handleFormSubmit = (values) => {

        dispatch(Form_Data_async(values))

        form.resetFields();

        dispatch(Model_Action.actions.closeModal())
    };

    const dispatch = useDispatch();

    
    const data = useSelector((state) => state.formdata.Form_Data)
    const id = useSelector((state) => state.formdata.editid)

   
       
    

    return (
        <>
            <Form
                layout='vertical'
                form={form}
                onFinish={handleFormSubmit}
            >
                <Form.Item label="Task Name" name='TaskName'>
                    <Input style={custom_style} placeholder={''} />
                </Form.Item>
                <Form.Item name="AssignTo" label="Assign To" >
                    <Select
                        placeholder=''
                        style={custom_style}
                    >
                        <Select.Option value="Aebad Ul qadir">Aebad Ul qadir</Select.Option>
                        <Select.Option value="Abid Qadir">Abid Qadir</Select.Option>
                        <Select.Option value="Asad Khan">Asad Khan</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name="Status" label="Status" >
                    <Select
                        placeholder=''
                        allowClear
                        style={custom_style}
                    >
                        <Select.Option value="To do">To do</Select.Option>
                        <Select.Option value="In Progress">In Progress</Select.Option>
                        <Select.Option value="Completed">Completed</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Pirority" name='Pirority'>

                    <Radio.Group onChange={onChange} value={value} >
                        <Radio value={'low'}>Low</Radio>
                        <Radio value={'Medium'}>Medium</Radio>
                        <Radio value={'High'}>High</Radio>

                    </Radio.Group>
                </Form.Item>


                <Form.Item name='Description' label="Description">
                    <Input style={custom_style}  placeholder={''}
 />
                </Form.Item>


                <Button htmlType='submit' type='primary'>Submit</Button>




            </Form>
        </>
    )
}

export default CustomForm
