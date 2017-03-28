"use strict";
const
  fs = require('fs'),
  cheerio = require('cheerio');

module.exports = function(filename, callback) {
  fs.readFile(filename, function(err, data) {
    if(err) {
      return callback(err);
    }
    let
      $ = cheerio.load(data.toString()),
      collect = function(index, elem) {
        return $(elem).text();
      };

    callback(null, {
      _id: $('pgterms\\:ebook').attr('rdf:about'),//.replace('ebooks/', ''),
      title: $('dcterms\\:title').text(),
      authors: $('dcterms\\:creator pgterms\\:agent').children('pgterms\\:name').text(),
      subjects: $('dcam\\:memberOf[rdf\\:resource$="/LCSH"]').map(function(index, elem) {
        return $(elem).prev().text();
      }).get().join(', ')
    });
  })
}
