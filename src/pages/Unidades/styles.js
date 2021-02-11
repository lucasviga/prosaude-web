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

  .sectionFooter-text {
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      font-size: 4rem;
      font-weight: 500;

      @media (max-width: 37.5em) {
        font-size: 3rem;
      }
    }

    span {
      font-size: 5rem;
      font-weight: bold;

      @media (max-width: 37.5em) {
        font-size: 4rem;
      }
    }
  }
`;

export const SectionUnidade = styled.section`
  width: 100%;
  background-color: #f5f5f5;
  padding: 10rem;

  @media (max-width: 56.25em) {
    padding: 4rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;

    @media (max-width: 56.25em) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: auto;
      grid-gap: 1rem;
    }
  }

 .card {
    background-color: #ffffff;
    /* border: 2px solid #e7e7e7; */
    border-radius: 8px;
    padding: 3rem;
    transition: all .6s ease;
    width: 350px;
    color: #616161;

    @media (max-width: 56.25em) {
      width: 290px;
    }

    h1 {
      color: #258CC6;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p, span {
      font-size: 1.5rem;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 1px 5px 8px 0px rgba(0,0,0,0.2);
      transform: translateY(-5px);
    }

    &__link-mapa {
      margin-top: 1.5rem;

      a {
        color: #258CC6;
        font-size: 1.5rem;

        &:hover {
          color: #276F98;
        }
      }
    }
  }
`;
