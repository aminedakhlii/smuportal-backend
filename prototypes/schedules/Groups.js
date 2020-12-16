function Group(){}

Group.prototype = {

    init : function(id,name,courses){
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
}


module.exports = Group;