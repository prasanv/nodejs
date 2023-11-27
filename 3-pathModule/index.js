const path  = require('node:path');

// console.log(path);

// Note: These are convenience variables readily available as the part of IIFE
console.log(__filename);
console.log(__dirname);

// basename method
// returns last variables of the path
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// extname method
// returns extension of the path, for folder name returns empty string
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// the parse method 
// returns significant elements of the path as an json object
console.log(path.parse(__filename));
console.log(path.parse(__dirname));

// format method 
// returns constructed path for a object
console.log(path.format(path.parse(__filename))); 
console.log(path.format(path.parse(__dirname)));

// isAbsolute method
// checks if the path is absolute 
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('../pathModule/index.js'));

// join method
// similar to joining the strings, but its platform specific (i.e. it will add forward slash for mac and back slash for windows)
// NOTE: depending on where you put the "//" and "../" it jumps and concatenates the folder and files 
console.log("----join method---")
// console.log(path.join("clusterModule", "../newFolder","./index.js"));
// console.log(path.join("../clusterModule", "newFolder","./index.js"));
// console.log(path.join("../clusterModule", "../newFolder","./index.js"));
// console.log(path.join("//folder1", "//folder2","../index.js"));
// console.log(path.join("//folder1", "//folder2","./index.js"));
// console.log(path.join(__dirname,"data.json"));

// resolve method
// resolves path or sequence of path to an absolute path 
console.log("----resolve method---")
console.log(path.resolve("folder1", "folder2","index.html"));
console.log(path.resolve("/folder1", "folder2","index.html"));
console.log(path.resolve("/folder1", "//folder2","index.html"));
console.log(path.resolve("/folder1", "//folder2","../index.html"));
console.log(path.resolve(__dirname,"data.json"));

