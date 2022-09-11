import { StepBarSteps } from "./StepBarSteps";
import "./Stepper.css";

export const Stepper = ({ step }) => {
	return (
		<div className="stepper-container relative w-full">
			<div className="progress-bar absolute right-0 left-0 top10">
				<div className="bar-indicator w-full h-full left-0 right-0">
					<div className="empty-bar relative rounded w-full h-full bg-slate-300 overflow-hidden">
						<div
							className="filled-bar absolute rounded h-full bg-primary"
							style={{
								width: `${20.6 + (step - 1) * 29}%`,
							}}
						></div>
					</div>
				</div>
			</div>
			<div className="bar-steps flex w-full justify-between">
				<StepBarSteps stepNumber={1} active={true} />
				<StepBarSteps stepNumber={2} active={step >= 2} />
				<StepBarSteps stepNumber={3} active={step >= 3} />
				<StepBarSteps stepNumber={4} active={step >= 4} />
			</div>
		</div>
	);
};
