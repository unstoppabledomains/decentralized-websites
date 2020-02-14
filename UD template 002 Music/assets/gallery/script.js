(function($) {
    'use strict';

    function getVideoId(url) {
        if ('false' === url) return false;
        var result = /(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(url) || /^([-a-z0-9_]+)$/i.exec(url);

        return result ? result[1] : false;
    }

    function onPlayerReady(event) {
        if ($(event.target).closest('.mbr-slider').hasClass('in')) {
            event.target.playVideo();
        }
    }

    var isBuilder = $('html').hasClass('is-builder');

    /* get youtube id */
    if (!isBuilder) {
        /* google iframe */
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var players = [];

        $('.carousel-item.video-container img').css('display','none');

        /* google iframe api init function */
        window.onYouTubeIframeAPIReady = function() {
            var ytp = ytp || {};
            ytp.YTAPIReady || (ytp.YTAPIReady = !0,
                jQuery(document).trigger("YTAPIReady"));

            $('.video-slide').each(function(i) {
                $('.video-container').eq(i).append('<div id ="mbr-video-' + i + '" class="mbr-background-video" data-video-num="' + i + '"></div>')
                    .append('<div class="item-overlay"></div>');
                $(this).attr('data-video-num', i);

                if ($(this).attr('data-video-url').indexOf('vimeo.com') !== -1) {
                    var options = {
                        id: $(this).attr('data-video-url'),
                        width: '100%',
                        height: '100%',
                        loop: true
                    };

                    var player = new Vimeo.Player('mbr-video-' + i, options);

                    player.playVideo = Vimeo.play;
                } else {
                    var player = new YT.Player('mbr-video-' + i, {
                        height: '100%',
                        width: '100%',
                        videoId: getVideoId($(this).attr('data-video-url')),
                        events: {
                            'onReady': onPlayerReady
                        },
                        playerVars: {
                            rel: 0
                        }
                    });
                }

                players.push(player);
            });
        };
    }

    function updateMasonry(event){
        var $section = $(event.target);
        if (typeof $.fn.masonry !== 'undefined') {
            $section.outerFind('.mbr-gallery').each(function() {
                var $msnr = $(this).find('.mbr-gallery-row').masonry({
                    itemSelector: '.mbr-gallery-item:not(.mbr-gallery-item__hided)',
                    percentPosition: true,
                    horizontalOrder: true
                });
                // reload masonry (need for adding new or re-sort items)
                $msnr.masonry('reloadItems');
                $msnr.on('filter', function() {
                    $msnr.masonry('reloadItems');
                    $msnr.masonry('layout');
                    // update parallax backgrounds
                    $(window).trigger('update.parallax');
                }.bind(this, $msnr));
                // layout Masonry after each image loads
                $msnr.imagesLoaded().progress(function() {
                    $msnr.masonry('layout');
                });
            });
        }
    };

    /* Masonry Grid */
    $(document).on('add.cards', function(event) {
        var $section = $(event.target);
        $section.on('click', '.mbr-gallery-filter li', function(e) {
            e.preventDefault();
            var $li = $(this).closest('li');

            $li.parent().find('li').removeClass('active');
            $li.addClass('active');

            var $mas = $li.closest('section').find('.mbr-gallery-row');
            var filter = $(this)[0].textContent.trim();

            $section.find('.mbr-gallery-item').each(function(i, el) {
                var $elem = $(this);
                var tagsAttr = $elem.attr('data-tags');
                var tags = tagsAttr.split(',');

                var tagsTrimmed = tags.map(function(el) {
                    return el.trim();
                });

                if ($.inArray(filter, tagsTrimmed) === -1 && !$li.hasClass('mbr-gallery-filter-all')) {
                    $elem.addClass('mbr-gallery-item__hided');

                    $elem.css('left', '300px');
                } else {
                    $elem.removeClass('mbr-gallery-item__hided');
                }
            });

            $mas.closest('.mbr-gallery-row').trigger('filter');
        });
    });

    if (isBuilder) {
        $(document).on('changeButtonColor.cards', function(event) {
            var $section = $(event.target);

            if ($section.find('.mbr-gallery-filter').length > 0 && $(event.target).find('.mbr-gallery-filter').hasClass('gallery-filter-active')) {
                var classAttr = ($section.find('.mbr-gallery-filter .mbr-gallery-filter-all').find('a').attr('class') || '').replace(/(^|\s)active(\s|$)/, ' ').trim();

                $section.find('.mbr-gallery-filter ul li:not(.mbr-gallery-filter-all) a').attr('class', classAttr);
            }

            updateMasonry(event);
        });
    }

    $(document).on('add.cards changeParameter.cards', function(event) {
        var $section = $(event.target);
        var filterList = [];

        $section.find('.mbr-gallery-item').each(function(el) {
            var tagsList = ($(this).attr('data-tags') || "").trim().split(',');

            tagsList.map(function(el) {
                el = el.trim();
                if ($.inArray(el, filterList) === -1) filterList.push(el);
            });
        });

        if ($section.find('.mbr-gallery-filter').length > 0 && $(event.target).find('.mbr-gallery-filter').hasClass('gallery-filter-active')) {
            var filterHtml = '';

            $section.find('.mbr-gallery-filter ul li:not(.mbr-gallery-filter-all)').remove();

            var allItem = $section.find('.mbr-gallery-filter .mbr-gallery-filter-all'),
                classAttr = (allItem.find('a').attr('class') || '').replace(/(^|\s)active(\s|$)/, ' ').trim();
 
            filterList.map(function(el) {
                filterHtml += '<li><a class="' + classAttr + '" href>' + el + '</a></li>';
            });

            $section.find('.mbr-gallery-filter ul').append(filterHtml);

        }

        updateMasonry(event);
    });

    $(document).on('change.cards', function(event) {
        updateMasonry(event);
    });

    $(document).on('lazyload', function(event) {
        updateMasonry(event);
        $(window).scrollEnd(function(){
            updateMasonry(event);
        }, 250)
    });

    $('.mbr-gallery-item').on('click', 'a', function(e) {
        e.stopPropagation();
    });

    var timeout2, timeout, objectLightBox;

    /* Lightbox Fit */
    function styleVideo($carouselItem, wndH, windowPadding, bottomPadding){
        $carouselItem.css({
            'top': windowPadding,
            'height': wndH - 2 * windowPadding - 2 * bottomPadding
        })
    }

    function styleImg($carouselItem, wndH, wndW, windowPadding, bottomPadding){
        var $currentImg = $carouselItem.find('img');
        if ($currentImg[0].complete && $currentImg[0].naturalWidth>50 && $currentImg[0].naturalHeight>50) {
            setCSStoImage($currentImg,$carouselItem, wndH, wndW, windowPadding, bottomPadding)
        } else {
            $currentImg.one('load', function() {
                setCSStoImage($currentImg,$carouselItem, wndH, wndW, windowPadding, bottomPadding)
            })
        }
    }

    function setCSStoImage(image,item, wndH, wndW, windowPadding, bottomPadding) {
        var setWidth, setTop;

        var lbW = image[0].naturalWidth;
        var lbH = image[0].naturalHeight;

        // height change
        if (wndW / wndH > lbW / lbH) {
            var needH = wndH - bottomPadding * 2;
            setWidth = needH * lbW / lbH;
        } else { // width change
            setWidth = wndW - bottomPadding * 2;
        }
        // check for maw width
        setWidth = setWidth >= lbW ? lbW : setWidth;

        // set top to vertical center
        setTop = (wndH - setWidth * lbH / lbW) / 2;

        image.css({
            width: parseInt(setWidth),
            height: setWidth * lbH / lbW
        });
        item.css('top', setTop + windowPadding);
    }

    function timeOutCarousel($lightBox, wndW, wndH, windowPadding, bottomPadding, flagResize){
        var $carouselItems = $lightBox.find('.modal-dialog .carousel-item');

        $carouselItems.each(function() {
            if ((!flagResize && !$(this)[0].classList.contains('carousel-item-next') && !$(this)[0].classList.contains('carousel-item-prev')) || (flagResize && !$(this)[0].classList.contains('active'))){
                if ($(this)[0].classList.contains('video-container')){
                    styleVideo($(this), wndH, windowPadding, bottomPadding);
                }
                else{
                    styleImg($(this), wndH, wndW, windowPadding, bottomPadding);
                }
            }
        });
    }

    function fitLightbox() {
        var windowPadding = 0;
        var bottomPadding = 10;
        var wndW = $(window).width() - windowPadding * 2;
        var wndH = $(window).height() - windowPadding * 2;

        if (!objectLightBox) {
            return;
        }

        var $carouselItemActive, flagResize = false;
        if (objectLightBox.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev').length){
            $carouselItemActive = objectLightBox.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev');
        }
        else{
            $carouselItemActive = objectLightBox.find('.modal-dialog .carousel-item.active');
            flagResize = true;
        }

        if($carouselItemActive[0].classList.contains('video-container')){
            styleVideo($carouselItemActive, wndH, windowPadding, bottomPadding);
        }
        else{
            styleImg($carouselItemActive, wndH, wndW, windowPadding, bottomPadding);
        }

        clearTimeout(timeout);

        timeout = setTimeout( timeOutCarousel, 200, objectLightBox, wndW, wndH, windowPadding, bottomPadding, flagResize);

    }

    /* pause/start video on different events and fit lightbox */
    var $window = $(document).find('.mbr-gallery');

    $window.on('show.bs.modal', function(e) {
        clearTimeout(timeout2);

        timeout2 = setTimeout(function() {
            var index = $(e.relatedTarget).parent().index();
            var slide = $(e.target).find('.carousel-item').eq(index).find('.mbr-background-video');
            $(e.target).find('.carousel-item .mbr-background-video');
            if (slide.length > 0) {
                var player = players[+slide.attr('data-video-num')];
                player.playVideo ? player.playVideo() : player.play();
            }
        }, 500);

        objectLightBox = $(e.target);

        fitLightbox();

    });

    $window.on('slide.bs.carousel', function(e) {
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');
        if (ytv.length > 0) {
            var player = players[+ytv.attr('data-video-num')];
            player.pauseVideo ? player.pauseVideo() : player.pause();
        }
    });

    $(window).on('resize load', fitLightbox);

    $window.on('slid.bs.carousel', function(e) {
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');

        if (ytv.length > 0) {
            var player = players[+ytv.attr('data-video-num')];
            player.playVideo ? player.playVideo() : player.play();
        }
        
    });

    $window.on('hide.bs.modal', function(e) {
        players.map(function(player, i) {
            player.pauseVideo ? player.pauseVideo() : player.pause();
        });

        objectLightBox = null;
    });
}(jQuery));