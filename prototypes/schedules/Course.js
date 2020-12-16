function Course(){}

Course.prototype = {

    init : function(max_num_OFstudent,id,instructor,name){

        this.max_num_OFstudent = max_num_OFstudent;
        this.id = id;
        this.instructor = instructor;
        this.name = name;
    }

}


module.exports = Course;