jQuery(function($){$(window).on('load',function(){layers_apply_overlay_header_styles();});$(document).on('click','[data-toggle^="#"]',function(e){e.preventDefault();$that=$(this);$target=$that.data('toggle');$($target).toggleClass($that.data('toggle-class'));return false;});$(document).on('click',function(e){$('[data-toggle^="#"]').each(function(){var $that=$(this);var $target=$that.data('toggle');var $targetId=$target.replace(/^#/,'');var toggleClass=$that.data('toggle-class');if(e.target.id!=$targetId&&!$(e.target).parents($target).size()&&$($target).hasClass(toggleClass)){$($target).toggleClass(toggleClass);e.preventDefault&&e.preventDefault();}});});$header_sticky=$("section.header-sticky");$("body").waypoint({offset:-layers_script_settings.header_sticky_breakpoint,handler:function(direction){if('down'==direction){$header_sticky.stick_in_parent({parent:'body'});clearTimeout($header_sticky.data('timeout'));$header_sticky.data('timeout',setTimeout(function(){$header_sticky.addClass('is_stuck_show');},'10'));}}});$("body").waypoint({offset:-1,handler:function(direction){if('up'==direction){clearTimeout($header_sticky.data('timeout'));$header_sticky.removeClass('is_stuck_show');$header_sticky.trigger("sticky_kit:detach");}}});$(".media-image, .thumbnail-media, .widget.slide .image-container, .post .thumbnail").fitVids();jQuery.extend(jQuery.easing,{layersEaseInOut:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;}});});function layers_swiper_resize(s){var height=0;s.slides.each(function(key,slide){var slide_height=jQuery(slide).find('.container').outerHeight();if(jQuery(slide).find('.content').outerHeight())slide_height+=jQuery(slide).find('.content').outerHeight();if(jQuery(slide).find('.content').height())slide_height-=jQuery(slide).find('.content').height();if(height<slide_height){height=slide_height;}});s.container.css({height:height+'px'});}
var $first_element;function layers_apply_overlay_header_styles(){$header=jQuery('.header-site');$header_height=$header.outerHeight();$content_wrapper=jQuery('#wrapper-content');if($header.hasClass('header-overlay')){if(!$first_element)$first_element=$content_wrapper.children().eq(0);if('A'==$first_element.prop("tagName"))$first_element=$content_wrapper.children('.widget').eq(0);if($first_element.hasClass('slide')&&!$first_element.hasClass('.full-screen')){jQuery('body').addClass('header-overlay-no-push');}
else if($first_element.hasClass('title-container')){$first_element.css('padding-top','');var padding_top=$first_element.css('padding-top').replace('px','');padding_top=(''!=padding_top)?parseInt(padding_top):0;$first_element.css({'paddingTop':$header_height+padding_top});jQuery('body').addClass('header-overlay-no-push');}
else{$content_wrapper.css('padding-top','');var padding_top=$content_wrapper.css('padding-top').replace('px','');padding_top=(''!=padding_top)?parseInt(padding_top):0;$content_wrapper.css('paddingTop',$header_height+padding_top);}}};