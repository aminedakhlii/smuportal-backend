const Router = require("express").Router;
const Data = require('../../prototypes/genetic/Data') ;
const GeneticAlgo = require('../../prototypes/genetic/GeneticAlgo') ;
const Population = require('../../prototypes/genetic/Population') ;

const router = Router({
  mergeParams: true,
});

POP_SIZE = 9 ;
NBR_ELITE = 1 ;
MUTATION_RATE = 0.1 ;
TOURNAMENT_SEL_SIZE = 3 ;

router.get("/schedule", async (req, res) => {

  const data_ = new Data(true, function(data){

  var genNumber = 0 ;
  var population = new Population(POP_SIZE,data);

  population.schedules.sort(function(a,b){
    return b.fitness() - a.fitness() ;
  });

  var geneticAlgo = new GeneticAlgo(data) ;

  while(population.schedules[0].fitness() != 1){
    genNumber += 1 ;
    population = geneticAlgo.evolve(population) ;
    population.schedules.sort(function(a,b){
      return b.fitness() - a.fitness() ;
    });
  }

  population.schedules[0].display() ;

  });

  res.send('done');

});




module.exports = router;
