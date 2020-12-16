function Slot(){};


Slot.prototype = {

    init : function(id,time){
        this.id = id;
        this.time = time;
    }
}

module.exports = Slot;