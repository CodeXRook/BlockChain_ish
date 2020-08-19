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
        this.chain = [];
    }
}