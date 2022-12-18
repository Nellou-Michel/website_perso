/* =============================ENLEVER L'ANIMATION D'INTRO================================================================*/

/* lance les vibrations à l'arrivée des 3 mots(differents timings en fonction du mot) */
setTimeout(shake1, 2850);
setTimeout(shake2, 3250);
setTimeout(shake3, 3170);

/* Créer un glitch sur le mot du centre pour en assurer 1 en early */
setTimeout(StartGlitch2,5000);
setTimeout(RemoveGlitch2,5500);

/*Empeche le lancement des hover to early et donc cancel l'animation */
setTimeout(StartListener,3170);

/* enleve la classe qui donne l'animation de l'intro pour pas qu'elle ne se repete à chaque hover */
setTimeout(StopIntro,4000);

/* lance les glitchs toutes les X valeurs généré aléatoirement */
setInterval(StartRandomGlitch1, SetTiming1());
setInterval(StartRandomGlitch2, SetTiming2());
setInterval(StartRandomGlitch3, SetTiming3());


/* recuperation des ids h1*/
var glitch = document.getElementById("title1");
var glitch2 = document.getElementById("title2");
var glitch3 = document.getElementById("title3");

/* recuperation des ids span*/
var spanGlitch1_1 = document.getElementById("span1_1");
var spanGlitch1_2 = document.getElementById("span1_2");
var spanGlitch2_1 = document.getElementById("span2_1");
var spanGlitch2_2 = document.getElementById("span2_2");
var spanGlitch3_1 = document.getElementById("span3_1");
var spanGlitch3_2 = document.getElementById("span3_2");


var is1Hovered = false;
var is2Hovered = false;
var is3Hovered = false;

/* ecoute des hover et mouseout */
function StartListener() {

    /* hover */
    spanGlitch1_1.addEventListener("mouseover", StartGlitch1);
    spanGlitch1_2.addEventListener("mouseover", StartGlitch1);
    glitch.addEventListener("mouseover", StartGlitch1);
    glitch.addEventListener("mouseover", HoverUP1);

    glitch2.addEventListener("mouseover", StartGlitch2);
    spanGlitch2_1.addEventListener("mouseover", StartGlitch2);
    spanGlitch2_2.addEventListener("mouseover", StartGlitch2);
    glitch2.addEventListener("mouseover", HoverUP2);

    glitch3.addEventListener("mouseover", StartGlitch3);
    spanGlitch3_1.addEventListener("mouseover", StartGlitch3);
    spanGlitch3_2.addEventListener("mouseover", StartGlitch3);
    glitch3.addEventListener("mouseover", HoverUP3);

    /* mouseout */
    spanGlitch1_1.addEventListener("mouseout", RemoveGlitch1);
    spanGlitch1_2.addEventListener("mouseout", RemoveGlitch1);
    glitch.addEventListener("mouseout", RemoveGlitch1);
    glitch.addEventListener("mouseout", HoverDOWN1);

    glitch2.addEventListener("mouseout", RemoveGlitch2);
    spanGlitch2_1.addEventListener("mouseout", RemoveGlitch2);
    spanGlitch2_2.addEventListener("mouseout", RemoveGlitch2);
    glitch2.addEventListener("mouseout", HoverDOWN2);

    glitch3.addEventListener("mouseout", RemoveGlitch3);
    spanGlitch3_1.addEventListener("mouseout", RemoveGlitch3);
    spanGlitch3_2.addEventListener("mouseout", RemoveGlitch3);
    glitch3.addEventListener("mouseout", HoverDOWN3);
}

function HoverUP1(){
    is1Hovered = true;
}
function HoverDOWN1(){
    is1Hovered = false;
}

function HoverUP2(){
    is2Hovered = true;
}
function HoverDOWN2(){
    is2Hovered = false;
}

function HoverUP3(){
    is3Hovered = true;
}
function HoverDOWN3(){
    is3Hovered = false;
}

