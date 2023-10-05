import React, { useState } from "react";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";
import Logo from "../../assets/logo.png";
import styles from "./header.module.css";

function Header() {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);
	return (
		<header className={styles.header} id="header">
			<img className={styles.logo} src={Logo} alt="Logo" />
			{menuOpened === false && mobile === true ? (
				<div
					style={{
						backgroundColor: "var(--appColor)",
						padding: "0.5rem",
						borderRadius: "5px",
					}}
					onClick={() => setMenuOpened(true)}
				>
					<img
						src={Bars}
						alt="Bars"
						style={{ width: "1.5rem", height: "1.5rem" }}
					/>
				</div>
			) : (
				<ul className={styles.headerMenu}>
					<li
						style={{
							position: "absolute",
							top: "10px",
							right: "15px",
							fontSize: "20px",
						}}
						onClick={() => setMenuOpened(false)}
					>
						X
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="header"
							span="true"
							smooth={true}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="programs"
							span="true"
							smooth={true}
						>
							Programs
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="join"
							span="true"
							smooth={true}
						>
							Why us
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="plans"
							span="true"
							smooth={true}
						>
							Plans
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							to="testimonials"
							span="true"
							smooth={true}
						>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</header>
	);
}

export default Header;
