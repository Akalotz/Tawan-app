import Headder from "../components/header";
import Footer from "../components/footer";
import { ToDoList } from "../Data/ToDoList";


export default function MyToDoList(){
    
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
    const tmpTdl = ToDoList.map((item, index) =>
        <>
       
<a className=" bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium" key = {index}>
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">หัวข้อ: {item.title}</h5>
    <p className="text-body">หัวข้อ: {item.desc}</p>
    <p className="text-body">หัวข้อ: {item.date_added}</p>
    
</a>

       </>
    );
     
    
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



        <div className="flex justify-center mt-10">
            {tmpTdl}
        </div>
           
        <Footer></Footer>
        </>
        
    );


}