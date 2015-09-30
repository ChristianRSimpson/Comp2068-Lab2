//require the required things in order to trun in a browser
var http = require('http');
var url = require('url');


//start server
http.createServer(function(req, res){
	res.writeHeader(200, {'Content-Type': 'text-plain'});
	
	//header of page
	res.write('<h1>Calculator-A-Tron 9000</h1>');

	//variables
	var qs = url.parse(req.url, true).query;
	var num1 = parseFloat(qs.num1);
	var num2 = parseFloat(qs.num2);
	var method = qs.method;

	//make the page look nice ish and explain how to use it
	res.write('Please enter a number in the url after num1 and num2');
	res.write('<br/>Please enter either Add, Multiply, Subtract, or Divide after method in the url');

	res.write('<br/><br/>Number 1: '+num1);
	res.write('<br/>Number 2: '+num2);
	res.write('<br/>Method : '+method);


	//determine what operator to use for the equation
	if(method == 'Subtract'){
		total = num1-num2;
		res.write('<br/>' + num1 + ' - ' + num2 + ' = ' + total);
	}	
	else if(method == 'Add'){
		total = num1+num2;
		res.write('<br/>' + num1 + ' + ' + num2 + ' = ' + total);
	}
	else if(method == 'Multiply'){
		total = num1*num2;
		res.write('<br/>' + num1 + ' * ' + num2 + ' = ' + total);
	}
	else if(method == 'Divide'){
		total = num1/num2;
		res.write('<br/>' + num1 + ' / ' + num2 + ' = ' + total);
	}
	else{

	}


	//picture fore style
	res.write('<br/><img src="http://worth1000.s3.amazonaws.com/submissions/811500/811999_abae_1024x2000.jpg" alt="Calc"/> ');
	
	res.end();
	//listen on the port of 3000
}).listen(3000);


