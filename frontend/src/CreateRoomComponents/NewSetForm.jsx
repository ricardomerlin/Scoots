function NewSetForm({ setQuestionSet, setTopics, setCompetitive }) {
    return (
        <>
            <label className="new-set-name">
                New Set Name:
                <input type="text" name="questionSet" onChange={(e) => setQuestionSet(e.target.value)} />
            </label>
            <label className="topics-field">
                Topics:
                <input type="text" name="topics" onChange={(e) => setTopics(e.target.value.split(','))} />
            </label>
        </>
    )
}

export default NewSetForm;