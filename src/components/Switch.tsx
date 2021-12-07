import React, { MouseEvent } from "react";
import styled from "styled-components";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";

type ClickProps = {
  onClick: () => void;
};

const Switch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <SwitchContainer>
      <CheckBox
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <SwitchLabel
        onClick={toggleTheme}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <SwitchButton className={`react-switch-button`}>
          <span>{theme.toggleMode.emoji}</span>
        </SwitchButton>
      </SwitchLabel>
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: flex-end;
`;

const CheckBox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  :checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const SwitchLabel = styled.label<ClickProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 55px;
  height: 30px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export default Switch;
