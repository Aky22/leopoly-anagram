var express = require('express');
var router = express.Router();
var dictionary = require('../dictionary/words.json');

function isAnagrams(a, b) {
  return cleanString(a) === cleanString(b)
}
function cleanString(str){
  return str.replace(/\W/g, '').toLowerCase().split('').sort().join('');
}

function searchAnagrams(searchWord) {
  const anagrams = [];
  dictionary.words.forEach((w) => {
    if(isAnagrams(searchWord, w)) {
      anagrams.push(w)
    }
  })
  return anagrams;
}

function validate(req, res) {
  if (!req.body || !req.body.word || req.body.word.length !== 5) {
    res.status(422).send("Invalid content").end();
  }
}

router.post('/search', function(req, res, next) {
  validate(req, res);
  res.json({data: searchAnagrams(req.body.word)});
})

module.exports = router;
