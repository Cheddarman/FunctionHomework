// Average of the prices

var avg = (items.reduce(function(a,b){
	return a + b.price
},0) /  items.length).toFixed(2)
var answer1 = document.querySelector("#answer1")
answer1.innerHTML = `The average is ${avg}`

//Array of items that cost between $14.00 and $18.00

var cost = items.filter(function(thing){
	if (thing.price > 14.00 && thing.price < 18.00){
		 return thing
	}
}).map(function(thing){return thing.title})

var answer2 = document.querySelector("#answer2")
answer2.innerHTML = `These are the items that cost between 14 and 18 dollars: ${cost}`

//Which item has a "GBP" currency code? Display it's name and price.
function gbp() {
  var content = ""
  var gbp = items.filter(function(display){
    if (display.currency_code = "GBP"){
      return true
    }
  })

  gbp.forEach(function(item){
    content += `<ul><li>${item.title}</li><li>${item.price}</li></ul>`
  })

  var answer3 = document.querySelector("#answer3")
  answer3.innerHTML = `The name and price of each item with the currency code of GBP:<ul>${content}</ul>`

}

gbp()

//Display a list of all items who are made of wood.

function wdn() {
  var content = ""
  var wdn = items.filter(function(item){
    if (item.materials.indexOf("wood") != -1){
  		return true
  	}
  }).map(function(item){
    return item.title
  })

  wdn.forEach(function(item){
    content += `<ul><li>${item.title}</li></ul>`
  })

  var answer4 = document.querySelector("#answer4")
  answer4.innerHTML = `The name and price of each item with the currency code of GBP: ${wdn}`
}

wdn()

//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

  var length = items.filter(function(eight){
    if (eight.materials.length >= 8) {
      return true
    }
  }).map(function(eight){
    return eight.title
  })

  var answer5 = document.querySelector("#answer5")
  answer5.innerHTML = `These guys have eight materials: ${length}`

//6. How many items were made by their sellers?

var made = items.filter(function(nbr){
    if (nbr.who_made === "i_did") {
      return true
    } 
  }).length

  var answer6 = document.querySelector("#answer6")
  answer6.innerHTML = `The number of items that were made in-house are: ${made}`

