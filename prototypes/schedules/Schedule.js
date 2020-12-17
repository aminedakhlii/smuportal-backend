const Classe = require('./Classe');

function Schedule(data){

    this.num_of_conf = 0;
    this.data = data;
    this.number_of_classes = 0;
    this.classes = [];
    this.fitness = -1 ;

    this.init = function(){

        for (var i = 0; i < this.data.groups.length; i++) {

            var courses = data.groups[i].courses ;

            for (var j = 0; j < courses.length; j++) {

              let id = this.number_of_classes + 1 ;

              var newClass = new Classe(
                                id,
                                courses[j],
                                courses[j].instructors[Math.floor(Math.random() * courses[j].instructors.length)],
                                this.data.slots[Math.floor(Math.random() * this.data.slots.length)],
                                this.data.groups[Math.floor(Math.random() * this.data.groups.length)],
                                this.data.rooms[Math.floor(Math.random() * this.data.rooms.length)]);

                            this.number_of_classes += 1 ;

                this.classes.push(newClass) ;
            }
      }

    }

    this.display = function() {
      console.log('Schedule : \n');
      for (var i = 0; i < this.classes.length; i++) {
        let c = this.classes[i] ;
        console.log(c.course.name + "-----" + c.slot.time + "-----" + c.professor.name + "-----" + c.room.name + "-----" +
                c.course.max_num_OFstudent + "-----" + c.room.capacity);
      }
      console.log(this.fitness() + '\n');
    }

    this.fitness = function(){

        for(let i = 0 ; i < this.classes.length;i++){
           if(this.classes[i].room.capacity < this.classes[i].course.max_num_OFstudent){
               this.num_of_conf++;
            }

            for(let j = i+1 ; j < this.classes.length; j++){
                if(this.classes[i].slot.id == this.classes[j].slot.id){
                    if(this.classes[i].room.id == this.classes[j].room.id){
                        this.num_of_conf++;
                    }
                    if(this.classes[i].professor.id == this.classes[j].professor.id){
                        this.num_of_conf++;
                    }
                }
            }
        }
        return 1 / (this.num_of_conf + 1);
    }
}


module.exports = Schedule;
