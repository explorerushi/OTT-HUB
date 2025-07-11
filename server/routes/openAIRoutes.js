const express = require("express");

const { generateMeta, generateImage } = require('../controllers/openaiController.js')

const router = express.Router();


router.post('/openai/meta', generateMeta)
router.post('/openai/image', generateImage)