import React from 'react';
import { MdMail, MdPhone } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import ContactInfoItem from '../components/ContactInfoItem';
import SectionTitle from '../components/SectionTitle';

const ContactPageStyle = styled.div`
  padding: 10rem 0;
`;

const ContactPage = () => {
  return (
    <ContactPageStyle>
      <div className='container'>
        <SectionTitle subtitle='Get in touch' title='Contact'></SectionTitle>
        <div className='contact__wrapper'>
          <div className='left'>
            <ContactInfoItem
              icon={<MdMail />}
              text='dasilva.alan@outlook.com'
            />
            <ContactInfoItem
              icon={<FaLinkedin />}
              text={'https://www.linkedin.com/in/alandsilva/'}
            />
            <ContactInfoItem icon={<MdPhone />} text='+358 41 491 7610' />
          </div>
          <div className='right'>contact form</div>
        </div>
      </div>
    </ContactPageStyle>
  );
};

export default ContactPage;
