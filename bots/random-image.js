let helpers = require(__dirname + '/../helpers/helpers.js'),
    twitter = require(__dirname + '/../helpers/twitter.js'),    
    mastodon = require(__dirname + '/../helpers/mastodon.js'),    
    Twit = require( 'twit' ),
    T = new Twit( {
        consumer_key: process.env.BOT_1_TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.BOT_1_TWITTER_CONSUMER_SECRET,
        access_token: process.env.BOT_1_TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.BOT_1_TWITTER_ACCESS_TOKEN_SECRET
    } ),
    Mastodon = require( 'mastodon' ),
    M = new Mastodon( {
     'access_token': process.env.BOT_1_MASTODON_ACCESS_TOKEN,
     'api_url': process.env.BOT_1_MASTODON_API
    } );

module.exports = {
  run: function(){
    helpers.loadImageAssets( function( err, assetUrls ){
      if ( err ){
        console.log( err );     
      }
      else{
        helpers.loadRemoteImage( helpers.randomFromArray( assetUrls ), function( err, imgData ){
          if ( err ){
            console.log( err );     
          }
          else{
            const text = helpers.randomFromArray( [
              'Hello!',
              'Hi!',
              'Hi there!'
            ] );
            
            twitter.postImage( T, text, imgData );
          }
        } );
      }
    } );
  } 
};