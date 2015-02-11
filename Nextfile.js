var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/test1');

exports.getHtml=function(req,res) {
	res.render("index");
};
var ps=new mongoose.Schema({
	username:"string",
	 //resetPasswordToken: "string",
	  resetPasswordExpires: "Date"
},{ 
	collection : 'unametable'
});
var cols = mongoose.model('unametable', ps);
exports.getJson=function(req,res) {
	name=req.query['username'];
	//console.log(name);
	

	Abc(function (err,resultdata) {
	
		if(err) {
		res.jsonp("error");
		} else {
			res.jsonp(resultdata)
		}
	});
	function Abc(mycallback) {
		
		cols.findOne({"username":new RegExp('^'+name+'$', "i")},function(err,col) {
			mycallback(err,col);
			//console.log("This"+col);
		
		});
		
	}
};

exports.formsubmit=function(req,res) {
	//console.log("this is "+name);
	
	inserting(function (err) {
		
		if(err) {
		res.jsonp("error");
		} else {
			res.end("true")
		}
	});
	function inserting(mycallback) {
		var insert=new cols;
		insert.username=name;
		insert.save(function(err) {
			mycallback(err);
			//console.log("This"+col);
		
		});
		
	
	}
};


exports.dropdown=function(req,res) {
	Abc(function (err,resultdata) {
		
		if(err) {
		res.jsonp("error");
		} else {
			res.jsonp(resultdata)
		//console.log(resultdata);
		}
	});
	function Abc(mycallback) {
		
		cols.find({},function(err,col) {
			mycallback(err,col);
			//console.log("This"+col);
		
		});
		
	}
}
