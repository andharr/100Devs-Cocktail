//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getFetch)
let search = document.querySelector('input')
h2 = document.querySelector('h2')
img = document.querySelector('img')
h3 = document.querySelector('h3')


function getFetch(){
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data)
        h2.innerText = data.drinks[0].strDrink
        img.src = data.drinks[0].strDrinkThumb
        h3.innerText = data.drinks[0].strInstructions
        console.log(search)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}