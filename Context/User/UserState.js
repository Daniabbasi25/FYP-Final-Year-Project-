import React from 'react';

import UserContext from './UserContext';
const UserState = props => {
  const state = {
    userid: 1,
  };
  render();
  {
    return (
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    );
  }
};
export default UserState;
