import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 50px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Item = styled.div`
  text-align: center;
  border: 1px solid #EEEEEE;
  background-color: #F9F9F9;
  border-radius: 5px;
  padding: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #474747;
  border-radius: 5px;
  border: 0;
  color: white;
  padding: 1em;
  font-weight: 600;
  cursor: pointer;
`;