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
            mediaPath = 'https://vercel.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 977,
                "name": "周深-后来没有你",
                "length": "4:46",
                "file": "精选/周深-后来没有你.mp3"
				},
				{
                "track": 976,
                "name": "周深-和光同春",
                "length": "4:46",
                "file": "精选/周深-和光同春.mp3"
				},
				{
                "track": 975,
                "name": "周深-和光同尘",
                "length": "4:46",
                "file": "精选/周深-和光同尘.mp3"
				},
				{
                "track": 974,
                "name": "周深-好好生活就是美好生活",
                "length": "4:46",
                "file": "精选/周深-好好生活就是美好生活.mp3"
				},
				{
                "track": 973,
                "name": "周深-好好",
                "length": "4:46",
                "file": "精选/周深-好好.mp3"
				},
				{
                "track": 972,
                "name": "周深-海上蝶",
                "length": "4:46",
                "file": "精选/周深-海上蝶.mp3"
				},
				{
                "track": 971,
                "name": "周深-海藏",
                "length": "4:46",
                "file": "精选/周深-海藏.mp3"
				},
				{
                "track": 970,
                "name": "周深-过尽千帆",
                "length": "4:46",
                "file": "精选/周深-过尽千帆.mp3"
				},
				{
                "track": 969,
                "name": "周深-归处",
                "length": "4:46",
                "file": "精选/周深-归处.mp3"
				},
				{
                "track": 968,
                "name": "周深-光字片",
                "length": "4:46",
                "file": "精选/周深-光字片.mp3"
				},
				{
                "track": 967,
                "name": "周深-光亮",
                "length": "4:46",
                "file": "精选/周深-光亮.mp3"
				},
				{
                "track": 966,
                "name": "周深-哥哥",
                "length": "4:46",
                "file": "精选/周深-哥哥.mp3"
				},
				{
                "track": 965,
                "name": "周深-浮游",
                "length": "4:46",
                "file": "精选/周深-浮游.mp3"
				},
				{
                "track": 964,
                "name": "周深-风筝是风的信",
                "length": "4:46",
                "file": "精选/周深-风筝是风的信.mp3"
				},
				{
                "track": 963,
                "name": "周深-风起流年",
                "length": "4:46",
                "file": "精选/周深-风起流年.mp3"
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