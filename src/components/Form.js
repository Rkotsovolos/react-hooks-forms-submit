import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Ryan");
  const [lastName, setLastName] = useState("Kotsovolos");

// Form submission state lesson addition v
  const [submittedData, setSubmittedData] = useState([]);
  // add state for holding error messages
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  //Form Submission Lesson
  //Function that on submit of the page doesnt refresh - line 
  // formData as an object using the values stored in state. - line

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      firstName : firstName,
      lastName : lastName,
    };
    // first name is required
    if (firstName.length > 0) {
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
    } else {
    setErrors(["First name is required!"]);
    }
  }

//Form Submission Lesson 

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div> 
  );
}

export default Form;
