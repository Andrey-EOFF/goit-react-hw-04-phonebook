import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  & > span {
    margin-bottom: 5px;
    font-weight: 700;
  }

  & > input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export { Form, Label, Button };