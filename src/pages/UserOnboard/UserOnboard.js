import { useEffect, useState } from "react";
import { Congrats, Home, Planning, Stepper, Welcome } from "../../components";
import logo from "../../assets/logo.png";
import "./UserOnboard.css";

export const UserOnboard = () => {
	const [step, setStep] = useState(1);

	const getStepComponents = (step) => {
		switch (step) {
			case 1:
				return <Welcome />;
			case 2:
				return <Home />;
			case 3:
				return <Planning />;
			case 4:
				return <Congrats />;
			default:
				break;
		}
	};

	return (
		<div className="flex justify-center min-h-screen">
			<div className="onboard-sec flex items-center flex-col">
				<div className="flex items-center my-16">
					<img
						src={logo}
						alt="Brand logo"
						className="w-full h-full object-contain"
					/>
					<p className="text-2xl font-bold">Eden</p>
				</div>
				<div className="stepper-sec px-4 mb-16">
					<Stepper step={step} />
				</div>
				<div className="step-sec flex flex-col justify-center gap-8">
					<div>{getStepComponents(step)}</div>
					<div className="px-4 w-full flex gap-4">
				</div>
					<button
						className="border px-4 py-2 rounded bg-primary text-white w-full"
						onClick={() =>
							setStep((step) => {
								return step < 4 ? step + 1 : step;
							})
						}
					>
						{step < 4 ? "Create WorkSpace" : "Launch Eden"}
					</button>
				</div>
			</div>
		</div>
	);
};
