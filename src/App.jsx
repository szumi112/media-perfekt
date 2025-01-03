import NeumorphicUI from "./components/NeumorphicUI";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import Flag from "react-world-flags";
import i18n from "./18";
import WhatWeDo from "./components/WhatWeDo";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ContactInfo from "./components/ContactInfo";

const App = () => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "pl"
  );

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact-info");
    if (contactElement) {
      const headerOffset = document.querySelector("header").offsetHeight || 0;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white">
      <I18nextProvider i18n={i18n}>
        <NeumorphicUI onContactClick={scrollToContact} />
        <WhatWeDo />
        <Reviews />
        <Contact />

        <div id="contact-info"></div>
        <ContactInfo />

        <Footer />
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex space-x-4 items-center">
          <button
            onClick={() => toggleLanguage("en")}
            className={`px-3 py-1 rounded ${
              language === "en" ? "bg-blueAccent text-white" : "bg-gray-600"
            } hover:bg-blueAccent`}
          >
            <Flag code="us" style={{ width: 24, height: 16 }} />
          </button>
          <button
            onClick={() => toggleLanguage("pl")}
            className={`px-3 py-1 rounded ${
              language === "pl" ? "bg-blueAccent text-white" : "bg-gray-600"
            } hover:bg-blueAccent`}
          >
            <Flag code="pl" style={{ width: 24, height: 16 }} />
          </button>
        </div>
      </I18nextProvider>
    </div>
  );
};

export default App;
