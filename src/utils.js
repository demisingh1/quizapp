export function shuffelArray(choises){
    for(let i = 0; i<= choises.length-1; i++){
        let j = Math.floor(Math.random()*4);
        let temp = choises[i]
        choises[i] =choises[j];
        choises[j] = temp
    }
    return choises
}