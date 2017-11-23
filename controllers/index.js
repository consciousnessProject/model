'use strict';

var TYPE = 'model';

var titan = require('squeaky-toy');

module.exports = function (server) {

    /**
     * This method will return the data model definition based upon the id.
     */
    server.get('/' + TYPE + '/:id/:format?', function (req, res) {
        titan.vertex.get(id, function(results, error) {
           if(error) {
               //log the error
               res.send(500, { error: error });
           } else if(results === '') {
               //log that we found nothing.
               res.send(204);
           } else {
               //TODO: I need to marshal the results data into my model object.
               var model = { name: 'model' };
               switch(req.param.format) {
                   case '.html' :
                       res.render('index', model);
                       break;
                   default :
                       res.json(JSON.stringify(model));
               }
           }
        });
    });
    /**
     * This method will return all of the data model definitions.
     */
    server.get('/' + TYPE + 's:format?', function (req, res) {
        titan.vertex.getAll(TYPE, function(results, error) {
            if(error) {
                //log the error
                res.send(500, { error: error });
            } else if(results === '') {
                //log that we found nothing.
                res.send(204);
            } else {
                //TODO: I need to marshal the results data into my model object.
                var model = { name: 'model' };
                switch(req.param.format) {
                    case '.html' :
                        res.render('index', model);
                        break;
                    default :
                        res.json(JSON.stringify(model));
                }
            }
        });
    });
    /**
     * This method will return the documentation for this service.
     */
    server.options('/' + TYPE, function (req, res) {
       res.render('docs');
    });

};
