import React from 'react';
import { MdMail, MdPhone } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import ContactInfoItem from '../components/ContactInfoItem';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const ContactPageStyle = styled.div`
  padding: 10rem 0;
  .contact__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }

  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contact__wrapper  {
      flex-direction: column;
    }

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
          <div className='left'>
            <ContactInfoItem
              icon={<MdMail />}
              text='dasilva.alan@outlook.com'
            />
            <ContactInfoItem icon={<FaLinkedin />} text={'alandsilva'} />
            <ContactInfoItem icon={<MdPhone />} text='+358 41 491 7610' />
          </div>
          <div className='right'>
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactPageStyle>
  );
};

export default ContactPage;
