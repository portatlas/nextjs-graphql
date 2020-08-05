import encrypt from '../encrypt';

describe('Encrypt', () => {
    describe('caesarCiper', () => {
        it('does not shifts the string if one is not provided', () => {
            const val = encrypt.caesarCipher("", 1);
            expect(val).toEqual("");
        });

        it('shifts the string "A" to "B" if the key is 1', () => {
            const val = encrypt.caesarCipher("a", 1);
            expect(val).toEqual("B");
        });

        // Exercise 1: As a warm up excercise write a test for a more complex string
        // Unit tests is a documentation of how your code works
        // Additionally, writing unit tests allow you to test out corner cases
        // As your write out some more tests for the caesarCipher want are some of the limitions
        // for this current implementation
        it('shifts the entire alphabet and uppercases', () => {
            const val = encrypt.caesarCipher("zabcdefghijkl", 1);
            expect(val).toEqual("ABCDEFGHIJKLM");
        });

        it('throws an error if key is not a number', () => {
            expect(() => encrypt.caesarCipher("zabcdefghijkl", "a")).toThrowError();
        });
    });
});
