/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import Intro from './images/intro-unsplash.jpg';

// Styles
import {
  IntroBox,
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
        transition={['fade']}
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
      </Deck>
    );
  }
}
