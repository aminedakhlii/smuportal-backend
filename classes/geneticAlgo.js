/*const scheduleC = require('./scheduleClasses') ;

module.exports = class Population{

   constructor(size){

     this.size = size ;
     this.data = Data() ;
     this.schedules = [] ;

     for (var i = 0; i < size; i++) {
       this.schedules.push(scheduleC.Schedule.init()) ;
     }

   }
}

POP_SIZE = 9 ;
NBR_ELITE = 1 ;
MUTATION_RATE = 0.1 ;
TOURNAMENT_SEL_SIZE = 3 ;


module.exports = class Genitic_algo{
   constructor(){}

   evolve(population) {return this.mutatePopulation(this.crossoverPop(population)) ; }
   crossoverPop(population) {
     crossoverP = Population(0) ;
     for (var i = 0; i < NBR_ELITE; i++) {
       crossoverP.schedules.push(population.schedules[i]) ;
     }

     i = NBR_ELITE ;

     while(i < POP_SIZE) {
       schedule1 = this.selectTournamentPop(population.schedules[0]) ;
       schedule2 = this.selectTournamentPop(population.schedules[0]) ;
       crossoverP.schedules.push(this.crosoverSchedule(schedule1,schedule2));

       i+=1;
     }
     return crossoverP;
   }

   mutatePopulation(population){
     for (var i = NBR_ELITE; i < POP_SIZE; i++) {
       this.mutateSchedule(population.schedules[i]);
     }
     return population;
   }


   crosoverSchedule(schedule1,schedule2){
     crossoverSchedule = Schedule().init();

     for (var i = 0; i < crosoverSchedule.classes.length; i++) {

       if(Math.random() > 0.5 ) crosoverSchedule.classes[i] = schedule1.classes[i] ;
       else crosoverSchedule.classes[i] = schedule2.classes[i] ;

     }

     return crosoverSchedule ;
   }

   mutateSchedule(sched) {
     temp = Schedule().init() ;
     for (var i = 0; i < sched.classes.length; i++) {
      if(MUTATION_RATE > Math.random()) sched.classes[i] = temp.classes[i] ;
     }

     return sched ;
   }

   selectTournamentPop(pop) {
     tournPop = Population(0) ;
     i=0 ;
     while (i < TOURNAMENT_SEL_SIZE) {
       tournPop.schedules.push(pop.schedules[Math.floor(Math.random() * POP_SIZE)]) ;
       i++ ;
     }

     var dict = {} ;
     var fits = [] ;

     for (var i = 0; i < tournPop.schedules.length; i++) {
       var x = tournPop.schedules[i] ;
       var y = tournPop.schedules[i].fitness() ;
       dict.push({x , y}) ;
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
   }
}

// a  b  c
// fa fb fc

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });

}

*/
function Data() {};

Data.prototype = {

// this data is fake

   init : function() {



     var ROOMS = [['B100' , 25 , 'medtech'] , ['B200' , 15 , 'medtech'] , ['A002' , 60 , 'msb']] ;
     var SLOTS = ['8:30 - 9:30' , '9:40 - 10:40' , '13:40 - 14:40' , '14:50 - 15:50'] ;
     var PROFS = [['Pattie Ceresani'] , ['Salma Hamza'] , ['Amine Dakhli'] , ['Noura Gargani']] ;


     this.amine = ROOMS ;

      /*this.rooms = [] ;
      this.slots = [] ;
      this.profs = [] ;

      for (var i = 0; i < ROOMS.length; i++) {
        this.rooms.push(scheduleC.Room(i+1 , ROOMS[i][0] , ROOMS[i][1] , ROOMS[i][2])) ;
      }

      for (var i = 0; i < SLOTS.length; i++) {
        this.slots.push(scheduleC.Slot(i+1 , SLOTS[i])) ;
      }

      for (var i = 0; i < ROOMS.length; i++) {
        this.profs.push(scheduleC.Professor(i+1 , PROFS[i][0] , true )) ;
      }

      CS361 = scheduleC.Course(1,'CS361', [PROFS[0] , PROFS[3] ], 25) ;
      CS303 = scheduleC.Course(2,'CS303', [PROFS[1] , PROFS[2] ], 56) ;
      PHY241 = scheduleC.Course(3,'PHY241', [PROFS[2] , PROFS[3] ], 15) ;
      ECE264 = scheduleC.Course(4,'ECE264', [PROFS[0] , PROFS[1] ], 10) ;
      ISS361 = scheduleC.Course(5,'ISS361', [PROFS[0] , PROFS[2] ], 25) ;
      MATH101 = scheduleC.Course(6,'MATH101', [PROFS[3]], 9) ;

      this.courses = [CS361 , CS303 , PHY241 , ECE264 , ISS361 , MATH101] ;

      freshman = scheduleC.Group(1,'fresh' , [ECE264,MATH101]);
      sophomore = scheduleC.Group(2,'soph' , [ISS361,PHY241]);
      junior = scheduleC.Group(3,'jun' , [CS303,CS361]);

      this.groups = [freshman , sophomore , junior] ;

      this.classesNum = 0 ;

      for (var i = 0; i < this.groups.length; i++) {
        this.classesNum += this.groups[i].get_courses().length ;
      }
*/
   }

}

module.exports = Data ;
