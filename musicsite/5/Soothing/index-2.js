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
                "track": 1041,
                "name": "984.PrayerforHumanity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/984.PrayerforHumanity.mp3"
				},
				{
                "track": 1040,
                "name": "983.PainfulLove-Prologue",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/983.PainfulLove-Prologue.mp3"
				},
				{
                "track": 1039,
                "name": "982.PainfulLove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/982.PainfulLove.mp3"
				},
				{
                "track": 1038,
                "name": "981.Tojojo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/981.Tojojo.mp3"
				},
				{
                "track": 1037,
                "name": "980.India",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/980.India.mp3"
				},
				{
                "track": 1036,
                "name": "979.HereandForever",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/979.HereandForever.mp3"
				},
				{
                "track": 1035,
                "name": "978.OldMan",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/978.OldMan.mp3"
				},
				{
                "track": 1034,
                "name": "977.Windwave",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/977.Windwave.mp3"
				},
				{
                "track": 1033,
                "name": "976.Egypt",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/976.Egypt.mp3"
				},
				{
                "track": 1032,
                "name": "975.Cahuita",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/975.Cahuita.mp3"
				},
				{
                "track": 1031,
                "name": "974.TheShadeofTojojo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/974.TheShadeofTojojo.mp3"
				},
				{
                "track": 1030,
                "name": "973.RioAmazonas",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/973.RioAmazonas.mp3"
				},
				{
                "track": 1029,
                "name": "972.PainfulLove-Epilogue",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/972.PainfulLove-Epilogue.mp3"
				},
				{
                "track": 1028,
                "name": "971.Hemingbough....APrelude",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/971.Hemingbough....APrelude.mp3"
				},
				{
                "track": 1027,
                "name": "970.ComingHome",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/970.ComingHome.mp3"
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