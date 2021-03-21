import { createGlobalStyle } from "styled-components";

import {
  colorNeutral0,
  colorNeutral1,
  colorNeutral2,
  colorNeutral3,
  colorNeutral4,
  colorNeutral5,
  colorNeutral6,
  colorRed,
} from "./variables";

export const Dark = createGlobalStyle`
  html {
    --color-0: ${colorNeutral0};
    --color-1: ${colorNeutral1};
    --color-2: ${colorNeutral2};
    --color-3: ${colorNeutral3};
    --color-4: ${colorNeutral4};
    --color-5: ${colorNeutral5};
    --color-6: ${colorNeutral6};
    --color-primary: ${colorRed};
  }
`;

export const Light = createGlobalStyle`
  html {
    --color-0: ${colorNeutral6};
    --color-1: ${colorNeutral5};
    --color-2: ${colorNeutral4};
    --color-3: ${colorNeutral3};
    --color-4: ${colorNeutral2};
    --color-5: ${colorNeutral1};
    --color-6: ${colorNeutral0};
    --color-primary: ${colorRed};
  }
`;
