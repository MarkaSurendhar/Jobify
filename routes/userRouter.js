import { Router } from "express";
import upload from "../middlewares/multerMiddleware.js";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserrInput } from "../middlewares/validationMiddleware.js";
import {
  authorizePermissions,
  checkForTestUser,
} from "../middlewares/authMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avatar"),
  validateUpdateUserrInput,
  updateUser
);
export default router;
