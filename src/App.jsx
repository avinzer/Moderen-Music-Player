import { useEffect, useRef, useState } from "react";
import data from "./util";
import "./styles/app.scss";
import { Song } from "./components/Song";
import { Library } from "./components/Library";

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[11]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const playSongHandler = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <Library songs={songs} song={currentSong}/>
      <audio src={currentSong.audio} ref={audioRef}></audio>
      <button onClick={playSongHandler}>Click</button>
    </div>
  );
};

export default App;
