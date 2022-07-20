



import {create} from './createController.js';



export async function createDraft (req,res){

	var draft=req.body;
	
	draft['Username']=req.session.user;

	console.log(draft);

	create(draft,function(str){
		console.log(str);
		res.send(str);
	});

}