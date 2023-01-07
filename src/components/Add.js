import React ,{ useState,useEffect, useRef } from 'react'
import Swal from 'sweetalert2';

 function Add({setIsAdding,stds_pList,setStds_pList}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rollNo, setRollNo] = useState('');
   
     
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleEntry = e => {
        e.preventDefault();

        var checkInTime=new Date();
        var clickDate=new Date();
        clickDate=clickDate.getDate();

        checkInTime=`${checkInTime.getHours()>12?checkInTime.getHours()-12:checkInTime.getHours()}:${checkInTime.getMinutes()<10?"0"+checkInTime.getMinutes():checkInTime.getMinutes()} ${checkInTime.getHours()>=12?"PM":"AM"}`;



        if (!firstName || !lastName || !rollNo) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = stds_pList.length + 1;
        const newStudent = {
            id,
            firstName,
            lastName,
            rollNo, 
            checkInTime,
            checkOutTime:null,
            clickDate,
        }
        
        setStds_pList([...stds_pList,newStudent]);
        
        
        setIsAdding(false);
    
        Swal.fire({
            icon: 'success',
            title: 'Checked In',
            text: `${firstName} ${lastName} has been Checked In.`,
            showConfirmButton: false,
            timer: 1500
        });
  
    }
    
    return (
    <div className="container my-6" >
                <h1 className="container my-9">Add New Entry</h1>
            <form className="container" onSubmit={handleEntry}>
                <div className="container inputDiv">
                <label htmlFor="firstName">First Name:  </label>
                <div>
                <input
                className='entryInput'
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                </div>
                
                </div>
              
                 <div className="container inputDiv">
                 <label htmlFor="lastName">Last Name:  </label>
                 <div>
                 <input
                 className='entryInput'
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                 </div>
               
                 </div>
               
                 <div className="container inputDiv">
                 <label htmlFor="rollNo">Roll No. :  </label>
                 <div>
                 <input
                 className='entryInput'
                    id="rollNo"
                    type="text"
                    name="rollNo"
                    value={rollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
                </div>
                
                 </div>
               
               
                <div className='my-4 addBtnsDiv' >
                    <input className="btn btn-primary mx-2 mybtn"
                     type="submit" value="Check-In" />
                    <input
                        className="btn btn-primary mybtn"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;

