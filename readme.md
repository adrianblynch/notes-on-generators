# Notes on generators

My notes as I read through [The Definitive Guide to the JavaScript Generators](http://gajus.com/blog/2/the-definitive-guide-to-the-javascript-generators).

- Generators return iterators

	Code >>>
	
		generator = function * () {

		}; // A generator

		iterator = gen(); // Calling a generator returns an iterator object

- The generator is not run when called:

	Code >>>

		generator = function * () {
			console.log("Inside the generator");
		};

		console.log("Before");
		iterator = gen();
		console.log("After");

	Console >>>

		Before
		After

- Calling iterator.next() advances the execution of the generator body:

	Code >>>

		generator = function * () {
			console.log("Inside the generator");
		};

		console.log("Before");
		iterator = gen();
		console.log("After");

		iterator.next();

		console.log("After next");

	Console >>>

		Before
		After
		Inside the generator
		After next

- iterator.next() returns a progress object in the form:

	Code >>>

		console.log(iterator.next());

	Console >>>

		{value: undefined, done: true}

- The done property is true when the generator body has been run to completion.

- The yield keywork is used to suspend execution of the generator body and return execution to the iterator object.

- When the generator is suspended, it does not block the event queue.

- Values can be yielded to the iterator:

	Code >>>

		generator = function * () {
			yield "Hello";
			yield "World";
		};

		iterator = gen();

		console.log(iterator.next());
		console.log(iterator.next());
		console.log(iterator.next());

	Console >>>

		{value: "Hello",   done: false}
		{value: "World",   done: false}
		{value: undefined, done: true}

- The above generator yields twice, the first time yielding Hello, the second time World. The third call to next() results in done being false and an undefined value as nothing was yielded.

- Anything can be yielded, numbers, arrays, strings, objects.

- When a generator is advanced to completion, the return keyword can be used to return a final value:

	Code >>>

		generator = function * () {
			yield "Hello";
			yield "World";
			return "!";
		};

		iterator = gen();

		console.log(iterator.next());
		console.log(iterator.next());
		console.log(iterator.next());

	Console >>>

		{value: "Hello", done: false}
		{value: "World", done: false}
		{value: "!",     done: true}
