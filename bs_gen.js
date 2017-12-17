var fs = require('fs');
var http = require('http');
var querystring = require('querystring');

var encrypt = function(name, jia) {
	if (jia !== undefined) {
		fs.readFile(__dirname + '/' + name, {
			encoding : 'utf-8'
		}, function(err, data1) {
			fs.readFile(__dirname + '/' + jia, {
				encoding : 'utf-8'
			}, function(err, data2) {
				var data = {
					data1 : data1,
					data2 : data2
				};
				data = querystring.stringify(data);
//				data = JSON.stringify(data);
				console.log(data);
				var opt = {
					method : "POST",
					host : "aws163.qhkly.com",
					port : 18008,
					path : "/",
					headers : {
						"Content-Type" : 'application/json',
						"Content-Length" : data.length
					}
				};
				var req = http.request(opt, function(serverFeedback) {
					if (serverFeedback.statusCode == 200) {
						var body = "";
						serverFeedback.on('data', function(data) {
							body += data;
						}).on('end', function() {
							console.log('-----------------------------------');
							console.log(body);//res.send(200, body);
							var json = JSON.parse(body);
							//console.log(json.result);
							fs.writeFile(__dirname + '/' + jia + '.bs', json.result, function(err) {// 会先清空原先的内容
								if (err) {
									console.error(err);
								}
							});
						});
					} else {
						console.log('error');//res.send(500, "error");
					}
				});
				req.write(data + "\n");
				req.end();
			});
		});
	} else {
		fs.readFile(__dirname + '/' + name, {
			encoding : 'utf-8'
		}, function(err, data) {
			var bs = hello.hello(data);
			fs.writeFile(__dirname + '/' + name + '.bs', bs, function(err) {// 会先清空原先的内容
				if (err) {
					console.error(err);
				}
			});
			console.log(bs);
		});
	}
};

encrypt('test.js.js', 'test.js');
