import React, { useEffect, useState , useContext } from "react";
import { Input, Button } from "reactstrap";
import Context from "./Context";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const Teacheraction = () => {

    const contextData = useContext(Context);
    console.log(contextData.usersData)

  const teacherInitialData = {
    avatar: "",
    name: "",
    teachingsubject: "",
    schoolname: "",
  };

  const [teacherFormValues, setTeacherFormValues] = useState(teacherInitialData);

  const nav = useNavigate();

  const { id , isView } = useParams();

  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (id) {
      fetch("https://653e77be9e8bd3be29df5758.mockapi.io/teacher/" + id)
        .then((data) => data.json())

        .then((res) => setTeacherFormValues(res));
    }
  }, [id]);

  const handleChange = (e) => {
    setTeacherFormValues({ ...teacherFormValues, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    contextData.addOrUpdateTeachers({ teacherFormValues , setTeacherFormValues , id , teacherInitialData })
    
  };

  return (
    <>
      <form>
        <label htmlFor="image">Avatar</label>
        <Input
          type="text"
          name="avatar"
          id="image"
          autoComplete="image"
          value={teacherFormValues.avatar}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name" 
          autoComplete="image"
          id="name"
          value={teacherFormValues.name}
          disabled={state.isView === "true" ? true : false}
          onChange={handleChange}
        />

        <label htmlFor="teachingsubject">Subject</label>
        <Input
          type="text"
          name="teachingsubject"
          autoComplete="image"
          id="teachingsubject"
          value={teacherFormValues.teachingsubject}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <label htmlFor="schoolname">School name</label>
        <Input
          type="text"
          name="schoolname"
          autoComplete="image"
          id="schoolname"
          value={teacherFormValues.schoolname}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <Button
          color="success"
          className="actionButton"
          id="teachersubmit"
          onClick={handleSubmit}
          disabled={state.isView === "true" ? true : false}
        >
          submit{" "}
        </Button>

        <Button color="danger" id="teachercancel" className="actionButton" onClick={() => nav(-1)}>
          cancel
        </Button>
      </form>
    </>
  );
};

export default Teacheraction;
