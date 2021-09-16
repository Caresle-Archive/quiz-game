import ScoreItem from "./ScoreItem"
import './ScoreList.css'
import { useEffect, useState } from "react"


const ScoreList = () => {
	const urlScores = 'http://localhost:3001/api/v1/scores'
	const [scoreItems, setScoreItems] = useState([])
	useEffect(() => {
		fetch(urlScores)
			.then(response => response.json())
			.then(data => setScoreItems([...data]))
	}, [])

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