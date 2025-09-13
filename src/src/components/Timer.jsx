import React from "react";
import Countdown from "react-countdown";


function Timer({ duration, gameOver }) {
    const [completedTime, setCompletedTime] = React.useState(() => Date.now() + duration * 1000);
    // Reset timer if duration changes
    React.useEffect(() => {
        setCompletedTime(Date.now() + duration * 1000);
    }, [duration]);

    // If game is over, freeze the timer
    if (gameOver) {
        return <span className="timer-inline">0:00</span>;
    }

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) return <span className="timer-inline">0:00</span>;
        // Pad seconds with leading zero if needed
        const paddedSeconds = seconds.toString().padStart(2, '0');
        return <span className="timer-inline">{minutes}:{paddedSeconds}</span>;
    };

    return (
        <Countdown
            date={completedTime}
            intervalDelay={0}
            renderer={renderer}
        />
    );
}

export default Timer;
