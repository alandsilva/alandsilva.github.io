import React from 'react';
import { MdMail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import ContactInfoItem from '../components/ContactInfoItem';
import SectionTitle from '../components/SectionTitle';

const ContactPageStyle = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  @media only screen and (max-width: 768px) {
    .right {
      padding: 4rem 2rem 2em 2rem;
    }
  }
`;

const ContactPage = () => {
  return (
    <ContactPageStyle>
      <div className='container'>
        <SectionTitle subtitle='Get in touch' title='Contact'></SectionTitle>
        <div className='contact__wrapper'>
          <ContactInfoItem
            href='mailto:dasilva.alan@outlook.com'
            icon={<MdMail />}
          >
            dasilva.alan@outlook.com
          </ContactInfoItem>
          <ContactInfoItem
            href='https://www.github.com/alandsilva/'
            icon={<FaGithub />}
          >
            alandsilva
          </ContactInfoItem>
          <ContactInfoItem
            href='https://www.linkedin.com/in/alandsilva/'
            icon={<FaLinkedin />}
          >
            alandsilva
          </ContactInfoItem>
          <ContactInfoItem href='tel:+358414917610' icon={<MdPhone />}>
            +358 41 491 7610
          </ContactInfoItem>
        </div>
      </div>
    </ContactPageStyle>
  );
};

export default ContactPage;
