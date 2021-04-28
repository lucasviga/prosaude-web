import styled from 'styled-components';

export const Container = styled.footer`
  background: #fff;
  padding: 3rem 0;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 56.25em) {
    padding: 5rem;
  }

  img {
    width: 14rem;
  }

  div .divisor {
    border: 1px solid red;
    height:2px;
  }

  .direitos_footer {
    font-size: 1.2rem;
    color: #616161;
  }

  .menu_footer {
    margin: 1.5rem 0;

    a {
      font-size: 1.4rem;
      color: #616161;

      &:hover {
        color: #258cc6;
      }
    }

    a:not(:last-child) {
      margin-right: 1.2rem;
    }

  }
`;

export const SectionInfo = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;

  @media (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    color: #616161;
    font-size: 1.2rem;
  }

  div {
    p {
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 1.8rem;

      > span {
        color: #258CC6;
        font-weight: 500;
        font-size: 1.8rem;
      }
    }
  }

  .cards_icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .card_icon {
    border-radius: 50%;
    background-color: #258CC6;
    padding: 0.7rem;
    transition: all .5s;

    &:hover {
      background-color: #276F98;
      cursor: pointer;
    }
  }

  .card_icon:not(:last-child){
    margin-right: 1rem;
  }
`;
