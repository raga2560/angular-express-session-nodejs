/**
 * configuration file
 *
 */

'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    root: rootPath, 
    db: "mongodb://localhost/session-auth",
    app: {
      name: "angular-express-session-authentication"
    },
    facebook: {
      clientID: "481914391941067",
      clientSecret: "0a1cb8b41c20ed13490b1ea494e5ec03",
      callbackURL: "http://localhost:3000/auth/facebook/callback" 
    },
	google: {
      clientID: "970185861626-r6o7tn5l6ab4huk4fnqgjendte6ivoge.apps.googleusercontent.com",
      clientSecret: "rCbBW2naIBS4JjjzJxPtb8cG",
      callbackURL: "http://localhost:3000/auth/google/callback" 
    }
  },
  test: {},
  production: {}
};
