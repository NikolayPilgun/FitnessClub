import React from "react";
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Header from "../header/Header";
import styles from "./hero.module.css";

function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.leftHero}>
				<Header />
				{/* the best ad */}
				<div className={styles.theBestAd}>
					<div></div>
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
						<span>+140</span>
						<span>Expert coaches</span>
					</div>
					<div>
						<span>+978</span>
						<span>Members Joined</span>
					</div>
					<div>
						<span>+50</span>
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
				<div className={styles.heartRate}>
					<img src={Heart} alt="Heart" />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</div>
				{/* hero images */}

				<img src={hero_image} alt="hero_image" className={styles.hero_image} />
				<img
					src={hero_image_back}
					alt="hero_image_back"
					className={styles.hero_image_back}
				/>
				{/* calories */}
				<div className={styles.calories}>
					<img src={Calories} alt="Calories" />
					<div>
						<span>Calories Burned</span>
						<span>220 kcal</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
