var numb = 6
var colors = genrancol(numb);
var sqres = document.querySelectorAll(".sqre")
var pickcol = colorpick();
var dispcol =document.getElementById("spn")
dispcol.textContent= pickcol;
var mess =document.getElementById("mess")
var h1 =document.querySelector("h1")
var resetb =document.querySelector("button")
var hrd =document.getElementById("hrd")
var esy =document.getElementById("esy")

hrd.classList.add("clicked")
hrd.addEventListener("click",function(){
    numb = 6
    esy.classList.remove("clicked")
    hrd.classList.add("clicked")
    resett()
    for(var i=0;i<6;i++){
        sqres[i].style.display="block";
    }
});

esy.addEventListener("click",function(){
    numb = 3
    esy.classList.add("clicked")
    hrd.classList.remove("clicked")
    resett()
    for(var i=3;i<6;i++){
        sqres[i].style.display="none";
    }
});

for(var i=0;i<numb;i++){
    sqres[i].style.background = colors[i];
    sqres[i].addEventListener("click", function(){
        var clickcol = this.style.background;
        if (pickcol === clickcol) {
            mess.textContent = "CORRECT"
            changecol(clickcol);
            h1.style.backgroundColor= clickcol; 
            resetb.textContent="Play Again";
        } 
        else {
            this.style.background = "black";
            mess.textContent = "WRONG"
        }
    });
}

function changecol (color){
    for(var i=0;i<numb;i++){
        sqres[i].style.background = color;
    }
}

function colorpick (){
    var num=Math.floor(Math.random()*colors.length);
    return colors[num];
}

function genrancol(numm){
    arr = []
    for(var i=0;i<numm;i++){
        arr.push(rancol());
    }
    return arr;
}

function rancol(){
    var r =Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

function resett (){
    colors=genrancol(numb);
    pickcol=colorpick();
    dispcol.textContent=pickcol;
    for(var i=0;i<numb;i++){
        sqres[i].style.background = colors[i];
    }
    mess.textContent="";
    resetb.textContent="NEW COLORS";
    h1.style.backgroundColor="slateblue";
};

resetb.addEventListener("click",resett)