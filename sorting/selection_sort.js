  let input_array = [10,9,8,7,8,6,5,4,3,8,2,1,0];
  for(let i = 0; i < input_array.length; i++){
    let min = input_array[i];
    let pos = i;
    for(let j = i + 1; j < input_array.length; j++){
      if(input_array[j] < min){
        min = input_array[j];
        pos = j;
      }
    }
    if(i !== pos){
      input_array[pos] = input_array[i];
      input_array[i] = min;
    }
  }
console.log(input_array);
