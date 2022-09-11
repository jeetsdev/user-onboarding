import React from "react";

export const StepBarSteps = ({ stepNumber, active }) => {
	return (
		<p
			className={`flex justify-center items-center border-2 rounded-full z-10 ${
				active ? "bg-primary border-primary text-white" : "bg-white"
			}`}
		>
			{stepNumber}
		</p>
	);
};
