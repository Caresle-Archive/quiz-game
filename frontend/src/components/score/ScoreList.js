import ScoreItem from "./ScoreItem"

const ScoreList = () => {
	const scoreItems = [
		{
			id: 1,
			name: 'holis',
			score: 3
		},
		{
			id: 2,
			name: 'yess',
			score: 2
		}
	]

	return (
		<table>
			<thead>
				<tr>
					<td>Name</td>
					<td>Score</td>
				</tr>

			</thead>
			{scoreItems.map(e => <ScoreItem obj={e}/>)}
		</table>
	)
}

export default ScoreList