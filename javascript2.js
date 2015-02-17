     $(document).ready(function(){


        var $tweetbody = $('.tweets');
        $tweetbody.html('');
        var index = streams.home.length - 1;

        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.html('<span class = "user">@' + tweet.user + '</span>' + ': <br>' 
              + '<span class = "message">' + tweet.message + '</span><br>' + 
             " " + '<span class = "time">' + moment(tweet.created_at).fromNow() + '</span><br><br>');
          $tweet.appendTo($tweetbody);
          index -= 1;
       
        }




        $('button').on('click', function(){
          var $tweetbody = $('.tweets');
          $tweetbody.html('');
          var index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            $tweet.html('<span class = "user">@' + tweet.user + '</span>' + ': <br>' 
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

        $('.user').on('click', function(event){
            event.preventDefault();
            event.stopPropagation();
            var userName = $(this).data('user');
            console.log(userName);
            console.log(streams.users.shawndrost);
      

        });


        //Writing a tweet

        var visitor = "visitor";
        streams.users.visitor = [];
        $('.submitTweet').on('click', function(){
            var tweetMessage = $('.writeTweet').val();
            writeTweet(tweetMessage);
        })



      });