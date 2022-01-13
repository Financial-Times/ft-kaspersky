import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Disclaimer from './Disclaimer';
import BTTButton from './BTTButton';
import { device } from '~/config/utils';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1920px;
    --pageMax: 685px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --clickerFont: 'Clicker Script', cursive;
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: MetricWeb,sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    color: #265951;
    font-weight: 500;
    text-decoration: underline;

    &:hover, &:active, &:focus {
      color: #23D0AD;
      text-decoration: underline;
    }
  }
  button {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .o-footer {
    margin-top: 0;
  }

  
  h2 {
 	font-family: MetricWeb, sans-serif;
	color: #06a88e;
	text-transform: uppercase;
	line-height: 1;
  font-weight: 300;
  margin: 30px 0;
  font-size: 28px;
    
    @media ${device.tablet} {
      font-size: 48px;
    }
  }
  
  h3 {
	  font-family: MetricWeb, sans-serif;
	  color: #06a88e;
	  line-height: 1;
	  font-weight: 300;
	  margin: 30px 0;
	  font-size: 20px;

	  @media ${device.tablet} {
		  font-size: 30px;
	  }
  }
  p {
    font-family: MetricWeb,sans-serif;
    color: #333333;
    font-size: 20px;
    line-height: 1.6;
    font-weight: 400;
  }

  main {
    position: relative;
  }

  .o-cookie-message {
    z-index: 3;
  }
  .o-cookie-message__heading {
    h1 {
      color: black;
    }
  }

  .o-footer {
    margin: 0;
  }
          
`;
export default function Page({ children }) {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Disclaimer />
			{children}
			{/* <BTTButton /> */}
			<Footer />
		</>
	);
}

Page.propTypes = {
	children: PropTypes.any,
};
