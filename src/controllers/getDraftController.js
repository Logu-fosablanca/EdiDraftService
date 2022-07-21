import { EdiDraft } from "../models/EdiDraft.js";



export async function getDraft(req,res){

	console.log(req.body);

	var query={
		'Username' : req.session.user,
		'FileType' : req.body.fileType
	};


	let msg = await get(query,res);
	console.log(msg);

	let obj = JSON.parse(msg);
	res.send(JSON.stringify(obj));
	await remove(query,res);



	// get(query,function(msg,data){

	// 	console.log(msg);
	// 	console.log(data);

	// 	var obj=JSON.parse(msg);
	// 	obj.data=data;

	// 	res.send(JSON.stringify(obj));

	// 	remove(query,function(msg,data){
	// 		// console.log(msg);
	// 		// console.log(data);
	// 	});

	// });
}


async function get (req,res){
	console.log('controller params');
	console.log(req);
    
	let response = null ;

	try {
	const data = await EdiDraft.find(req.body);

		if( data.length > 0 ){
			response = generateResponse(true,"found successfully",data);
	
		}
		else if( data.length == 0 ){
			 response = generateResponse(false,"No EdiDraft found",null);
		
		}}
		catch(err){
			response = generateResponse(false,"there occured some error : "+err,null);
		
		}
		res.send(response);
	}


	async function remove (req,res){
		console.log('controller req');
		console.log(req);
		let response = null ;
		try {
			const data = await EdiDraft.find(req).remove();
		
				if( data.length > 0 ){
					response = generateResponse(true,"found successfully",data);
				}
				else if( data.length == 0 ){
					 response = generateResponse(false,"No EdiDraft found",null);
				}}
				catch(err){
					response = generateResponse(false,"there occured some error : "+err,null);
					res.status(500).send(response);
				}
				res.send(response);
			}