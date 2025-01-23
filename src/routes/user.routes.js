import { Router } from "express";
// import {signup} from 

const router=Router();
router.post("./signup",signup);
router.post('./login',login);
router.get("./profile",getProfile);
router.put("./profile",updateProfile);
router.put("preferences",updatePreferences);
router.get("preferences",getPreferences);
router.put("change_password",changePassword);

export default router;