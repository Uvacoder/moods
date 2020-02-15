import React, {useState} from 'react';
import { choosePositive, chooseNeutral, chooseNegative, chooseAny } from './personalities';

const TraitSelector = () => {
    let [trait, setTrait] = useState(chooseAny());
    
    return (
        <main>
            <div className="trait-region" aria-live="polite" aria-atomic="true">
                <h1>Your personality is...</h1>
                <div>
                    <strong id="trait">
                        {trait}
                    </strong>
                </div>
            </div>
            <div>
                <button
                    className="positive"
                    onClick={() => setTrait(choosePositive())}
                >
                    Positive
            </button>
                <button
                    className="neutral"
                    onClick={() => setTrait(chooseNeutral())}
                >
                    Neutral
            </button>
                <button
                    className="negative"
                    onClick={() => setTrait(chooseNegative())}
                >
                    Negative
            </button>
                <button
                    className="any"
                    onClick={() => setTrait(chooseAny())}
                >
                    Any
            </button>
            </div>
        </main>
    );
};

export default TraitSelector;