import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 6rem;
  max-width: ${({ size }) => () => {
    switch (size) {
      case 'half':
        return '800px';
      default:
        return "100%";
    }
  }};
  h3 {
    font-size: 2rem;
    margin-bottom: 6rem;
  }
  
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;
