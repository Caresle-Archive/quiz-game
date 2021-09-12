import './ScoreForm.css'

const ScoreForm = () => {
	const urlScores = "http://localhost:3001/api/v1/test"
	const handleChange = () => {
		console.log('handler change')
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('hey')
		const nameInput = document.getElementById('name-input').value
		const data = {
			name: nameInput,
			score_input: 10
		}
		fetch(urlScores, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': urlScores
			},
			body: JSON.stringify(data)
		}).then(response => response.json())
			.then(data => console.log(data))
	}

	return (
		<form method="POST" 
			action={urlScores}
			onSubmit={handleSubmit}
		>
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
				onChange={handleChange}
			>
			</input>
			<button type="submit" className="btn">Add</button>
		</form>
	)
}

export default ScoreForm