import React, { useState, useRef } from 'react';
import useLoginForm from '../../../customHooks/useLoginForm';
import loginValidation from '../../../helpers/validateLogin';
import StyledForm from '../../../commonStyles/FormStyles';
import { FaRegCheckCircle } from 'react-icons/fa';

const Login = (): JSX.Element => {
  const { inputs, handleInputChange, handleSubmit } = useLoginForm(login);
 
  const spanRefs = {
    firstName: useRef<HTMLElement>(),
    lastName: useRef<HTMLElement>(),
    email: useRef<HTMLElement>(),
    password: useRef<HTMLElement>()
  }

  function login() { }

  const handleOnBlur = (e) => {
    const key = e.target.name;

    if(e.target.value) {
      spanRefs[key].current.style.display = 'block';
    }
  }

  const handleOnFocus = (e) => {
    spanRefs[e.target.name].current.style.display = 'none';
  } 

  return (
    <div className='content-wrapper'>
      <StyledForm inputs={inputs} onSubmit={handleSubmit}>
        <div className='formInputBox' onBlur={handleOnBlur}>
          <label>First Name</label>
          <input onFocus={handleOnFocus} type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} placeholder='John' />
          <span ref={spanRefs.firstName}><FaRegCheckCircle/></span>
        </div>

        <div className='formInputBox'>
          <label>Last Name</label>
          <input onBlur={handleOnBlur} type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} placeholder='Doe' />
          <span ref={spanRefs.lastName}><FaRegCheckCircle/></span>
        </div>

        <div className='formInputBox'>
          <label>Email Address</label>
          <input onBlur={handleOnBlur} type="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder='johndoe@gmail.com' />
          <span ref={spanRefs.email}><FaRegCheckCircle/></span>
        </div>

        <div className='formInputBox'>
          <label>Password</label>
          <input onBlur={handleOnBlur} type="password" name="password" onChange={handleInputChange} value={inputs.password} placeholder='******' />
          <span ref={spanRefs.password}><FaRegCheckCircle/></span>
        </div>
        <button type="submit">Log In</button>
      </StyledForm>
    </div>
  )
}

export default Login;
