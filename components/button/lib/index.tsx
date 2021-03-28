import styled from "styled-components";
import { spacing8, spacing32 } from "../../style/variables";

// base button for others to extend
export const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  min-height: ${spacing32};
  padding-left: ${spacing8};
  padding-right: ${spacing8};
  place-content: center;
  place-items: center;

  &:hover {
    filter: brightness(1.25);
  }

  &:active {
    filter: brightness(0.75);
  }
`;
