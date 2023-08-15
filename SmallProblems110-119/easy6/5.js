console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}