import React, { useState } from 'react'

const useLoginForm = (callback) => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (event): void => {
    if (event) { event.preventDefault(); }
    callback();
  };

  const handleInputChange = (event): void => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default useLoginForm;
