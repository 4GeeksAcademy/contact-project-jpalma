import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
						<img className="harry-potter-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdqJU5LYCQZAiSWKvlKD2AQnlhoVIWKaG_w&s" alt="Harry Potter Logo" height="75rem" />
				</Link>
				<div className="ml-auto">
					<Link to={"/Contact"} >
						<button className="btn btn-secondary">Create Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};