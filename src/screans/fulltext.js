import React from 'react';


export function Fulltext() {

let h = false

let data;
if (localStorage.data) {
  data = JSON.parse(localStorage.data);
setTimeout(()=>{
  localStorage.removeItem('data')
},1000)

}
else {
 
  window.location.href = "/"
}

function view() {
  if (!h) {
    document.getElementById("b1").classList.remove("entrys")
    h = true;
    document.getElementById("b1").classList.add("entry")
    document.getElementById("place").style.transform = "translate(-50%,100%)"
    document.getElementById("placedata").style.transform = "translate(-50%,100%)"
    document.getElementById("place-text").style.transform = "translate(-500%,0%)"



  }
  else {
    document.getElementById("b1").classList.remove("entry")
    document.getElementById("place").style.transform = "translate(-50%,0%)"
    document.getElementById("placedata").style.transform = "translate(-50%,0%)"
    document.getElementById("place-text").style.transform = "translate(0%,0%)"
    h= false;
    document.getElementById("b1").classList.add("entrys")


    
  }
}


  return (
    <>
{localStorage.data && <>
        <h1 id='place'>{data.text}</h1>
        <h2 id='placedata'>{data.data}</h2>
        <p id='place-text'>{data.fulltext}</p>
        <img onClick={view} id='b1' src={data.img} alt="Post" />
  
    </>
  
  }
    </>
  );
}
