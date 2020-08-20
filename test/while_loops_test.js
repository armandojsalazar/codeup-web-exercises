describe("powerOfTwo", function (){
    it('should return a defined function', function () {
        expect(typeof powerOfTwo).toBeDefined()
    });
    it('should not return undefined', function () {
        expect(powerOfTwo()).toBe(undefined)

    });
})
describe('sellCones', function (){
    it('should return as defined function.', function () {
        expect(typeof sellCones).toBeDefined();
    });
    it('should not return as undefined.', function () {
        expect(sellCones).toBe(undefined)
    });
})