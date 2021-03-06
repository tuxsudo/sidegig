import { Light as LightMode } from "../../style/theme";
import { spacing24 } from "../../style/variables";

import { ArrowLeftIcon } from "../arrow-left";
import { ArrowRightIcon } from "../arrow-right";
import { MenuIcon } from "../menu";
import { MinusIcon } from "../minus";
import { PlusIcon } from "../plus";

import { Row } from "../../row";

export interface Props extends Record<string, any> {
  theme: "light" | "dark";
  size: string;
  color: string;
}

export function Demo({
  theme = "dark",
  size = spacing24,
  color = "currentColor",
  ...props
}: Props) {
  return (
    <>
      {theme === "light" && <LightMode />}
      <Row {...props} align="start">
        <ArrowLeftIcon size={size} color={color} />
        <ArrowRightIcon size={size} color={color} />
        <MenuIcon size={size} color={color} />
        <MinusIcon size={size} color={color} />
        <PlusIcon size={size} color={color} />
      </Row>
    </>
  );
}
