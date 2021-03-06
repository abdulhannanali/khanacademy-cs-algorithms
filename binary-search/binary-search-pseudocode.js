/*
 *  Let min = 0 and max = n-1.
 *  If max < min, then stop: target is not present in array. Return -1.
 *  Compute guess as the average of max and min, rounded down (so that it is an integer).
 *  If array[guess] equals target, then stop. You found it! Return guess.
 *  If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
 *  Otherwise, the guess was too high. Set max = guess - 1.
 *  Go back to step 2.
 */