import React from "react";
import { useTheme } from "../../styles/ThemeProvider/ThemeProvider";
import styled from "styled-components";

type DescriptionProps = {
  children: React.ReactNode;
};

const Description: React.FunctionComponent<DescriptionProps> = ({
  children,
}) => {
  const { theme } = useTheme();
  return <DescriptionText theme={theme}>{children}</DescriptionText>;
};

const DescriptionText = styled.p(
  ({ theme }) => `
  color: ${theme.text.primary};
  padding: 5% 20%; 
  font-weight: 200;
  font-size: 16px;
`
);

export default Description;
