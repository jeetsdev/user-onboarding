import React from "react";

export const Welcome = () => {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="step-title">
				<h1 className="text-3xl font-semibold">
					Welcome! First things first...
				</h1>
				<p className="text-slate-600">You can always change them later.</p>
			</div>
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="w-full px-4"
			>
				<div className="flex flex-col w-full my-4 gap-1">
					<label htmlFor="name" className="font-semibold opacity-70 text-slate-800">
						Full Name
					</label>
					<input
						id="name"
						type="text"
						className="border py-2 px-4 rounded outline-none"
						placeholder="Steve Jobs"
					/>
				</div>
				<div className="flex flex-col w-full my-4 gap-1">
					<label htmlFor="username" className="font-semibold opacity-70 text-slate-800">
						Display Name
					</label>
					<input
						type="text"
						id="username"
						className="border py-2 px-4 rounded outline-none"
						placeholder="Steve"
					/>
				</div>
			</form>
		</div>
	);
};
