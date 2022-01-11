import { createGlobalStyle } from "styled-components";
import { colorFg0, colorBg0, fontFamSans } from "./variables";

export const Normalize = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    background-color: ${colorBg0};
    color: ${colorFg0};
    font-family: ${fontFamSans};
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // Add initial custom styles for focused elements:
  :is(a, button, input, textarea, summary) {
    --outline-size: max(2px, 0.08em);
    --outline-style: solid;
    --outline-color: currentColor;
  }

  :is(a, button, input, textarea, summary):focus {
    outline: var(--outline-size) var(--outline-style) var(--outline-color);
    outline-offset: var(--outline-offset, var(--outline-size));
  }

  :is(a, button, input, textarea, summary):focus-visible {
    outline: var(--outline-size) var(--outline-style) var(--outline-color);
    outline-offset: var(--outline-offset, var(--outline-size));
  }

  :is(a, button, input, textarea, summary):focus:not(:focus-visible) {
    outline: none;
  }
`;
