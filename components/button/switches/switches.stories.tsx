import { useState } from "react";
import { Switches, Button } from ".";

import { Light as LightMode } from "../../style/theme";

export default {
  title: "Switches",
  // component: ToggleSwitch,
  // argTypes: { onClick: { action: "clicked" } },
};

export function Demo() {
  const [selected, setSelected] = useState<"one" | "two" | "three">("two");
  return (
    <Switches>
      <Button active={selected === "one"} onClick={() => setSelected("one")}>
        one
      </Button>
      <Button active={selected === "two"} onClick={() => setSelected("two")}>
        two
      </Button>
      <Button
        active={selected === "three"}
        onClick={() => setSelected("three")}
      >
        three
      </Button>
    </Switches>
  );
}

export function DemoLightMode() {
  const [selected, setSelected] = useState<"one" | "two" | "three">("two");
  return (
    <>
      <LightMode />
      <Switches>
        <Button active={selected === "one"} onClick={() => setSelected("one")}>
          one
        </Button>
        <Button active={selected === "two"} onClick={() => setSelected("two")}>
          two
        </Button>
        <Button
          active={selected === "three"}
          onClick={() => setSelected("three")}
        >
          three
        </Button>
      </Switches>
    </>
  );
}
