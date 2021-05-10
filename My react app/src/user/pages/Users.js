import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Aman Raj',
      image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWpAC5NUOAxcEKtchB8EsKs4olVNifw07mQ&usqp=CAU',
      places: 9
    }

    
  ];
 
  return <UsersList items={USERS} />;
};

export default Users;
