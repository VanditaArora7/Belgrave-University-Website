import './VideoPlayer.css'
import campvid from '../../assets/campus-video.mp4'
import { useRef } from 'react'
const VideoPlayer = ({playState,setplayState}) => {


    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setplayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video
        src={campvid}
        autoPlay
        muted
        controls
      ></video>
    </div>
  )
}
export default VideoPlayer