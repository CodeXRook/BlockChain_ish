const lightningHash = (data) => {
    return data + '*';
}

class Block {
    constructor(data, hash, lastHash) {
      this.data = data;
      this.hash = hash;
      this.lastHash = lastHash;
    }
}
class Blockchain {
    constructor () {
        const genesis = new Block('gen-data', 'gen-hash', 'gen-lastHash');


        this.chain = [genesis];
    }
}