
function openMenu(){
    document.body.classList += " menu--open";

}

function closeMenu(){
    console.log("Close Function accessed!");
    document.body.classList.remove("menu--open");

    console.log(document.body.classList)

}
