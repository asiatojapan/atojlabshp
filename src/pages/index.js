import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Subtitle from 'components/subtitle';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box size="half">
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <div style={{ height: '10vh' }} />
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '10vh' }} />
    <Subtitle>
    <div dangerouslySetInnerHTML={{__html: data.homeJson.content_two.childMarkdownRemark.html}}/>
    </Subtitle>
    <div style={{ height: '30vh' }} />
    <Box size="full">
    <Title as="h1" size="large">
    <div style={{textAlign: "center", padding: "10rem"}}>
    Closely working with Japan, we have adapted their professional work ethics of making sure everything is done on time and of high quality. 
    Going by the country’s KAIZEN spirit, we are not afraid to try our hands at something new and different in order to achieve optimum results for a project.
    </div>
    </Title>
    </Box>
    <div style={{ height: '30vh' }} />
     <Box size="full">
     <div style={{padding: "10rem"}}>
     <div style={{fontSize: "3.3rem", marginBottom: "2rem"}}> Careers </div>
       <div dangerouslySetInnerHTML={{__html: data.careerJson.content.childMarkdownRemark.html}}/>
       </div>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson: homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      content_two {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    careerJson: careerJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
