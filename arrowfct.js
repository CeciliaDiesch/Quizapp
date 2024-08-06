function init(){
    console.log(num())      // console.log(numObj.num(3)) erst numObj() und dann num() ausführen.
    console.log(filterArray())
}

let num = () => {return 333}

let numObj = {
        num : (a) => { return 333 + a}
}


function filterArray(){
    let testArray = [5,6,78,11,6];
    return testArray.filter((element, index, array)=>{      // wenn folgende fkt nur ein Einzeiler, kann man auch schreiben ..( (..)=> element > 10) ohne geschw. Klammern und ohne return und um element, index, array ist auch nur eine runde klammer, weil es mehr als eins ist.
        console.log(element, index, array);
        return element > 10;
    })
}