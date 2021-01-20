import styled from 'styled-components';

export const Container = styled.a`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border-radius: 4px;
  transition: all .5s;

  span {
    color: ${(props) => props.textColor};
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  &:hover {
    opacity: 0.75;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    cursor: pointer;
  }
`;
