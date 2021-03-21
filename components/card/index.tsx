import styled from "styled-components";
import { color5, spacing16 } from "../style/variables";

export const Skeleton = styled.div`
  background-color: ${color5};
  border: 1px solid ${color5};
  border-radius: 3px;
`;

export const Card = styled(Skeleton)`
  padding: ${spacing16};
`;
