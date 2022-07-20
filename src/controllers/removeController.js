import { EdiDraft } from "../models/EdiDraft.js";
import generateResponse from "../helpers/genResponse.js";


export async function remove (req,res){
	console.log('controller req');
	console.log(req);

    let response = null ;
   
	// EdiDraft
	// .find(req)
	// .remove()
	// .exec(function(err,ediDraft)
    try {
        const data = await EdiDraft.find(req).remove();
    
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