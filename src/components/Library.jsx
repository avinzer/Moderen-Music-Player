import { Albumes } from "./Albumes";
import { Player } from "./Player";
import { Song } from "./Song";

export const Library = ({songs, song,
                        isPlaying, playNextSongHandler, 
                        playSongHandler, playSongClickHandler,
                        playPrevSongHandler
                      }) => {
  return (
    <div className="libraryContainer">
      <div className="title">
        <h1>Fili Gamer Albumes</h1>
      </div>
      <Albumes songs={songs} playSongClickHandler={playSongClickHandler}/>
      <div className="songPlayer">
        <Player
        playPrevSongHandler={playPrevSongHandler}
          playNextSongHandler={playNextSongHandler}
          playSongHandler={playSongHandler}
          isPlaying={isPlaying}
        />
        <Song currentSong={song}/>
      </div>
    </div>
  );
};
