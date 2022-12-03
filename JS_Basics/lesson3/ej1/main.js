function filterStringsStaertingwithaorA(array_string){
    let new_array = [];
    for(const i of array_string){
        if(i[0] === "a" || i[0] === "A"){
            new_array.push(i);
        }
    }
    return new_array;
}

console.log(filterStringsStaertingwithaorA(['use','case','function','assembler','Asterix']));