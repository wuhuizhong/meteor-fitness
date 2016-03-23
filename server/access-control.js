/**
 * Created by Cole on 3/17/16.
 */
console.log('Configuring content-security-policy:');

WebApp.connectHandlers.use(function(req, res, next) {
    console.log('connect handler');
    res.setHeader("Accss-Control-Allow-Origin", "*");
    return next();
});