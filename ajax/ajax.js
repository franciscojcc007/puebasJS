(()=>{
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragmet = document.createDocumentFragment();

  xhr.addEventListener("readystatechange",(e)=>{
    if(xhr.readyState !== 4)return
    if(xhr.status >= 200 && xhr.status < 300){
      // console.log(xhr);
      // console.log("Exito")
      // console.log(xhr.responseText)
      let json = JSON.parse(xhr.responseText);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} ${el.email} ${el.phone}`;
        $fragmet.appendChild($li);
        
      });
      $xhr.appendChild($fragmet);
    }else{
      console.log("Error: " + xhr.status);
    }
  });


  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();