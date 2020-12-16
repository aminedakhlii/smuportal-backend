function getenetic_algo(){}



getenetic_algo.prototype = {

    constructor : function(){
      this.POP_SIZE = 9 ;
      this.NBR_ELITE = 1 ;
      this.MUTATION_RATE = 0.1 ;
      this.TOURNAMENT_SEL_SIZE = 3 ;
    },



    evolve : function(population) {return this.mutatePopulation(this.crossoverPop(population)) ; },




    crossoverPop : function(population){
        crossoverP = Population(0) ;
        for (var i = 0; i < this.NBR_ELITE; i++) {
          crossoverP.schedules.push(population.schedules[i]) ;
        }
   
        i = this.NBR_ELITE ;
   
        while(i < this.POP_SIZE) {
          schedule1 = this.selectTournamentPop(population.schedules[0]) ;
          schedule2 = this.selectTournamentPop(population.schedules[0]) ;
          crossoverP.schedules.push(this.crosoverSchedule(schedule1,schedule2));
   
          i+=1;
        }
        return crossoverP;
    },

      


    mutatePopulation :function(population){
        for (var i = this.NBR_ELITE; i < this.POP_SIZE; i++) {
          this.mutateSchedule(population.schedules[i]);
        }
        return population;
    },



    //emchy l file Schedule.js fi hedhy 
    crosoverSchedule : function(schedule1,schedule2){
        crossoverSchedule = new schedule.init();// there is a problem here crossoverSchedule = Schedule().init()
                                              
        for (var i = 0; i < crosoverSchedule.classes.length; i++) {
   
          if(Math.random() > 0.5 ) crosoverSchedule.classes[i] = schedule1.classes[i] ;
          else crosoverSchedule.classes[i] = schedule2.classes[i] ;
   
        }
   
        return crosoverSchedule ;
    },




    mutateSchedule : function(sched) {
        temp = new schedule.init();
        for (var i = 0; i < sched.classes.length; i++) {
         if(this.MUTATION_RATE > Math.random()) sched.classes[i] = temp.classes[i] ;
        }
   
        return sched ;
    },



    selectTournamentPop : function(pop) {
        tournPop = Population(0);
        i=0 ;
        while (i < this.TOURNAMENT_SEL_SIZE) {
          tournPop.schedules.push(pop.schedules[Math.floor(Math.random() * this.POP_SIZE)]) ;
          i++ ;
        }
   
        var dict = {} ;
        var fits = [] ;
   
        for (var i = 0; i < tournPop.schedules.length; i++) {
            x = tournPop.schedule[i];
            y = tournPop.schedule[i].fitness();
            dict.push(x,y) ;
            fits.push(y) ;
        }
   
        fits.sort() ;
   
        finalTournPop = [] ;
   
        for (var i = 0; i < fits.length; i++) {
          for (let key in dict) {
            if(fits[i] == dict[key]) finalTournPop.push(key) ;
          }
        }
        
        return finalTournPop ;
    },



    // sort by key mekenet fi hata class zaama naamlelha file wahdou 
    sort_by_key: function(array, key){

        return array.sort(function(a, b)
        {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    },

}


module.exports = getenetic_algo;

