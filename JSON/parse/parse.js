// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. 
// converts a json string to a json value/object
// example

const json = '{"status": "online", "groups": 2}';
const obj = JSON.parse(json);
console.log(obj.status)
console.log(obj.groups)
