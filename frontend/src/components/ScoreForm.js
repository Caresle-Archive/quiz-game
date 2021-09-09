import './ScoreForm.css'

const ScoreForm = () => {
	return (
		<form method="POST" action="http://localhost:3001/api/test">
			<label>Score</label>
			<input
				type="text"
				placeholder="Name"
				id="name-input"
				name="name_input"
				required
			>
			</input>
			<button type="submit" className="btn">Add</button>
		</form>
	)
}

export default ScoreForm