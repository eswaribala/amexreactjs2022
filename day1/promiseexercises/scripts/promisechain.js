window.addEventListener('load',function(){

    var bodyRef=document.querySelector("body");
//asynchronous
    getImage("../images/download.png","../images/banner.jpeg")
        .then(function(response){

        console.log(response);
       var responseArr= response.split(",");

        bodyRef.innerHTML='<img src='+responseArr[0]+'>'
        var bannerUrl=responseArr[1];
       return new Promise((resolve,reject)=>{
           var image=new Image();
           //image events
           image.onload=function(){
               resolve(bannerUrl)
           }
           image.onerror = function(){
               reject(bannerUrl)
           }
           image.src = bannerUrl
       })

    })
        .then(function(innerResponse){

            console.log(innerResponse);
            bodyRef.innerHTML='<img src='+innerResponse+'>'


        })

        .catch(function(error){
      console.log(error)
    })

console.log("Printing....")
})


function getImage(url,bannerUrl){

  return new Promise((resolve,reject) => {
      var image=new Image();
      //image events
      image.onload=function(){
          resolve(url+","+bannerUrl)
      }
      image.onerror = function(){
          reject(url+","+bannerUrl)
      }
      image.src = url

  })

}
