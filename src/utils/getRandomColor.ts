
export const getRandomColor = (colors : {id : number , color :  string}[]) => {
    return colors[Math.floor(Math.random() * colors.length )].color;
}