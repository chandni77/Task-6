let array1 = ['apple','banana','cherry']
let array2 = ['mango','cherry','pineapple','cherry'];
let array3 = array1.concat(array2);
result = array3.filter((item,index)=>{
   return (array3.indexOf(item) == index)
})

console.log(result)