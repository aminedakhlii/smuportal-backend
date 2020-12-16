function Population(){};

Population.prototype = {

    popul : function(size,data) {

        this.size = size ;
        this.data = data;
        this.schedules = [] ;


        for (var i = 0; i < size; i++) {
        this.schedules.push(Schedule.init()) ;

        }
    }
}

module.exports = Population;
