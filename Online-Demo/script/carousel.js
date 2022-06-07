const images=[ 'https://jayrajvmu.github.io/test/Online-Demo/images/02.webp', 'https://jayrajvmu.github.io/test/Online-Demo/images/04.webp', 'https://jayrajvmu.github.io/test/Online-Demo/images/05.jpg']


const imagetag=document.getElementById('imagetag');

let buttonLess=document.getElementById('less');
let buttonAdd=document.getElementById('add');


buttonAdd.addEventListener("click", myFunction);
function myFunction() {

 let currentValue=imagetag.src;  


 let position = currentValue.search("https://jayrajvmu.github.io/test/Online-Demo/images");
 let originalVal =(currentValue.slice(position));
 const index = images.findIndex(image => image == currentValue);






if(index==2){
    imagetag.src=images[0];

    $("#dot3").removeClass("active");
    $("#dot1").addClass("active");
}
else{
    console.log(index);
    imagetag.src=images[index+1];
    var dotcount=index+2;
    var dotcountless=index+1;

    $("#dot"+dotcount).addClass("active");
    $("#dot"+dotcountless).removeClass("active");
}

}

buttonLess.addEventListener("click", myFunction2);
function myFunction2() {

 let currentValue=imagetag.src;  
 console.log(currentValue);
 let position = currentValue.search("https://jayrajvmu.github.io/test/Online-Demo/images");
 let originalVal =(currentValue.slice(position));
 console.log(originalVal);
 const index = images.findIndex(image => image == currentValue);
 console.log(index)

if(index==0){
    imagetag.src=images[2];
    $("#dot1").removeClass("active");
    $("#dot3").addClass("active");
}
else{
    imagetag.src=images[index-1];

    var dotcount=index+1;
    $("#dot"+index).addClass("active");
    $("#dot"+dotcount).removeClass("active");
}




}




jQuery(".dot i").click(function(){
    $(".dot i").each(function(){
      jQuery(this).removeClass("active");
    })
    jQuery(this).addClass("active");
    
    var max_count=(jQuery(this).attr("count"));

    document.getElementById('imagetag').src=images[max_count-1]







})





setInterval(myTimer, 4000);


let currentImageValue=imagetag.src;  

let CurrentPosition = currentImageValue.search("https://jayrajvmu.github.io/test/Online-Demo/images");
let ImageOriginalVal =(currentImageValue.slice(CurrentPosition));
console.log(ImageOriginalVal)
function myTimer() {

    let currentImageValue=imagetag.src;  

    let CurrentPosition = currentImageValue.search("/images");
    let ImageOriginalVal =(currentImageValue.slice(CurrentPosition));
    console.log(ImageOriginalVal)

    const ImageIndex = images.findIndex(image => image == currentImageValue);
 console.log(ImageIndex)


 if(ImageIndex==2){
    imagetag.src=images[0];
    $("#dot3").removeClass("active");
    $("#dot1").addClass("active");
}
else{
    imagetag.src=images[ImageIndex+1];
    var dotcount=ImageIndex+2;
    var dotcountless=ImageIndex+1;
    $("#dot"+dotcount).addClass("active");
    $("#dot"+dotcountless).removeClass("active");
}


}
