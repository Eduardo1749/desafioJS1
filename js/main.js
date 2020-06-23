let array = [1, 2, 3, 10,"a"];
function soma (array){
    var s=0
    for (value of array) {
        if(isNaN(value)){ 
            alert("você não pode somar valores que não sejam números");
            return false;
        }else{
            //console.log(value);
            s+= value;
         }       
    }
    return s;
}
console.log(soma(array));