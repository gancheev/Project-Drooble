'use strict';

(function () {

    $(function () {
        

    });

    
    $('#comment-reply').bind('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            var $content = $("#comment-reply").val();
            var $comment =
            '<div class="comment-content">'
            + '<div class="bs-callout bs-callout-danger"><p>' + $content + '</p>'
            + '<div class="buttons mtop" id="nextCom">'
            + '<a href="#" class="btn btn-default noborder"><i class="fa fa-heart-o"> Like</i></a>'
            + '<a href="#" class="btn btn-default noborder"><i class="fa fa-share-alt"> Share</i></a>'
            + '<a href="#" class="btn btn-default noborder"><i class="fa fa-comment"> Comment</i></a>'
            + '<a href="#" class="btn btn-default pull-right noborder"><i class="fa fa-flag-o"> Report</i></a>';
            $("#nextCom").append($comment);
            $("#comment-reply").val('');
        }
    });
    $("#comment").bind("input propertychange", function (e) {
        var $videoSrc = $("#comment").val();
        var iFrame = $("#videoPlayer")
        $("#player").html('');
        $("#player").html('<iframe id="videoPlayer" width="100%" height="315"src="' + $videoSrc + '"></iframe>');
        iFrame.load($videoSrc);
       
    })
  

})();
