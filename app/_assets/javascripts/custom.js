var anchor = document.querySelectorAll('#navicon button');

[].forEach.call(anchor, function(anchor){
  var open = false;
  anchor.onclick = function(event){
    event.preventDefault();
    if(!open){
      this.classList.add('close');
      open = true;
    }
    else{
      this.classList.remove('close');
      open = false;
    }
  }
}); 
var anchor = document.querySelectorAll('#mobile-navicon button');

[].forEach.call(anchor, function(anchor){
  var open = false;
  anchor.onclick = function(event){
    event.preventDefault();
    if(!open){
      this.classList.add('close');
      open = true;
    }
    else{
      this.classList.remove('close');
      open = false;
    }
  }
}); 

/*
 * jQuery Dropdown: A simple dropdown plugin
 */
if (jQuery) (function ($) {

    $.extend($.fn, {
        jqDropdown: function (method, data) {

            switch (method) {
                case 'show':
                    show(null, $(this));
                    return $(this);
                case 'hide':
                    hide();
                    return $(this);
                case 'attach':
                    return $(this).attr('data-jq-dropdown', data);
                case 'detach':
                    hide();
                    return $(this).removeAttr('data-jq-dropdown');
                case 'disable':
                    return $(this).addClass('jq-dropdown-disabled');
                case 'enable':
                    hide();
                    return $(this).removeClass('jq-dropdown-disabled');
            }

        }
    });

    function show(event, object) {

        var trigger = event ? $(this) : object,
            jqDropdown = $(trigger.attr('data-jq-dropdown')),
            isOpen = trigger.hasClass('jq-dropdown-open');

        // In some cases we don't want to show it
        if (event) {
            if ($(event.target).hasClass('jq-dropdown-ignore')) return;

            event.preventDefault();
            event.stopPropagation();
        } else {
            if (trigger !== object.target && $(object.target).hasClass('jq-dropdown-ignore')) return;
        }
        hide();

        if (isOpen || trigger.hasClass('jq-dropdown-disabled')) return;

        // Show it
        trigger.addClass('jq-dropdown-open');
        jqDropdown
            .data('jq-dropdown-trigger', trigger)
            .show();

        // Position it
        position();

        // Trigger the show callback
        jqDropdown
            .trigger('show', {
                jqDropdown: jqDropdown,
                trigger: trigger
            });

    }

    function hide(event) {

        // In some cases we don't hide them
        var targetGroup = event ? $(event.target).parents().addBack() : null;

        // Are we clicking anywhere in a jq-dropdown?
        if (targetGroup && targetGroup.is('.jq-dropdown')) {
            // Is it a jq-dropdown menu?
            if (targetGroup.is('.jq-dropdown-menu')) {
                // Did we click on an option? If so close it.
                if (!targetGroup.is('A')) return;
            } else {
                // Nope, it's a panel. Leave it open.
                return;
            }
        }

        // Hide any jq-dropdown that may be showing
        $(document).find('.jq-dropdown:visible').each(function () {
            var jqDropdown = $(this);
            jqDropdown
                .hide()
                .removeData('jq-dropdown-trigger')
                .trigger('hide', { jqDropdown: jqDropdown });
        });

        // Remove all jq-dropdown-open classes
        $(document).find('.jq-dropdown-open').removeClass('jq-dropdown-open');

    }

    function position() {

        var jqDropdown = $('.jq-dropdown:visible').eq(0),
            trigger = jqDropdown.data('jq-dropdown-trigger'),
            hOffset = trigger ? parseInt(trigger.attr('data-horizontal-offset') || 0, 10) : null,
            vOffset = trigger ? parseInt(trigger.attr('data-vertical-offset') || 0, 10) : null;

        if (jqDropdown.length === 0 || !trigger) return;

        // Position the jq-dropdown relative-to-parent...
        if (jqDropdown.hasClass('jq-dropdown-relative')) {
            jqDropdown.css({
                left: jqDropdown.hasClass('jq-dropdown-anchor-right') ?
                    trigger.position().left - (jqDropdown.outerWidth(true) - trigger.outerWidth(true)) - parseInt(trigger.css('margin-right'), 10) + hOffset :
                    trigger.position().left + parseInt(trigger.css('margin-left'), 10) + hOffset,
                top: trigger.position().top + trigger.outerHeight(true) - parseInt(trigger.css('margin-top'), 10) + vOffset
            });
        } else {
            // ...or relative to document
            jqDropdown.css({
                left: jqDropdown.hasClass('jq-dropdown-anchor-right') ?
                    trigger.offset().left - (jqDropdown.outerWidth() - trigger.outerWidth()) + hOffset : trigger.offset().left + hOffset,
                top: trigger.offset().top + trigger.outerHeight() + vOffset
            });
        }
    }

    $(document).on('click.jq-dropdown', '[data-jq-dropdown]', show);
    $(window).on('resize', position);

})(jQuery);

