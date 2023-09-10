import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled.form`
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 5px 10px 10px rgba(rgba(2, 128, 144, 1), 0.2);
`;

export const Input = styled.input`
  display: block;
  border-radius: 5px;
  font-size: 16px;
  background: white;
  width: 400px;
  border: 0;
  padding: 10px 10px;
  margin: 15px -10px;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  /* text-transform: uppercase; */
  width: 130px;
  border: 0;
  padding: 10px 0;
  margin-top: 10px;
  margin-left: -5px;
  border-radius: 5px;
  background-color: #3f51b5;
  transition: background-color 300ms;
  display: flex;
  justify-content: space-around;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
