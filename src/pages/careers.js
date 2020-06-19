import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Careers = ({ data }) => (
  <Layout>
    <Head pageTitle={data.careerJson.title} />
    <Box> <div style={{fontSize: "3.3rem", marginBottom: "2rem"}}> Careers </div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.careerJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Careers.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Careers;

export const query = graphql`
  query CareerQuery {
    careerJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
