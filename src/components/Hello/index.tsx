import React, { useRef } from 'react';
import logo from '@/logo.svg';
import { useAppDispatch, useAppSelector } from '@/hook/useAppRedux';
import { setDate } from '@/redux/slices/TemplateSlice';
import { Button } from '@/stories/module/button/Button';
const Hello = () => {
  const dispatch = useAppDispatch();
  const { template } = useAppSelector((state) => state.template.value);
  const handleGetData = () => {
    dispatch(setDate({ templateData: inputData.current }));
  };
  const inputData = useRef('');
  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <img src={logo} alt='Logo' className='h-40' />
      <ul>
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>🔥 Redux Toolkit</li>
        <li>🔥 Redux Saga</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
      </ul>
      <p className='mt-5 '>
        reduxData:
        <input
          className='h-8 w-48 border-4 border-black rounded-lg'
          onChange={(val) => {
            inputData.current = val.target.value;
          }}
        ></input>
      </p>

      <div>
        <Button
          classNameStyle='mt-5 p-2  text-[gray] text-title rounded-lg bg-slate-200 hover:bg-blue-200 '
          label=' getDataa'
          onClick={() => {
            handleGetData();
          }}
          size={'large'}
        />
        <p className='mt-5 text-title'>reduxData:{template}</p>
      </div>
    </div>
  );
};

export default Hello;
