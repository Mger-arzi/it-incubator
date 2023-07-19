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

let MgerLoveNat = true;
let NatLoveMger = false;

// function LifeMgerAndNat(life, error) {
//   if (MgerLoveNat && NatLoveMger) {
//     life({
//       life: "happiness",
//       name: "HZ",
//     });
//   } else error("Hyi vam");
// }

// LifeMgerAndNat(
//   (mess) => {
//     console.log("life " + mess.life);
//   },
//   (error) => {
//     console.warn("Err " + error);
//   }
// );

let life = new Promise(function (resolve, reject) {
  let MgerLoveNat = true;
  let NatLoveMger = false;

  if (MgerLoveNat && NatLoveMger) {
    resolve("happiness");
  } else {
    reject("H 	U 	I");
  }
});

life
  .then((mess) => {
    console.log("Happi: " + mess);
  })
  .catch((error) => {
    console.warn("Err: " + error);
  });
