// Requiring the module
const reader = require('xlsx')

// Reading our test file
const file = reader.readFile('./canvases_export.xls')

let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
	const temp = reader.utils.sheet_to_json(
		file.Sheets[file.SheetNames[i]])
	temp.forEach((res) => {
		data.push(res)
	})	
}

j=0;
let tg = [];
let csvFile =[];
let ObjectsToCsv = require('objects-to-csv');

for(i=1; i<=data.length; ++i){
	tg.push(data[i]);

	if(i%50==0){
		++j

		ws = reader.utils.json_to_sheet(tg);
		wb = reader.utils.book_new();
   		reader.utils.book_append_sheet(wb, ws, 'canvases');
   		reader.writeFile(wb, 'canvases_export_'+j+'.xlsx');
		
	    csvFile.push({'fileName':'canvases_export_'+j+'.xlsx'});

		tg = [];
	}
	else if(i==data.length-1){
		++j
		ws = reader.utils.json_to_sheet(tg);
		wb = reader.utils.book_new();
   		reader.utils.book_append_sheet(wb, ws, 'canvases');
   		reader.writeFile(wb, 'canvases_export_'+j+'.xlsx');
		
	   	csvFile.push({'fileName':'canvases_export_'+j+'.xls'x})

		let csv = new ObjectsToCsv(csvFile);
  		csv.toDisk('./test.csv');
	}	
}