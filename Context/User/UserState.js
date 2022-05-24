import React from 'react';
// import render
import UserContext from './UserContext';
const UserState = props => {
  const state = {
    userid: null,
  };
  render();
  {
    return (
      <UserContext.Provider value={state}>
        {props.children}
      </UserContext.Provider>
    );
  }
};
export default UserState;
