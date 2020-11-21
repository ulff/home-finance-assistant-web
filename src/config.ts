export const config = {
  auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  auth0_client_id: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
  auth0_redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI || "http://localhost:3000"
};
