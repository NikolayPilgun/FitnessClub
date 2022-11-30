import React from "react";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<hr />
			<div className={styles.footerContainer}>
				<div className={styles.socialLinks}>
					<img src={Github} alt="Github" />
					<img src={Instagram} alt="Instagram" />
					<img src={LinkedIn} alt="LinkedIn" />
				</div>
				<div className={styles.footerLogo}>
					<img src={Logo} alt="Logo" />
				</div>
			</div>

			<div className="blur footer-blur-1"></div>
			<div className="blur footer-blur-2"></div>
		</footer>
	);
}

export default Footer;
