import { Router } from "express";
import { createDraft } from "../controllers/createDraftController.js";
import { getDraft } from "../controllers/getDraftController.js";
import { getReport } from "../controllers/getReportController.js";


const router = Router();

router.post('/edi/saveAsDraft',createDraft );
router.post('/edi/getDraft', getDraft);
router.post('/report/get',getReport);

export default router;
