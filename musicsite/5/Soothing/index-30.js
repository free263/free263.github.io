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
                "track": 621,
                "name": "564.Quietrabbit",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/564.Quietrabbit.mp3"
				},
				{
                "track": 620,
                "name": "563.Partoflife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/563.Partoflife.mp3"
				},
				{
                "track": 619,
                "name": "562.Fever",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/562.Fever.mp3"
				},
				{
                "track": 618,
                "name": "561.Lightblue",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/561.Lightblue.mp3"
				},
				{
                "track": 617,
                "name": "560.Theoldsong",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/560.Theoldsong.mp3"
				},
				{
                "track": 616,
                "name": "559.Océans",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/559.Océans.mp3"
				},
				{
                "track": 615,
                "name": "558.WhaleSharkandOceanSunrise",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/558.WhaleSharkandOceanSunrise.mp3"
				},
				{
                "track": 614,
                "name": "557.Therecomesthelight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/557.Therecomesthelight.mp3"
				},
				{
                "track": 613,
                "name": "556.Inoculation",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/556.Inoculation.mp3"
				},
				{
                "track": 612,
                "name": "555.Eighteen",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/555.Eighteen.mp3"
				},
				{
                "track": 611,
                "name": "554.Lifestar",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/554.Lifestar.mp3"
				},
				{
                "track": 610,
                "name": "553.Waltzoftheyouth",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/553.Waltzoftheyouth.mp3"
				},
				{
                "track": 609,
                "name": "552.BlueCoastal",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/552.BlueCoastal.mp3"
				},
				{
                "track": 608,
                "name": "551.Muse",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/551.Muse.mp3"
				},
				{
                "track": 607,
                "name": "550.Gather",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/550.Gather.mp3"
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