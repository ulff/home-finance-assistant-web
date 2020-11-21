import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {config} from "../config";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-danger" onClick={() => logout({ returnTo: config.auth0_redirect_uri })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
