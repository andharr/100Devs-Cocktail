//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//DOM Elements:

document.querySelector('button').addEventListener('click', getFetch)
let search = document.querySelector('input')
let h2 = document.querySelector('h2')
let img = document.querySelector('img')
let h3 = document.querySelector('h3')


function getFetch(){
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
        
          if(data.drinks.length === 1) {
            h2.innerText = data.drinks[0].strDrink
            img.src = data.drinks[0].strDrinkThumb
            h3.innerText = data.drinks[0].strInstructions
            console.log('FART')
          } else {

          let i = 0;
          const iterate = setInterval(function() {
            if (i === data.drinks.length) {
              clearInterval(iterate)
            } 
            h2.innerText = data.drinks[i].strDrink
            img.src = data.drinks[i].strDrinkThumb
            h3.innerText = data.drinks[i].strInstructions
            i++
          }, 2000)
        }
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}