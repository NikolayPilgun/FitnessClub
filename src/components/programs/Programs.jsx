import React from "react";
import RightArrow from "../../assets/rightArrow.png";
import { programsData } from "../../data/programsData";
import styles from "./programs.module.css";

function Programs() {
	return (
		<div className={styles.programs} id="programs">
			{/* header */}
			<div className={styles.programsHeader}>
				<span className="stroke_text">Explore our</span>
				<span>Programs</span>
				<span className="stroke_text">to shape you</span>
			</div>
			<div className={styles.programCategories}>
				{programsData.map((program, i) => (
					<div className={styles.category} key={i}>
						{program.image}
						<span>{program.heading}</span>
						<span>{program.details}</span>
						<div className={styles.joinNow}>
							<span>Join Now</span>
							<img src={RightArrow} alt="RightArrow" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Programs;
