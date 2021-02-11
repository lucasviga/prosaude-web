import styled from 'styled-components';

import bgSectionFooter from '../../assets/img/familia.png';

export const ContentTextSlide = styled.div`
  position: absolute;
  top: 35%;
  margin-left: 5rem;
  text-align: left;
  color: #fff;
  width: 50%;

  @media (max-width: 56.25em) {
    top: 10%;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 3rem;

    @media (max-width: 56.25em) {
      font-size: 2.3rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 37.5em) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 3.5rem;
    font-weight: 300;

    @media (max-width: 56.25em) {
      font-size: 1.8rem;
    }

    @media (max-width: 37.5em) {
      font-size: 1.5rem;
    }
  }
`;

export const SectionAtendimento = styled.section`
  background-image: linear-gradient(#258CC6, #276F98);
  color: #fff;
  padding: 5rem;
  margin: 10rem 5rem;
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

  @media (max-width: 56.25em) {
    div {
      margin-bottom: 3rem;
    }
  }

  .box-button {
    > a:not(:last-child) {
      margin-bottom: 2rem;
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

export const SectionVantagens = styled.section`
  background: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5rem;

  @media (max-width: 56.25em) {
    height: unset;
    padding: 0 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 37.5em) {
    padding: 0 3.5rem;
  }

  h1 {
    color: #258CC6;
    font-size: 3rem;
    margin-bottom: 5rem;

    @media (max-width: 56.25em) {
      font-size: 2.5rem;
      margin: 5rem 0;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 56.25em) {
      width: unset;
    }
  }

  .card {
    flex: 25%;

    @media (max-width: 56.25em) {
      margin-bottom: 2rem;
    }
  }

  .card-content {
    background: #fff;
    border-radius: 8px;
    width: 280px;
    padding: 3rem;
    transition: all .6s ease;

    h1 {
      color: #258CC6;
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 0.6rem;
    }

    p {
      color: #616161;
      font-size: 1.5rem;
      font-weight: 500;
      margin: 1rem 0;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 1px 5px 8px 0px rgba(0,0,0,0.2);
      transform: translateY(-5px);
    }

    &__saiba-mais {
      color: #258CC6;
      font-size: 1.5rem;
      transition: all;

      &:hover {
        border-bottom: 2px solid #258CC6;
      }
    }
  }
`;

export const SectionEspecialidade = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  padding: 0 5rem;

  @media (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    height: 85%;
  }

  .box-img {
    @media (max-width: 56.25em) {
      img {
        width: 100%;
      }
    }
  }

  .box-text {
    width: 50%;
    margin-left: 2rem;

    @media (max-width: 56.25em) {
      width: 100%;
      margin-left: unset;
      padding: 5rem 0;
    }

    h1 {
      color: #258CC6;
      font-size: 4rem;
      margin-bottom: 2rem;

      @media (max-width: 56.25em) {
        font-size: 3rem;
      }
    }

    p {
      color: #616161;
      font-size: 2.5rem;

      @media (max-width: 56.25em) {
        font-size: 2rem;
      }
    }
  }
`;

export const SectionFooter = styled.section`
  background-image: linear-gradient(to right bottom, rgba(37, 140, 198, 0.5), rgba(15, 82, 120, 0.5)), url(${bgSectionFooter});
  background-size: cover;
  background-position: top;
  height: 100vh;
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

      @media (max-width: 56.25em) {
        font-size: 3rem;
        font-weight: 500;
      }

      @media (max-width: 37.5em) {
        font-size: 2.5rem;
      }
    }

    span {
      font-size: 5rem;
      font-weight: bold;

      @media (max-width: 56.25em) {
        font-size: 4rem;
      }

      @media (max-width: 37.5em) {
        font-size: 3rem;
      }
    }
  }

  a > span {
    font-size: 2rem;
  }
`;
