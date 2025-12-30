import { faChevronLeft, faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Player = ({isPlaying, playNextSongHandler, playSongHandler, playPrevSongHandler}) => {
    return (
        <div className="player">
            <FontAwesomeIcon onClick={playPrevSongHandler} icon={faChevronLeft} size="3x" color="white" />
            {isPlaying ? 
                <FontAwesomeIcon onClick={playSongHandler} icon={faPause} size="3x" color="white" /> : 
                <FontAwesomeIcon onClick={playSongHandler} icon={faPlay} size="3x" color="white" />
            }
            <FontAwesomeIcon onClick={playNextSongHandler} icon={faChevronRight} size="3x" color="white" />
        </div>
    )
}
