import './App.css';
import {useState} from 'react'

function App() {
const [fullName,setFullName] = useState("")
const [collegeName,setCollegeName] = useState("")
const [emailId,setEmailId] = useState("")
const [phoneNumber,setPhoneNumber] = useState("")
const [studentData,setStudentData]= useState([])

const handleSubmit =(event)=>{
  event.preventDefault();
  const student = {fullName,collegeName,emailId,phoneNumber}
  setStudentData([...studentData,student]);
  // setFullName("")
  // setCollegeName("")
  // setEmailId("")
  // setPhoneNumber("")
  // setStudentData("")
 
}

  return (
    <div className="App">
      <div >
      <h1>Student Form</h1>
      <form  onSubmit={handleSubmit}>
       
        <input placeholder='Full Name' type="text"  onChange={(e)=>{setFullName(e.target.value)}} /> <br/> <br/> 

        <input placeholder='College Name'  type="text" onChange={(e)=>{setCollegeName(e.target.value)}}/> <br/> <br/>
       
        <input placeholder='Email Id' type="email" onChange={(e)=>{setEmailId(e.target.value)}}/> <br/> <br/>

        <input placeholder='Phone Number'type="tel" onChange={(e)=>{setPhoneNumber(e.target.value)}} /> <br/> <br/>
       
      </form>
      <button onClick={handleSubmit} >Submit</button>
      </div>


                <h1>Student's Data</h1>
      <div className='down'>

            <table style={{width:"70%"}}>
                          <thead>
                          <tr>
                            <th>Sr.No</th>
                            <th>Full Name</th>
                            <th>College Name</th>
                            <th>Email Id</th>
                            <th>Phone Number</th>

                          </tr>
                          </thead>

                          <tbody>
                          {studentData.map((data, i) => (
                          <tr key={i}>
                            <td>{i+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.collegeName}</td>
                            <td>{data.emailId}</td>
                            <td>{data.phoneNumber}</td>

                          </tr>
                          ))}
                          </tbody>

                        </table>
      </div>

  
 

   
  
    </div>
  );
}

export default App;