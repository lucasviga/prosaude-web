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
    }

    span {
      font-size: 5rem;
      font-weight: bold;
    }
  }
`;

export const Container = styled.div`
  background: #f8f9fe;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Exame = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 10rem;
  margin-top: -7rem;
  border-radius: 1rem;
  box-shadow: 1px 5px 8px 0px rgba(0,0,0,0.2);

  @media screen and (max-width: 900px) {
    margin: 3rem;
  }
`;

export const HeaderTitle = styled.div`
  width: 100%;
  padding: 3rem;

  @media (max-width: 56.25em) {
    padding: 2rem;
  }

  h3 {
    font-size: 2rem;
    color: #258CC6;
  }
`;


export const Wrapper = styled.div`
  width: 100%;
`;

export const TableListExame = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;

  @media screen and (max-width: 900px) {
    padding: 1rem;

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1;
      margin: --1px;
      overflow: hidden;
      padding: 0;
      width: 1px;
    }

    tr {
      display: block;
      padding: 2rem;
    }

    tr:not(:last-child) {
      border-bottom: 1px solid #f6f9fc;
    }

    td {
      display: block;
      font-size: 1rem;
    }

    td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }

  thead {
    background: #f6f9fc;

    th {
      padding: 1rem 3rem;
      color: #616161;
      font-size: 1.5rem;

      @media (max-width: 56.25em) {
        padding: 0;
      }
    }
  }

  tbody {
    color: #616161;
    font-size: 1.5rem;

    tr:not(:last-child) {
      border-bottom: 1px solid #f6f9fc;
    }

    tr > td > button.btn-show-price {
      border: 0;
      outline: 0;
      background-color: #258CC6;
      border-radius: .5rem;
      width: 10rem;
      height: 3rem;
      color: #ffffff;

      @media (max-width: 56.25em) {
        margin: 1rem 0;
      }
    }

    @media (max-width: 56.25em) {
      tr, td {
        font-size: 1.5rem;
        margin-bottom: 0.6rem;
      }
    }

    th {
      padding: 2rem 3rem;

      @media (max-width: 56.25em) {
        padding: 0;
      }
    }
  }
`;

export const SectionUnidade = styled.section`
  background-color: #f5f5f5;
  padding: 10rem;

  @media (max-width: 56.25em) {
    padding: 4rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 3rem;
    margin-top: -15rem;

    @media (max-width: 56.25em) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: auto;
      grid-gap: 3rem;
      margin-top: unset;
    }
  }

 .card {
    background-color: #ffffff;
    /* border: 2px solid #e7e7e7; */
    border-radius: 8px;
    padding: 3rem;
    transition: all .6s ease;
    width: 290px;
    color: #616161;

    @media (max-width: 56.25em) {
      width: 100%;
    }

    h1 {
      color: #258CC6;
      font-size: 2rem;
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
