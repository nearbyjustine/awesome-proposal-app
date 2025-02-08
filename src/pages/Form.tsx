function Form() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div className="flex max-w-md m-auto py-12">
			<form onSubmit={(e) => handleSubmit(e)} action="" method="post">
				<label className="floating-label">
					<span>Requester's Name</span>
					<input
						type="text"
						placeholder="Requester's Name"
						className="input input-md"
					/>
				</label>
			</form>
		</div>
	);
}

export default Form;
