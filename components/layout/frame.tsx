import styled from "styled-components";
import { breakWidth1024, spacing16 } from "../style/variables";

export const Frame = styled.div`
  padding: ${spacing16};

  @media (min-width: ${breakWidth1024}) {
    margin: 0 auto;
    max-width: ${breakWidth1024};
  }
`;
