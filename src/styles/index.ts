import { css } from "styled-components";

/**
 * StyledComponents mixin for font-size
 * @name fontSize
 * @description Use this mixin to simplify assigning font-size with line-height
 * @param size
 * @param lineHeight
 */
export const fontSize = (size: string, lineHeight?: string) => {
  return css`
    font-size: ${size};
    line-height: ${lineHeight};
  `;
};
