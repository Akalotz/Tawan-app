"use client";

import { useState, useEffect } from "react";

export default  function HerbForm ({Text,Select,Radio,Textarea,Button,reset,updateTask}) {

     const [title, settitle] = useState('');
     
    const [taskStatus, setTaskStatus] = useState(false);

    const handleCancel = (e)=> {
        settitle('');
        setTaskStatus(false);
        reset();

        useEffect( () =>{
           
            if(Select) {
               const {title , status} = Select;
              settitle(title);
              setTaskStatus(status);
            }else {      
              settitle("");
              setTaskStatus(false);
              
            }
        },[Select]);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        if(!title.trim() ) return;

        if(Select)
          updateTask(Select.id, title , taskStatus);
        else
        Text (title, taskStatus);

        handleCancel;
    }
   

    return (
         <form onSubmit={handleSubmit}>
      <div className="m-3 p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">เพิ่มข้อมูลสมุนไพร</h3>
        <div className="flex">
          <label className="mb-2 text-sm font-medium text-slate-700">ชื่อสมุนไพร:</label>
          <input 
            type="text"
            placeholder="Enter herb..."
            className="w-11/12 ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
          />
          <label className="mb-2 text-sm font-medium text-slate-700">รายละเอียด:</label>
          <input
            type="text"
            placeholder="Enter detail..."
            className="w-11/12 ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
          />
          <label className="mb-2 text-sm font-medium text-slate-700">ผู้ผลิต:</label>
          <input
            type="text"
            placeholder="Enter supplier..."
            className="w-11/12 ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
          />
          
        </div>
        <div className="flex gap-3">
          <label className="mt-4 py-4 text-sm font-medium text-slate-700">ประเภทสมุนไพร:</label>
          <label className="mt-4 px-4 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="taskStatus" value='true' checked={taskStatus === true} onChange={(e)=>setTaskStatus(e.target.value === 'true')} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">ใช้ภายนอก</span>
          </label>
          <label className="ms-2 mt-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="taskStatus" value='false' checked={taskStatus === false} onChange={(e)=>setTaskStatus(e.target.value === 'true')} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">ใช้ภายใน</span>
          </label>
          <label className="ms-2 mt-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="taskStatus" value='false' checked={taskStatus === false} onChange={(e)=>setTaskStatus(e.target.value === 'true')} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">ใช้ภายนอกและภายใน</span>
          </label>
        </div>
        <div className="flex mt-4 gap-2 justify-center">

          <button  className="bg-blue-600 text-white px-4 py-1 rounded">
           {Select ? 'อัพเดตข้อมูล' : "บันทึก"}
          </button>

          <button className="bg-gray-600 text-white px-4 rounded" onClick= {handleCancel}>
            เครียร์
          </button>
        </div>
      </div>
    </form>
    

    );

}