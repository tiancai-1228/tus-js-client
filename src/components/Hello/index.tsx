import React, { useState, useEffect, useRef, ReactNode } from 'react';
import type { UploadProps } from 'antd';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import CustomUpload from '../CustomUpload';
const { Dragger } = Upload;

const Hello = () => {
  const [fileList, setFileList] = useState<ReactNode[]>([]);

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    beforeUpload: (info: any) => {
      setFileList((pre: ReactNode[]) => [...pre, <CustomUpload file={info} key={info.name} />]);
      return false;
    },
    itemRender: () => null,
  };

  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <Dragger {...props}>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>Click or drag file to this area to upload</p>
        <p className='ant-upload-hint'>
          Support for a single or bulk upload. Strictly prohibit from uploading company data or
          other band files
        </p>
      </Dragger>
      {fileList}
    </div>
  );
};

export default Hello;
