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
                "track": 486,
                "name": "429.Thegardenofmidnight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/429.Thegardenofmidnight.mp3"
				},
				{
                "track": 485,
                "name": "428.Lostinthethickfog",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/428.Lostinthethickfog.mp3"
				},
				{
                "track": 484,
                "name": "427.Southernmost",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/427.Southernmost.mp3"
				},
				{
                "track": 483,
                "name": "426.Momenomori",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/426.Momenomori.mp3"
				},
				{
                "track": 482,
                "name": "425.Fearless",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/425.Fearless.mp3"
				},
				{
                "track": 481,
                "name": "424.Becauseof",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/424.Becauseof.mp3"
				},
				{
                "track": 480,
                "name": "423.Spruces",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/423.Spruces.mp3"
				},
				{
                "track": 479,
                "name": "422.Transparentcolor",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/422.Transparentcolor.mp3"
				},
				{
                "track": 478,
                "name": "421.HerbGarden",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/421.HerbGarden.mp3"
				},
				{
                "track": 477,
                "name": "420.OvertheRiverandThroughtheWood",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/420.OvertheRiverandThroughtheWood.mp3"
				},
				{
                "track": 476,
                "name": "419.RosePetals",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/419.RosePetals.mp3"
				},
				{
                "track": 475,
                "name": "418.AsCloseasthis",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/418.AsCloseasthis.mp3"
				},
				{
                "track": 474,
                "name": "417.NameYourStar",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/417.NameYourStar.mp3"
				},
				{
                "track": 473,
                "name": "416.BlueCanoe",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/416.BlueCanoe.mp3"
				},
				{
                "track": 472,
                "name": "415.QuietMorning",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/415.QuietMorning.mp3"
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