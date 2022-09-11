import React from "react";
import { HiCheck } from "react-icons/hi";

export const Congrats = () => {
	return (
		<div className="flex flex-col items-center gap-2 mt-6">
			<div className="step-title bg-primary rounded-full p-4 mb-6">
				<HiCheck className="text-xl  text-white" />
			</div>
			<h1 className="text-3xl font-semibold line">
				Congratulations, Eren!
			</h1>
			<p className="text-slate-600">
				You have completed onboarding, you can start using the Eden!
			</p>
		</div>
	);
};
