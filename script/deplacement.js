
/* variable qui correspo,d au scroll start à 0 to Infinity */

/* obj : début scale : scroll = 0 fin scroll = 600 */
/* 0 scale = 1 */
/* 600 scale = 0.1 */

/* 1 - scroll * 0.0015  */
window.addEventListener("scroll", function ScrollScale() {
    
    var scroll = this.window.scrollY;
    /* scroll = une valeur entre 0 et + l'infini */
    var tempScale = 1 - (scroll * 0.0015);
    /* temp scale = une valeur entre 1 et - l'infinie */


    if (scroll > 600)
    {
        tempScale = 0.1;
    }
    /* grace à ça la valeur minimum de tempscale = 0.1 */

    document.getElementById("title1").style.transform = "rotateX(-45deg) rotateY(15deg) rotateZ(0deg) scale("+ tempScale + ")";
    document.getElementById("title2").style.transform = "rotateX(-45deg) rotateY(15deg) rotateZ(0deg) scale("+ tempScale + ")";
    document.getElementById("title3").style.transform = "rotateX(-45deg) rotateY(15deg) rotateZ(0deg) scale("+ tempScale + ")";



    var tempTop1 = -10 + (scroll * (10/600));
    var tempTop2 = 3.5 - (scroll * (2.3/600));
    var tempTop3 =  24.8 - (scroll * (21.1/600));

    var tempLeft2 = 25 - (scroll * (6/600));
    var tempLeft3 = 15 + (scroll * (4/600));


    if (scroll > 600)
    {
        document.getElementById("title1").style.top = tempTop1 * 2+"vh";

        document.getElementById("title2").style.top = tempTop2 *2+"vh";
        document.getElementById("title2").style.left = tempLeft2 * 2 -20 +"vw";

        document.getElementById("title3").style.top = tempTop3+"vh";
        document.getElementById("title3").style.left = tempLeft3+"vw";

    }
    else
    {
        document.getElementById("title1").style.top = tempTop1+"vh";

        document.getElementById("title2").style.top = tempTop2+"vh";
        document.getElementById("title2").style.left = tempLeft2+"vw";

        document.getElementById("title3").style.top = tempTop3+"vh";
        document.getElementById("title3").style.left = tempLeft3+"vw";
    }

    if (scroll>650)
    {
        document.getElementById("title1").style.transform = "rotateX(-45deg) rotateY(15deg) rotateZ("+scroll*1.5+"deg) scale("+ tempScale + ")";
        document.getElementById("title2").style.transform = "rotateX(-45deg) rotateY(15deg) rotateZ("+scroll*1.9+"deg) scale("+ tempScale + ")";
        document.getElementById("title3").style.transform = "rotateX(-45deg) rotateY(15deg) rotateZ("+scroll*1.2+"deg) scale("+ tempScale + ")";    
    }

    var tempOpacity = (2200-scroll)*(100/2000);
     if (tempOpacity > 100)
    {
        tempOpacity = 100;
    }
    else if (tempOpacity < 0)
    {
        tempOpacity = 0;
    }
    console.log("opacité = "+tempOpacity.toFixed(0)+" scale : "+ tempScale.toFixed(2)+" scroll : "+scroll.toFixed(0));
    document.getElementById("title1").style.opacity = (tempOpacity) + "%";
    document.getElementById("title2").style.opacity = (tempOpacity) + "%";
    document.getElementById("title3").style.opacity = (tempOpacity) + "%";

});
