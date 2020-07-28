class Encrypt {
    caesarCipher = (str, key) => {
        if (isNaN(key)) {
            throw new Error("Key must be a number");
        }

        return str
            .toUpperCase()
            .replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65));
    }
}

export default new Encrypt();
