import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
      flex-flow: column;
      width: 100%;
    }

    nav {
      @media screen and (max-width: 768px){
        margin-top: 16px;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        position: relative;

        &:after {
          content: '';
          width: 100%;
          height: 2px;
          background-color: #ff872c;
          position: absolute;
          bottom: -10px;
          left: 0;
          transition: opacity 0.2s;
          opacity: 0;
          pointer-events: none;
        }

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;

          &:after {
            opacity: 1;
          }
        }
      }
    }
  }
`;
