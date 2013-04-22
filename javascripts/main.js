$(function () {
	'use strict';

    // Initialize the Image Gallery widget:
    $('#gallery').imagegallery();

	$.ajax({
        url: '../pages/contents.json'
    }).done(function (data) {
        var gallery = $('#gallery'),
            url;
        $.each(data.contents, function (index, data) {
			for(var i = 0;i<data[index].pic.length;i++){
				url = "/photo/" + data[index].dir + "/" + data[index].pic[i];
				$('<a data-gallery="gallery"/>')
                .append($('<img>').prop('src', url))
                .prop('href', url)
                .prop('title', "title")
                .appendTo(gallery);
			}
        });
    });
});