$('#errorModal').on('show.bs.modal', function () {
  $('#code-input').addClass('error');
  $('.error-text').show();
});

$(".container").imagesLoaded(function(){
  $('.mosaic').masonry({
    itemSelector: '.item',
    isAnimated:true,
    animationOptions: {
      duration: 700,
      easing:'linear',
      queue :false
    }
  });
});
$(function(){ $('#cropme').Jcrop({ boxWidth: 450, boxHeight: 450, bgColor: '', bgOpacity: 0 }, function(){
  jcrop_api = this;
}); });



$(document).ready(function() {
  var params = {
    // Callback fired on rotation start.
    start: function(event, ui) {
    },
    // Callback fired during rotation.
    rotate: function(event, ui) {
    },
    // Callback fired on rotation end.
    stop: function(event, ui) {
    },
    // Set the rotation center at (25%, 75%).
    rotationCenterX: 25.0, 
    snap: true,
    rotationCenterY: 75.0
  };
  $('.jcrop-active').rotatable(params);
});

$('#mobile-navicon').click(function() {
    $('#mobile-nav').slideToggle(500);
});
$(document).ready(function() {
  $('.drawer').drawer();
});
  // The slider being synced must be initialized first
function initFlexModal() {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: true,
    nextText: "->",
    prevText: "<-",
    animationLoop: false,
    slideshow: false,
    itemWidth: 180,
    animationLoop: true,
    itemMargin: 5,
    customDirectionNav: $(".thumbnail-navigation a"),
    asNavFor: '#slider'
  });
  $('#slider').flexslider({
    smoothHeight: true,
    animation: "slide",
    controlNav: true,
    animationLoop: false,
    slideshow: true,
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),
    animationLoop: true,
    sync: "#carousel",
    slideshowSpeed: 2000,
    start: function(slider) {
      var slideshowPlaying = true;
      $('#stop-slider').click(function() {
        if($('ul.slides li').length > 1) {
          if (slideshowPlaying == true) {
            slideshowPlaying = false;
            slider.pause();
            $('#stop-slider').removeClass('stop-icon');
            $('#stop-slider').addClass('play-icon');
          } else {
            slideshowPlaying = true;
            $('#stop-slider').removeClass('play-icon');
            $('#stop-slider').addClass('stop-icon');
            slider.play();
            slider.flexAnimate(slider.getTarget("next"));
          }
        }
      });
      var slideshowPlaying = true;
      $('#pause-slider').click(function() {
        if($('ul.slides li').length > 1) {
          if (slideshowPlaying == true) {
            slideshowPlaying = false;
            slider.pause();
            $('#pause-slider').removeClass('pause-icon');
            $('#pause-slider').addClass('pause-icon-green');
          } else {
            slideshowPlaying = true;
            $('#pause-slider').removeClass('pause-icon-green');
            $('#pause-slider').addClass('pause-icon');
            slider.play();
            slider.flexAnimate(slider.getTarget("next"));
          }
        }
      });
    },
    before: function(slider) {
      var speedControl = $('#speedControl').slider('option', 'value');
      slider.pause();
      slider.vars.slideshowSpeed = speedControl * 100;
      slider.play();
    }
  });
};
function jSlider() {
  $( "#speedControl" ).slider({
    min: 10,
    value: 50
  });
};
$('#slideShow').on('show.bs.modal', function () {
  initFlexModal();
  jSlider();
});
$('#soloCarousel').flexslider({
  animation: "slide",
  controlNav: false,
  nextText: "->",
  prevText: "<-",
  animationLoop: false,
  slideshow: false,
  itemWidth: 180,
  itemMargin: 5,
  customDirectionNav: $(".custom-navigation a"),
  asNavFor: '#slider'
});
$('#orderCarousel').flexslider({
  animation: "slide",
  controlNav: false,
  nextText: "->",
  prevText: "<-",
  animationLoop: false,
  slideshow: false,
  itemWidth: 180,
  itemMargin: 5,
  customDirectionNav: $(".thumbnail-navigation-2 a"),
  asNavFor: '#slider'
});
$('.share-icon').on('click', function(){
  $(this).toggleClass('selected');
});
$('.favorites-icon').on('click', function(){
  $(this).toggleClass('selected');
});
$('.left-icon').on('click', function(){
  $(this).toggleClass('selected');
});
$('.slideshow-button').on('click', function(){
  $(this).toggleClass('selected');
});

