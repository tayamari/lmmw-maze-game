import React from "react";
import Countdown from "react-countdown";


function Timer({duration}) {

    const [completedTime,setCompletedTime] = React.useState(() => Date.now()+ duration*1000)
    const renderer = ({minutes,seconds,completed}) => {
        if(completed)return <div>0:00</div>;
        return <div>{minutes}:{seconds}</div>;
    }

    return (
    
        <Countdown
        date={completedTime}
        intervalDelay={0}
        renderer={renderer}
        />
    )
}

export default Timer;
