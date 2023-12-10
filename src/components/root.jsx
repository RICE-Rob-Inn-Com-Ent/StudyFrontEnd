import React from "react";

import "./root.scss"

import Logo from "./scripts/logo.jsx";
import LanguageSwitch from "./scripts/language_switch.jsx";
import Envelope from "./scripts/envelope.jsx";
import ThemeSwitch from "./scripts/theme_switch.jsx";
import NeonSwitch from "./scripts/neon_switch.jsx";
import Navigation from "./scripts/navigation.jsx";
import Footer from "./scripts/footer.jsx";
import CookiesRulesPrivacy from "./scripts/cookies_rules_privacy.jsx";

import StylesLogo from "./styles/logo.scss";
import StylesLanguageSwitch from "./styles/language_switch.scss";
import StylesEnvelope from "./styles/envelope.scss";
import StylesThemeSwitch from "./styles/theme_switch.scss";
import StylesNeonSwitch from "./styles/neon_switch.scss";
import StylesFooter from "./styles/footer.scss";
import StylesNavigation from "./styles/navigation.scss";
import StylesCookiesRulesPrivacy from "./styles/cookies_rules_privacy.scss";

const Root = ({ children }) => {
  return (
    <>
      <header>
        <Logo className={StylesLogo} />
        <LanguageSwitch className={StylesLanguageSwitch} />
        <ThemeSwitch className={StylesThemeSwitch} />
        <NeonSwitch className={StylesNeonSwitch} />
        <Envelope className={StylesEnvelope} />
        <Navigation className={StylesNavigation} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer className={StylesFooter} />
        <CookiesRulesPrivacy className={StylesCookiesRulesPrivacy} />
      </footer>
    </>
  );
};

export default Root;
