     $(document).ready(function(){
        var $tweetbody = $('.tweets');
        $tweetbody.html('');
        var index = streams.home.length - 1;
        var shownTweets = 0;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message + " tweeted at " + tweet.created_at);
          $tweet.appendTo($tweetbody);
          index -= 1;
          shownTweets +=1;
        }


        //This is the option to show new tweets through button.  They are not appearing in the correct order.  

        $('button').on('click', function(){

        while((streams.home.length - 1) > shownTweets){
          var tweet = streams.home[streams.home.length - (1 + shownTweets)];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message + " tweeted at " + tweet.created_at);
          $tweet.prependTo($tweetbody);
          shownTweets +=1;
        }

        });


        //This is the option to show new tweets automatically.  They are not appearing in the correct order.  

        // var checkNew = function(){
        //   while((streams.home.length - 1) > shownTweets){
        //   var tweet = streams.home[streams.home.length - (1 + shownTweets)];
        //   var $tweet = $('<div></div>');
        //   $tweet.text('@' + tweet.user + ': ' + tweet.message + " tweeted at " + tweet.created_at);
        //   $tweet.prependTo($tweetbody);
        //   shownTweets +=1;
        //   }

        // }

        // setInterval(checkNew, 6000);





      });