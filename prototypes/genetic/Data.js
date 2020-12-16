function Data(){};

Data.prototype = {
    
    
    data : function(){
            var ROOMS = [['B100' , 25 , 'medtech'] , ['B200' , 15 , 'medtech'] , ['A002' , 60 , 'msb']] ;
            var SLOTS = ['8:30 - 9:30' , '9:40 - 10:40' , '13:40 - 14:40' , '14:50 - 15:50'] ;
            var PROFS = [['Pattie Ceresani'] , ['Salma Hamza'] , ['Amine Dakhli'] , ['Noura Gargani']] ;
            
            
            this.rooms = new ROOMS();
            this.slots = new SLOTS();
            this.profs = new PROFS();

            for (var i = 0; i < ROOMS.length; i++) {
            this.rooms.push(Room(i+1 , ROOMS[i][0] , ROOMS[i][1] , ROOMS[i][2])) ;
            }

            for (var i = 0; i < SLOTS.length; i++) {
            this.slots.push(Slot(i+1 , SLOTS[i])) ;
            }

            for (var i = 0; i < ROOMS.length; i++) {
            this.profs.push(Professor(i+1 , PROFS[i][0] , true )) ;
            }

            CS361 = Course(1,'CS361', [PROFS[0] , PROFS[3] ], 25) ;
            CS303 = Course(2,'CS303', [PROFS[1] , PROFS[2] ], 56) ;
            PHY241 = Course(3,'PHY241', [PROFS[2] , PROFS[3] ], 15) ;
            ECE264 = Course(4,'ECE264', [PROFS[0] , PROFS[1] ], 10) ;
            ISS361 = Course(5,'ISS361', [PROFS[0] , PROFS[2] ], 25) ;
            MATH101 = Course(6,'MATH101', [PROFS[3]], 9) ;

            this.courses = [CS361 , CS303 , PHY241 , ECE264 , ISS361 , MATH101] ;

            freshman = Group(1,'fresh' , [ECE264,MATH101]);
            sophomore = Group(2,'soph' , [ISS361,PHY241]);
            junior = Group(3,'jun' , [CS303,CS361]);

            this.groups = [freshman , sophomore , junior] ;

            this.classesNum = 0 ;

            for (var i = 0; i < this.groups.length; i++) {
            this.classesNum += this.groups[i].get_courses().length ;
            }

        }
}

module.exports = Data;
