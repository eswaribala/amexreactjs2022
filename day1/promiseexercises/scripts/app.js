window.addEventListener('load',function(){

    var bodyRef=document.querySelector("body");

    getImage("../images/download.png").then(function(response){

        console.log(response);
        bodyRef.innerHTML='<img src='+response+'>'

    }).catch(function(error){
      console.log(error)
    })


})


function getImage(url){

  return new Promise((resolve,reject) => {
      var image=new Image();
      image.onload=function(){
          resolve(url)
      }
      image.onerror = function(){
          reject(url)
      }
      image.src = url

  })

}
