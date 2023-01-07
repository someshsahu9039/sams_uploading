import React, { useState,useEffect} from 'react';

import Swal from 'sweetalert2';



function List({stds_pList,setStds_pList}){

    const [index,setIndex]=useState(0);
      
    var stdslist=stds_pList;

useEffect(()=>{
        localStorage.setItem("stdList",JSON.stringify(stdslist))
},[index])



    const handleCheckOutBtn = (e) => {

        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'yes!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
        
                Swal.fire({
                    icon: 'success',
                    title: `${stdslist[e.target.id].firstName} ${stdslist[e.target.id].lastName} has been Checked Out!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
    
                
                let checkOutTime=new Date();
                checkOutTime=`${checkOutTime.getHours()>12?checkOutTime.getHours()-12:checkOutTime.getHours()}:${checkOutTime.getMinutes()<10?"0"+checkOutTime.getMinutes():checkOutTime.getMinutes()} ${checkOutTime.getHours()>=12?"PM":"AM"}`;
                
                stdslist[e.target.id].checkOutTime=checkOutTime
                setIndex(index+1);
            }
        });
                
    
    setStds_pList([...stdslist]);
}

    return (
        <div className='container'>
            <h2>Students Present Now</h2>
        <table className=" border border-top-0 table table-striped table-hover border-secondary border-2">
            <thead  className="table-dark">
                <tr align="center">
                    {/* <th>No.</th> */}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Roll No.</th>
                    <th colSpan={2}>
                        Check-In Time
                    </th>
                    <th colSpan={2}>
                        Check-Out Time
                    </th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {stds_pList.length > 0 ? (
                   stds_pList.map((student, i) => (
                       <tr key={student.id} align="center">
                       {student.checkOutTime==null &&(
                                <>
                                {/* <td>{i+1}</td> */}
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.rollNo}</td>
                       
                        <td colSpan={2} >
                           
                            {
                                student.checkInTime
                            }
                        </td>
                        <td colSpan={2}>
                                <button 
                                className='btn btn-primary mybtn'
                                id={i}
                                onClick={handleCheckOutBtn}
                                >
                                Check Out
                            </button>
                        </td>
                        </>
                        )}
                        
                        </tr>  
                    ))
                ) : (
                    <tr align="center">
                        <td colSpan={6}>No Student Present Right Now</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    );
    
}

export default List ;

// key={student.id}