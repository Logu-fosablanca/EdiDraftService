import { Router } from "express";
import { createDraft } from "../controllers/createDraftController.js";
import { getDraft } from "../controllers/getDraftController.js";


const router = Router();

router.post('/edi/saveAsDraft',createDraft );
router.post('edi/getDraft', getDraft);

export default router;
