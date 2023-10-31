import React, { useContext } from "react";
import { Button } from "reactstrap";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import {  useNavigate } from "react-router-dom";
import Context from "./Context";

const Home = ({ getStudents}) => {
  const contextData = useContext(Context);
  console.log(contextData.usersData)

  const navigate = useNavigate();

  const deleteData = (id) => {
    contextData.deletingStudentData( { id })
    
  }
 

  return (
    <main className="main">
      <header className="header">
        <h1 className="userTitle">Students Registry</h1>
        <Button className="addUserButton" color="success" onClick={() => navigate("/action" , {state:{ isView : "false" }})}>
          Add Students
        </Button>
      </header>

      <table>
        <thead>
          <tr>
            <th>student photo</th>
            <th>Name</th>
            <th>School Name</th>
            <th>Roll No</th>
            <th>Action Items</th>
          </tr>
        </thead>
        <tbody>
          {contextData.usersData.map((singleuser) => (
            <tr key={singleuser.id}>
              <td>
                <img style={{ borderRadius: "200px" }} src={singleuser.avatar} />
              </td>
              <td>{singleuser.name}</td>
              <td>{singleuser.schoolname}</td>
              <td>{singleuser.rollno}</td>
              <td>
                <AiFillEdit
                  id="icon"
                  role="button"
                  onClick={() => navigate(`/action/${singleuser.id}`,{state:{ isView : "false"}})}
                  tabIndex={0}
                />
                <AiFillEye
                  id="icon"
                  role="button"
                  onClick={() => navigate(`/action/${singleuser.id}`,{state:{ isView : "true"}})}
                  tabIndex={0}
                />
                <BiSolidTrashAlt
                  id="icon"
                  role="button"
                  onClick={() => deleteData(singleuser.id)}
                  tabIndex={0}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Home;
