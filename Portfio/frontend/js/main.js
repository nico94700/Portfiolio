'use strict';

/*Variables*/

let iconeMenu;
let barreNav;
let titreheader;
let header;

/*Fonctions*/

function ouverturebarrenav(){
    barreNav.classList.toggle('ouverture');
    titreheader.classList.toggle('floutitre');
    header.classList.toggle('fondheader');
}

/*Chargement du DOM*/
document.addEventListener("DOMContentLoaded", function(){
    console.log('DOM!!!');
    barreNav=document.querySelector('nav.navheader');
    titreheader=document.querySelector('div.titreheader');
    header=document.querySelector('header');
    iconeMenu=document.getElementById('iconemenu');

    iconeMenu.addEventListener('click', ouverturebarrenav );
});    