$(function () {
	'use strict';

    // Initialize the Image Gallery widget:
    $('#gallery').imagegallery();
	
	$.ajax({
        url: '../pages/photo/' + picPath + '/contents.json'
    }).done(function (data) {
		var suf = ".jpg";
        var gallery = $('#gallery'),
            url;
        $.each(data.pics, function (index, pic) {
				
				url = "photo/" + picPath + "/" + pic + suf;
				$('<a data-gallery="gallery"/>')
                .append($('<img>').prop('src', "photo/" + picPath +"/s_" + pic + suf))
                .prop('href', url)
                .prop('title', pic + suf)
				.prop('width',"80px")
                .appendTo(gallery);
			
        });
    });
	
	
});