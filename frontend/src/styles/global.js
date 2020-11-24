import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-shadow: border-box;
	}
	body {
		-webkit-font-smoothing: antialiased !important;
	}
	body, input, button {
		font: 14px Nunito, sans-serif;
	}
	button {
		cursor: pointer;
	}
`;