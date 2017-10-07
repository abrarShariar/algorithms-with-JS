process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data',(data)=>{
  let input_array = data.split(" ");
  for(let i = 1;i<input_array.length;i++){
    let key = input_array[i];
    let j = i - 1;
    while(j>=0 && input_array[j] > key){
      input_array[j+1] = input_array[j];
      j--;
    }
    input_array[j+1] = key;
  }
  console.log(input_array);
});
