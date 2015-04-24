// a();

// function a() {
// 	console.log("a");
// }

// var a = b;
// var b; // try commenting this line out
// console.log(b)

// console.log(a*b);

// var a = 5;
// var b = 3;

// console.log("a")
// function yell(word, anotherWord, yetAnotherWord) {
// 	console.log(word && word.toUpperCase());
// 	console.log(anotherWord && anotherWord.toUpperCase());
// 	console.log(yetAnotherWord && yetAnotherWord.toUpperCase());
// }
// yell("one", "two", "three");

// function echo() {
// 	console.log(arguments);
// }
// echo("one", "two", "three");
// echo("one", "two");

// function printWhatTimeItIs(activity) {
// 	console.log(activity, "time");
// }

// function printWhatTimeItWillBe(activity, wait) {
// 	setTimeout(function () {
// 		console.log(activity, "time");
// 	}, wait);
// }

// printWhatTimeItWillBe("dinner", 1000);

// function stop() {
// 	var result = "hammer time";
// 	return result;
// }

// stop();

var pastTime="pontification";

function stop(activity) {
	result = activity + " time";
	return result;
}

console.log(stop(pastTime));
console.log(result);