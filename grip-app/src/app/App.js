import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextScope } from '../context/Context';

import Pages from './Pages';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#202020'
		},
		secondary: {
			main: '#da4444'
		}
	},
	typography: {
		useNextVariants: true
	}
});

const App = () => (
	<MuiThemeProvider theme={theme}>
		<ContextScope>
			<Router>
				<Pages />
			</Router>
		</ContextScope>
	</MuiThemeProvider>
);

export default App;
