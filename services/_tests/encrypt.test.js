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

        it('shifts the string "Brazil" to "CSBAJM" if the key is 1', () => {
            const val = encrypt.caesarCipher("Brazil", 1);
            expect(val).toEqual("CSBAJM");
        });

        it('throws an error if key is not a number', () => {
            expect(() => { encrypt.caesarCipher("a", "b") }).toThrowError();
        })
    });

    // Assignment 1: the encryption does not handle small case letters 
    // write a test to check encryption works for small case letters
    // for example "a" should be converted to "b" if the offset key is 1
    // once you have a failing test update the code to get the tests to pass
});
