var map = {
    "resume-link": "Resume",
    "github-link": "Github",
    "linkedin-link" : "LinkedIn",
    "email-link": "Email",
    "facebook-link": "Facebook",
    "twitter-link": "Twitter"
}

$(
  $(".link").each(function(index){
    $(this).hover(function(){
        var key = $(this).attr('id');
        $('#hello-link').text(map[key] + ".  ");
    }, function () {
        $('#hello-link').text("Hello.");
    })

  })
);