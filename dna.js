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

const pAequorFactory=(number,array)=>{
  return {
    'specimenNum': number,
    'dna': array,
    mutate(){
      let choseBase = this.dna[Math.floor(Math.random() * array.length)];
      while(choseBase===this.dna[Math.floor(Math.random() * array.length)]){
        choseBase=returnRandBase();
      }
      this.dna[Math.floor(Math.random() * array.length)]=choseBase;
    },
    compareDNA(aeqObj){
      let count=0;
      let origDNA= this.dna;
      let aeqDNA= aeqObj.dna;
      for(let i=0;i<origDNA.length;i++){
        if(origDNA[i]===aeqDNA[i]){
          count++;
        }
      }
      let percentage = Math.floor(count/origDNA.length*100);
      console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common`);
    },
    willLikelySurvive(){
      let origDNA = this.dna;
      let count = 0;
      for(let i=0;i<origDNA.length;i++){
        if(origDNA[i]==='C'||origDNA[i]==='G'){
          count++;
        }
      }
      if(count/origDNA.length>=0.6){
        return true;
      }else{
        return false;
      }
    }
  }
}

let samples = [];
for(let i=0;i<=30;i++){
  samples.push(pAequorFactory(i,mockUpStrand()));
}

console.log(samples[6].willLikelySurvive());
samples[1].compareDNA(samples[5]);








