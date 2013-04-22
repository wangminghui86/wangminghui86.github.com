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
			for(var i = 0;i<content.pics.length;i++){
				url = "photo/" + content.dir + "/" + content.pics[i]+".jpg";
				$('<a data-gallery="gallery"/>')
                .append($('<img>').prop('src', "photo/g1/1m.jpg"))
                .prop('href', url)
                .prop('title', "title")
				.prop('width',"200px")
                .appendTo(gallery);
			}
        });
    });
	
	
});