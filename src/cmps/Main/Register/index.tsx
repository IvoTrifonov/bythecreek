import React from 'react'
import { Link } from 'react-router-dom';
import ContentWrapper from '../../../commonStyles/ContentWrapper';
import StyledForm from '../../../commonStyles/FormStyles';
import useForm from '../../../customHooks/useForm';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';

const Register = () => {
  const { inputs, handleInputChange, handleSubmit } = useForm({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }, register);

  function register() { }
  
  return (
    <ContentWrapper>
      <StyledForm inputs={inputs} onSubmit={handleSubmit}>
        <div className='formInputBox'>
          <label>Username</label>
          <input type="text" name="username" onChange={handleInputChange} value={inputs.username} placeholder='John' />
          <span>
            {inputs.username ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
          </span>
        </div>

        <div className='formInputBox'>
          <label>First Name</label>
          <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} placeholder='John' />
          <span>
            {inputs.firstName ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
          </span>
        </div>

        <div className='formInputBox'>
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} placeholder='Doe' />
          <span>
            {inputs.lastName ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
          </span>
        </div>

        <div className='formInputBox'>
          <label>Email Address</label>
          <input type="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder='johndoe@gmail.com' />
          <span>
            {inputs.email ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
          </span>
        </div>

        <div className='formInputBox'>
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} value={inputs.password} placeholder='******' />
          <span>
            {inputs.password ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
          </span>
        </div>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
      </StyledForm>
    </ContentWrapper>
  )
}

export default Register;
