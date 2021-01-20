import styled from 'styled-components';

export const ContentTextSlide = styled.div`
  position: absolute;
  top: 35%;
  margin-left: 5rem;
  text-align: left;
  color: #fff;
  width: 50%;

  h1 {
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 3.5rem;
    font-weight: 300;
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

  h1 {
    color: #258CC6;
    font-size: 3rem;
    margin-bottom: 5rem;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .card {
    flex: 25%;
  }

  .card-content {
    background: #fff;
    border-radius: 8px;
    width: 280px;
    padding: 4rem;
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
    }

    &:hover {
      cursor: pointer;
      box-shadow: 1px 5px 8px 0px rgba(0,0,0,0.2);
      transform: translateY(-5px);
    }
  }
`;
