import { useState, useEffect } from 'react';
import './Valentine.css';
import kissGif from './assets/kiss.gif'

function Valentine({ name = 'Míšo' }) {

    const [position, setPosition] = useState(null);
    const [isAccepted, setIsAccepted] = useState(false);

    function randomPosition() {
        return Math.floor(Math.random() * 80) + '%'
    }

    function changePosition() {
        setPosition({ top: randomPosition(), left: randomPosition() });
    }

    function yesValentine() {
        setIsAccepted(true);

    }

    useEffect(() => {
        if (isAccepted) {
            document.body.style.backgroundImage = `url(${kissGif})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
        }
    }, [isAccepted]);

    return (
        <div>
            <h1>{isAccepted ? "Věděl jsem to! Mwah ❤️" : `Budeš mojí valentýnkou, ${name}?`}</h1>
            {!isAccepted && (
                <div className="button-group">
                    <button class="yesBTN" onClick={yesValentine}>Ano</button>
                    <button class="noBTN" onMouseEnter={changePosition} style={position ? { position: 'absolute', top: position.top, left: position.left, transition: 'all 0.1s ease' } : {}}>
                        Ne</button>
                </div>
            )}
        </div >
    )
}

export default Valentine;