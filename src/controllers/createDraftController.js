

// import  {EdiDraft} from '../models/EdiDraft';

import {create} from './createDraftController';
// var _ = require('underscore');



exports.createDraft = function(req,res){

	var draft=req.body;
	
	draft['Username']=req.session.user;

	console.log(draft);

	create(draft,function(str){
		console.log(str);
		res.send(str);
	});

}