//This will be wrapper for request module that you are using to make API calls

const request = require('request');


module.exports = {
    // this method returns a promise which gets resolved or rejected based on the result of the api
    make_API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, {json: true}, (err,res,body) => {
                if(err) reject(err)
                resolve(body)
            });
        })
    }
}