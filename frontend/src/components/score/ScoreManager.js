import { useState } from "react"
import ScoreForm from "./ScoreForm"

const ScoreManager = () => {
	const [showScoreList, setShowScoreList] = useState(false)
	
	const scoreListUnhidden = () => {
		setShowScoreList(true)
	}

	if (!showScoreList)
		return <ScoreForm changeToList={scoreListUnhidden}/>
	else
		return <div>List</div>
}

export default ScoreManager