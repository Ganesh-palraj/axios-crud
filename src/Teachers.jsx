import React, { useContext } from "react";
import { Button } from "reactstrap";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import Context from "./Context";
import {  useNavigate } from "react-router-dom";

const Teachers = () => {

  const navigate = useNavigate();
  const contextData = useContext(Context);


  const deleteData = (id) => {
    contextData.deletingTeacherData( { id })
    // fetch("https://63de12f9f1af41051b0d2ca2.mockapi.io/login/" + id, {
    //   method: "DELETE"
    // }).then((res) => { 
    //   getStudents();
    //   res.json() })
  }
 

  return (
    <main className="main">
      <header className="header">
        <h1 className="userTitle">Teachers Registry</h1>
        <Button className="addUserButton" color="success" onClick={() => navigate("/teacheraction" , {state:{ isView : "false" }})}>
          Add Teachers
        </Button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Teacher Photo</th>
            <th>Name</th>
            <th>Teaching subject</th>
            <th>school name</th>
            <th>Action Items</th>
          </tr>
        </thead>
        <tbody>
          {contextData.teachersData.map((singleuser) => (
            <tr key={singleuser.id}>
              <td>
                <img style={{ borderRadius: "200px" }} src={singleuser.avatar} />
              </td>
              <td>{singleuser.name}</td>
              <td>{singleuser.teachingsubject}</td>
              <td>{singleuser.schoolname}</td>
              <td>
                <AiFillEdit
                  id="icon"
                  role="button"
                  onClick={() => navigate(`/teacheraction/${singleuser.id}`,{state:{ isView : "false"}})}
                  tabIndex={0}
                />
                <AiFillEye
                  id="icon"
                  role="button"
                  onClick={() => navigate(`/teacheraction/${singleuser.id}`,{state:{ isView : "true"}})}
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

export default Teachers;
