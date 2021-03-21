import styled from "styled-components";
import { colorBg1, spacing16 } from "../style/variables";

export const Skeleton = styled.div`
  background-color: ${colorBg1};
  border: 1px solid ${colorBg1};
  border-radius: 3px;
`;

export const Card = styled(Skeleton)`
  padding: ${spacing16};
`;
