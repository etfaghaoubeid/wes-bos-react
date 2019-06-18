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


function objectsOrderedByRankin(arr){
    let inter = 0;
    let r =[]
    let min = arr[0].ranking;

    for(let i = 1;arr.length<i;i++){
        for(let j=0 ;j<arr.length; j++){
            if(arr[j].ranking<=min){
                inter = min;
                 arr[j].ranking = min  ;
                 min = arr[j].ranking
              
            }else{
               min = min ;
               inter = 0 
            }
        }
    }
    return arr;
    
}
console.log(objectsOrderedByRankin(test))