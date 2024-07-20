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
                "track": 1097,
                "name": "周深-重生",
                "length": "4:46",
                "file": "精选/周深-重生.mp3"
				},
				{
                "track": 1096,
                "name": "周深-直破穹苍",
                "length": "4:46",
                "file": "精选/周深-直破穹苍.mp3"
				},
				{
                "track": 1095,
                "name": "周深-只为真相",
                "length": "4:46",
                "file": "精选/周深-只为真相.mp3"
				},
				{
                "track": 1094,
                "name": "周深-征途",
                "length": "4:46",
                "file": "精选/周深-征途.mp3"
				},
				{
                "track": 1093,
                "name": "周深-照耀星河",
                "length": "4:46",
                "file": "精选/周深-照耀星河.mp3"
				},
				{
                "track": 1092,
                "name": "周深-在意",
                "length": "4:46",
                "file": "精选/周深-在意.mp3"
				},
				{
                "track": 1091,
                "name": "周深-云裳羽衣曲",
                "length": "4:46",
                "file": "精选/周深-云裳羽衣曲.mp3"
				},
				{
                "track": 1090,
                "name": "周深-愿得一心人",
                "length": "4:46",
                "file": "精选/周深-愿得一心人.mp3"
				},
				{
                "track": 1089,
                "name": "周深-愿",
                "length": "4:46",
                "file": "精选/周深-愿.mp3"
				},
				{
                "track": 1088,
                "name": "周深-缘起",
                "length": "4:46",
                "file": "精选/周深-缘起.mp3"
				},
				{
                "track": 1087,
                "name": "周深-与卿",
                "length": "4:46",
                "file": "精选/周深-与卿.mp3"
				},
				{
                "track": 1086,
                "name": "周深-余情",
                "length": "4:46",
                "file": "精选/周深-余情.mp3"
				},
				{
                "track": 1085,
                "name": "周深-有我",
                "length": "4:46",
                "file": "精选/周深-有我.mp3"
				},
				{
                "track": 1084,
                "name": "周深-勇气",
                "length": "4:46",
                "file": "精选/周深-勇气.mp3"
				},
				{
                "track": 1083,
                "name": "周深-永恒孤独",
                "length": "4:46",
                "file": "精选/周深-永恒孤独.mp3"
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