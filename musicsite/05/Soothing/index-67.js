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
                "track": 66,
                "name": "066.Callagain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/066.Callagain.mp3"
				},
				{
                "track": 65,
                "name": "065.Thejoythatisntshareddiesyoung",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/065.Thejoythatisntshareddiesyoung.mp3"
				},
				{
                "track": 64,
                "name": "064.Andsotheadventurebegining",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/064.Andsotheadventurebegining.mp3"
				},
				{
                "track": 63,
                "name": "063.Callagain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/063.Callagain.mp3"
				},
				{
                "track": 62,
                "name": "062.Becomeavoice",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/062.Becomeavoice.mp3"
				},
				{
                "track": 61,
                "name": "061.Wearesuchstuffasdreamsaremadeon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/061.Wearesuchstuffasdreamsaremadeon.mp3"
				},
				{
                "track": 60,
                "name": "060.Wander",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/060.Wander.mp3"
				},
				{
                "track": 59,
                "name": "059.SecuretheNight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/059.SecuretheNight.mp3"
				},
				{
                "track": 58,
                "name": "058.LetLoveBe",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/058.LetLoveBe.mp3"
				},
				{
                "track": 57,
                "name": "057.Carrythesuninagoldencup",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/057.Carrythesuninagoldencup.mp3"
				},
				{
                "track": 56,
                "name": "056.FallingOutoftheSky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/056.FallingOutoftheSky.mp3"
				},
				{
                "track": 55,
                "name": "055.NineforOdin",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/055.NineforOdin.mp3"
				},
				{
                "track": 54,
                "name": "054.Icarryyourheart",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/054.Icarryyourheart.mp3"
				},
				{
                "track": 53,
                "name": "053.Wind’ssoughinginthetrees",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/053.Wind’ssoughinginthetrees.mp3"
				},
				{
                "track": 52,
                "name": "052.OceanWaves",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/052.OceanWaves.mp3"
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