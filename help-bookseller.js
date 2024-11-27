// Not completed
function stockList(books, categories) {
  let bookListIndex = [];
  for (let index = 0; index < books.length; index++) {
    bookListIndex.push(books[index].charAt(0));
  }
  if (bookListIndex.includes(categories)) {
    return true;
  }
}
console.log(
  stockList(
    ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
    "A",
    "B",
    "C",
    "W"
  )
);

//const arr = [1, [2,3],[4, [5]]]
//const result = [].concat(...arr) // explain

// adding objects to string
