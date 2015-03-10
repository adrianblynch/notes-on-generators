var generator = function*() {
	yield "Hello"
	yield "World"
	return "!"
}

var iterator = generator()

iterator = generator()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())