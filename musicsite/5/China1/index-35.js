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
                "track": 602,
                "name": "王靖雯-沦陷",
                "length": "4:46",
                "file": "精选/王靖雯-沦陷.mp3"
				},
				{
                "track": 601,
                "name": "王杰-英雄泪",
                "length": "4:46",
                "file": "精选/王杰-英雄泪.mp3"
				},
				{
                "track": 600,
                "name": "王杰-一无所有",
                "length": "4:46",
                "file": "精选/王杰-一无所有.mp3"
				},
				{
                "track": 599,
                "name": "王杰-一场游戏一场梦",
                "length": "4:46",
                "file": "精选/王杰-一场游戏一场梦.mp3"
				},
				{
                "track": 598,
                "name": "王杰-为了爱梦一生",
                "length": "4:46",
                "file": "精选/王杰-为了爱梦一生.mp3"
				},
				{
                "track": 597,
                "name": "王杰-忘了你忘了我",
                "length": "4:46",
                "file": "精选/王杰-忘了你忘了我.mp3"
				},
				{
                "track": 596,
                "name": "王杰-忘记你不如忘记自己",
                "length": "4:46",
                "file": "精选/王杰-忘记你不如忘记自己.mp3"
				},
				{
                "track": 595,
                "name": "王杰-伤心1999",
                "length": "4:46",
                "file": "精选/王杰-伤心1999.mp3"
				},
				{
                "track": 594,
                "name": "王杰-你是我胸口永远的痛",
                "length": "4:46",
                "file": "精选/王杰-你是我胸口永远的痛.mp3"
				},
				{
                "track": 593,
                "name": "王赫野-大风吹",
                "length": "4:46",
                "file": "精选/王赫野-大风吹.mp3"
				},
				{
                "track": 592,
                "name": "王菲-笑忘书",
                "length": "4:46",
                "file": "精选/王菲-笑忘书.mp3"
				},
				{
                "track": 591,
                "name": "王菲-如愿",
                "length": "4:46",
                "file": "精选/王菲-如愿.mp3"
				},
				{
                "track": 590,
                "name": "王菲-容易受伤的女人",
                "length": "4:46",
                "file": "精选/王菲-容易受伤的女人.mp3"
				},
				{
                "track": 589,
                "name": "王菲-红豆",
                "length": "4:46",
                "file": "精选/王菲-红豆.mp3"
				},
				{
                "track": 588,
                "name": "王菲-传奇",
                "length": "4:46",
                "file": "精选/王菲-传奇.mp3"
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