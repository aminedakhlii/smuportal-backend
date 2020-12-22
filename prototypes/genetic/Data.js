const Room = require('../schedules/Rooms');
const Course = require('../schedules/Course');
const Professor = require('../schedules/Professor');
const Slot = require('../schedules/Slot');
const Group = require('../schedules/Groups');
const Csv = require('csv-parser');
const fs = require('fs');
var path = require('path');


async function fillCsv(filename,callback) {
  var res = [] ;
  await fs.createReadStream(path.join(__dirname , '../../csvs/new/generated/') + filename)
    .pipe(Csv())
    .on('data', (data) => res.push(data))
    .on('end', () => {
      callback(res) ;
    });

}


function Data(fromCSV, callback){

            this.rooms = [] ;
            this.slots = [] ;
            this.profs = [] ;
            this.courses = [] ;
            this.groups = [] ;

            this.proceed = function(ROOMS,PROFS,SLOTS,COURSES,GROUPS) {

              for (var i = 0; i < ROOMS.length; i++) {
                  this.rooms.push(new Room(i+1 , ROOMS[i].ROOM , parseInt(ROOMS[i].CAPACITY) , ROOMS[i].DEPARTEMENT)) ;
                }

              for (var i = 0; i < SLOTS.length; i++) {
                  this.slots.push(new Slot(i+1 , SLOTS[i].TIME)) ;
                }

              for (var i = 0; i < PROFS.length; i++) {
                  this.profs.push(new Professor(i+1 , PROFS[i].NAME , true )) ;
                }

              for (var i = 0; i < COURSES.length; i++) {

                let tmpprofs = [] ;

                let tmpstr = COURSES[i].PROF.split("*") ;

                for (var j = 0; j < tmpstr.length; j++) {
                  if(parseInt(tmpstr[j]) != -1)
                    tmpprofs.push(this.profs[parseInt(tmpstr[j]) - 1]);
                }

                this.courses.push(new Course(i+1, COURSES[i].CODE , tmpprofs , COURSES[i].MAX )) ;
              }

              for (var i = 0; i < GROUPS.length; i++) {

                let tmpCourses = [] ;

                let tmpstr = GROUPS[i].COURSES.split("*") ;

                for (var j = 0; j < tmpstr.length; j++) {
                  tmpCourses.push(this.courses[parseInt(tmpstr[j]) - 1]);
                }

                this.groups.push(new Group(i+1, GROUPS[i].LEVEL , tmpCourses)) ;
              }


              /*CS361 = new Course(1,'CS361', [this.profs[0] , this.profs[3] ], 25) ;
              CS303 = new Course(2,'CS303', [this.profs[1] , this.profs[2] ], 56) ;
              PHY241 = new Course(3,'PHY241', [this.profs[2] , this.profs[3] ], 15) ;
              ECE264 = new Course(4,'ECE264', [this.profs[0] , this.profs[1] ], 10) ;
              ISS361 = new Course(5,'ISS361', [this.profs[0] , this.profs[2] ], 25) ;
              MATH101 = new Course(6,'MATH101', [this.profs[3]], 9) ;

              this.courses = [CS361 , CS303 , PHY241 , ECE264 , ISS361 , MATH101] ;

              freshman = new Group(1,'fresh' , [ECE264,MATH101]);
              sophomore = new Group(2,'soph' , [ISS361,PHY241]);
              junior = new Group(3,'jun' , [CS303,CS361]);

              this.groups = [freshman , sophomore , junior] ;*/

              this.classesNum = 0 ;

              for (var i = 0; i < this.groups.length; i++) {
                this.classesNum += this.groups[i].courses.length ;
              }

            }

            if(fromCSV) {

                var ROOMS = [] ;
                var PROFS = [] ;
                var SLOTS = [] ;
                var COURSES = [] ;
                var GROUPS = [] ;

                self = this ;

                fillCsv('/rooms.csv', function(ret){
                  ROOMS = ret ;
                  fillCsv('/profs.csv', function(ret){
                    PROFS = ret ;
                    fillCsv('/slots.csv', function(ret){
                      SLOTS = ret ;
                      fillCsv('/courses.csv', function(ret){
                        COURSES = ret ;
                        fillCsv('/groups.csv', function(ret){
                          GROUPS = ret ;
                            self.proceed(ROOMS,PROFS,SLOTS,COURSES,GROUPS);
                            callback(self);
                        });
                      });
                    });
                  });
                });

            }

            else {

            var ROOMS = [['B100' , 25 , 'medtech'] , ['B200' , 15 , 'medtech'] , ['A002' , 60 , 'msb']] ;
            var SLOTS = ['8:30 - 9:30' , '9:40 - 10:40' , '13:40 - 14:40' , '14:50 - 15:50'] ;
            var PROFS = [['Pattie Ceresani'] , ['Salma Hamza'] , ['Amine Dakhli'] , ['Noura Gargani']] ;
            this.proceed(ROOMS,PROFS,SLOTS);
            callback(this);
            }



}

module.exports = Data;
