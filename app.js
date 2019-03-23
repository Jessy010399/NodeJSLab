console.log('Hello World');

const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

const fs = require('fs');
const fileName =  './test';

/*fs.readFile(fileName,(err, data) =>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data.toString());
});
*/

const data = fs.readFileSync(fileName);
console.log(data.toString());


const outFileName = './test-copy';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});


