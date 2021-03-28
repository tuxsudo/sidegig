import styled from "styled-components";
import { colorPrimary } from "../../style/variables";

import { Button } from "../lib";

export const PrimaryButton = styled(Button)`
  background-color: ${colorPrimary};
  color: white;
  outline-color: ${colorPrimary};
`;
