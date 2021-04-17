import React, {useEffect, useState} from 'react';

function Users() {
  const [data, setData] = useState({users: []});
  useEffect(() => {
    async function fetchData() {
      const result = await fetch("/api/users/");
      const users = await result.json();
      setData({users: users})
    }

    fetchData();
  }, [])

  return (
    <ul>
      {data.users.map(item => (
        <li key={item.id}>
          {item.first_name}
        </li>
      ))}
    </ul>
  )
}

export default Users;