/*DESACTIVE LES GLITCHS*/
function RemoveGlitch1() {
    glitch.classList.remove("fullGlitch");
    spanGlitch1_1.classList.remove("fullGlitch1");
    spanGlitch1_2.classList.remove("fullGlitch2");
}
function RemoveGlitch2() {
    glitch2.classList.remove("fullGlitch");
    spanGlitch2_1.classList.remove("fullGlitch1");
    spanGlitch2_2.classList.remove("fullGlitch2");
}
function RemoveGlitch3() {
    glitch3.classList.remove("fullGlitch");
    spanGlitch3_1.classList.remove("fullGlitch1");
    spanGlitch3_2.classList.remove("fullGlitch2");
}

/* FONCTIONS QUI ACTIVE LES GLITCHS */
function StartGlitch1() {
    spanGlitch1_1.classList.add('fullGlitch1');
    spanGlitch1_2.classList.add('fullGlitch2');
    glitch.classList.add('fullGlitch');
}
function StartGlitch2() {
    spanGlitch2_1.classList.add('fullGlitch1');
    spanGlitch2_2.classList.add('fullGlitch2');
    glitch2.classList.add('fullGlitch');  
}
function StartGlitch3() {
    spanGlitch3_1.classList.add('fullGlitch1');
    spanGlitch3_2.classList.add('fullGlitch2');
    glitch3.classList.add('fullGlitch');  
}

/* FONCTION QUI STOP L'INTRO */
function StopIntro(){
    glitch.classList.remove("introAnimatedTitle1");
    glitch2.classList.remove("introAnimatedTitle2");
    glitch3.classList.remove("introAnimatedTitle3");

    glitch.classList.remove("slow_shake1");
    glitch2.classList.remove("slow_shake2");
    glitch3.classList.remove("slow_shake3");
}

/* FONCTION QUI GENERE ALEATOIREMENT LA DUREE ENTRE LES GLITCHS */
function SetTiming1() {
    var numFct = Math.floor((Math.random() * (15000-8000)) +8000); //on prend un nombre compris en 0 et 20000
    console.log(numFct);
    return numFct;
}
function SetTiming2() {
    var numFct = Math.floor((Math.random() * (15000-8000)) +8000); //on prend un nombre compris en 0 et 20000
    return numFct;
}
function SetTiming3() {
    var numFct = Math.floor((Math.random() * (15000-8000)) +8000); //on prend un nombre compris en 0 et 20000
    return numFct;
}

/* FONCTION QUI ACTIVE LES SHORT GLITCHS */
function StartRandomGlitch1(){
    if(is1Hovered==false){
        StartGlitch1();
        setTimeout(RemoveGlitch1,350);
    }
}
function StartRandomGlitch2(){
    if(is2Hovered==false){
        StartGlitch2();
        setTimeout(RemoveGlitch2,350);
    }
    else{
        console.log("I've been canceled");
    }
}
function StartRandomGlitch3(){
    if(is3Hovered==false){
        StartGlitch3();
        setTimeout(RemoveGlitch3,350);
    }
}












/* ACTIVE LES SECOUSSES */
function shake1() {
    glitch.classList.add('shake1');
    setTimeout(shake2_1,500);    
}
function shake2() {
    glitch2.classList.add('shake2');
    setTimeout(shake2_2,500);    
}
function shake3() {
    glitch3.classList.add('shake3');
    setTimeout(shake2_3,500);    
}

/*ACTIVE LES SECOUSSES CHILLS*/
function shake2_1(){
    glitch.classList.remove('shake1');
    glitch.classList.remove("introAnimatedTitle1");
    glitch.classList.add('slow_shake1');
}
function shake2_2(){
    glitch2.classList.remove('shake2');
    glitch2.classList.remove("introAnimatedTitle2");
    glitch2.classList.add('slow_shake2');
}
function shake2_3(){
    glitch3.classList.remove('shake3');
    glitch3.classList.remove("introAnimatedTitle3");
    glitch3.classList.add('slow_shake3');
}