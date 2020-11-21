import React from 'react';
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import {RouteComponentProps} from "react-router";

export const TestAuthPage = (props: RouteComponentProps) => {
  console.log('search', props.location.search);
  return <>
    <div>Auth0 tests page</div>
    <LoginButton />
    <LogoutButton/>
    <div>
      <Profile />
    </div>
    </>
};
