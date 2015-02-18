      
      //Set up for tweet writing placed outside of (document).ready
      var visitor = "visitor";
      streams.users.visitor = [];
      

     $(document).ready(function(){

        var $tweetbody = $('.tweets');
        //$tweetbody.html('');
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
          $tweetbody.html('');
          index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            $tweet.html('<span id="userSymbol">@</span><span class = "user" id= "test">' + tweet.user + '</span>' + ': <br>' 
              + '<span class = "message">' + tweet.message + '</span><br>' + 
             " " + '<span class = "time">' + moment(tweet.created_at).fromNow() + '</span><br><br>');
            $tweet.fadeIn("slow").appendTo($tweetbody);
            index -= 1;
           
            }
        });



        //Click on username to see that user's timeline:
     

        $('body').on('click', '.user', function(event){
           
            var userName = $(this).context.innerText;
            //console.log($(this));
            //console.log(userName);
            console.log(streams.users[userName]);
      

            $tweetbody.html('');
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
            $(this).css({'color': '#154369'});
            var tweetMessage = $('.writeTweet').val();
            writeTweet(tweetMessage);
            //$('.writeTweet').val('Tweetle Complete');
            $('.writeTweet').val('');
        })



      });