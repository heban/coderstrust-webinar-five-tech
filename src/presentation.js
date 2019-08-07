/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Appear,
  Text,
  CodePane,
} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Charts
import ReactUsage from './components/ReactUsage';
import ReactNativeUsage from './components/ReactNativeUsage';
import EmotionUsage from './components/EmotionUsage';
import StyledUsage from './components/StyledUsage';

// Images
import Intro from './images/intro-unsplash.jpg';
import Android from './images/android.png';

// Styles
import {
  IntroBox,
  Mark,
  ImportantBox,
  AndroidImage,
  CodeWithImage,
} from './presentation.styled';

preloader({
  Intro,
  Android,
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#214172',
    secondary: '#fff',
    tertiary: '#ed1b23',
    quaternary: '#fff',
    fifth: '#ffe6a9',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade', 'spin']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1000}
      >
        <Slide bgImage={Intro} bgDarken={0.5}>
          <IntroBox>
            <Heading size={1} lineHeight={1} textColor="secondary">
              5
            </Heading>
            <Heading size={2} lineHeight={1} textColor="secondary">
              technologii
            </Heading>
            <Heading size={4} lineHeight={1} textColor="secondary">
              we Frontendzie
            </Heading>
            <Heading size={5} lineHeight={1} textColor="tertiary">
              wartych poznania
            </Heading>
          </IntroBox>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Pogadamy dziś o...
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Takiej tam bibliotece <Mark>React.js</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Nieco dziwnym podejściu do stylowania zwanym <Mark>CSS in JS</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Języku <Mark>TypeScript</Mark>, który jest coraz głośniejszy
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Generatorze stron <Mark>GatsbyJS</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Sposobie tworzenia aplikacji mobilnych w <Mark>React Native</Mark>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Biblioteka do tworzenia interfejsów w JavaScript
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania*
          </Text>
          <ReactUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2018.stateofjs.com
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Nowoczesne podejście do stylowania stron i aplikacji WWW
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania Styled-components*
          </Text>
          <StyledUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2019.stateofcss.com
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania Emotion*
          </Text>
          <EmotionUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2019.stateofcss.com
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            TypeScript
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Język kompilowany do JavaScriptu o wielkich możliwościach
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            GatsbyJS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Generator statycznych stron dla miłośników Reacta
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Gdy technologie webowe, spotykają mobilne
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="fifth">
              React Native umożliwia tworzenie cross-platformowych aplikacji mobilnych za pomocą Reacta.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="fifth">
              Mottem przewodnim RN jest <Mark>"Naucz się raz, pisz wszędzie"</Mark>.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="fifth">
              Systemami docelowymi dla React Native są Android i iOS. Istnieje jednak osobny projekt, rozwijany specjalnie dla systemu Windows.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="fifth">
              W przeciwieństwie do np. PhoneGapa, wynikowym produktem RN jest pełnoprawna aplikacja natywna, nie webowa.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Przykładowy kod
          </Text>
          <Appear>
            <CodeWithImage>
              <div style={{ maxWidth: '600px', width: '600px' }}>
                <CodePane
                  theme="dark"
                  textSize={16}
                  lang="jsx"
                  source={require('!raw-loader!./codes/rn.example')}
                  margin="32px auto 0 auto"
                />
              </div>
              <AndroidImage src={Android} />
            </CodeWithImage>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Jak to działa?
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Czy to dobry wybór?
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              React Native może przyspieszyć proces powstawania oprogramowania, ponieważ znaczna część kodu jest współdzielona pomiędzy różne platformy.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Ma łatwy próg wejścia i programiści zaznajomieni z Reactem, poczują się tutaj jak w domu.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 64px 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Aplikacje są szybsze niż aplikacje hybrydowe.
            </Text>
          </Appear>
          <Appear>
            <ImportantBox>
              <Text textAlign="left" textSize={28} lineHeight={1.2} textColor="tertiary">
                Bardziej złożone aplikacje nadal będą jednak wymagały kodu natywnego. Aplikacja będzie szybsza niż w przypadku korzystania z WebView, ale w dalszym ciągu będzie w tyle za "prawdziwymi" aplikacjami natywnymi.
              </Text>
            </ImportantBox>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania*
          </Text>
          <ReactNativeUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2018.stateofjs.com
          </Text>
        </Slide>
        <Slide bgImage={Intro} bgDarken={0.5}>
          <IntroBox>
            <Heading size={3} lineHeight={1} textColor="secondary">
              Dziękuję :)
            </Heading>
          </IntroBox>
        </Slide>
      </Deck>
    );
  }
}
