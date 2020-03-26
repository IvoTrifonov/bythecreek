import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import ContentWrapper from '../../../commonStyles/ContentWrapper';
import Input from '../Login/Input';
import StyledForm from '../../../commonStyles/FormStyles';
import useForm from '../../../customHooks/useForm';

const Register = () => {
  const formContentRef = useRef<HTMLDivElement>();
  const errorMsgRef = useRef<HTMLParagraphElement>();
  const [errorMsg, setErrorMsg] = useState('');

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
        <p className='errorMsg' ref={errorMsgRef}>{errorMsg}</p>
        <div className='formContent' ref={formContentRef}>
          <Input
            name='firstName'
            type='text'
            handleInputChange={handleInputChange}
            inputValue={inputs.firstName}
            placeholder='John'
            setErrorMsg={setErrorMsg}
            formContentRef={formContentRef}
            errorMsgRef={errorMsgRef}
          />

          <Input
            name='lastName'
            type='text'
            handleInputChange={handleInputChange}
            inputValue={inputs.lastName}
            placeholder='Doe'
            setErrorMsg={setErrorMsg}
            formContentRef={formContentRef}
            errorMsgRef={errorMsgRef}
          />

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
    </ContentWrapper>
  )
}

export default Register;
