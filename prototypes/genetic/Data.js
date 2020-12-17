const Room = require('../schedules/Rooms');
const Course = require('../schedules/Course');
const Professor = require('../schedules/Professor');
const Slot = require('../schedules/Slot');
const Group = require('../schedules/Groups');



function Data(){

            this.rooms = [] ;
            this.slots = [] ;
            this.profs = [] ;

            var ROOMS = [['B100' , 25 , 'medtech'] , ['B200' , 15 , 'medtech'] , ['A002' , 60 , 'msb']] ;
            var SLOTS = ['8:30 - 9:30' , '9:40 - 10:40' , '13:40 - 14:40' , '14:50 - 15:50'] ;
            var PROFS = [['Pattie Ceresani'] , ['Salma Hamza'] , ['Amine Dakhli'] , ['Noura Gargani']] ;


            for (var i = 0; i < ROOMS.length; i++) {
              this.rooms.push(new Room(i+1 , ROOMS[i][0] , ROOMS[i][1] , ROOMS[i][2])) ;
            }

            for (var i = 0; i < SLOTS.length; i++) {
              this.slots.push(new Slot(i+1 , SLOTS[i])) ;
            }

            for (var i = 0; i < PROFS.length; i++) {
              this.profs.push(new Professor(i+1 , PROFS[i][0] , true )) ;
            }

            CS361 = new Course(1,'CS361', [this.profs[0] , this.profs[3] ], 25) ;
            CS303 = new Course(2,'CS303', [this.profs[1] , this.profs[2] ], 56) ;
            PHY241 = new Course(3,'PHY241', [this.profs[2] , this.profs[3] ], 15) ;
            ECE264 = new Course(4,'ECE264', [this.profs[0] , this.profs[1] ], 10) ;
            ISS361 = new Course(5,'ISS361', [this.profs[0] , this.profs[2] ], 25) ;
            MATH101 = new Course(6,'MATH101', [this.profs[3]], 9) ;

            this.courses = [CS361 , CS303 , PHY241 , ECE264 , ISS361 , MATH101] ;

            freshman = new Group(1,'fresh' , [ECE264,MATH101]);
            sophomore = new Group(2,'soph' , [ISS361,PHY241]);
            junior = new Group(3,'jun' , [CS303,CS361]);

            this.groups = [freshman , sophomore , junior] ;

            this.classesNum = 0 ;

            for (var i = 0; i < this.groups.length; i++) {
              this.classesNum += this.groups[i].courses.length ;
            }

}

module.exports = Data;
