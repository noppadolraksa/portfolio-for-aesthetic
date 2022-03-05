import { css } from "styled-components";

export const a4 = (props) => {
  return css`
    @media only screen and (max-width: 1240 px) {
      ${props}
    }
  `;
};
// 1240 x 1754
