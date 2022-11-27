import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.logo} src={Logo} alt="Logo" />
			<ul className={styles.headerMenu}>
				<li>Home</li>
				<li>Programs</li>
				<li>Why us</li>
				<li>Plans</li>
				<li>Testimonials</li>
			</ul>
		</header>
	);
}

export default Header;
