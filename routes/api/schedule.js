const Router = require("express").Router;
const Data = require('../../prototypes/genetic/Data') ;
const GeneticAlgo = require('../../prototypes/genetic/GeneticAlgo') ;
const Population = require('../../prototypes/genetic/Population') ;
const path = require('path') ;
const multer = require('multer') ;
const xlsx = require('node-xlsx');
var fs = require('fs');


const router = Router({
  mergeParams: true,
});

POP_SIZE = 9 ;
NBR_ELITE = 1 ;
MUTATION_RATE = 0.1 ;
TOURNAMENT_SEL_SIZE = 3 ;


function xlsxToCsvs(id,name) {
  var obj = xlsx.parse(__dirname + '/../../csvs/new/input.xlsx');
  var rows = [] ;
  var writeStr = "";

  var sheet = obj[id] ;
  for (var i = 0; i < sheet['data'].length; i++) {
    rows.push(sheet['data'][i]);
  }

  for (var i = 0; i < rows.length; i++) {
    writeStr += rows[i].join(',') + '\n' ;
  }

  fs.writeFile(__dirname + "/../../csvs/new/generated/"+ name +".csv", writeStr, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("test.csv was saved in the current directory!");
  });


}


const storage = multer.diskStorage({
  destination : `${__dirname}/../../csvs/new`,
  filename : function(req , file , cb){
    cb(null, 'input' + '.xlsx' ) ;
  }
});

const upload = multer({storage : storage}).single('file') ;

router.post("/schedule/upload" , async (req, res) => {
  upload(req , res , function(err) {
    console.log(err);
  });

  xlsxToCsvs(0,'courses') ;
  xlsxToCsvs(1,'groups') ;
  xlsxToCsvs(2,'rooms') ;
  xlsxToCsvs(3,'profs') ;
  xlsxToCsvs(4,'slots') ;

  res.send('done');
});

router.get("/schedule/generate", async (req, res) => {

  let p = new Promise((resolve,reject) => {

    const data_ = new Data(true, function(data){

    var genNumber = 0 ;
    var population = new Population(POP_SIZE,data);

    population.schedules.sort(function(a,b){
      return b.fitness() - a.fitness() ;
    });

    var geneticAlgo = new GeneticAlgo(data) ;

    while(population.schedules[0].fitness() != 1){
      genNumber += 1 ;
      population = geneticAlgo.evolve(population) ;
      population.schedules.sort(function(a,b){
        return b.fitness() - a.fitness() ;
      });
    }

    population.schedules[0].display() ;

    population.schedules[0].toCsv() ;
    });

    resolve('success') ;

  });

  p.then((msg) => {
    console.log(msg);
    res.send('generated');
  }).catch((msg) => {
    console.log(msg);
  });

});

router.get('/schedule/download', async (req, res) => {
    res.download(`${__dirname}/../../csvs/generated/finalSchedule.csv`);
});




module.exports = router;
