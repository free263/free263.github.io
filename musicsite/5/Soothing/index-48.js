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
                "track": 351,
                "name": "294.Thenumber",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/294.Thenumber.mp3"
				},
				{
                "track": 350,
                "name": "293.Inatrance",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/293.Inatrance.mp3"
				},
				{
                "track": 349,
                "name": "292.Seedpods",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/292.Seedpods.mp3"
				},
				{
                "track": 348,
                "name": "291.Dmoggyday",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/291.Dmoggyday.mp3"
				},
				{
                "track": 347,
                "name": "290.Touchherhearts",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/290.Touchherhearts.mp3"
				},
				{
                "track": 346,
                "name": "289.Regretless",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/289.Regretless.mp3"
				},
				{
                "track": 345,
                "name": "288.DearMr.weather",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/288.DearMr.weather.mp3"
				},
				{
                "track": 344,
                "name": "287.Doomed",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/287.Doomed.mp3"
				},
				{
                "track": 343,
                "name": "286.Walking",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/286.Walking.mp3"
				},
				{
                "track": 342,
                "name": "285.Mistletoe",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/285.Mistletoe.mp3"
				},
				{
                "track": 341,
                "name": "284.Countdown",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/284.Countdown.mp3"
				},
				{
                "track": 340,
                "name": "283.Naturemandala",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/283.Naturemandala.mp3"
				},
				{
                "track": 339,
                "name": "282.Atthesametime",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/282.Atthesametime.mp3"
				},
				{
                "track": 338,
                "name": "281.Velvet",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/281.Velvet.mp3"
				},
				{
                "track": 337,
                "name": "280.Blowwiththewind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/280.Blowwiththewind.mp3"
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