function eventManager(fn){
  let executing =false;
  return async()=>{
    if(!executing){
      executing=true;
      await fn();
      setTimeout(()=>{
        executing=false}, 3000);
    }
  }
}

const managerUrl = eventManager(get);

async function get(){
  const json = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response=>response.json());
  console.log(json)
}