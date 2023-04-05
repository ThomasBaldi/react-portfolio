import React from 'react';
// Link -> SPA navigations links & useLocation to determine which path is active
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav } from './styles';

//CREATE ARRAY OF ROUTES NAMES AND PATHS
const items = [
	{ name: 'Me', path: '/' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Work', path: '/work' },
	{ name: 'Education', path: '/education' },
];

const Sidebar = () => {
	const location = useLocation();

	return (
		<StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label='Side navigation'>
			<SideNavItems>
				{/* map through the routes and paths */}
				{items.map((i) => (
					<SideNavLink
						isActive={
							location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
						}
						element={Link}
						to={i.path}
						key={i.name}
					>
						{i.name}
					</SideNavLink>
				))}
			</SideNavItems>
		</StyledSideNav>
	);
};

export default Sidebar;
