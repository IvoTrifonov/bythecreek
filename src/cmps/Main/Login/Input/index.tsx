import React from 'react';
import { RedIoIosCloseCircle, GreenIoIosCheckmarkCircle } from '../../../../helpers/HOC/validateIconsAuth';

const Input = ({ name, type, handleInputChange, inputValue, placeholder, setErrorMsg, formContentRef, errorMsgRef }) => {

  const getLabelName = (name: string) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);

    if (name.startsWith('First') || name.startsWith('Last')) {
      const index = name.indexOf('t');
      return name.slice(0, index + 1) + ' ' + name.slice(index + 1);
    }

    return name;
  }

  const handleBlur = (propName) => {
    if (!inputValue) {
      formContentRef.current.classList.add('blur');
      errorMsgRef.current.classList.add('delay')
      setErrorMsg(`${getLabelName(propName)} must be a single word between 3 and 12 symbols`);
    }
  }

  const removeBlur = () => {
    formContentRef.current.classList.remove('blur');
    errorMsgRef.current.classList.remove('delay')
    setErrorMsg('');
  }

  return (
    <div className='formInputBox'>
      <label>{getLabelName(name)}</label>
      <input
        type={type}
        name={name}
        onChange={handleInputChange}
        value={inputValue}
        placeholder={placeholder}
      />
      <span onMouseOver={() => handleBlur(name)} onMouseLeave={removeBlur}>
        {inputValue ? <GreenIoIosCheckmarkCircle /> : <RedIoIosCloseCircle />}
      </span>
    </div>
  )
}

export default Input;
