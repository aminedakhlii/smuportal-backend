function schedule(){}


schedule.prototype = {


    constructor : function(data){

        this.num_of_conf = 0;
        this.data = data;
        this.number_of_classes = 0;
        this.classes = [];
        this.fitness = -1 ;

    },


    init : function(){ // hedhy kenet ismha init()
        this.groups = this.data.groups;
      for (var i = 0; i < this.groups.length; i++) {
        var courses = groups[i].get_courses() ;
        for (var j = 0; j < courses.length; j++) {
          var newClass = Classe(number_of_classes , courses[j] , data.rooms[Math.floor(Math.random() * data.rooms.length)] ,
          courses[j].get_instructor()[Math.floor(Math.random() * courses[j].get_instructor().length)] ,
          data.slots[Math.floor(Math.random() * data.slots.length)] , this.groups[i]) ;

          this.classes.push(newClass) ;
        }
      }
    },

    fitness : function(){

        for(let i = 0 ; i < length(this.classe);i++){
           if(this.classe.room.capcity < this.classe.course.max_num_student){
               this.num_of_conf++;
            }

            for(let j = i+1 ; j < length(this.classe); j++){
                if(this.classe[i].slot == this.classe[j].slot){
                    if(this.classe[i].room == this.classe[j].room){
                        this.num_of_conf++;
                    }
                    if(this.classe[i].proffesor == this.classe[j].proffesor){
                        this.num_of_conf++;
                    }
                }
            }
        }
        return 1 / this.num_of_conf + 1;
    }
}


module.exports = schedule;