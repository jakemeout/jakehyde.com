import React from "react";
import styled, { useTheme } from "styled-components";
import { IToggle } from "../../types/AppTypes";

type ButtonType = {
  hidden?: boolean;
  disabled?: boolean;
  identifier: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  onClick: (e: any) => void;
};

const Button: React.FunctionComponent<ButtonType> = ({
  hidden,
  disabled,
  identifier,
  buttonText,
  buttonIcon,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <ButtonStyle
      data-id={identifier}
      theme={theme}
      onClick={onClick}
      disabled={disabled}
      hidden={hidden}
    >
      {buttonIcon === "←"
        ? `${buttonIcon} ${buttonText}`
        : `${buttonText} ${buttonIcon}`}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button(
  ({ theme }) => `
  color: ${theme.text.primary};
  width: 125px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  display: ${(props: any) => (props.hidden ? "none" : " flex")};
  align-items:center;
  padding: 1%;
`
);

export default Button;
