## Blockchain

[Share on Twitter](http://twitter.com/share?text=Blockchain%202%20via%20@pitsolu&url=https://pitsolu.github.io/static/redirects/dev/blog2.html)

Process of creating a block on the blockchain?
===

When miners try to compute a block, they pick all transactions that they want to be added in the block, plus one coinbase (generation) transaction to their address. They may include any transaction they want to form a tree of transactions later hashed into the merkle root and referenced into the block's header.

It is to note that for a block to be accepted by the network it needs to contain only valid transactions: inputs that are not yet spent, inputs that have the valid ammount, signature that verifies ok and etc...

After having a valid merkle root they build the block's header:

![Block Header Contents](../../images/block-header.png)
See more here to learn more on how to build the header.

Then this where your miner enters the game. It starts with the nonce at 0, hash (sha-256 2x) the block's header and then check if the hash in under the current target (if you are on a pool the share target). If not it increments the nonce and hash again. If the hash is under the current target YOU FOUND A BLOCK, you then transfer your block's header and the associated transactions' tree and the network accepts it. Because you had a coinbase transaction in your block paying to your bitcoin address those bitcoin then becomes yours.

It is to says that finding a block is rare so your miner will eventually run out of nonce to use you can then change parameter in your block header (more likely the timestamp) or add a extra nonce field in your transactions tree thus changing the merkle root.

As for which transactions are chosen to be part of a block, it is mostly the miners choice to include one or other transaction. But normally they would include transaction with a miners fee in it to gain more bitcoin, a miner could also choose not to include any transaction and only get the coinbase one. The propagation of ones transaction through the network also influence which transactions a miner do include.

Original answer via [Stack Exchange](https://bitcoin.stackexchange.com/questions/7330/whats-the-process-of-creating-a-block-on-the-blockchain)

Authored by [Gopoi](https://bitcoin.stackexchange.com/users/845/gopoi)

Date: March 22 2018