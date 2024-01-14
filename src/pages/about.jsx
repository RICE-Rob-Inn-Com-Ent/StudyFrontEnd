import React from "react";

const About = () => {
  return (
    <>
      <article className="about">
        <section>
          <h2>Nasza Misja:</h2>
          <p>Naszym celem jest dostarczanie usług wykończeniowych na najwyższym poziomie!</p>
          <div>
            <h3>Wartości Naszej Firmy</h3>
            <ul>
              <li>
                <strong>Precyzja:</strong> Dbamy o najdrobniejsze detale, zapewniając perfekcyjne wykonanie każdego
                projektu.
              </li>
              <li>
                <strong>Kreatywność:</strong> Wprowadzamy świeże pomysły i nowoczesne rozwiązania, tworząc unikalne
                wnętrza.
              </li>
              <li>
                <strong>Kliento-Centryzm:</strong> Nasze projekty są dostosowane do indywidualnych potrzeb i gustów
                każdego klienta.
              </li>
              <li>
                <strong>Zaufanie:</strong> Budujemy trwałe relacje oparte na zaufaniu i uczciwości.
              </li>
            </ul>
          </div>
          <p>
            Niezależnie od skali projektu, nasze podejście skupia się na realizacji wizji klienta, zachowując
            jednocześnie naszą misję doskonałości. Wierzymy, że wnętrza powinny odzwierciedlać styl i osobowość
            mieszkańców, dlatego nasze projekty są zawsze unikalne i dopasowane do indywidualnych oczekiwań.
          </p>
        </section>
        <section>
          <h2>Dlaczego Wybrać Nas?</h2>
          <div className="portfolio">
            <img className="image" src="img/room_1.jpg" alt="Jasna sypialnia" />
            <img className="image" src="img/room_2.jpg" alt="Kuchnia i drewniane meble" />
            <img className="image" src="img/room_3.jpg" alt="Jasny salon z dużym białym oknem" />
            <img className="image" src="img/room_4.jpg" alt="Aneks kuchenny" />
          </div>
          <h3>Doskonała Jakość</h3>
          <p>
            Nasze prace wyróżniają się nie tylko estetyką, ale również solidnym wykonaniem. Stawiamy na najwyższą jakość
            materiałów i profesjonalizm w każdym detalu.
          </p>
          <img
          className="artwork"
          src="img/precision.png"
          alt="Poziomica jako symbol perfekcji"
        />
          <h3>Terminowość</h3>
          <p>
            Znamy wartość Twojego czasu. Dlatego zapewniamy terminowe wykonanie prac, byś mógł cieszyć się swoim nowym
            wnętrzem zgodnie z planem.
          </p>
          <img
            className="artwork"
            src="img/profesional.png"
            alt="Mężczyzna mający na wyposarzeniu dużą ilość narzędzi"
          />
          <h3>Podejście Personalizowane</h3>
          <p>
            Każdy projekt traktujemy indywidualnie. Nasze podejście personalizowane sprawia, że Twoje marzenia stają się
            rzeczywistością, odzwierciedlając Twój unikalny styl.
            <br />
            <img
            className="artwork"
            src="img/personal.png"
            alt="Twój dom w bezpiecznych rękach"
          />
            <br />
            Zaufaj nam, ponieważ inwestujemy nie tylko w wykończenia, ale także w satysfakcję klienta. Nasze referencje
            i zadowoleni klienci są najlepszym dowodem na skuteczność naszej misji. Dołącz do grona zadowolonych
            klientów i przekonaj się, dlaczego warto wybrać KS-MONT na partnera w doskonałym wykończeniu wnętrz.
          </p>
        </section>
      </article>
    </>
  );
};

export default About;
