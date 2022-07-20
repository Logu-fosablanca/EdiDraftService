import  {EdiDraft} from '../models/EdiDraft';
import generateResponse from '../helpers/genResponse';


export async function get (params,res){
	console.log('controller params');
	console.log(params);
    
	let response = null ;

	try {
	const data = await EdiDraft.find(params);

		if( data.length > 0 ){
			response = generateResponse(true,"found successfully");
			// res(response,ediDraft);
		}
		else if( data.length == 0 ){
			 response = generateResponse(true,"No EdiDraft found");
			// res(response,null);
		}}
		catch(err){
			response = generateResponse(false,"there occured some error : "+err);
			res.status(500).send(response);
		}
		res.status(200).send(response);
	}

