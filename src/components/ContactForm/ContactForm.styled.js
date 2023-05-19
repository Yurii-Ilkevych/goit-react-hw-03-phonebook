import styled from '@emotion/styled';

const Form = styled.form`
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 15px;
  background-color: rgb(247, 237, 224);
`;

const Name = styled.input`
  background-color: rgb(224, 251, 250);
  margin-left: auto;
  display: block;
  margin-top: 10px;
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
`;
const Number = styled.input`
  background-color: rgb(224, 251, 250);
  margin-left: auto;
  display: block;
  margin-top: 10px;
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
`;
const Submit = styled.button`
  background-color: rgb(224, 251, 250);
  margin-bottom: 8px;
  border: 1px solid rgb(74, 72, 71);
  border-radius: 4px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: rgb(69, 201, 219);
  }
  &:active {
    background-color: rgb(224, 251, 250);
    box-shadow: none;
    transform: translateY(1px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  text-align: start;
  padding: 8px;
`;
export { Form, Name, Number, Submit, Wrapper };
