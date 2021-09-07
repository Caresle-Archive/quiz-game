const NextQuestion = ({nextQuestion}) => {
	return (
		<div id="button-container">
			<button className="btn btn-disabled" onClick={nextQuestion}>Continue</button>
		</div>
	)
}

export default NextQuestion