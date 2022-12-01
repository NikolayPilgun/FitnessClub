import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import styles from "./join.module.css";

function Join() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_bkngqlp",
				"template_ivkssir",
				form.current,
				"b1xzPRcY0ZP4J89yS"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className={styles.join} id="join">
			<div className={styles.joinLeft}>
				<hr />
				<div>
					<span className="stroke_text">READY TO</span>
					<span>LEVEL UP</span>
				</div>
				<div>
					<span>YOUR BODY</span>
					<span className="stroke_text">WITH US?</span>
				</div>
			</div>
			<div className={styles.joinRight}>
				<form ref={form} className={styles.emailContainer} onSubmit={sendEmail}>
					<input
						type="email"
						name="user_email"
						placeholder="Enter your Email address"
					/>
					<button className="btn btn-j">Join Now</button>
				</form>
			</div>
		</div>
	);
}

export default Join;
