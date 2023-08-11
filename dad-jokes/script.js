const jokee = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()

// using async/await

async function generateJoke(){
    const config ={ // config is an object
        headers:{
            Accept:'application/json', // we want json data in response
        },
    }
    // fetch func returns a promise that returns a response
    const response = await fetch('https://icanhazdadjoke.com',config)
    // await keyword is used to pause the execution of func until promise from `fetch` is resolved
    const data = await response.json() // parse json data

    jokee.innerHTML = data.joke
}