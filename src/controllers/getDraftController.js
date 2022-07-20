import { get } from '../controllers/getController.js'
import { remove } from '../controllers/removeController.js'





export async function getDraft(req,res){

	console.log(req.body);

	var query={
		'Username' : req.session.user,
		'FileType' : req.body.fileType
	};

	get(query,function(msg,data){

		console.log(msg);
		console.log(data);

		var obj=JSON.parse(msg);
		obj.data=data;

		res.send(JSON.stringify(obj));

		remove(query,function(msg,data){
			// console.log(msg);
			// console.log(data);
		});

	});
}