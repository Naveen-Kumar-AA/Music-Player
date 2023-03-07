import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { PlayArrow, Pause } from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';


function Player() {

    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = useRef();

    const handleTogglePlay = ()=>{
        setPlaying(!playing);
    };

    const handleSliderChange = (event, value) => {
        audioRef.current.currentTime = value;
        setCurrentTime(value);
      };
      

    useEffect(()=>{
        if(playing) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    },[playing])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentTime(audioRef.current.currentTime);
        },500);
        return ()=> clearInterval(interval);
    },[]);      

    return (
        <div>
            <div>
                <Typography>Ranjithame</Typography>

                <IconButton onClick={handleTogglePlay}>
                    {playing ? <Pause /> : <PlayArrow />}
                </IconButton>

                <IconButton>
                    
                </IconButton>

                <div style={{
                    width: "500px"
                }}>
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        onChange={handleSliderChange}
                        min = {0}
                        max = {audioRef.current?audioRef.current.duration:0}
                        value={currentTime}
                        valueLabelDisplay={"off"}
                    /> 
                </div>
            </div>    
            <audio ref={audioRef} src = "https://isaiminisong.com/play.php?file=VGFtaWwgMjAyMiBTb25ncy9WYXJpc3UvUmFuaml0aGFtZS5tcDM=&fileid=63468"></audio>    
        </div>
    )
}


export default Player;