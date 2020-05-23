import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import useForm from '../../../customHooks/useForm';
import StyledForm from '../../../commonStyles/FormStyles';

const Login = (): JSX.Element => {
  const formContentRef = useRef<HTMLDivElement>();
  const errorMsgRef = useRef<HTMLParagraphElement>();

  const [errorMsg, setErrorMsg] = useState('');

  const { inputs, handleInputChange, handleSubmit } = useForm({
    username: '',
    password: ''
  }, signIn);

  function signIn(data) {
    console.log(data);
  }

  return (
    <div>
      <StyledForm inputs={inputs} onSubmit={handleSubmit}>
        <p ref={errorMsgRef} className='errorMsg'>{errorMsg}</p>
        <div className='formContent' ref={formContentRef}>
          <Input
            name='username'
            type='text'
            handleInputChange={handleInputChange}
            inputValue={inputs.username}
            placeholder='jonndoe123'
            setErrorMsg={setErrorMsg}
            formContentRef={formContentRef}
            errorMsgRef={errorMsgRef}
          />

          <Input
            name='password'
            type='password'
            handleInputChange={handleInputChange}
            inputValue={inputs.password}
            placeholder='********'
            setErrorMsg={setErrorMsg}
            formContentRef={formContentRef}
            errorMsgRef={errorMsgRef}
          />
          <button type="submit">Sign In</button>
          <p className='signMsg'>Still unregistered? <Link to='/signup'>Sign Up</Link></p>
        </div>
      </StyledForm>
    </div>
  );
}

export default Login;
