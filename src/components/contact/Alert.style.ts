import styled from "../../styles/styled-components";

export const SAlert = styled.div<{ show: boolean; isError: boolean }>`
  font-size: 1rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isError }) => (isError ? "red" : "green")};
  color: ${({ theme }) => theme.colors.textWhite};
  box-shadow: ${({ theme }) => theme.shadows.default};
  padding: 0.6em 1em;
  transition: ${({ theme }) => theme.transitionTimes.default};
  opacity: ${({ show }) => (show ? 1 : 0)};
  cursor: ${({ show }) => (show ? "pointer" : "default")};
  left: 0;
  right: 0;
  transform: translate(0);
  bottom: ${({ show }) => (show ? "0" : "-10%")};
  z-index: 3;

  @media (min-width: 768px) {
    left: 50%;
    right: auto;
    transform: translate(-50%);
    bottom: ${({ show }) => (show ? "10px" : "-10%")};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const SText = styled.div`
  font-weight: 500;
`;
