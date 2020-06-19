import styled, { keyframes } from "../../styles/styled-components";

export const SHeader = styled.header`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

const authorEntryAnimation = keyframes`
  0%, 8% {
    opacity: 0;
    transform: translateY(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const SAuthor = styled.h1`
  letter-spacing: 0.15rem;
  font-size: 4.4rem;
  animation-name: ${authorEntryAnimation};
  animation-duration: 2000ms;
  animation-timing-function: ease;
`;

const roleEntryAnimation = keyframes`
  0%, 23%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const SRole = styled.h4`
  color: #6a6b8e;
  font-size: 1.5rem;
  animation-name: ${roleEntryAnimation};
  animation-duration: 2000ms;
  animation-timing-function: ease;
`;

const mediaEntryAnimation = keyframes`
  0%, 33%{
    opacity: 0;
    transform: scale(0.6);
  }

  100%{
    opacity: 1;
    transform: scale(1);
  }
`;

export const SMedia = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  animation-name: ${mediaEntryAnimation};
  animation-duration: 2000ms;
  animation-timing-function: ease;
`;
