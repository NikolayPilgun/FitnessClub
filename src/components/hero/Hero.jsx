import NumderCounter from "number-counter";
import React from "react";
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Header from "../header/Header";
import styles from "./hero.module.css";

import { motion } from "framer-motion";

function Hero() {
	const transition = { type: "spring", duration: 3 };
	const mobile = window.innerWidth <= 768 ? true : false;
	return (
		<div className={styles.hero}>
			<div className="blur hero-blur"></div>
			<div className={styles.leftHero}>
				<Header />
				{/* the best ad */}
				<div className={styles.theBestAd}>
					<motion.div
						initial={{ left: mobile ? "162px" : "238px" }}
						whileInView={{ left: "8px" }}
						transition={{ ...transition, type: "tween" }}
					></motion.div>
					<span>the best fitness club in the town</span>
				</div>
				{/* Hero Heading */}
				<div className={styles.heroText}>
					<div>
						<span className="stroke_text">Shape </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal body</span>
					</div>
					<div>
						<span>
							In here we will help you to shape and build your ideal body and
							live up your life to fullest
						</span>
					</div>
				</div>
				{/* figures */}
				<div className={styles.figures}>
					<div>
						<span>
							<NumderCounter end={140} start={100} delay="4" preFix="+" />
						</span>
						<span>Expert coaches</span>
					</div>
					<div>
						<span>
							<NumderCounter end={978} start={800} delay="4" preFix="+" />
						</span>
						<span>Members Joined</span>
					</div>
					<div>
						<span>
							<NumderCounter end={50} start={0} delay="4" preFix="+" />
						</span>
						<span>Fitness programs</span>
					</div>
				</div>
				{/* hero buttons */}
				<div className={styles.heroButtons}>
					<button className="btn">Get Started</button>
					<button className="btn">Learn More</button>
				</div>
			</div>
			<div className={styles.rightHero}>
				<button className="btn">Join Now</button>
				<motion.div
					initial={{ right: "-1rem" }}
					whileInView={{ right: "4rem" }}
					transition={transition}
					className={styles.heartRate}
				>
					<img src={Heart} alt="Heart" />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</motion.div>
				{/* hero images */}

				<img src={hero_image} alt="hero_image" className={styles.hero_image} />
				<motion.img
					initial={{ right: "11rem" }}
					whileInView={{ right: "20rem" }}
					transition={transition}
					src={hero_image_back}
					alt="hero_image_back"
					className={styles.hero_image_back}
				/>
				{/* calories */}
				<motion.div
					initial={{ right: "37rem" }}
					whileInView={{ right: "28rem" }}
					transition={transition}
					className={styles.calories}
				>
					<img src={Calories} alt="Calories" />
					<div>
						<span>Calories Burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
