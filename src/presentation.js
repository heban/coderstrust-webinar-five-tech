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
} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Charts
import ReactUsage from './components/ReactUsage';
import ReactNativeUsage from './components/ReactNativeUsage';

// Images
import Intro from './images/intro-unsplash.jpg';

// Styles
import {
  IntroBox,
  Mark,
} from './presentation.styled';

preloader({
  Intro,
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#214172',
    secondary: '#fff',
    tertiary: '#ed1b23',
    quaternary: '#fff',
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
          <Appear>
            <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
              Biblioteka do tworzenia interfejsów w JavaScript
            </Text>
          </Appear>
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
          <Appear>
            <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
              Nowoczesne podejście do stylowania stron i aplikacji WWW
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            TypeScript
          </Heading>
          <Appear>
            <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
              Język kompilowany do JavaScriptu o wielkich możliwościach
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            GatsbyJS
          </Heading>
          <Appear>
            <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
              Generator statycznych stron dla miłośników Reacta
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Appear>
            <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
              Gdy technologie webowe, spotykają mobilne
            </Text>
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
