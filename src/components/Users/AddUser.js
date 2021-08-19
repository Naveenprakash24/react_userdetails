import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styled from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const EnteredName = nameInputRef.current.value;
    const EnteredUserAge = ageInputRef.current.value;

    if (EnteredName.trim().length === 0 || EnteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Pease enter a valid name and age (non-empty Values).",
      });
      return;
    }
    if (+EnteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age (> 0).",
      });
      return;
    }
    //   console.log(enteredUsername, enteredAge);
    props.onAddUser(EnteredName, EnteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const Errorhandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={Errorhandler}
        />
      )}
      <Card className={styled.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit"> Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

//State function adding users

// import React, { useState, useRef } from "react";
// import Card from "../UI/Card";
// import styled from "./AddUser.module.css";
// import Button from "../UI/Button";
// import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helper/Wrapper";

// const AddUser = (props) => {
//   const nameInputRef = useRef();
//   const ageInputRef = useRef();
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
//   const [error, setError] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     console.log(nameInputRef.current.value);
//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: "Invalid input",
//         message: "Pease enter a valid name and age (non-empty Values).",
//       });
//       return;
//     }
//     if (+enteredAge < 1) {
//       setError({
//         title: "Invalid age",
//         message: "Please enter valid age (> 0).",
//       });
//       return;
//     }
//     //   console.log(enteredUsername, enteredAge);
//     props.onAddUser(enteredUsername, enteredAge);
//     setEnteredUsername("");
//     setEnteredAge("");
//   };

//   const UsernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };
//   const Errorhandler = () => {
//     setError(null);
//   };

//   return (
//     <Wrapper>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={Errorhandler}
//         />
//       )}
//       <Card className={styled.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
//             value={enteredUsername}
//             onChange={UsernameChangeHandler}
//             ref={nameInputRef}
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             type="number"
//             id="age"
//             value={enteredAge}
//             onChange={ageChangeHandler}
//             ref={ageInputRef}
//           />
//           <Button type="submit"> Add user</Button>
//         </form>
//       </Card>
//     </Wrapper>
//   );
// };

// export default AddUser;
