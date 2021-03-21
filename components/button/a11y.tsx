import styled from "styled-components";

export const A11y = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
`;
