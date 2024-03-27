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
                "track": 722,
                "name": "薛之谦-你还要我怎样",
                "length": "4:46",
                "file": "精选/薛之谦-你还要我怎样.mp3"
				},
				{
                "track": 721,
                "name": "薛之谦-丑八怪",
                "length": "4:46",
                "file": "精选/薛之谦-丑八怪.mp3"
				},
				{
                "track": 720,
                "name": "薛之谦-暧昧",
                "length": "4:46",
                "file": "精选/薛之谦-暧昧.mp3"
				},
				{
                "track": 719,
                "name": "许志安-为什么你背着我爱别人",
                "length": "4:46",
                "file": "精选/许志安-为什么你背着我爱别人.mp3"
				},
				{
                "track": 718,
                "name": "许巍-曾经的你",
                "length": "4:46",
                "file": "精选/许巍-曾经的你.mp3"
				},
				{
                "track": 717,
                "name": "许嵩-断桥残雪",
                "length": "4:46",
                "file": "精选/许嵩-断桥残雪.mp3"
				},
				{
                "track": 716,
                "name": "许嵩-半城烟沙",
                "length": "4:46",
                "file": "精选/许嵩-半城烟沙.mp3"
				},
				{
                "track": 715,
                "name": "许韶洋-幸福的瞬间",
                "length": "4:46",
                "file": "精选/许韶洋-幸福的瞬间.mp3"
				},
				{
                "track": 714,
                "name": "许韶洋-花香",
                "length": "4:46",
                "file": "精选/许韶洋-花香.mp3"
				},
				{
                "track": 713,
                "name": "许茹芸-一直是晴天",
                "length": "4:46",
                "file": "精选/许茹芸-一直是晴天.mp3"
				},
				{
                "track": 712,
                "name": "许茹芸-我依然爱你",
                "length": "4:46",
                "file": "精选/许茹芸-我依然爱你.mp3"
				},
				{
                "track": 711,
                "name": "许茹芸-如果云知道",
                "length": "4:46",
                "file": "精选/许茹芸-如果云知道.mp3"
				},
				{
                "track": 710,
                "name": "许茹芸-日光机场",
                "length": "4:46",
                "file": "精选/许茹芸-日光机场.mp3"
				},
				{
                "track": 709,
                "name": "许茹芸-泪海",
                "length": "4:46",
                "file": "精选/许茹芸-泪海.mp3"
				},
				{
                "track": 708,
                "name": "许茹芸-独角戏",
                "length": "4:46",
                "file": "精选/许茹芸-独角戏.mp3"
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