import ScoreItem from "./ScoreItem"
import './ScoreList.css'


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
		},
		{
			id: 3,
			name: 'ccc',
			score: 2
		}
	]

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Score</th>
				</tr>

			</thead>
			<tbody>
				{scoreItems.map((e, i) => <ScoreItem key={`scoreitem${i}`} obj={e} ind={i} />)}
			</tbody>
		</table>
	)
}

export default ScoreList