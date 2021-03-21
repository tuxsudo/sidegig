import styled from "styled-components";
import { Platform } from "../components/layout/platform";
import { Logo } from "../components/logo";

const Hero = styled.main`
  align-items: center;
  display: grid;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

export default function HomePage() {
  return (
    <Platform>
      <Hero>
        <Logo />
      </Hero>
    </Platform>
  );
}
