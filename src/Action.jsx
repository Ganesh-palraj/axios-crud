import React, { useEffect, useState , useContext} from "react";
import { Input, Button } from "reactstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Context from "./Context";


const Action = () => {

  const contextData = useContext(Context);
  console.log(contextData.usersData)

  const initialFormValues = {
    name: "",
    avatar: "",
    rollno: "",
    schoolname: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const nav = useNavigate();

  const { id , isView } = useParams();

  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (id) {
      fetch("https://653e77be9e8bd3be29df5758.mockapi.io/student/" + id)
        .then((data) => data.json())

        .then((res) => setFormValues(res));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    contextData.addOrUpdateStudents({ formValues , setFormValues , id , initialFormValues })
    
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <label htmlFor="name">Image</label>
        <Input
          type="text"
          name="avatar"
          value={formValues.avatar}
          disabled={state.isView === "true" ? true : false}
          onChange={handleChange}
        />

        <label htmlFor="name">Description</label>
        <Input
          type="text"
          name="rollno"
          value={formValues.rollno}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <label htmlFor="name">Job Title</label>
        <Input
          type="text"
          name="schoolname"
          value={formValues.schoolname}
          onChange={handleChange}
          disabled={state.isView === "true" ? true : false}
        />

        <Button
          color="success"
          className="actionButton"
          onClick={handleSubmit}
          disabled={state.isView === "true" ? true : false}
        >
          submit{" "}
        </Button>

        <Button color="danger" className="actionButton" onClick={() => nav(-1)}>
          cancel
        </Button>
      </form>
    </>
  );
};

export default Action;
