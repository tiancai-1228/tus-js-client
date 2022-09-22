/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Upload, Button } from 'antd';
import { useHistory } from 'react-router-dom';

function index() {
  const history = useHistory();
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Button
        type='primary'
        shape='round'
        className=' mb-10'
        onClick={() => {
          history.push('/');
        }}
      >
        go page1
      </Button>
    </div>
  );
}

export default index;
