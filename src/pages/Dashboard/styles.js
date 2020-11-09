import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

   aside {
    width: 100%;
    max-width: 280px;

    border-right: solid 1px rgba(255, 255, 255, 0.2);

    justify-content: space-between;
    flex-direction: column;

    padding: 20px 0;

    header {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      img {
        width: 50px;
        height: 50px;
      }

      h1 {
        font-size: 36px;
        font-weight: bold;

        color: #CCC;

        margin-left: 5px;
      }
    }
  }
`;