import { css } from "styled-components";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 375px) {
      ${props}
    }
  `;
}

export { mobile };