const ScoreItem = ({ obj }) => {
	const { name, score } = obj
	return (
		<tr>
			<td>{name}</td>
			<td>{score}</td>
		</tr>
	)
}

export default ScoreItem