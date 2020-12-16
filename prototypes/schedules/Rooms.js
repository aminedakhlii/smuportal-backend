function Rooms(){}

Rooms.prototype = {

    init : function(id,name,capacity,departement){

        this.id = id;
        this.name = name;
        this.capcity = capacity;
        this.departement = departement;
    }
}

module.exports = Romms;