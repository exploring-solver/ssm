const express = require('express');

const controller = require('./controller/index');
const validateSchemas = require('../../middlewares/validateSchemas');
const schemas = require('./utils/schemasValidation');
const authController = require('./controller/auth.controller');
const youtubeController = require('./controller/youtube.controller');

const router = express.Router();
const { isAuthenticated } = require('../../middlewares/auth');

router.post(
  '/api/v1/signup',
  validateSchemas.inputs(schemas.signUp, 'body'),
  (req, res) => {
    controller.signUp(res, req.body);
  }
);

router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleAuthCallback);
router.get(
  '/check-subscription',
  isAuthenticated,
  youtubeController.checkSubscription
);
router.get('/logout', authController.logout);
module.exports = router;
