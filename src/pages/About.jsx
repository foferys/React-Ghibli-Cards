import Navbar from "../components/Navbar";
import TimerProva from "../hooks/TimerProva";

function About() {

    //utilizzo dell'hook personalizzato TimerProva.jsx
    TimerProva();

    return (
        <>
            <Navbar></Navbar>
            <h1>Pagina about⛩️</h1>
        </>
    );
}

export default About;