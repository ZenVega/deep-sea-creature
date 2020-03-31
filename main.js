creatureArr = [];

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//factory for organisms
  const pAequorFactory = (num, arr) => {
const creature = {
  specimenNum: num,
  dna: arr,
  mutate() {
    let mutated = false;
    do {
      let newBase = returnRandBase();
      let newIndex = Math.floor(Math.random()*15); 
      if(this.dna[newIndex] != newBase) { 
        this.dna[newIndex] = newBase
        mutated = true;
      } 
    } while (mutated = false);
  },
  compareDNA(pAequor) {
    let DNA1 = this.dna;
    let DNA2 = pAequor.dna;
    let match = [];
    for(let i in this.dna) {
      (DNA1[i] == DNA2[i])? match[i] = 1 : match[i] = 0;
    };
    let percentage = (match.reduce((a, c) => a + c,0))/15*100;
    let hits = [];
    for (let i in match) {
      if(match[i]) {hits.push(i)}
    }
    console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
  },
  willLikelySurvive() {
    let cgBases = this.dna.reduce((acc, toSum) => {
      if(toSum == 'C' || toSum == 'G') {acc += 1}return acc}, 0);
    let percentage = cgBases/15*100;
    if(percentage >= 60) {return true} else {return false};
  },
}
creatureArr.push(creature);
return creature;
  };

  let index = 0;
  let survivors = [];

  do{
    let newBug = pAequorFactory(index,mockUpStrand());
    index++;
    if(newBug.willLikelySurvive()) {
      survivors.push(newBug);
    }
  } while (survivors.length < 30);

  
  let survivorNums = survivors.reduce((acc, num) => {
    let ind = num.specimenNum;
    acc.push(ind); 
    return acc;
  }, []);


creatureArr[1].compareDNA(creatureArr[2])


// check for individuals to survive
console.log(creatureArr);

console.log(survivors);

console.log(`The Specimen with the numbers :${survivorNums.join(' /')} will likely survive`)

