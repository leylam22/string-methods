//task1
// let text = "Robin Singh";
// const myArray = text.split(" ");
// console.log(myArray);

//task2
// function truncate_string(str, num) {
//     return str.substr(0, num);
//   }
// console.log(truncate_string("Robin Singh",4));  

//task3
// hidden_email = function (user_email) {
//     var avg, splitted, part1, part2
//     splitted = user_email.split("@")
//     part1 = splitted[0]
//     avg = part1.length / 2
//     part1 = part1.substring(0, (part1.length - avg))
//     part2 = splitted[1]
//     return part1 + "...@" + part2
// }
// console.log(hidden_email("robin_singh@example.com"))

//task4
// let text = "a"
// let result = text.repeat(4)
// console.log(result)

//task5
function search_word(text, word){
    var x = 0, y=0;
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return `'${word}' was found ${x} time`
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));




