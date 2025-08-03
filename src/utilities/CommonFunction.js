import EN_JSON from "./EN.json";

export function getComponentTexts(path){
    const splittedPath = path?.split(".");
    let answer =EN_JSON[`${splittedPath[0]}`];
    for(let i = 1; i < splittedPath?.length; i++){
        answer = answer[`${splittedPath[i]}`];
    }
    return answer;
}