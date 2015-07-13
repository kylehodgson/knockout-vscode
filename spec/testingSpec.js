describe("app", function() {
	it("has a working test harness", function() {
		expect(true).toBe(true);
	})
});

describe("Person Name", function() {
  it("computes fullName based on firstName and lastName", function() {
    var target = new PersonNameViewModel("Ada","Lovelace");
    expect(target.fullName()).toBe("Ada Lovelace");
  });
});
