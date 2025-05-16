## Blockchain

[Share on Twitter](http://twitter.com/share?text=Blockchain%20via%20@pitsolu&url=https://pitsolu.github.io/static/redirects/dev/blog1.html)

Block weight derives from difficulty
===

The difficulty encodes how likely one try is at producing a valid block. Let's say the difficulty starts out at 1%, i.e. one try in one hundred should succeed and we'll call this a difficulty of 100.
With a 1% chance of success, you could succeed with your first try, but it could also take you 200 tries. However, it wasn't harder or easier to succeed because you were lucky or unlucky! So, however many tries actually took place until the block was found, the block will have a weight of "100 difficulty" when it is found.

### How does Difficulty change?
Obviously, when people add more computing power to the network, more tries per second will be performed. Since each try has a chance of succeeding (e.g. 1% from above), more computing power will cause a block to be found quicker. This is still a probabilistic process, so sometimes it might be slower than the previous average time, but the new average time will be lower.
If nothing were done about it, the blocks would just get faster and faster, as more mining power gets added to the network.
Therefore, difficulty will readjust automatically every 2016 blocks, that is approx. 14 days at 10 minutes per block. To that end, we calculate:

### How long did it take to find those last 2016 blocks?
If the total time was shorter than the aim of 14 days, the difficulty increases. If it was slower, the difficulty decreases.
The new difficulty is set such that the next 2016 blocks should take 14 days, if the mining power stays the same as the last 14 days.
Let's say, it took only 7 days to find 2016 blocks. The difficulty now doubles to 200.

### How do two blockchain tips compare in "length"?
Let's say we have two competing blockchain tips: They both start from Block 1 as a parent, but then there are two different blocks found at the same time: Block 2A and Block 2B. Both blocks have the same difficulty level, and as we learned above this is independent of when exactly they were found. Therefore, the total difficulty of chain A and B will be the same, as Block 1 + Block 2A = Block 1 + Block 2B. One of the two chains will have a greater total difficulty once either Block 3A or Block 3B will be found. Since in general blocks at the same height have the same difficulty statement, the total difficulty of two chains at the same height is the same. This is why many people just talk of the "length" of the chain, to describe which chain has the greatest total difficulty.

The sole exception is when two competing blocks occur at the height of a difficulty retarget: Since they would have slightly different timestamps, the new difficulties for their children could differ, and the one with the higher total difficulty could replace the other even at the same height.

Original answer on [Stack Exchange](https://bitcoin.stackexchange.com/questions/40411/can-a-smart-mind-explain-block-difficulty-calculation-in-lay-terms)

Authored by [Murch](https://bitcoin.stackexchange.com/users/5406/murch)

Date Jan 20th 2018