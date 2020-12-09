import styled from 'styled-components';

const SignTitle = styled.p`
color: #000;
display: flex;
justify-content: center;
font-style: normal;
font-weight: 500;
font-size: 46px;
line-height: 54px;
letter-spacing: 0.0075em;
@media (max-width: 600px) {
  font-weight: 500;
  font-size: 46px;
  line-height: 54px;
}
`;

const InputStyleComponent = styled.input`
  width: 90%;
  height: 43px;
  font-family: 'Roboto', sans-serif;
  color: #000;
  font-size: 40px;
  background: none;
  outline: none;
  border: none;
  margin: 6px;
  padding: 0 0 0 10px;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const SignButton = styled.button`
  width: 273px;
  height: 73px;
  border: 0;
  padding: 0;
  background-color: #828282;
  margin: 6px;
  align-items: center;
  border-radius: 63px;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  @media (max-width: 600px) {
    font-size: 24px;
    width: 195px;
    height: 47px
  }
`;

export {
  SignTitle, InputStyleComponent, SignButton,
};
