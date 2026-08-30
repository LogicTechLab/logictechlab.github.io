/* ==============================
   Links
============================== */

function setLink(id,url){

    const element =
    document.getElementById(id);

    if(element){

        element.href=url;

    }

}


function setLinks(){

    setLink("minecraft",URLS.MINECRAFT);

    setLink("cloud",URLS.CLOUD);

    setLink("docs",URLS.DOCS);

    setLink("discord",URLS.DISCORD);

    setLink("youtube",URLS.YOUTUBE);

    setLink("github",URLS.GITHUB);


    setLink(
        "mobile-minecraft",
        URLS.MINECRAFT
    );

    setLink(
        "mobile-cloud",
        URLS.CLOUD
    );

    setLink(
        "mobile-docs",
        URLS.DOCS
    );

    setLink(
        "mobile-discord",
        URLS.DISCORD
    );

    setLink(
        "mobile-youtube",
        URLS.YOUTUBE
    );

    setLink(
        "mobile-github",
        URLS.GITHUB
    );

}



/* ==============================
   Initialize
============================== */

setLinks();

updateLanguage();



/* ==============================
   Mobile Menu
============================== */

const mobileMenu =
document.getElementById("mobile-menu");


const mobileMenuBtn =
document.getElementById("mobile-menu-btn");


console.log("Mobile Menu:",mobileMenu);

console.log(
    "Mobile Button:",
    mobileMenuBtn
);


if(mobileMenuBtn){

    mobileMenuBtn.onclick=function(){

        console.log("Menu clicked");


        mobileMenu.classList.toggle("active");


        if(
            mobileMenu.classList.contains("active")
        ){

            mobileMenuBtn.innerHTML="✕";

        }else{

            mobileMenuBtn.innerHTML="☰";

        }

    };

}



/* ==============================
   Mobile Dropdown
============================== */

document
.querySelectorAll(".mobile-dropdown-btn")
.forEach(function(button){

    button.onclick=function(){

        const content =
        button.nextElementSibling;


        content.classList.toggle("active");

    };

});