function matrix(m) {
  let result = "";
  for(let i = 0; i <m; i++){
    let num = m.toString()
    if(i<m-1){
    result += `${num} `;
    }else{
      result += `${num}`
    }
  }
  for (let i = 0; i < m; i++) {
    console.log(result);
    
  }
  
  
}
matrix(10)
