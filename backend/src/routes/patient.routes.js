import { Router } from "express";
import {
  addPatient,
  getAllPatients,
  getPatientById,
  getPatientSummary,
} from "../controllers/patient.controller.js";
import {
  verifyJWT,
  verifyAdminOrDoctor,
} from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

// router config
const router = Router();

// add patient route
router.route("/add-patient").post(
  verifyJWT,
  // verifyAdminOrDoctor,
  upload.fields([{ name: "patientReport", maxCount: 4 }]),
  addPatient
);

// get all patient route
router.route("/all-patient").get(verifyJWT, getAllPatients);

// get patient by id route
router.route("/patient/:patientId").get(verifyJWT, getPatientById);

// get patient summary
router.route("/patients-summary").get(getPatientSummary);

export default router;
