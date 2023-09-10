import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled.form`
  overflow: hidden;
  background-color: #c8c5df;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 10px rgba(rgba(2, 128, 144, 1), 0.2);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }

  &::before {
    left: 40%;
    bottom: -130%;
    background-color: rgba(rgba(69, 105, 144, 1), 0.15);
    animation: 1s ease-in 6s infinite linear;
  }

  &::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba(rgba(2, 128, 144, 1), 0.2);
    animation: 1s ease-in 7s infinite;
  }
`;
export const Input = styled.input`
  display: block;
  border-radius: 5px;
  font-size: 16px;
  background: white;
  width: 100%;
  border: 0;
  padding: 10px 10px;
  margin: 15px -10px;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  /* text-transform: uppercase; */
  width: 80px;
  border: 0;
  padding: 10px 0;
  margin-top: 10px;
  margin-left: -5px;
  border-radius: 5px;
  background-color: #3f51b5;
  transition: background-color 300ms;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
export const Text = styled.h1`
  font-family: inherit;
  font-size: 40px;
  line-height: 24px;
  font-style: normal;
  font-weight: 700;
  color: #444444;
`;

export const TextSmall = styled.h2`
  font-family: inherit;
  font-size: 28px;
  line-height: 24px;
  font-style: normal;
  font-weight: 700;
  color: #444444;
`;
