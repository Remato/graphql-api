import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
`;

export const DriverList = styled.ul`
  list-style-type: none; 

  background-color: #8888;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  max-width: 600px;
`;

export const RidesList = styled.ul`
  list-style-type: none; 
  margin-left: 20px;
  color: #ff9900;

  li:hover{
    transform: translateX(10px)
  }
`;

export const Form = styled.form`
  margin-top: 10px;
  
  display: flex;

  input{
    height: 30px;
    width: 130px;
    padding: 10px;
    border: 6;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    width: 150px;
    height: 30px;
    background: #ff9900;
    border-radius: 5px;
    border: 0;
    color: #fff;
  }
`;