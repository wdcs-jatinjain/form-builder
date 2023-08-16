import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import React from 'react';
export const metadata = {
	title: 'Form Builder',
	description: 'Discover',
};

const RootLayout = ({ children }) => (
	<html lang='en'>
		<body>
			<Provider>
				<div className='main'>
					<div className='gradient'/>
				</div>

				<main className='app'>
					<Nav/>
					{children}
				</main>
			</Provider>
		</body>
	</html>
);

export default RootLayout;