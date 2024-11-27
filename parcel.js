// Not completed
function makeChocolates(small, big, goal) {
  let numOfBigBars = Math.min(big, Math.floor(goal / 5));
  let totalContributionFromBigBar = numOfBigBars * 5;
  let remainingValue = goal - totalContributionFromBigBar;
  let numOfSmallBarsNeeded = remainingValue % 2 == 0 ? remainingValue / 2 : 0;
  //let totalContributionFromSmallBar = numOfSmallBarsNeeded * small;
  //let totalContribution =
  //totalContributionFromBigBar + totalContributionFromSmallBar;

  if (remainingValue) {
    if (Number.isInteger(numOfSmallBarsNeeded)) {
      return numOfSmallBarsNeeded;
    } else {
      return -1;
    }
  } else if (remainingValue % 2 == 0) {
    return numOfSmallBarsNeeded;
  } else {
    return -1;
  }
}

console.log(makeChocolates(8, 0, 7));
