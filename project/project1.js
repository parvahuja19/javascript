//in this we have to make an array of all the buttons and traverse through them. based on their ID or innerHTML we change the color of the backgroud
//we're changing the color of the background in case of a click so we add an event listener (addEventListner('click',()=>{}))
let button_arr = document.querySelectorAll('.button');
let body = document.querySelector('body');
console.log(body);
console.log(button_arr);
button_arr.forEach((picture) => {
    console.log(picture);
    picture.addEventListener('click', function(e) {
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.color = '#212121';
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'yellow') {
            body.style.color = 'yellow';
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'white') {
            body.style.color = "black";
            body.style.backgroundColor = e.target.id;
        } else {
            body.style.backgroundColor = e.target.id;
        }
    })
})