import React, { useState, useEffect } from "react";
import Context from "./Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Provider(props) {

  const [teachersData, setTeachersData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  const nav = useNavigate();

  const getStudents = async () => {
    try {
      const response = await axios.get(
        "https://653e77be9e8bd3be29df5758.mockapi.io/student"
      );
      console.log(response.data);
      setUsersData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTeachers = async () => {

    try {
      const response = await axios.get(
        "https://653e77be9e8bd3be29df5758.mockapi.io/teacher"
      );
      console.log(response.data);
      setTeachersData(response.data);
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const response = await fetch(
    //     "https://653e77be9e8bd3be29df5758.mockapi.io/teacher"
    //   );
    //   //  console.log(response)
    //   const allTeachersData = await response.json();
    //   setTeachersData(allTeachersData);
    //   // console.log(userData);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getStudents();
    getTeachers();
  }, []);

  const addOrUpdateStudents = ({
    formValues,
    setFormValues,
    id,
    initialFormValues,
  }) => {
    if (id) {
    axios.put("https://653e77be9e8bd3be29df5758.mockapi.io/student/" + id , formValues)
    .then((res)=>{
      getStudents();
      setFormValues(initialFormValues)
    })
      nav(-1);
    } else {
      axios.post("https://653e77be9e8bd3be29df5758.mockapi.io/student/", formValues)
      .then((res)=>{
        getStudents();
        setFormValues(initialFormValues)
      })
      
      nav(-1);
    }
  };

  const deletingStudentData = ({ id }) => {

    axios.delete("https://653e77be9e8bd3be29df5758.mockapi.io/student/" + id)
    .then((res)=>{
      getStudents();
    })
    
  };

  const addOrUpdateTeachers = ({
    teacherFormValues,
    setTeacherFormValues,
    id,
    teacherInitialData,
  }) => {

    if (id) {
      axios.put("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id , teacherFormValues)
      .then((res)=>{
        getTeachers();
        setTeacherFormValues(teacherInitialData)
      })
        nav(-1);
      } else {
        axios.post("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/", teacherFormValues)
        .then((res)=>{
          getTeachers();
          setTeacherFormValues(teacherInitialData)
        })
        
        nav(-1);
      }
    // if (id) {
    //   fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(teacherFormValues),
    //   }).then((res) => {
    //     getTeachers();
    //     setTeacherFormValues(teacherInitialData);
    //   });

    //   nav(-1);
    // } else {
    //   fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(teacherFormValues),
    //   }).then((res) => {
    //     getTeachers();
    //     setTeacherFormValues(teacherInitialData);
    //   });

    //   nav(-1);
    // }
  };

  const deletingTeacherData = ({ id }) => {
    axios.delete("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id)
    .then((res)=>{
      getTeachers();
    })
    
    // fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id, {
    //   method: "DELETE",
    // }).then((res) => {
    //   getTeachers();
    //   res.json();
    // });
  };

  return (
    <Context.Provider
      value={{
        usersData,
        setUsersData,
        teachersData,
        setTeachersData,
        addOrUpdateStudents,
        deletingStudentData,
        addOrUpdateTeachers,
        deletingTeacherData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
