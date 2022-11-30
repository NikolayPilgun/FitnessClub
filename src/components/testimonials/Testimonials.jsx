import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import styles from "./testimonials.module.css";

function Testimonials() {
	const [selected, setSelected] = useState(0);
	const tLength = testimonialsData.length;

	return (
		<div className={styles.testimonials}>
			<div className={styles.tesLeft}>
				<span>Testimonials</span>
				<span className="stroke_text">What they</span>
				<span>say about us</span>
				<span>{testimonialsData[selected].review}</span>
				<span>
					<span
						style={{
							color: "var(--orange)",
						}}
					>
						{testimonialsData[selected].name}
					</span>{" "}
					- {testimonialsData[selected].status}
				</span>
			</div>
			<div className={styles.tesRight}>
				<div></div>
				<div></div>
				<img
					src={testimonialsData[selected].image}
					alt="testimonialsDataimage"
				/>
				<div className={styles.arrows}>
					<img
						onClick={() => {
							selected === 0
								? setSelected(tLength - 1)
								: setSelected((prev) => prev - 1);
						}}
						src={leftArrow}
						alt="leftArrow"
					/>
					<img
						onClick={() => {
							selected === tLength - 1
								? setSelected(0)
								: setSelected((prev) => prev + 1);
						}}
						src={rightArrow}
						alt="rightArrow"
					/>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
