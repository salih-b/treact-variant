

// BURGER MENU
function openMenu(){
    document.body.classList += " menu--open";

}

function closeMenu(){
    // console.log("Close Function accessed!");
    document.body.classList.remove("menu--open");

    // console.log(document.body.classList)
}
    // 

// ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    const evenSections = document.querySelectorAll('.animate__right-swipe');
    const oddSections = document.querySelectorAll('.animate__left-swipe');

    console.log("EVEN SECTIONS -->", evenSections);
    console.log("ODD SECTIONS -->", oddSections);

    const observer = new IntersectionObserver((entries) => {
        console.log("OBSERVER BEING CALLED");
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // console.log("INTERSECTING");
                entry.target.classList.add('animate__right-swipe--active');
                // console.log(entry.target.classList);
            } else {
                // console.log("ELSING");
                entry.target.classList.remove('animate__right-swipe--active');
                // console.log(entry.target.classList);
            }
        });
    });

    const observerReverse = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__left-swipe--active');
            } else {
                entry.target.classList.remove('animate__left-swipe--active');
            }
        });
    });

    evenSections.forEach(section => {
        // console.log("OBSERVER BEING CALLED");
        observer.observe(section);
    });
    oddSections.forEach(section => {
        observerReverse.observe(section);
    });
        // 

});