import styled from 'styled-components';

export const Container = styled.div`
  .menu {
    height: 7rem;
    background: hsla(0,0%,100%,1);
    box-shadow: 0 2px 10px rgb(0 0 0 / 12%);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);

    &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin: 0 2.5rem;
    }
  }

  .box__first {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .box__links a {
    color: #616161;
    font-size: 1.8rem;
    font-weight: 500;
    transition: all .3s;

    &:hover {
      color: #276F98;
    }

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .box__links svg {
    margin-right: 0.4rem;
  }


  .box__first img {
    width: 14rem;
    margin-right: 2rem;
  }

  .fixed {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
  }

  .nav__menu ul {
    display: flex;

    & li:not(:last-child) {
      margin-right: 1.5rem;
    }

    & a {
      color: #616161;
      font-size: 1.8rem;

      &:hover {
        color: #276F98;
      }
    }
  }
`;

export const Dropdown = styled.ul`
  display: none !important;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 1.5rem;
  position: absolute;
  margin-top: 8.5rem;
  color: #999;
  transition: ease-in 3s;

  & a {
    margin-left: 1rem;
  }

  & li {
    padding: 1rem;
    color: #666;
    font-size: 1.2rem;
    font-weight: 400;
    transition: all 0.5s cubic-bezier(0.42, 0, 0.35, 0.78);

    &:hover {
      background-color: rgba(242, 100, 37, 0.1);
      border-radius: 0.5rem;
      cursor: pointer;
      color: #f26425;
    }
  }
`;
