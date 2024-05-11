function JoinRoom() {
    return (
        <div>
        <h1>Join Room</h1>
        <form>
            <label>
            Room ID:
            <input type="text" name="roomID" />
            </label>
            <button type="submit">Join Room</button>
        </form>
        </div>
    );
}

export default JoinRoom;