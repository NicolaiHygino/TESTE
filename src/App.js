import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Item, Button, ButtonWrapper } from './style';

const objectToURLParam = (obj) =>  
  Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

export const getUsers = async (
  page,
  results = 20,
  seed = 'test123'
) => {
  const params = objectToURLParam({
    ...page && { page },
    results,
    seed
  });
  const url= `https://randomuser.me/api/?${params}`;

  return await axios.get(url);
};

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  
  const loadMore = () => {
    getUsers(page).then(({ data: { results, info } }) => {

      setUsers([...users, ...results]);
      setPage(info.page + 1);
    });
  };

  useEffect(() => {
    getUsers().then(({data: {results, info} }) => {
      console.log(results);
      setUsers(results);
      setPage(info.page + 1);
    });
  }, []);

  return (
    <>
    <Grid>
      {users.map(user => (
        <Item key={user.login.uuid}>
          <img src={user.picture.large} alt={user.name.first}/>
          <h2>{user.name.first} {user.name.last}</h2>
        </Item>
      ))}
    </Grid>
    <ButtonWrapper>
      <Button onClick={() => loadMore()}>LOAD MORE</Button>
    </ButtonWrapper>
    </>
  );
}

export default App;
