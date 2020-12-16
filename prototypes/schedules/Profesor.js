function Profesor(){}

Profesor.prototype = {

    init : function(id,name,full_part){

        this.id =id;
        this.name= name;
        this.full_part = full_part;
    }
}


module.exports = Profesor;