// run `node index.js` in the terminal
for (let i = 1; i <= 100; i++) {

  if (i % (3 * 5) == 0) {
    console.log(`${i} ==> Amazon`);
    i = i + 1;
  }

  if (i % 3 == 0) {
    console.log(`${i} ==> Google`);
    i = i + 1;
  }
  if (i % 5 == 0) {
    console.log(`${i} ==> Facebook`);
    i = i + 1;
  }

  console.log(i);
}

// console.log(`Hello Node.js v${process.versions.node}!`);
