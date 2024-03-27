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
                "track": 636,
                "name": "579.Archangel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/579.Archangel.mp3"
				},
				{
                "track": 635,
                "name": "578.Wunjo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/578.Wunjo.mp3"
				},
				{
                "track": 634,
                "name": "577.Ring",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/577.Ring.mp3"
				},
				{
                "track": 633,
                "name": "576.Cityintherain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/576.Cityintherain.mp3"
				},
				{
                "track": 632,
                "name": "575.Cometoanabruptend",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/575.Cometoanabruptend.mp3"
				},
				{
                "track": 631,
                "name": "574.Rhapsody",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/574.Rhapsody.mp3"
				},
				{
                "track": 630,
                "name": "573.Unrecognized",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/573.Unrecognized.mp3"
				},
				{
                "track": 629,
                "name": "572.Somnambulism",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/572.Somnambulism.mp3"
				},
				{
                "track": 628,
                "name": "571.Gloomofdarkness",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/571.Gloomofdarkness.mp3"
				},
				{
                "track": 627,
                "name": "570.Whim",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/570.Whim.mp3"
				},
				{
                "track": 626,
                "name": "569.Aswaterunderthebridge",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/569.Aswaterunderthebridge.mp3"
				},
				{
                "track": 625,
                "name": "568.MissandMiss",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/568.MissandMiss.mp3"
				},
				{
                "track": 624,
                "name": "567.TenderistheNight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/567.TenderistheNight.mp3"
				},
				{
                "track": 623,
                "name": "566.Itsnotadream",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/566.Itsnotadream.mp3"
				},
				{
                "track": 622,
                "name": "565.Feather",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/565.Feather.mp3"
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