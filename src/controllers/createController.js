
import  {EdiDraft} from '../models/EdiDraft.js';
import generateResponse from '../helpers/genResponse.js';
import _ from 'underscore';

export async function create (params,res){
	console.log(params);
    var response = null
	var ediDraft = new EdiDraft(params);
    try {

	ediDraft.save(function(err,ediDraft){
		if( !(_.isNull(err)) ){
			response= generateResponse(false , "There occured some error : "+err.err);
			// response
		}
		else{
			response= generateResponse(true,"Draft created successfully");			
			// response
		}
	})
}
catch(err){
    response= generateResponse(false , "There occured some error : "+err.err);
    res.status(500).send(response);
}
res.status(200).send(response);
}