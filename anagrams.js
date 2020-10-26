// let array = ["dell", "ledl", "abc", "cba"]
// let array = ["dell", "ledl", "abc", "cba", "bca", "bac"]
// let array = ['dell', 'ledl', 'abc', 'cba']//2
let array = ['dell', 'ledl', 'lled', 'cba']//3
// let array = ['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab'] //11
let y = []
let res = 0
function anagramCounter(array) {
  array.forEach((word, index) => {
    let wordInArray = word.split("");
    wordInArray.sort();
    array.forEach((w, i) => {
      if (wordInArray.join("")!= w) {
        //si la palabra del array es diferente a cada unad las palabras
        let compar = w.split("").sort().join("")
        if (wordInArray.join("") == compar) {
          y.push(compar);



        }

      }


    });

  });
  for (var i = 0; i < y.length; i++) {
    console.log(y[i]== y[i++]);
    res+=1
  }

  console.log(y, res)
}


anagramCounter(array)
