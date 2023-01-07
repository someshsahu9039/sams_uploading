import React ,{ useState } from 'react'


export default function TodaysAttendance({setIsTodaysAtt,stds_pList,setStds_pList}) {

  return (
    <div>
      <h1>Todays Attendance</h1>
      <table className="table table-striped table-hover border-primary">
            <thead className="table-dark">
                <tr align="center">
                    <th>No.</th>
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
                            <td>{i + 1}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.rollNo}</td>
                           
                            <td colSpan={2} >
                               
                                {
                                    student.checkInTime
                                }
                            </td>
                            <td colSpan={2}>
                                {
                                    student.checkOutTime
                                }
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr align="center" >
                        <td colSpan={7}>No Student Present Today</td>
                    </tr>
                )}
            </tbody>
        </table>
        <div className='mb-4'>
        <input
                        
                        className="btn btn-primary mx-2  mybtn"
                        type="button"
                        value="Go Back"
                        onClick={()=>setIsTodaysAtt(false)}
                    />
         <input
                        
                        className="btn btn-primary mybtn"
                        type="button"
                        value="Clear All"
                        onClick={()=>setStds_pList([])}
                    />
        </div>
    </div>
  )
}
