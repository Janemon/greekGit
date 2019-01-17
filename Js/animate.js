document.addEventListener("DOMContentLoaded", function(){
  setTimeout(()=>{
    let h1=document.getElementsByTagName("h1")[0]
    let h2=document.createElement("<h2>Hi!! I am Janemon.</h2>")
    h1.appendChild(h2)
  }, 2000)
})
