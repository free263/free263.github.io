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
                "track": 426,
                "name": "369.Promise",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/369.Promise.mp3"
				},
				{
                "track": 425,
                "name": "368.WhaleandI",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/368.WhaleandI.mp3"
				},
				{
                "track": 424,
                "name": "367.Unfoldingofyourownlight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/367.Unfoldingofyourownlight.mp3"
				},
				{
                "track": 423,
                "name": "366.SheWalksinGrace",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/366.SheWalksinGrace.mp3"
				},
				{
                "track": 422,
                "name": "365.BlueLine",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/365.BlueLine.mp3"
				},
				{
                "track": 421,
                "name": "364.FollowingtheWind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/364.FollowingtheWind.mp3"
				},
				{
                "track": 420,
                "name": "363.Singlecycle",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/363.Singlecycle.mp3"
				},
				{
                "track": 419,
                "name": "362.Againstthelight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/362.Againstthelight.mp3"
				},
				{
                "track": 418,
                "name": "361.Controltherealfeeling",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/361.Controltherealfeeling.mp3"
				},
				{
                "track": 417,
                "name": "360.Rosywreath",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/360.Rosywreath.mp3"
				},
				{
                "track": 416,
                "name": "359.Tunnel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/359.Tunnel.mp3"
				},
				{
                "track": 415,
                "name": "358.Goldenskies",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/358.Goldenskies.mp3"
				},
				{
                "track": 414,
                "name": "357.Midnightsun",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/357.Midnightsun.mp3"
				},
				{
                "track": 413,
                "name": "356.Anotheryear",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/356.Anotheryear.mp3"
				},
				{
                "track": 412,
                "name": "355.IsabellaFindsaWay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/355.IsabellaFindsaWay.mp3"
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