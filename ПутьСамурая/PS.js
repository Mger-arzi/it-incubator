function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

let p = new Promise(function (resolve, reject) {
  let isGoodVideo = false;
  if (isGoodVideo) {
    resolve("Is video nise");
  } else {
    reject("Is video failed");
  }
});
p.then((mess) => {
  console.log("Mess:" + mess);
}).catch((error) => {
  console.warn("Error:" + error);
});
