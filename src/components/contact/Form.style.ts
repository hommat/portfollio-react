import styled, { css, keyframes } from "../../styles/styled-components";

const hoverTranslation = "-2px";
const buttonLoaderSize = "20px";

export const SForm = styled.form`
  padding: ${({ theme }) => theme.boxPadding};
  max-width: 400px;
  text-align: left;
  margin: auto;
  margin-top: 30px;
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

const inputAndTextAreaStyles = css`
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.85em;
  outline: none;
  padding: 10px;
  font-family: Roboto, sans-serif;
  border: 1px solid black;
  background: white;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 4px;
  transition: ${({ theme }) => theme.transitionTimes.default};

  &:focus {
    transform: translateY(${hoverTranslation});
  }
`;

export const SInput = styled.input`
  ${inputAndTextAreaStyles}
`;

export const STextarea = styled.textarea`
  ${inputAndTextAreaStyles}
  resize: none;
  height: 200px;
`;

export const SLabel = styled.label`
  font-size: 0.95em;
  margin-left: 2px;
`;

const buttonLoadingAnimation = keyframes`
  0%{
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100%{
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const SButton = styled.button`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.white};
  background: none;
  border-radius: $border-radius;
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitionTimes.default};
  position: relative;

  &:hover,
  &:focus {
    transform: translateY(${hoverTranslation});
  }

  &:disabled {
    color: transparent;
    &::after {
      content: "";
      background-color: transparent;
      border: 3px solid rgba(255, 255, 255, 0.4);
      border-top: 3px solid ${({ theme }) => theme.colors.white};
      border-bottom: 3px solid ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      display: block;
      left: 50%;
      top: 50%;
      position: absolute;
      width: ${buttonLoaderSize};
      height: ${buttonLoaderSize};
      animation-name: ${buttonLoadingAnimation};
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
    }

    &:hover,
    &:focus {
      transform: none;
    }
  }
`;
