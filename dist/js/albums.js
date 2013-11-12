var Albums = {
    screenHeight: 0,
    container: '.album',
    selector: 'li',
    pictures: [],
    size: [],
    sizeName: [],
    arrow: {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        space: 32
    },
    isPlay: false,
    timeout: 3000,

    init: function() {
        this.pictures = $(this.container).find(this.selector);
        this.size = [300, 480, 768, 992, 1382, 1600];
        this.sizeName = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

        this.screenSizeChange();
    },

    screenSizeChange: function() {
        var screenWidth = $(window).width(),
            screenHeight = $(window).height(),
            sizeName = this.sizeName[0],
            maxSize = Math.min(screenWidth, screenHeight),
            key,
            picturesLength = this.pictures.length,
            sizeLength = this.size.length;

        this.screenHeight = screenHeight;

        for (key = 0; key < sizeLength; key++) {
            if (this.size[key] < maxSize && key + 1 < sizeLength) {
                sizeName = this.sizeName[key + 1];
            }
        }

        for (key = 0; key < picturesLength; key++) {
            $(this.pictures[key]).css('background-image', 'url(' + $(this.pictures[key]).data(sizeName) + ')');
        }
    },

    keyDown: function (event) {
        var keyCode = event.keyCode || event.which;

        switch (keyCode) {
            case this.arrow.right:
                this.nextPicture();
                break;
            case this.arrow.left:
                this.prevPicture();
                break;
            case this.arrow.down:
                event.preventDefault();
                this.nextPicture();
                break;
            case this.arrow.up:
                event.preventDefault();
                this.prevPicture();
                break;
            case this.arrow.space:
                event.preventDefault();
                if (this.isPlay) {
                    this.stop();
                } else {
                    this.play();
                }
                break;
        }
    },

    nextPicture: function () {
        window.scrollBy(0, this.screenHeight);
    },

    prevPicture: function () {
        window.scrollBy(0, -this.screenHeight);
    },

    play: function () {
        console.log('play');
        if (this.isPlay) {

            // todo : verifier que c pas la derniere image...
            if (false) {
                this.stop();
            } else {
                this.nextPicture();
            }
        } else {
            this.isPlay = true;
        }
        this.playTimeout = setTimeout(function () {Albums.play();}, Albums.timeout);
    },

    stop: function () {
        console.log('stop');
        this.isPlay = false;
        clearTimeout( this.playTimeout );
    }
};

Albums.init();

$(window).resize(function() {
    Albums.screenSizeChange();
});

$(window).keydown(function(event) {
    Albums.keyDown(event);
});
