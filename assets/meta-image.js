jQuery(document).ready(function(a){var e=a("#meta-image-generate");e.on("click",".meta-image-run",function(t){t.preventDefault();var n=function(){e.find(".button").toggleClass("disabled"),e.find(".spinner").toggleClass("is-active")},i={action:"meta_image_generate",post:e.data("post"),text:e.find(".meta-image-text").val()},o=a.ajax({method:"POST",url:e.data("ajaxurl"),data:i},"json");return o.done(function(a){return n(),a.success===!1?console.log(a.data):e.find(".meta-image-preview").attr("src",a.data)}),n()})});