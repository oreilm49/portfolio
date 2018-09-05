$(function(){

    var host = location.host;

    var lightBoxGen = function(id) {
        var $gallery = $('.image-gallery-'+id+' a').simpleLightbox();       
    }
    
    $.get('http://'+host+'/api/projects', function(data) {
        for(var i = 0; i < data.length; i++) {
            lightBoxGen(data[i]._id)
        }
    })
 
 });