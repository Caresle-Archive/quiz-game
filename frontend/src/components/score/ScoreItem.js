const ScoreItem = ({ obj, ind }) => {
	const { name, score } = obj
	if (ind % 2 === 0) {
		return (
			<tr className="color-row">
				<td>{name}</td>
				<td>{score}</td>
		</tr>
		)
	} else {
		return (
			<tr>
				<td>{name}</td>
				<td>{score}</td>
			</tr>
		)
	}
}

export default ScoreItem