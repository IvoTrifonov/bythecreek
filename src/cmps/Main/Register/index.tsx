import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../Login/Input';
import StyledForm from '../../../commonStyles/FormStyles';
import useForm from '../../../customHooks/useForm';
import userService from '../../../services/user';

const Register = (): JSX.Element => {
  const formContentRef = useRef<HTMLDivElement>();
  const errorMsgRef = useRef<HTMLParagraphElement>();
  const [errorMsg, setErrorMsg] = useState('');

  const { inputs, handleInputChange, handleSubmit } = useForm({
    username: '',
    email: '',
    password: ''
  }, signUp);

  function signUp(data) {
    userService.signUp(data).then(() => {

    });
  }

  return (
    <div>
      <StyledForm inputs={inputs} onSubmit={handleSubmit}>
        <p className='errorMsg' ref={errorMsgRef}>{errorMsg}</p>
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
            name='email'
            type='text'
            handleInputChange={handleInputChange}
            inputValue={inputs.email}
            placeholder='jonndoe123@gmail.com'
            setErrorMsg={setErrorMsg}
            formContentRef={formContentRef}
            errorMsgRef={errorMsgRef}
          />

          <Input
            name='password'
            type='password'
            handleInputChange={handleInputChange}
            inputValue={inputs.password}
            placeholder='*******'
            setErrorMsg={setErrorMsg}
            formContentRef={formContentRef}
            errorMsgRef={errorMsgRef}
          />
          <button type="submit">Sign Up</button>
          <p className='signMsg'>Already have an account? <Link to='/signin'>Sign In</Link></p>
        </div>
      </StyledForm>
    </div>
  )
}

export default Register;
