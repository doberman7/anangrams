// let array = ["dell", "ledl", "abc", "cba"]
// let array = ["dell", "ledl", "abc", "cba", "bca", "bac"]
// let array = ['dell', 'ledl', 'abc', 'cba']//2
// let array = ['dell', 'ledl', 'lled', 'cba']//3
let array = ['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab'] //11
function anagramCounter(array) {
  let anagrams = []
  let res = 0
  let pares = []
  array.forEach((item, i) => {

    let w = item.split("");
    w.sort();
    let wrd = w.join("")
    //nextTword

    for (var index = 1; index < array.length; index++) {
      let nextWord = array[index]
      if (typeof nextWord === 'string') {

        let nxtwrd = nextWord.split("");
        nxtwrd.sort();
        let next = nxtwrd.join("")
        console.log(next);
        if (wrd == next && item != nextWord) {

          // console.log(wrd, nextWord)
          // let compW = [item, nextWord].sort()
          // pares.push(compW)


          // pares.forEach((par, indx) => {
          //   console.log(par, par === compW, compW)
          //   if (par == compW) {
          //     res += 1
          //     console.log(res);
          //   } else {
          //
          //   }
          //
          // });




          // console.log(item, nextWord);

          // console.log(res += 1 );
        }
        // console.log(res);

      }
    }

  });

}


anagramCounter(array)
