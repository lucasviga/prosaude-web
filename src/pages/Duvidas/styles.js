import styled from 'styled-components';

export const SectionIntro = styled.section`
  background-image: linear-gradient(to right bottom, rgba(37, 140, 198, 1), rgba(15, 82, 120, 1));
  background-size: cover;
  background-position: top;
  height: 90%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 56.25em) {
    padding: 2rem;
  }

  .sectionFooter-text {
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      font-size: 4rem;
      font-weight: 600;

      @media (max-width: 56.25em) {
        font-size: 3rem;
      }
    }

    span {
      font-size: 2.6rem;
      font-weight: 400;

      @media (max-width: 56.25em) {
        font-size: 2rem;
      }
    }
  }
`;

export const SectionAtendimento = styled.section`
  background-image: linear-gradient(#258CC6, #276F98);
  color: #fff;
  padding: 5rem;
  margin: 10rem;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  @media (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
    border-radius: 0;
  }

  .box-button {
    > a:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 56.25em) {
    div {
      margin-bottom: 3rem;
    }
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
  }
`;

export const SectionDuvidas = styled.section`
  background: #ffffff;
  padding: 10rem;

  @media (max-width: 56.25em) {
    padding: 4rem;
  }

  @media (max-width: 37.5em) {
    padding: 2rem;
  }

  .Collapsible {
    background: #EFEFEF;
    padding: 2rem;
    border-radius: 8px;
  }

  .Collapsible:not(:last-child) {
    margin-bottom: 2rem;
  }

  .Collapsible__trigger {
    font-weight: 600;
    font-size: 2rem;
    color: #616161;

    @media (max-width: 37.5em) {
      font-size: 1.5rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .Collapsible__contentInner p {
    font-size: 1.6rem;
    color: #616161;
    margin-top: 1.5rem;
    line-height: 2.6rem;
  }
`;
