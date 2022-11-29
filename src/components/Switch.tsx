import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";

const Switch: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <SwitchContainer>
      <Toggle onClick={toggleTheme}>
        {theme.label === "light" ? (
          <DarkSun
            src={`/sun-dark.png`}
            alt="dark-sun"
            width={22}
            height={22}
          />
        ) : (
          <LightMoon
            src={`/moon-light.png`}
            alt="light-moon"
            width={22}
            height={22}
          />
        )}
      </Toggle>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div``;
const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const DarkSun = styled.img``;
const LightMoon = styled.img``;

export default Switch;
