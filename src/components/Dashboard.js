import React, { useState,useEffect } from "react";
import Swal from 'sweetalert2';

import Header from "./Header.js";
import Add from "./Add.js";
import List from "./List.js";
import TodaysAttendance from "./TodaysAttendance.js";



function getStdList(){
    let list=localStorage.getItem("stdList");
    if(list==null){
        return [];
    }
    else{
        return JSON.parse(list);
    }
}



function Dashboard() {

  const [isAdding,setIsAdding]=useState(false);
  const [isTodaysAtt,setIsTodaysAtt]=useState(false);



  const [stds_pList, setStds_pList] = useState(getStdList());


  useEffect(() => {
    localStorage.setItem('stdList', JSON.stringify(stds_pList));
   }, [stds_pList]);



  return (<>
  <div className="container dashboard">
    {!isAdding && !isTodaysAtt && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                        setIsTodaysAtt={setIsTodaysAtt}
                    />
                    <List
                       
                        stds_pList={stds_pList}
                        setStds_pList={setStds_pList}
                       
                    />
                     <input
                        
                        className="mx-3 mb-4 mybtn btn btn-primary"
                        type="button"
                        value="Clear All"
                        onClick={()=>setStds_pList([])}
                    />
                </>
            )}
           
            {isAdding && (
                <Add
                    setIsAdding={setIsAdding}
                    stds_pList={stds_pList}
                    setStds_pList={setStds_pList}
                />
            )}
            
            {isTodaysAtt &&(
                <TodaysAttendance 
                setIsTodaysAtt={setIsTodaysAtt}
                stds_pList={stds_pList}
                setStds_pList={setStds_pList}
                />
            )}
             
  </div>

  </>

  );
}

export default Dashboard;
