import React from "react";
import styled from "styled-components";
import { signIn, useSession } from "next-auth/react";

const Login: React.FunctionComponent = () => {
  const { data: session } = useSession();

  const handleGoogleSignin = async () => {
    await signIn("google", {
      callbackUrl: "http://localhost:3000/",
    });
  };
  return (
    <LoginStyle>
      {!session && (
        <GoogleButton onClick={handleGoogleSignin}>
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
