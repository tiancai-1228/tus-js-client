/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import * as tus from 'tus-js-client';
import { Progress, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

interface uploadProps {
  file: File;
}

function customUpload({ file }: uploadProps) {
  const [downloadData, setDownloadData] = useState<any>();
  const [progressData, setProgressData] = useState(0);

  useEffect(() => {
    if (!file) {
      return;
    }
    const endpoint = 'https://tusd.tusdemo.net/files/';
    const options = {
      endpoint: endpoint,
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onError: function (error: any) {
        console.log('Failed because: ' + error);
      },
      onProgress: function (bytesUploaded: any, bytesTotal: any) {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        setProgressData(parseFloat(percentage));
      },
      onSuccess: function () {
        setDownloadData(upload.url);
      },
    };
    const upload = new tus.Upload(file, options);
    upload.start();
  }, []);

  return (
    <>
      <div className='w-[80%] mt-4 flex   justify-center'>
        <div className='w-[100%]'>
          <p>{file.name}</p>
          <Progress percent={progressData} />
        </div>

        <div className='w-[30%] flex items-center'>
          {progressData == 100 && (
            <Button
              type='primary'
              shape='round'
              icon={<DownloadOutlined />}
              href={downloadData}
              target={'_blank'}
            >
              download
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default customUpload;
