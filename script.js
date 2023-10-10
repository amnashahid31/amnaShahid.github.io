//Amna Shahid, 21i1148, Web Assignment 1
//script for filter button
const fbutton = document.querySelectorAll('.filter-options');
fbutton.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
    });
});

//script to remove a job
document.addEventListener("DOMContentLoaded", function () {
    const delB = document.querySelectorAll(".delete-button");

    delB.forEach(button => {
        button.addEventListener("click", function () {
            const jlist = button.closest(".job"); 
            if (jlist) {
                jlist.remove(); 
        }});
    });
});



