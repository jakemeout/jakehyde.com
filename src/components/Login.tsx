import React from "react";
import styled from "styled-components";
import { signIn, useSession } from "next-auth/react";

const Login: React.FunctionComponent = () => {
  const { data: session } = useSession();

  return (
    <LoginStyle>
      {!session && (
        <GoogleButton onClick={() => signIn("google")}>
          <GoogleLoginImg
            src={`/google-login-button.png`}
            alt="google-login-button"
            width={191}
            height={46}
          />
        </GoogleButton>
      )}
    </LoginStyle>
  );
};

const GoogleLoginImg = styled.img``;
const GoogleButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;
const LoginStyle = styled.div`
  display: flex;
  border: none;
  justify-content: center;
  
`;
export default Login;
