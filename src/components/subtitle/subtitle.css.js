import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  h1 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.2;
  }
  h6 {
    color: #7b7b7b;
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '500';
      default:
        return '400';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2.2rem';
      default:
        return '1.7rem';
    }
  }};
  line-height: 1.5;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;

export const Container = styled.div`
  display: grid;
  padding: 10rem 0rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
