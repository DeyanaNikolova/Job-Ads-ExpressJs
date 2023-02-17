const Ad = require('../models/Ad');

exports.getAll = () => Ad.find({}).lean();