const Population = require('./Population') ;
const Schedule = require('../schedules/Schedule');

function Getenetic_algo(data){


    this.POP_SIZE = 9 ;
    this.NBR_ELITE = 1 ;
    this.MUTATION_RATE = 0.1 ;
    this.TOURNAMENT_SEL_SIZE = 3 ;
    this.data = data ;

    this.evolve = function(population) {
      return this.mutatePopulation(this.crossoverPop(population)) ;
    }


    this.crossoverPop = function(population){

        var crossoverP = new Population(0,this.data) ;

        for (var i = 0; i < this.NBR_ELITE; i++) {
          crossoverP.schedules.push(population.schedules[i]) ;
        }

        var i = this.NBR_ELITE ;

        while(i < this.POP_SIZE) {
          var schedule1 = this.selectTournamentPop(population) ;
          var schedule2 = this.selectTournamentPop(population) ;
          crossoverP.schedules.push(this.crosoverSchedule(schedule1,schedule2));

          i+=1;
        }
        return crossoverP;
    }




    this.mutatePopulation = function(population){
        for (var i = this.NBR_ELITE; i < this.POP_SIZE; i++) {
          this.mutateSchedule(population.schedules[i]);
        }
        return population;
    }



    //emchy l file Schedule.js fi hedhy
    this.crosoverSchedule = function(schedule1,schedule2){
        var crossoverSchedule = new Schedule(this.data) ;
        crossoverSchedule.init();

        for (var i = 0; i < crossoverSchedule.classes.length; i++) {

          if(Math.random() > 0.5 ) crossoverSchedule.classes[i] = schedule1.classes[i] ;
          else crossoverSchedule.classes[i] = schedule2.classes[i] ;

        }
        return crossoverSchedule ;
    }




    this.mutateSchedule = function(sched) {
        var temp = new Schedule(this.data) ;
        temp.init();

        for (var i = 0; i < sched.classes.length; i++) {
         if(this.MUTATION_RATE > Math.random()) sched.classes[i] = temp.classes[i] ;
        }

        return sched ;
    }



    this.selectTournamentPop = function(pop) {

        var tournPop = new Population(0,this.data);
        var i=0 ;
        while (i < this.TOURNAMENT_SEL_SIZE) {
          tournPop.schedules.push(pop.schedules[Math.floor(Math.random() * this.POP_SIZE)]) ;
          i += 1 ;
        }

        tournPop.schedules.sort(function(a,b){
          return b.fitness() - a.fitness() ;
        });

        return tournPop.schedules[0] ;
    }

}


module.exports = Getenetic_algo;
