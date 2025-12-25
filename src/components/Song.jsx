

export const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <img className="songCover" src={currentSong.cover} alt="" />
        <h1 style={{color: "red"}}>{currentSong.name}</h1>
    </div>
  );
};
