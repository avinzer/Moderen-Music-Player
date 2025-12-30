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
  }, [currentSong, isPlaying]);
  const playSongHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSongHandler = () => {
    let currentSongId = songs.findIndex((song) => song.id === currentSong.id)
    setCurrentSong(songs[(currentSongId + 1) % 15])
    setIsPlaying(true);
  }

  const playPrevSongHandler = () => {
    let currentSongId = songs.findIndex((song) => song.id === currentSong.id)
    if (currentSongId === 0) {
      setCurrentSong(songs[14])
    } else {
      setCurrentSong(songs[(currentSongId - 1) % 15])
    }
    setIsPlaying(true);
  };

  const playSongClickHandler = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const onEndedHandler = () => {
    playNextSongHandler();
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", onEndedHandler);
    return () => {
      audio.removeEventListener("ended", onEndedHandler);
    };
  }, [currentSong]);
  return (
    <div className="container">
      <Library
        isPlaying={isPlaying}
        songs={songs}
        song={currentSong}
        playNextSongHandler={playNextSongHandler}
        playSongHandler={playSongHandler}
        playSongClickHandler={playSongClickHandler}
        playPrevSongHandler={playPrevSongHandler}
      />
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
};

export default App;
