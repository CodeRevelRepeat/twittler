      
      //Set up for tweet writing placed outside of (document).ready
      var visitor = "visitor";
      streams.users.visitor = [];

     $(document).ready(function(){

        var $tweetbody = $('.tweets');
        $tweetbody.html('');
        var index = streams.home.length - 1;

        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.html('<span id="userSymbol">@</span><span class = "user">' + tweet.user + '</span>' + ': <br>' 
              + '<span class = "message">' + tweet.message + '</span><br>' + 
             " " + '<span class = "time">' + moment(tweet.created_at).fromNow() + '</span><br><br>');
          $tweet.appendTo($tweetbody);
          index -= 1;
       
        }




        $('button').on('click', function(){
          //var $tweetbody = $('.tweets');
          $tweetbody = $tweetbody.html('');
          index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            $tweet.html('<span id="userSymbol">@</span><span class = "user">' + tweet.user + '</span>' + ': <br>' 
              + '<span class = "message">' + tweet.message + '</span><br>' + 
             " " + '<span class = "time">' + moment(tweet.created_at).fromNow() + '</span><br><br>');
            $tweet.fadeIn("slow").appendTo($tweetbody);
            index -= 1;
           
            }
      });




        //This is the option to show new tweets automatically.  Relied on a shownTweets variable deleted above.
        //In any case, tweets were not appearing in the correct order.  
        //Problem is not updating full list of tweets wich should do especially to update time stamps in human friendly form. 

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




        //Click on username to see that user's timeline:
        //Only works when clicking on original tweets rather than refreshed tweets.  

        $('.user').on('click', function(event){
            //event.preventDefault();
            //event.stopPropagation();
            var userName = $(this).context.innerText;
            //console.log($(this));
            //console.log(userName);
            console.log(streams.users[userName]);
      

            $tweetbody = $tweetbody.html('');
            var userIndex = streams.users[userName].length - 1;
            while(userIndex >= 0){
              var tweet = streams.users[userName][userIndex];
              var $tweet = $('<div></div>');
              $tweet.html('<span id="userSymbol">@</span><span class = "user">' + tweet.user + '</span>' + ': <br>' 
                + '<span class = "message">' + tweet.message + '</span><br>' + 
                " " + '<span class = "time">' + moment(tweet.created_at).fromNow() + '</span><br><br>');
              $tweet.fadeIn("slow").appendTo($tweetbody);
              userIndex -= 1;
            }

        });


        //Writing a tweet

       // var visitor = "visitor";  Defined above outside of document.ready.
        //streams.users.visitor = [];  Data structure set up outside of document.ready.

        $('.submitTweet').on('click', function(){
            event.preventDefault();
            //event.stopPropagation();
            var tweetMessage = $('.writeTweet').val();
            writeTweet(tweetMessage);
            //$('.writeTweet').val('Tweetle Complete');
            $('.writeTweet').val('');
        })



      });