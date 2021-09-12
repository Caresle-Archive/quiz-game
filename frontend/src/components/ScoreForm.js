import './ScoreForm.css'

const ScoreForm = () => {
	const urlScores = "http://localhost:3001/api/v1/test"
	const handleChange = () => {
		console.log('handler change')
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log('hey')
		const nameInput = document.getElementById('name-input').value
		const data = {
			name: nameInput,
			score_input: 10
		}
		const response = await fetch(urlScores, {
			method: 'POST',
			mode: 'cors',
			credentials: 'omit',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data)
		})
		console.log(response.json())
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