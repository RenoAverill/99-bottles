function bottleSong() {
  let bottles = 99;
  while (bottles > 1) {
    console.log(`${bottles} bottles of beer on the wall, ${bottles} of beer.`)
    console.log(`Take one down and pass it around, ${bottles} of beer on the wall.`)
    bottles--
  }
  console.log('Take one down and pass it around, 1 bottle of beer on the wall.')
  console.log('1 bottle of beer on the wall, 1 bottle of beer.')
  console.log('Take one down and pass it around, no more bottles of beer on the wall.')
  console.log('No more bottles of beer on the wall, no more bottles of beer.')
  console.log('Go to the store and buy some more, 99 bottles of beer on the wall.')
};

bottleSong();
