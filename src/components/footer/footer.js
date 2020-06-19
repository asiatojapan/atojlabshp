import React from 'react';
import { Container } from './footer.css.js';

const Footer = () => (
  <Container>
    <div style={{fontSize: "3rem"}}> Contact Us </div>
    <div style={{fontSize: "3rem"}}> <a href="mailto:labs@asiatojapan.com"> labs@asiatojapan.com </a>
    </div>
    <div>
    <div style={{fontSize: "2rem", marginBottom: "2rem"}}> AtoJ Labs India Pvt. Ltd. </div>
                
                <h5>
                A-5, Geet Govind Bldg, <br/>
                Dr. Herekar Park,<br/>
                Near Kamla Nehru Park,<br/>
                Bhandarkar Road, <br/>
                Pune - 411004</h5>
                        </div>
  </Container>
);

export default Footer;