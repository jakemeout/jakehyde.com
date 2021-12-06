import React, { MouseEvent } from "react";
import styled from "styled-components";
import { useTheme, Theme } from "../../styles/ThemeProvider/ThemeProvider";

type ClickProps = {
  onClick: () => void;
};

const Switch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <CheckBox
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"   
      />
      <SwitchLabel className="react-switch-label" htmlFor={`react-switch-new`}>
        <SwitchButton className={`react-switch-button`} onClick={toggleTheme} />
      </SwitchLabel>
    </div>
  );
};

const CheckBox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  :checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span<ClickProps>`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export default Switch;
