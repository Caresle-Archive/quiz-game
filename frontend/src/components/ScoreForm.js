import './ScoreForm.css'

const ScoreForm = () => {
	return (
		<form method="POST" action="http://localhost:3001/api/v1/test">
			<label>Score</label>
			<input
				type="text"
				placeholder="Name"
				id="name-input"
				name="name_input"
				required
			>
			</input>
			<input
				type="text"
				hidden
				value="1"
				name="score_input"
			>
			</input>
			<button type="submit" className="btn">Add</button>
		</form>
	)
}

export default ScoreForm