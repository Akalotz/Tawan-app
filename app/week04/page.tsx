"use client";

import Headder from "../components/header";
import Footer from "../components/footer";
import { DataItem, appendItem } from "../Data/DataItem";
import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import Modal from "./components/Modal";

export default function MyToDoList(){
    
    const ToDoList = [...DataItem, ...appendItem];
    const [Tasks , setTasks] = useState(ToDoList);
    const [numOfTasks, setNoft] = useState(Tasks.length);
    const [status , setStatus] = useState(null);
    const [open, setOpen] = useState(false);
    const [editingTask,setEditingTask] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null); 

    const resetEditingTask = () => setEditingTask(null);
    

    const filterTasks = 
        status == null ? Tasks 
        :Tasks.filter (
        (Item) => Item.status == status
        );

    let Name = "Tawan";
    const major = "เทคโนโลยีสารสนเทศ (Information Technology)";
    let classYear = "2";
    let classSec = "ทส.ค/ทส.ก";
    let active = true;

    const isActive = (active) => {
        if (active) 
            return <span style={{ color: "green" }}>กำลังศึกษาอยู่</span>;
        return <span style={{ color: "red" }}>ไม่ได้ศึกษาอยู่</span>;
    };

    const Status = (sta : boolean) => {
        if (sta)
            return <span style={{color: "green"}}>ทำแล้ว</span>;

        return <span style={{color: "red"}}>ไม่ทำ</span>;    
    };

    const onEdit = (t) => {
        setEditingTask(t);
    };

    const updateTask = (id, title, status) => {

        setTasks(
            tasks => tasks.map(
                t => t.id === id ?
                {...t,
                title: title ,
                status: status
                } : t
            ));
            setEditingTask(null);
    }
    const onDelete = (id) => {
        // alert(`คุณต้องการลบข้อมูล รหัส ${id}?`);
        const updateTask = Tasks.filter(
            item => item.id  != id
        );
        setTasks(updateTask);
    }

    const tmpTdl = filterTasks.map((item, index) => {
        const {id, title, desc, author, date_added, status} = item;

        return (
            <a className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium" key={index}>
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {title}</h5>
                <p className="text-body">ข้อมูล: {desc}</p>
                <p className="text-body">วันที่: {date_added}</p>
                <p className="text-body">ผู้แต่ง: {author}</p>
                
                <div className="flex gap-2 mt-2">
                    {/* View: เซ็ตข้อมูลการ์ดใบนี้แล้วเปิด Modal */}
                    <button onClick={() => { setSelectedTask(item); setOpen(true); }} className="bg-green-500 text-white px-3 py-1 rounded">View</button>

                    {/* Edit */}
                    <button onClick={(e) => onEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>

                    {/* Delete */}
                    <button onClick={(e) => onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </div>
            </a>
        );
    });

    const AddTask = (title, status) => {
        const NewTask = {
            id: Tasks.length + 1,
            title: "title",
            desc: "รายละเอียดของงานที่เพิ่ม",
            date_added: "17/08/2569",
            author: "Tawan",
            status: status
        }
        setTasks([...Tasks, NewTask]);
        setNoft(Tasks.length + 1);
    }

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

            <ToDoForm 
            AddTask={AddTask}
            editingTask={editingTask}
            updateTask={updateTask}
            resetEditingTask={resetEditingTask}
            />

            <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                <div>จำนวนงานที่ต้องทำ {numOfTasks} รายการ</div>
                <div>
                    {/* <button onClick={AddTask} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">เพิ่มงาน</button> */}
                </div>
                <div>
                    <button onClick={() => setStatus(null)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">[A] ALL</button>
                    <button onClick={() => setStatus(true)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">[C] Completed</button>
                    <button onClick={() => setStatus(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200">[P] pending</button>
                </div>
            </div>

            <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {tmpTdl}
            </div>

           
            <Modal open={open} onCLose={() => setOpen(false)}>
                {selectedTask && (
                    <div>
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {selectedTask.title}</h5>
                        <p className="text-body">ข้อมูล: {selectedTask.desc}</p>
                        <p className="text-body">วันที่: {selectedTask.date_added}</p>
                        <p className="text-body">ผู้แต่ง: {selectedTask.author}</p>
                    </div>
                )}
            </Modal>
               
            <Footer/>
        </>
    );
}