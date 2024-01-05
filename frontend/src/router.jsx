import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ProtectedLayout from './components/ProtectedLayout';
import GuestLayout from './components/GuestLayout';
import Navbars from './components/SiteVitrine/Nav';
import AnimatedGallery from './components/SiteVitrine/Header';
import WebsiteComponent from './components/SiteVitrine/Website';
import Sidebar from './components/SiteVitrine/Admin/Sidebar';

const router = createBrowserRouter([
	
	{
		path: '/',
		element: (
			
			<>
				{/* <Navbars/> */}
				<WebsiteComponent/>
				
			</>
		),
	},

	{
		path: '/admin_space',
		element: (
			
			<>
				
				{/* <Sidebar/> */}
			</>
		),
	},
	// {
	// 	path: '/',
	// 	element: <ProtectedLayout />,
	// 	children: [
	// 		{
	// 			path: '/about',
	// 			element: <About />,
	// 		},
	// 		{
	// 			path: '/profile',
	// 			element: <Profile />,
	// 		},
	// 	],
	// },
]);

export default router;
