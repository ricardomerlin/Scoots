function NewSetForm({ setQuestionSet, setTopics, setCompetitive }) {
    return (
        <>
            <label>
                New Set Name:
                <input type="text" name="questionSet" onChange={(e) => setQuestionSet(e.target.value)} />
            </label>
            <label>
                Topics:
                <input type="text" name="topics" onChange={(e) => setTopics(e.target.value.split(','))} />
            </label>
            <label>
                Is this a competitive room?
                <input type="checkbox" name="competitive" onChange={(e) => setCompetitive(e.target.checked)} />
            </label>
            <button type="submit">Create Set</button>
        </>
    )
}

export default NewSetForm;
