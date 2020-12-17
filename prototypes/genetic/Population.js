const Schedule = require('../schedules/Schedule')

function Population(size,data){

        this.size = size ;
        this.schedules = [] ;

        for (var i = 0; i < size; i++) {
          var tmp = new Schedule(data) ;
          tmp.init() ;
          this.schedules.push(tmp) ;
        }

}

module.exports = Population;
