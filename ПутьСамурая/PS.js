function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// let p = new Promise(function (resolve, reject) {
//   let isGoodVideo = false;
//   if (isGoodVideo) {
//     resolve("Is video nise");
//   } else {
//     reject("Is video failed");
//   }
// });
// p.then((mess) => {
//   console.log("Mess:" + mess);
// }).catch((error) => {
//   console.warn("Error:" + error);
// });

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
	let NatLoveMger = true;

	if (MgerLoveNat && NatLoveMger) {
		resolve({
			life: "happiness",
			name: "hz",
		});
	} else {
		reject("H 	U 	I");
	}
});

// life
//   .then((mess) => {
//     console.log("Happy: " + mess.life);
//   })
//   .catch((error) => {
//     console.error("Err: " + error);
//   });

fetch("https://reqres.in/api/users")
	.then((response) => {
		if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
		return response.json();
	})
	.then((d) => {
		console.log(d);
		console.warn(d.data[3].first_name);
	})
	.catch((error) => console.error(error + " error"));

	console.log("start");

	// const promise1 = new Promise((resolve, reject) => {
	// 	console.log(1);
	// });

	// console.log("end");

	console.log('start');

const promise2 = new Promise((resolve, reject) => {
	console.log(1);
	resolve(2);
});

promise2.then((res) => {
	console.log(res);
});

console.log("end");




Promise.resolve(1).then((res) => {
	console.log(res);
});

Promise.resolve(2).then((res) => {
	console.log(res);
});

console.log("end");






















































































































































