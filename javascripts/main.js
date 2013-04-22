$(function () {
	'use strict';

    // Initialize the Image Gallery widget:
    $('#gallery').imagegallery();

	$.ajax({
        url: '../pages/contents.json'
    }).done(function (data) {
        var gallery = $('#gallery'),
            url;
        $.each(data.contents, function (index, content) {
			for(var i = 0;i<content.pic.length;i++){
				url = "/photo/" + content.dir + "/" + content.pic[i];
				$('<a data-gallery="gallery"/>')
                .append($('<img>').prop('src', url))
                .prop('href', url)
                .prop('title', "title")
                .appendTo(gallery);
			}
        });
    });
});