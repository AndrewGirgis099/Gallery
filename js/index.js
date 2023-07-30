var imgs = Array.from(document.querySelectorAll('img'));
var imgIndex=0;

for( var i=0 ; i<imgs.length ; i++){
    imgs[i].addEventListener('click',function(e){
        imgIndex=imgs.indexOf(e.target);
        console.log(imgIndex)
        var imgSrc = e.target.getAttribute("src");
        document.querySelector('.container-overlay').classList.remove('d-none')
        document.querySelector('.overlay').style.cssText = `  background-image: url(${imgSrc}); `        
    })
}

document.querySelector('#close').addEventListener('click',function(){
    close()
})

document.querySelector('#next').addEventListener('click',function(){
    next()

})
document.querySelector('#prev').addEventListener('click',function(){
    prev()
})

document.body.addEventListener('keydown',function(e){
    console.log(e.code)
    if(e.code=="ArrowRight"){
        next()
    }else if(e.code == "ArrowLeft"){
        prev()
    }else if(e.code == "Escape"){
        close()
    }
})

function next(){
    imgIndex++;
    if(imgIndex == imgs.length){
        imgIndex=0;

    }
    var imgSrc = imgs[imgIndex].getAttribute('src');
    document.querySelector('.overlay').style.cssText = `  background-image: url(${imgSrc}); `  
}

function prev(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex= imgs.length-1;

    }
    var imgSrc = imgs[imgIndex].getAttribute('src');
    document.querySelector('.overlay').style.cssText = `  background-image: url(${imgSrc}); `  
}

function close(){
    document.querySelector('.container-overlay').classList.add('d-none')

}

