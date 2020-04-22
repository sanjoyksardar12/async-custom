function delay(milliseconds){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      resolve(42);
    }, milliseconds);
  })
}

delay(100)
  .then((data)=>{
    console.log(data);
    return data+ data;
  })
  .then((data)=>{
    console.log(data);
    return data+ data;
  })
  .then((data)=>{
    console.log(data);
    return data+ data;
  });
