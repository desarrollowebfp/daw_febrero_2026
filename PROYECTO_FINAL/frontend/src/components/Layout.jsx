const Layout = ({ children }) => {
	return (
		<div className="font-sans text-sm bg-primary text-secondary min-h-screen flex flex-col">
			{children}
		</div>
	);
};

export default Layout;
