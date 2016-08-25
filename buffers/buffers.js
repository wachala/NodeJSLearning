let sampleBuffer = new Buffer(256);

let length = sampleBuffer.write("This is sample text...");

console.log("Bytes written to buffer: " + length);

sampleBuffer = new Buffer(8);
length = sampleBuffer.write("This is another sample text...");

console.log("Bytes written to buffer: " + length);
console.log("Content of the buffer: " + sampleBuffer.toString());
console.log("Content of the buffer as a json: " + sampleBuffer.toJSON());

sampleBuffer = new Buffer(26);

for(let i=0; i<26; i++) {
  sampleBuffer[i] = i + 97;
}

console.log(sampleBuffer.toString("ascii"));
console.log(sampleBuffer.toString("ascii",5,20));
console.log(sampleBuffer.toString("utf8"));
console.log(sampleBuffer.toString(undefined));
console.log(sampleBuffer.toString(null));

let firstBuffer = new Buffer("This is");
let secondBuffer = new Buffer(" just another text...");

let result = Buffer.concat([firstBuffer, secondBuffer]);
console.log("Content of the result buffer: " + result.toString());

bufferComparator = function(firstBuffer, secondBuffer) {
  comparisionResult = firstBuffer.compare(secondBuffer);

  if(comparisionResult < 0) {
    console.log(firstBuffer + " comes before " + secondBuffer);
  }
  else if(comparisionResult) {
    console.log("Buffers are identical.");
  }
  else {
    console.log(firstBuffer + " comes after " + secondBuffer);
  }
}

let aliceBuffer = new Buffer("Ala ma kota");
let aliceBufferShorter = new Buffer("kota");
let alcieBufferShortest = new Buffer("Ala");

bufferComparator(aliceBuffer, aliceBufferShorter);
bufferComparator(aliceBuffer, aliceBuffer);
bufferComparator(aliceBuffer, alcieBufferShortest);
