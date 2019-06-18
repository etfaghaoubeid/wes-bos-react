let test =[{
    name:'atigh',
    ranking:4
},{
    name:'mouvid',
    ranking:2
},{
    name:'Hamoud',
    ranking:3
}]


function objectsOrderedByRankin(ranking){
    let r = []
    let  startValue = ranking[0].ranking
    for(let i =1;i<ranking.length;i++){
        if(ranking[i].ranking>startValue){
            startValue = ranking[i].ranking

        }
        else{
            r.push(startValue);
            startValue = ranking[i].ranking
        }
    }
    return r;
    
}
console.log(objectsOrderedByRankin(test))