window.addEventListener('load',function(){

    var bodyRef=document.querySelector("body");

    getImage("../images/download.png").then(response,function(){

        console.log(response);
        //bodyRef.innerHTML='<img src='+response+'>'

    }).catch(error,function(){
      console.log(error)
    })


})


function getImage(url){

  return new Promise((resolve,reject) => {
      var image=new Image();
      image.onload=function(){
          resolve(url)
      }
      img.onerror = function(){
          reject(url)
      }
      img.src = url

  })

}
