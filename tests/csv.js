const fs = require("fs")
const path = require("path");
const directory = path.join(__dirname,'\\outputs');

const csv2json = (str, delimiter = ',') => {
    const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
      const values = row.split(delimiter);
      return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
  };
  


  let csv = "text weight\nLorem 15\nIpsum 9";
  let word_array = csv2json(csv,' ');
  fs.writeFileSync(directory+"/csvtest.csv","text weight\nLorem 15\nIpsum 9");
  console.log(word_array)