import { useState } from 'react'

const useLoginForm = (props, callback) => {
  const [inputs, setInputs] = useState({ ...props });

  const handleSubmit = (event: Event): void => {
    if (event) { event.preventDefault(); }
    callback(inputs);
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
