import React, { useState } from 'react';
import {  Modal} from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { Model_Action } from '../../store/redux/slices/ModelSlice';

const CustomModal = ({title,children}) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.Model.isModalOpen);

  const handleCancel = () => {
    dispatch(Model_Action.actions.closeModal())
  }

    return (
      <>
        <Modal footer={null}  title={title} open={isModalOpen}   onCancel={handleCancel}>
         {children}
        </Modal>
      </>
    );
}

export default CustomModal;