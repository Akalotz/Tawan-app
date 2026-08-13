"use client";

import Headder from "../components/header";
import Footer from "../components/footer";
import { DataItem, appendItem } from "../Data/DataItem";
import { useState } from "react";

export default function MyToDoList(){
    
    const ToDoList = [...DataItem, ...appendItem];
    const [Tasks , setTasks] = useState(ToDoList);
    const [numOfTasks, setNoft] = useState(Tasks.length);
    const [status , setStatus] = useState(null);

    const filterTasks = 
        status == null ? Tasks 
        :Tasks.filter (
        (Item) => Item.status == status
        );

    let Name = "Tawan";
    const major = "เทตโนโลยรสารสนเทศ (Information Technology)";
    let classYear = "2";
    let classSec = "ทส.ค/ทส.ก";
    let active = true;


    const isActive = (active: boolean) => {
        if (active) 
            return<span style= {{ color: "green" } }>กำลังศึกษาอยู่</span>;
        return<span style= {{ color: "red" } }>ไม่ได้เป็นศึกษาอยู่</span>;
     
    }

    const State = [...DataItem, ...appendItem];

    const tmpTdl = filterTasks.map((item, index  )=> {
    const {id,title,desc ,author,date_added,status} = item;

return (<a className=" bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium" key = {index}>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {title}</h5>
    <p className="text-body">ข้อมูล: {desc}</p>
    <p className="text-body">วันที่: {date_added}</p>
    <p className="text-body">ผู้แต่ง: {author}</p>
    <p className="text-body">ผู้แต่ง: {status}</p>
    </a>);
    }
    


    
    );
     const AddTask = () => {
        const NewTask = {
        id: Tasks.length+1,
        title: "ทดสอบเพิ่มงาน",
        desc: "ราบละเอียดของงานที่เพิ่ม",
        date_added: "13/08/2569",
        author: "Tawan",
        status: true
            
        }
        setTasks([...Tasks, NewTask]);
        setNoft(Tasks.length+1);
     }
    

    console.log(`Name: ${Name}`);
    console.log(`major: ${major}`);
    
    return (
        <>
            <Headder />
            
            
<div className="flex justify-center mt-30">
  <div className="max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
      TO Do List
    </h5>

    <p className="text-body">
      ชื่อ-สกุล: {Name} <br />
      สาขาวิชา: {major} <br />
      ชั้นปี: {classYear} <br />
      ห้อง: {classSec} / {classYear} <br />
      สถานะภาพการศึกษา: {isActive(active)}
    </p>
  </div>
</div>

<div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

    <div>จำนวณงานที่ต้องทำ {numOfTasks} รายการ</div>
    <div>
        <button onClick={AddTask} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ">เพิ่มงาน</button>
    </div>
        <div>
            <button onClick= { () => setStatus(null) } className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ">[A] ALL</button>
            <button onClick= { () => setStatus(true) } className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">[C] Completed</button>
            <button onClick= { () => setStatus(false) } className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">[P] pending</button>
        </div>
</div>

        <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {tmpTdl}
        </div>
           
        <Footer></Footer>
        </>
        
    );


}