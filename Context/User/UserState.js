import React from 'react';

import UserContext from './UserContext';
const UserState = ({children}) => {
  const [userid, setuserid] = React.useState(0);

  return (
    <UserContext.Provider
      value={{
        userid,
        setuserid,
      }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserState;
