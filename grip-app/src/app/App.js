import React, { Suspense } from 'react';
import Pages from './Pages';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

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
		<Router>
			<Suspense fallback={<div>Please Wait. Loading...</div>}>
				<Pages />
			</Suspense>
		</Router>
	</MuiThemeProvider>
);

export default App;
