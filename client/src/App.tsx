import "./App.css";

function App() {
    return (
        <>
            <div>
                <video id="videoPlayer" width="50%" controls>
                    <source
                        src="http://localhost:3001/stream"
                        type="video/mp4"
                    />
                </video>
            </div>
        </>
    );
}

export default App;
