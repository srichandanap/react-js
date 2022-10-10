import React from 'react';
import { App} from './app';

const currTime = new Date();
const time = currTime.getHours();

function Time() {

    let greet = "";

    if (time >= 1 && time <= 12) {
        greet = "Good Morning";
        
    }
    else if (time >= 20 && time <= 24) {
        greet = "Good Night";
    }

    else if (time >= 13 && time <= 19) {
        greet = "Good Afternoon";
        
    }


    return <p className="t1">{`Hello Sir, ${greet}!!`}
    <App /></p>;

    
}
export default Time;
