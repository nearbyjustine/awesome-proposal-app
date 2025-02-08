import { NavLink } from "react-router";

function Hero() {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">AWESOME Event Proposal Form</h1>
					<p className="py-6">
						Welcome to the JCAG Event/Project Proposal form. <br />
						Click below to get started.
					</p>
					<NavLink to="/form" className="btn btn-primary">
						Get Started
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Hero;
