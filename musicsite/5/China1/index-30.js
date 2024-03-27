// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://pan.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 677,
                "name": "辛晓琪-味道",
                "length": "4:46",
                "file": "精选/辛晓琪-味道.mp3"
				},
				{
                "track": 676,
                "name": "谢雨欣-天仙子",
                "length": "4:46",
                "file": "精选/谢雨欣-天仙子.mp3"
				},
				{
                "track": 675,
                "name": "谢雨欣-第三天",
                "length": "4:46",
                "file": "精选/谢雨欣-第三天.mp3"
				},
				{
                "track": 674,
                "name": "谢雨欣-步步高",
                "length": "4:46",
                "file": "精选/谢雨欣-步步高.mp3"
				},
				{
                "track": 673,
                "name": "谢霆锋-因为爱所以爱",
                "length": "4:46",
                "file": "精选/谢霆锋-因为爱所以爱.mp3"
				},
				{
                "track": 672,
                "name": "谢霆锋-谢谢你的爱1999",
                "length": "4:46",
                "file": "精选/谢霆锋-谢谢你的爱1999.mp3"
				},
				{
                "track": 671,
                "name": "谢娜-菠萝菠萝蜜",
                "length": "4:46",
                "file": "精选/谢娜-菠萝菠萝蜜.mp3"
				},
				{
                "track": 670,
                "name": "谢军-心在跳情在烧",
                "length": "4:46",
                "file": "精选/谢军-心在跳情在烧.mp3"
				},
				{
                "track": 669,
                "name": "谢东-中华民谣",
                "length": "4:46",
                "file": "精选/谢东-中华民谣.mp3"
				},
				{
                "track": 668,
                "name": "谢东-笑脸",
                "length": "4:46",
                "file": "精选/谢东-笑脸.mp3"
				},
				{
                "track": 667,
                "name": "小沈阳-都要好好的",
                "length": "4:46",
                "file": "精选/小沈阳-都要好好的.mp3"
				},
				{
                "track": 666,
                "name": "小沈阳-爱是你我",
                "length": "4:46",
                "file": "精选/小沈阳-爱是你我.mp3"
				},
				{
                "track": 665,
                "name": "小潘潘、小峰峰-学猫叫",
                "length": "4:46",
                "file": "精选/小潘潘、小峰峰-学猫叫.mp3"
				},
				{
                "track": 664,
                "name": "小虎队-十七岁的雨季",
                "length": "4:46",
                "file": "精选/小虎队-十七岁的雨季.mp3"
				},
				{
                "track": 663,
                "name": "小虎队-青苹果乐园",
                "length": "4:46",
                "file": "精选/小虎队-青苹果乐园.mp3"
				},
			],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});