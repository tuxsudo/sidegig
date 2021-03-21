import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Row } from "../row";
import { DarkModeSwitch } from "../dark-mode-switch";
import { color3, colorPrimary, fontSize12 } from "../style/variables";

const MenuLink = styled.a<{ active?: boolean }>`
  color: ${(props) => (props.active ? colorPrimary : color3)};
  font-size: ${fontSize12};
  text-decoration: none;
`;

export const Menu = styled((props) => {
  const router = useRouter();
  return (
    <Row {...props} as="nav">
      <Link href="/" passHref>
        <MenuLink active={router.pathname === "/"}>home</MenuLink>
      </Link>
      <Link href="/counter" passHref>
        <MenuLink active={router.pathname === "/counter"}>counter</MenuLink>
      </Link>
      <DarkModeSwitch />
    </Row>
  );
})``;
