import { useEffect, useRef } from "react";

export const Albumes = ({ songs }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      if (container.scrollWidth > container.clientWidth) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  const albumes = songs.map((song) => {
    return (
      <div className="albumContent" key={song.id}>
        <img className="imgCover" src={song.cover} alt="" />
        <div className="songTitleContainer">
            <h1 className="songTitle">{song.name}</h1>
            <p>{song.artist}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="albumesContainer" ref={containerRef}>
      {albumes}
    </div>
  );
};
