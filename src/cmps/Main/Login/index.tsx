import React from 'react';
import { Link } from 'react-router-dom';
import ContentWrapper from '../../../commonStyles/ContentWrapper';
import useForm from '../../../customHooks/useForm';
import StyledForm from '../../../commonStyles/FormStyles';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';

const Login = (): JSX.Element => {
  const { inputs, handleInputChange, handleSubmit } = useForm({
    username: '',
    password: ''
  }, login);

  function login() { }

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
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} value={inputs.password} placeholder='******' />
          <span>
            {inputs.password ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
          </span>
        </div>
        <button type="submit">Sign In</button>
        <p>Still unregistered? <Link to='/signup'>Sign Up</Link></p>
      </StyledForm>
    </ContentWrapper>
  );
}

export default Login;
