import React from "react";
import { FaUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

export const Planning = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="step-title">
				<h1 className="text-3xl font-semibold line">
					How are you planning to use Eden?
				</h1>
				<p className="text-slate-600 text-center my-2">We'll streamline your setup experience accordingly.</p>
			</div>
			<div className="flex justify-evenly w-full">
				<div className="flex flex-col p-4 border rounded gap-4">
					<FaUser className="text-xl" />
					<div>
						<p className="font-semibold mb-1">For myself</p>
						<p
							className="break-words opacity-60 text-sm"
							style={{ width: "15ch" }}
						>
							Write better, Think more clearly, Stay oragnized.
						</p>
					</div>
				</div>
				<div className="flex flex-col p-4 border rounded gap-4">
					<HiUserGroup className="text-xl" />
					<div>
						<p className="font-semibold mb-1">With my team</p>
						<p
							className="break-words opacity-60 text-sm"
							style={{ width: "15ch" }}
						>
							Wikis, docs, tasks & and project, all in one place.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
