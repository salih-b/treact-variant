function openMenu(){
    console.log("Open Function accessed!");
    console.log(document.body.classList += " menu--open");

    console.log(document.body.classList);

}

function openClose(){
    console.log("Close Function accessed!");
    document.body.classList.remove("menu--open");

    console.log(document.body.classList)

}
