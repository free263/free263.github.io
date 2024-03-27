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
                "track": 906,
                "name": "849.UntilTomorrow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/849.UntilTomorrow.mp3"
				},
				{
                "track": 905,
                "name": "848.LeJardin",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/848.LeJardin.mp3"
				},
				{
                "track": 904,
                "name": "847.OnceintheLongAgo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/847.OnceintheLongAgo.mp3"
				},
				{
                "track": 903,
                "name": "846.TwilightsEmbrace",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/846.TwilightsEmbrace.mp3"
				},
				{
                "track": 902,
                "name": "845.WaterTapestry",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/845.WaterTapestry.mp3"
				},
				{
                "track": 901,
                "name": "844.Return",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/844.Return.mp3"
				},
				{
                "track": 900,
                "name": "843.reflect",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/843.reflect.mp3"
				},
				{
                "track": 899,
                "name": "842.Whis...",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/842.Whis....mp3"
				},
				{
                "track": 898,
                "name": "841.Daydreams",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/841.Daydreams.mp3"
				},
				{
                "track": 897,
                "name": "840.Danceofthe...",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/840.Danceofthe....mp3"
				},
				{
                "track": 896,
                "name": "839.ReturntoL",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/839.ReturntoL.mp3"
				},
				{
                "track": 895,
                "name": "838.BlossomWind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/838.BlossomWind.mp3"
				},
				{
                "track": 894,
                "name": "837.Remembered",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/837.Remembered.mp3"
				},
				{
                "track": 893,
                "name": "836.Theriveroftime",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/836.Theriveroftime.mp3"
				},
				{
                "track": 892,
                "name": "835.AbovetheCloudsandWind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/835.AbovetheCloudsandWind.mp3"
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