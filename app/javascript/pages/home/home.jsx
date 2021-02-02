import React, { Fragment } from 'react';
import './home.scss';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
