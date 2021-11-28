import React, { useState } from "react";
import styled, { StyledComponent } from "styled-components";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";

type SwitchProp = {
    toggleSwitch: boolean;
  };

const Switch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);

  const handleSwitch = () => {
    setToggleSwitch(!toggleSwitch);
  };

  

  return (
    <div>
      <CheckBox
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <SwitchLabel className="react-switch-label" htmlFor={`react-switch-new`}>
        <SwitchButton
          toggleSwitch={toggleSwitch}
          className={`react-switch-button`}
          onClick={handleSwitch}
        />
      </SwitchLabel>
    </div>
  );
};

const CheckBox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
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

const SwitchButton = styled.span(
  (toggleSwitch: SwitchProp) => `
  ${console.log(toggleSwitch)}
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
  ${!toggleSwitch ? 'left: calc(100% - 2px);' : 'right: calc(100% - 2px);'}
  ${!toggleSwitch ? 'transform: translateX(-100%);' : null}
`
);

export default Switch;
