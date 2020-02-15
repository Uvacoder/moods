import negative from './negative.json';
import neutral from './neutral.json';
import positive from './positive.json';
const any = [...negative, ...neutral, ...positive];

const choose = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

export const chooseAny = () => choose(any);
export const chooseNegative = () => choose(negative);
export const chooseNeutral = () => choose(neutral);
export const choosePositive = () => choose(positive);