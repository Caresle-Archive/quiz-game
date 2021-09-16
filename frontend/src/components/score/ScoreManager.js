import { useState } from "react"
import ScoreForm from "./ScoreForm"
import ScoreList from "./ScoreList"

const ScoreManager = ({ scoreValue }) => {
	const [showScoreList, setShowScoreList] = useState(false)
	const scoreListUnhidden = () => {
		setShowScoreList(true)
	}

	if (!showScoreList)
		return <ScoreForm changeToList={scoreListUnhidden} scoreValue={scoreValue}/>
	else
		return <ScoreList />
}

export default ScoreManager