import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const FormsComponent = () => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
  };

  
  const { username, email, password, onInputChange } = useForm(initialForm);  

  const handleSubmit = (event) => {
    event.preventDefault();

    // acá iría la lógica de negocia, ya sea enviarlo a un back o algo
    console.log(username, email, password);
  };

  const focusRef = useRef();

  useEffect(() => {
    focusRef.current.focus();
    console.log(focusRef.current.name);    
  }, [])
  

  return (
    <>
      <h4>Formulario:</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name:
          </label>
          <input
            ref={focusRef}
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
