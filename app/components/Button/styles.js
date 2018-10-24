import styled, { css } from 'styled-components';

const buttonStyles = css`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
  text-decoration: none;
  border-radius: 3px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 16px;
  border: 1px solid #5324b3;
  color: #5324b3;
  transition: all 0.3s;

  &:hover {
    background: #838281;
    color: #fff;
    border-color: #838281;
  }

  &:active {
    background: #5324b3;
    color: #fff;
    border-color: #5324b3;
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles};
`;

export const A = styled.a`
  ${buttonStyles};
`;
