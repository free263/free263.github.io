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
                "track": 681,
                "name": "624.Fromthemoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/624.Fromthemoon.mp3"
				},
				{
                "track": 680,
                "name": "623.Unique",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/623.Unique.mp3"
				},
				{
                "track": 679,
                "name": "622.Aplaceofpsychedelic",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/622.Aplaceofpsychedelic.mp3"
				},
				{
                "track": 678,
                "name": "621.TheseanamedDorian",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/621.TheseanamedDorian.mp3"
				},
				{
                "track": 677,
                "name": "620.Lovedinner",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/620.Lovedinner.mp3"
				},
				{
                "track": 676,
                "name": "619.Labyrinth-迷宫",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/619.Labyrinth-迷宫.mp3"
				},
				{
                "track": 675,
                "name": "618.Emotion",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/618.Emotion.mp3"
				},
				{
                "track": 674,
                "name": "617.Flowersofthetreeoflife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/617.Flowersofthetreeoflife.mp3"
				},
				{
                "track": 673,
                "name": "616.Whenthewindpassing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/616.Whenthewindpassing.mp3"
				},
				{
                "track": 672,
                "name": "615.Fingertip",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/615.Fingertip.mp3"
				},
				{
                "track": 671,
                "name": "614.Theworth",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/614.Theworth.mp3"
				},
				{
                "track": 670,
                "name": "613.Morningbreeze",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/613.Morningbreeze.mp3"
				},
				{
                "track": 669,
                "name": "612.Empty",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/612.Empty.mp3"
				},
				{
                "track": 668,
                "name": "611.Windofwaltz",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/611.Windofwaltz.mp3"
				},
				{
                "track": 667,
                "name": "610.Inthesky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/610.Inthesky.mp3"
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