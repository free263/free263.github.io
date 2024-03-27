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
                "track": 756,
                "name": "699.Shrine",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/699.Shrine.mp3"
				},
				{
                "track": 755,
                "name": "698.AboutLove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/698.AboutLove.mp3"
				},
				{
                "track": 754,
                "name": "697.Silentvalley",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/697.Silentvalley.mp3"
				},
				{
                "track": 753,
                "name": "696.Halfoftheface",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/696.Halfoftheface.mp3"
				},
				{
                "track": 752,
                "name": "695.Motto",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/695.Motto.mp3"
				},
				{
                "track": 751,
                "name": "694.Elsewhere",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/694.Elsewhere.mp3"
				},
				{
                "track": 750,
                "name": "693.Asifnothing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/693.Asifnothing.mp3"
				},
				{
                "track": 749,
                "name": "692.Growing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/692.Growing.mp3"
				},
				{
                "track": 748,
                "name": "691.Senseofdirection-方向感",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/691.Senseofdirection-方向感.mp3"
				},
				{
                "track": 747,
                "name": "690.Wheatfieldsinthesea-海中麦田",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/690.Wheatfieldsinthesea-海中麦田.mp3"
				},
				{
                "track": 746,
                "name": "689.Gazedintothedistance",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/689.Gazedintothedistance.mp3"
				},
				{
                "track": 745,
                "name": "688.Spunsugar",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/688.Spunsugar.mp3"
				},
				{
                "track": 744,
                "name": "687.soft-forTida",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/687.soft-forTida.mp3"
				},
				{
                "track": 743,
                "name": "686.Prompt",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/686.Prompt.mp3"
				},
				{
                "track": 742,
                "name": "685.Mr.Warm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/685.Mr.Warm.mp3"
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