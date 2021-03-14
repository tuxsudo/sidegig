import Image from "next/image";
import styled from "styled-components";

const Figure = styled.figure`
  height: auto;
  max-width: 12.5rem;
`;

export function Logo(props: any) {
  return (
    <Figure {...props}>
      <Image
        {...props}
        alt="Tuxsudo logo"
        src="/images/tuxsudo-logo.png"
        width={606}
        height={101}
      />
    </Figure>
  );
}
