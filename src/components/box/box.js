import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';


const Box = ({ children, size }) => {
  return (
    <Container size={size}>
      {children}
    </Container>
  );
};

Box.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['half']),
};

export default Box;
