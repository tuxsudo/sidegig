import styled from "styled-components";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Link } from "../typography/link";
import { Row } from "../row";
import { DarkModeSwitch } from "../dark-mode-switch";
import { spacing16 } from "../style/variables";

export const Menu = styled((props) => {
  const router = useRouter();
  return (
    <Row {...props} as="nav" gapSize={spacing16} align="end">
      <NextLink href="/" passHref>
        <Link active={router.pathname === "/"}>home</Link>
      </NextLink>
      <NextLink href="/counter" passHref>
        <Link active={router.pathname === "/counter"}>counter</Link>
      </NextLink>
      <DarkModeSwitch />
    </Row>
  );
})``;
