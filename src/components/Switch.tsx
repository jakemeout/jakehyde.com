import React from "react";
import styled, { useTheme } from "styled-components";
import { IToggle } from "../../types/AppTypes";

const Switch: React.FunctionComponent<IToggle> = ({ toggleTheme }) => {
  const theme = useTheme();
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
const Toggle = styled.div.attrs((props: { onClick: () => void; children: React.ReactNode }) => ({
  onClick: props.onClick,
  children: props.children,
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;
const DarkSun = styled.img.attrs((props: { src: string; alt: string; width?: number; height?: number }) => ({
  src: props.src,
  alt: props.alt,
  width: props.width,
  height: props.height,
}))``;

const LightMoon = styled.img.attrs((props: { src: string; alt: string; width?: number; height?: number }) => ({
  src: props.src,
  alt: props.alt,
  width: props.width,
  height: props.height,
}))``;

export default Switch;
