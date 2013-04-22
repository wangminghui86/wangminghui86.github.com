$(function () {
	'use strict';

    // Initialize the Image Gallery widget:
    $('#gallery').imagegallery();

	$.ajax({
        url: '../pages/contents.json'
    }).done(function (data) {
        var gallery = $('#gallery'),
            url;
        $.each(data.contents.pics, function (index, data) {
            url = "/photo/" + content.dir + "/"
            $('<a data-gallery="gallery"/>')
                .append($('<img>').prop('src', url))
                .prop('href', url)
                .prop('title', "title")
                .appendTo(gallery);
        });
    });
});