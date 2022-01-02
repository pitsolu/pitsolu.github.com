# What is the Merkle root?

![Merkel Tree](../images/merkle-tree.png)

Every transaction has a hash associated with it. In a block, all of the transaction hashes in the block are themselves hashed (sometimes several times -- the exact process is complex), and the result is the Merkle root. In other words, the Merkle root is the hash of all the hashes of all the transactions in the block. The Merkle root is included in the block header. With this scheme, it is possible to securely verify that a transaction has been accepted by the network (and get the number of confirmations) by downloading just the tiny block headers and Merkle tree -- downloading the entire block chain is unnecessary. This feature is currently not used in Bitcoin, but it will be in the future.

How can you check if a transaction has been verified only using Merkle roots? How does that mechanism work?

The idea (as I understand it) is that the Merkle tree allows for you to verify transactions as needed and not include the body of every transaction in the block header, while still providing a way to verify the entire blockchain (and therefore proof of work) on every transaction.

To understand this, first understand the concept of a tree. Consider an 8 transaction block. Imagine each of those 8 transactions at the base of a pyramid: these are called leaves. Put four "branches" on the second tier of the pyramid and draw two lines from each of them to the leaves so that each branch has two leaves attached to it. Now join those four branches to two branches on pyramid level 3 and up to one branch (what is called the root of the tree) on the top of the pyramid. (Our tree is growing upside down in this example.)

Now we can start to understand the hashing process. Hash the hashes of the "leaves" and include that as part of the 2nd level branches that those leaves are attached to (these are called child nodes and parent nodes). Now hash the hashes of those hashes and include that as part of the third level branches. And so on. (And if you had more than 8 transactions, all you need are more levels to the pyramid.)

So now you have a root node that effectively has a hash that verifies the integrity of all of the transactions. If one transaction is added/removed or changed it will change the hash of its parent. Which will change the hash of its parent, and so on, resulting in the root node's hash (which is the Merkle root) changing as well.

So how does this help us with potentially not having to have the entire blockchain? Because we could verify the transactions as needed. If we have a transaction that claims to have been from block #234133 we can get the transactions for that block, verify the Merkle tree, and know that the transaction is valid. We can do that without necessarily knowing all of the transactions from #234132 or #234134 because we know that the blocks are tamper proof.

Even better, if we know where it is in the Merkle tree and we know the hashes of the branches we don't even need all of the transactions from #234132. (There were 868 in that block.) We start with just our transaction and its sibling (if it has one) and calculate the hash of those two and verify that it matches the expected value. From that we can ask for the sibling branch of that and calculate the hash of that and verify it. And continue with this process, up the tree. Which only takes ten verifications for 868 transactions. (That's one of the great things about trees, they can hold a lot of values with only a relatively small number of layers.)

How do we know that the source we are asking for this data from isn't lying to us about the hash values? Because a hash function is one-way there is no way that a deceptive party could guess a value that would hash with our second-to-last value to create the Merkle root. (Which we know from our verified blockchain.) And so on, down the tree: there's no way to create a fake value that would hash to our expected value.

In short, the Merkle tree creates a single value that proves the integrity of all of the transactions under it. Satoshi could have just included the hash of a big list of all of the transactions in the Bitcoin header. But if he had done that that would have required you to hash the entire list of transactions in order to verify its integrity. With this way, even if there are an extremely large number of transactions the work you need to do (and the number of hashes you need to request/download) in order to verify the integrity is only log(O).

[As always, feel free to edit this. This is primarily just inference on my part from looking at the spec.]

Original answer via [Stack Exchange](https://bitcoin.stackexchange.com/questions/10479/what-is-the-merkle-root)

Authored by: [David Ogren](https://bitcoin.stackexchange.com/users/3439/david-ogren)

Edited by: [Pi Delport](https://bitcoin.stackexchange.com/users/9529/pi-delport)

Date: Jan 18 2018