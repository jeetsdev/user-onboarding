import React from "react";

export const Home = () => {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="step-title">
				<h1 className="text-3xl font-semibold">
					Let's set up a home for all your work
				</h1>
				<p className="text-slate-600">
					You can always create another workspace later.
				</p>
			</div>
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="w-full px-4"
			>
				<div className="flex flex-col w-full my-4 gap-1">
					<label
						htmlFor="name"
						className="font-semibold opacity-70 text-slate-800"
					>
						Workspace Name
					</label>
					<input
						id="name"
						type="text"
						className="border py-2 px-4 rounded outline-none"
						placeholder="Eden"
					/>
				</div>
				<div className="flex flex-col w-full my-4 gap-1">
					<label
						htmlFor="username"
						className="font-semibold opacity-70 text-slate-800"
					>
						Workspace URL
					</label>
					<div className="flex border rounded">
						<p className="bg-slate-100 py-2 px-4 border-r opacity-50">
							www.eden.com/
						</p>
						<input
							type="text"
							id="username"
							className="ml-2 py-2 px-4 outline-none"
							placeholder="Example"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
