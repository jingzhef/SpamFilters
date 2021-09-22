const test1 = {
  truePositives: 1,
  falsePositives: 6,
  trueNegatives: 3,
  falseNegatives: 2,
}

const test2 = {
  truePositives: 6,
  trueNegatives: 4,
  falsePositives: 12,
  falseNegatives: 8,
}

function analyzeSpamFilter(a1, a2) {

  let finalTP = _.reduce([a1, a2], function (n, m) {return n.truePositives + m.truePositives;});
  let finalTN = _.reduce([a1, a2], function (n, m) {return n.trueNegatives + m.trueNegatives;});
  let finalFP = _.reduce([a1, a2], function (n, m) {return n.falsePositives + m.falsePositives;});
  let finalFN = _.reduce([a1, a2], function (n, m) {return n.falseNegatives + m.falseNegatives;});
  //final.push(finalTP);
  //final.push(finalTN);
  //final.push(finalFP);
  //final.push(finalFN);
  let final = {
    TruePositives: finalTP,
    trueNegatives: finalTN,
    falsePositives: finalFP,
    falseNegatives: finalFN,
  };

  return final;

}

console.log(analyzeSpamFilter(test1, test2));
