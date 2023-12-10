import React from "react";

import Welcome from "../components/scripts/welcome.jsx";
import SlideShow from "../components/scripts/slide_show.jsx";
import ContactForm from "../components/scripts/contact_form.jsx";

import StylesWelcome from "../components/styles/welcome.scss";
import StylesSlideShow from "../components/styles/slide_show.scss";
import StylesContactForm from "../components/styles/contact_form.scss";

const Home = () => {
  return (
    <>
      <Welcome className={<StylesWelcome />} />
      <SlideShow className={<StylesSlideShow />} />
      <ContactForm className={<StylesContactForm />} />
    </>
  );
};

export default Home;
