import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.footer`
  border-top: 1px solid #e8e8e8;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 6rem;
  margin: 2rem 0;

  strong {
    font-weight: 500;
  }

  ${MEDIA.TABLET`
    display: block;
  `};
`;