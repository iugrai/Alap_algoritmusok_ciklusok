console.log('Feladat1');

const nums = [3, 4, 9, 6, 2];
for (let i = 0; i < nums.length; i++) {

  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ': osztható');
  }
  else (console.log(nums[i] + ': nem osztható'))
}

console.log('Feladat2')

const players = ['Peter', 'Kate', 'John'];
for (let i = 0; i < players.length; i++) {

  console.log((i + 1) + '. ' + players[i]);
}

console.log('Feladat3')

const x = ['alma', 4, true];

function Kivalaszt() {
  const test = 3;
  const a = [];
  for (let i = 0; i < test; i++) {
    a.push(typeof (x[i]));
  }
  return a;
}
console.log(Kivalaszt());