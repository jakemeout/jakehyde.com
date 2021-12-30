import React, { useEffect, useRef } from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";
import Typed from "typed.js";

type HeaderProps = {
  children: React.ReactNode;
};

const Heading: React.FunctionComponent<HeaderProps> = ({ children }) => {
  const el: any = useRef(null);
  // Create reference to store the Typed instance itself
  const typed: any = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi I'm Jake",
        "I'm a Developer",
        "Take a look at my GitHub",
        "Or connect with me on Linkedin",
        "Or checkout my resume",
        "Or checkout my projects",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  const { theme } = useTheme();
  return (
    <HeaderText theme={theme}>
      <div className="type-wrap">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </div>
      {children}
    </HeaderText>
  );
};

const HeaderText = styled.h2(
  ({ theme }) => `
  color: ${theme.text.primary};
  padding: 10% 0% 1% 20%;
  font-weight: 300;
`
);

export default Heading;
