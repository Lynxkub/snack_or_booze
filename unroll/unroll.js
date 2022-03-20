function unroll(squareArray) {
    let answer = [];
    let placeholder = squareArray
    let finalCount = squareArray.length*squareArray.length
   
    const loop = () => {
    for(let i of placeholder[0]){
        answer.push(i);
    }
    placeholder.shift();
    for(let i of placeholder) {
        answer.push(i[i.length -1])
        i.pop();
    }
    if(answer.length === finalCount) {
        return answer;
    }
    let bottomArr = placeholder[placeholder.length -1]
    let reverse = bottomArr.reverse();
    for (let i of reverse) {
        answer.push(i);
    }
    placeholder.pop();
    placeholder.reverse();
    for (let i of placeholder){
        answer.push(i[0])
        i.shift();
    }
    if(answer.length !== finalCount){
        placeholder.reverse();
        loop(placeholder)
    }
    }   
   if(answer.length !== finalCount) {
       loop(placeholder)
   }
  
   return (answer)
}

module.exports = unroll;
