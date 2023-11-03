// __dirname
console.log(__dirname);
// filename
console.log(__filename);
// OS Module
import { platform, type, release, homedir } from "os";
console.log(platform());
console.log(type());
console.log(release());
console.log(homedir());
// Path Module
import { basename, dirname, extname, join, parse } from "path";
console.log(basename(__filename));
console.log(dirname(__filename));
console.log(extname(__filename));
console.log(join("/foo", "bar", "bax/asfd"));
console.log(parse(__dirname));
console.log(parse(__filename));
