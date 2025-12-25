import { Albumes } from "./Albumes";
import { Player } from "./Player";
import { Song } from "./Song";

export const Library = ({songs, song}) => {
  return (
    <div className="libraryContainer">
      <div className="title">
        <h1>Top Recomendation</h1>
      </div>
      <Albumes songs={songs}/>
      <div className="songPlayer">
        <Player />
        <Song currentSong={song}/>
      </div>
    </div>
  );
};
