// SIDEBAR AND MOBILENAV SET FOR NAVIGATION IN EVERY PAGE
//ADD ALSO USERHEADER ON TOP OF EVERY PAGE

import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './styles';

//use children for dynamic page content which are
//components passed from the parent page component
const Layout = ({ user, children }) => {
	return (
		<>
			<MobileNav />
			<Sidebar />
			<StyledContent>
				<UserHeader user={user} />
				<div>{children}</div>
			</StyledContent>
		</>
	);
};

export default Layout;
