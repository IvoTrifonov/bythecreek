import styled from 'styled-components';

const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  max-width: 23em;
  padding: 1.5em 1em;
  background: #e9e9e9;
  box-shadow: 1px 1px 2px 2px rgb(51,95,108, 0.1);
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 1px 1px 3px 4px rgb(51,95,108, 0.3);
  }
  
  & .formContent {
    transition: filter 0.2s ease-in;
    
    &.blur {
      filter: blur(15px);
    }
  }

  & .formInputBox {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    margin: 1em auto;

    & span {
      font-size: 1.5em;
      color: #2f4a56;
      position: absolute;
      right: 0.5rem;;
      top: 1.15em;
      cursor: pointer;
    }
  }

  &, & input, button[type=submit] {
    border-radius: 0.3em;
  }

  & label {
    font-size: 1.2rem;
    color: #2f4a56;
    font-weight: bold;
    text-align: center;
  }

  & input {
    border: 0.1em solid #00897c;
    outline: none;
    padding: 5px;
    height: 1.4rem;
    text-align: center;
  }

  & button[type=submit] {
    font-size: 1.1rem;
    display: block;
    cursor: pointer;
    width: 8rem;
    padding: 0.3em 0;
    margin: 2rem auto;
    background: #2f4a56;
    outline: none;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.3s ease-in, transform 0.2s ease-in;

    &:hover {
      background-color: #00897c;
      transform: scale(1.04);
    }
  }

  & .signMsg {
    border-top: 0.5px solid gray;
    max-width: 20rem;
    padding: 0.5em;
    margin: 2em auto 0 auto;
    font-size: 1.1em;
    font-style: italic;
    text-align: center;

    & a {
      margin-left: 0.5em;
      color: inherit;
      font-weight: bold;
    }
  }

  & .errorMsg {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0 ease-in, opacity 0 ease-in;
    transition-delay: 0.18s;
    color: #203b44;
    font-size: 2em;
    position: absolute;
    top: 20%;
    text-align: center;

    &.delay {
      visibility: visible;
      opacity: 1;
    }
  }
}
`;

export default StyledForm;