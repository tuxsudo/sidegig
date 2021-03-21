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
    --color-primary: ${colorRed};
    
    --color-bg-0: ${colorNeutral6};
    --color-bg-1: ${colorNeutral5};
    --color-bg-2: ${colorNeutral4};

    --color-fg-0: ${colorNeutral0};
    --color-fg-1: ${colorNeutral1};
    --color-fg-2: ${colorNeutral2};

    --color-neutral: ${colorNeutral3};
  }
`;

export const Light = createGlobalStyle`
  html {
    --color-primary: ${colorRed};
    
    --color-bg-0: ${colorNeutral2};
    --color-bg-1: ${colorNeutral0};
    --color-bg-2: ${colorNeutral1};

    --color-fg-0: ${colorNeutral4};
    --color-fg-1: ${colorNeutral5};
    --color-fg-2: ${colorNeutral6};

    --color-neutral: ${colorNeutral3};
  }
`;
