describe ('Javabuzz', function() {

	var javabuzz;
	beforeEach(function(){
		javabuzz = new Javabuzz();
	});

	describe ('knows when a number is', function() {

		it('divisible by 3', function() {
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);

		});

		it ('not divisible by 3', function (){
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false);

		});

		it('divisible by 5', function(){
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);


		});

		it('not divisible by 5', function(){
			expect(javabuzz.isDivisibleByFive(1)).toEqual(false);

		});

	});

});