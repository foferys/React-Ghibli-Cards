import { useEffect } from "react";

function TimerProva() {
    
    useEffect(() => {

        const interval = setInterval(() => {
            const randomNum = Math.floor(Math.random()*100);
            console.log(randomNum);
        },1000)

        //per azzerare il timer quando si lascia il componente che lo implementa
        return () =>  clearInterval(interval);
    }, [])
}


export default TimerProva;