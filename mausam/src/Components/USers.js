/* eslint-disable no-undef */
import { useState, useEffect, React } from "react";

const USers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    let isMounted = true;
    let controller = new AbortController();

    const getUsers = async () => {
      try{
        const response = await axios.get('/users',{
          signal: controller.signal
        });
        console.log(response.data)
        isMounted && setUsers(response.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getUsers();

    return() => {
      isMounted =false;
      controller.abort();
    }
  },[])
  return (
    <article>
      <h2>USers List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No user to display</p>
      )}
    </article>
  );
};

export default USers;
