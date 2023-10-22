const jokes = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";


let getJoke = () => {
    jokes.classList.remove("fade"); 
    fetch(url)
     .then(data => data.json())
     .then(item => {
        jokes.textContent= item.joke;
        jokes.classList.add("fade");
     });
}
btn.addEventListener("click",getJoke);
getJoke(); 