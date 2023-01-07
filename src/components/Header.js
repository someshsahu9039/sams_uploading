import React from 'react'

function Header({ setIsAdding,setIsTodaysAtt }) {
    return (
        <header className="container  header">
            <h1>School Attendance Management System</h1>
            <div className="container">
                <button className="btn btn-primary mx-2 mybtn" onClick={() => setIsAdding(true)} >New Entry</button>
          
            <button className="btn btn-primary mybtn" onClick={() => setIsTodaysAtt(true)} >Today's Attendance</button>
            </div>
        </header>
    )
}

export default Header;