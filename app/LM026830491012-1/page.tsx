"use client";

import { Plants } from "./componentss/MyPlants";
import { useState } from "react";
import Header from "./componentss/header";
import Footer from "./componentss/footer";
import HerbForm from "./componentss/HerbForm";
import Delete from "./componentss/Delete";

export default function HerbHome() {

const [editingTask,setEditingTask] = useState(null);
const resetEditingTask = () => setEditingTask(null);


    const onEdit = (t) => {
        setEditingTask(t);
    };

    const updateTask = (id, detail, type) => {

        setTasks(
            tasks => tasks.map(
                t => t.id === id ?
                {...t,
                detail: detail ,
                type: type
                } : t
            ));
            setEditingTask(null);
    }

    const AddTask = (detail, type) => {
        const NewTask = {
            id: Tasks.length + 1,
            detail: "detail",
            name: "medic",
            type: "B",
             supplier: "A_lot"
        }
        setTasks([...Tasks, NewTask]);
        setNoft(Tasks.length + 1);
    }

const onDelete = (id) => {
        // alert(`คุณต้องการลบข้อมูล รหัส ${id}?`);
        const updateTask = Tasks.filter(
            item => item.id  != id
        );
        setTasks(updateTask);
    }

    const [Tasks , setTasks] = useState(Plants);   
    const plantss = Plants.map((item, index) => {
        const {id,name,detail,type,supplier} = item;

        return (
            <a className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium" key={index}>
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Name: {name}</h5>
                <p className="text-body">id: {id}</p>
                <p className="text-body">Detail: {detail}</p>
                <p className="text-body">type: {type}</p>
                <p className="text-body">supplier: {supplier}</p>
                
                <div className="flex gap-2 mt-2">
                    {/* Delete */}
                    <button onClick={(e) => onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </div>
                
            </a>
        );
    });



    return (
        <>
        <Header />

            <div className="flex justify-center mt-30">
                <div className="max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                        My CatagolyHerb
                    </h5>
                    <p className="text-body">
                        Name : Tawan <br />
                        Career:  HerbJob <br />
                        Location: Earth <br />
                    </p>
                </div>
            </div>

            <div>
             <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {plantss}
            </div>
            </div>

            <HerbForm 
                        Text={AddTask}
                        Select={editingTask}
                        updateTask={updateTask}
                        reset={resetEditingTask}
                        />
        







        <Footer />
        </>
    );
}