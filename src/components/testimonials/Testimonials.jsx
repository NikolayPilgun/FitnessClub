import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import styles from "./testimonials.module.css";

import { motion } from "framer-motion";

function Testimonials() {
	const transition = { type: "spring", duration: 3 };
	const [selected, setSelected] = useState(0);
	const tLength = testimonialsData.length;

	return (
		<div className={styles.testimonials} id="testimonials">
			<div className={styles.tesLeft}>
				<span>Testimonials</span>
				<span className="stroke_text">What they</span>
				<span>say about us</span>
				<motion.span
					key={selected}
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={transition}
				>
					{testimonialsData[selected].review}
				</motion.span>
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
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					transition={{ ...transition, duration: 2 }}
					whileInView={{ opacity: 1, x: 0 }}
				></motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					transition={{ ...transition, duration: 2 }}
					whileInView={{ opacity: 1, x: 0 }}
				></motion.div>
				<motion.img
					key={selected}
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					transition={transition}
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
