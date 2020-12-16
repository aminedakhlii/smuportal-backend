function Classe(){};


Classe.prototype = {

    init : function(id,course,professor,slot,group,room){

        this.id = id;
        this.course = course;
        this.professor = professor;
        this.slot = slot;
        this.group = group;
        this.room = room;
    }
}

module.exports = Classe;