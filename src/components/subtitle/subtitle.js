import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from './subtitle.css';


const subtitle = ({ children, as = 'span', size }) => {
  return (
    
      <Text as={as} size={size}>
        <Container>
        {children}
        </Container>
      </Text>
  );
};

subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};


export default subtitle;
