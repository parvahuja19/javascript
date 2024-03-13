//here we are learning about the setInterval function which is used to refresh the page at the selected interval so that we dont have to restart the page again and again
//we're changing the innerhtml of the clock ID
const clock = document.getElementById('clock');
setInterval(function() {
    let date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 3000);