function giveEvens(ar){
    return ar.filter(a=>a%2==0) 
  }
  function giveOdds(ar){
    return ar.filter(a=>a%2==1) 
  }
  
  module.exports = {
    giveEvens,
    giveOdds
  }