import React from "react";
import RightArrow from "../../assets/rightArrow.png";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
import styles from "./plans.module.css";

function Plans() {
	return (
		<div className={styles.plans} id="plans">
			<div className="blur plans-blur-1"></div>
			<div className="blur plans-blur-2"></div>
			<div className={styles.plansHeader}>
				<span className="stroke_text">Ready to start</span>
				<span>Your journey</span>
				<span className="stroke_text">Now withus</span>
			</div>
			{/* plans card */}
			<div className={styles.plansSections}>
				{plansData.map((plan, i) => (
					<div className={styles.plan} key={i}>
						{plan.icon}
						<span>{plan.name}</span>
						<span>$ {plan.price}</span>

						<div className={styles.features}>
							{plan.features.map((feature, i) => (
								<div className={styles.feature} key={i}>
									<img src={whiteTick} alt="whiteTick" />
									<span>{feature}</span>
								</div>
							))}
						</div>

						<div>
							<span>See more benefits</span>
							<img src={RightArrow} alt="RightArrow" />
						</div>
						<button className="btn">Join now</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Plans;
