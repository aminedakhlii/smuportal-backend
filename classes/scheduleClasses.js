

class Classe{

    constructor(id,course,room,professor,slot,group){
        this.id = id;
        this.course = course;
        this.professor = professor;
        this.slot = slot;
        this.group = group;
        this.room = room;
    }

}


class Course{

    constructor(id,name,instructor,max_num_OFstudent){
        this.max_num_OFstudent = max_num_OFstudent;
        this.id = id;
        this.instructor = instructor;
        this.name = name
    }
    get_id(){
        return this.id;
    }
    get_name(){
        return this.name;
    }
    get_instructor(){
        return this.instructor;
    }
    get_max_num_OFstudent(){
        return this.max_num_OFstudent;
    }
}


class Professor{

    constructor(id,name,full_part,available){
        this.id =id;
        this.name = name;
        this.full_part = full_part;
    }

    // to be discused:
    set_avail(){
        if(this.full_part == true){

            this.available = true;
        }
        //later
        else{
            this.available = input;
        }
    }

    get_id(){
        return this.id;
    }

    get_name(){
        return this.name;
    }
}



// room class:

class Room{
    constructor(id,name,capcity,departement){
        this.id = id;
        this.name = name;
        this.capcity = capcity;
        this.departement = departement;
    }

    is_amphi(){
       if(this.capcity >=50){
           return true;
       }
       else{return false;}
    }

    get_name(){
        return this.name;
    }

    get_id(){
        return this.id;
    }
    get_capacity(){
        return this.capcity;
    }
    get_departement(){
        return this.departement;
    }
}


class Group{

    constructor(id,name,courses){
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    get_id(){
        return this.id;
    }

    get_name(){
        return this.name;
    }

    get_courses(){
        return this.courses;
    }
}



class Slot{

    constructor(id,time){
        this.id = id;
        this.time = time;
    }

    get_id(){
        return this.id;
    }

    get_time(){
        return this.time;
    }
}

class Schedule{

    constructor(data){
        this.num_of_conf = 0;
        this.data = data;
        this.number_of_classes = 0;
        this.classes = [];
        this.fitness = -1 ;
    }

    init() {
      this.groups = this.data.groups ;
      for (var i = 0; i < this.groups.length; i++) {
        var courses = groups[i].get_courses() ;
        for (var j = 0; j < courses.length; j++) {
          var newClass = Classe(number_of_classes , courses[j] , data.rooms[Math.floor(Math.random() * data.rooms.length)] ,
          courses[j].get_instructor()[Math.floor(Math.random() * courses[j].get_instructor().length)] ,
          data.slots[Math.floor(Math.random() * data.slots.length)] , this.groups[i]) ;

          this.classes.push(newClass) ;
        }
      }
    }

    is_fitness_changed(){
        // mezelna mekolnesh chfama lena
        return 0;
    }

    // fitness function
    fitness(){
        this.num_of_conf = 0;
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


