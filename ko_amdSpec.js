
    /** Unit Tests - 
     * to be moved to its own files
     */

    describe("Knockout Unit Testing", function () {
        beforeEach(function () {
          newEntryFirstName = ko.observable('David');
          newEntryLastName = ko.observable('Shams');
          list = ko.observableArray([]);
        });
        it("Frist name should be David, last name should be Shams", function () {
          expect(newEntryFirstName).toBe("David");
          expect(newEntryLastName).toBe("Shams");
        })
      })