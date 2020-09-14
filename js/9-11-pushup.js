var items = [
  {
    product: "Xbox",
    price: 500,
    quantity: 20
  },
  {
    product: "PS4",
    price: 500,
    quantity: 30
  },
  {
    product: "Nintendo Switch",
    price: "$399",
    quantity: "15"
  }
]

var findTheGreatest = function(items) {
  var greatest = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].price > greatest) {
      greatest = items[i].price
    }
  }
}
console.log(findTheGreatest(items))

var findTheLeast = function(items) {
  var least = Infinity;
  for (var i = 0; i < items.length; i++) {
    if (items[i].price < least) {
      least = items[i].price
    }
  }
}
console.log(findTheLeast(items))