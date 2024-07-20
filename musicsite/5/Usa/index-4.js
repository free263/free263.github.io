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
                "track": 63,
                "name": "Meg MyersRunning Up That Hill",
                "length": "4:46",
                "file": "欧美音乐/Meg MyersRunning Up That Hill.mp3"
				},
				{
                "track": 62,
                "name": "MariahCarey-withoutyou",
                "length": "4:46",
                "file": "欧美音乐/MariahCarey-withoutyou.mp3"
				},
				{
                "track": 61,
                "name": "MariahCarey-when you believe",
                "length": "4:46",
                "file": "欧美音乐/MariahCarey-when you believe.mp3"
				},
				{
                "track": 60,
                "name": "MariaArredondo-Burning",
                "length": "4:46",
                "file": "欧美音乐/MariaArredondo-Burning.mp3"
				},
				{
                "track": 59,
                "name": "M2MThe Day You Went Away",
                "length": "4:46",
                "file": "欧美音乐/M2MThe Day You Went Away.mp3"
				},
				{
                "track": 58,
                "name": "M2MPretty Boy",
                "length": "4:46",
                "file": "欧美音乐/M2MPretty Boy.mp3"
				},
				{
                "track": 57,
                "name": "Luis Fonsi-Despacito",
                "length": "4:46",
                "file": "欧美音乐/Luis Fonsi-Despacito.mp3"
				},
				{
                "track": 56,
                "name": "LovestonedBye Bye Bye",
                "length": "4:46",
                "file": "欧美音乐/LovestonedBye Bye Bye.mp3"
				},
				{
                "track": 55,
                "name": "LionelRichie-SayYouSayMe",
                "length": "4:46",
                "file": "欧美音乐/LionelRichie-SayYouSayMe.mp3"
				},
				{
                "track": 54,
                "name": "LeoSayer-MoreThanICanSay",
                "length": "4:46",
                "file": "欧美音乐/LeoSayer-MoreThanICanSay.mp3"
				},
				{
                "track": 53,
                "name": "Lenka-TroubleIsaFriend",
                "length": "4:46",
                "file": "欧美音乐/Lenka-TroubleIsaFriend.mp3"
				},
				{
                "track": 52,
                "name": "Lenka-TheShow",
                "length": "4:46",
                "file": "欧美音乐/Lenka-TheShow.mp3"
				},
				{
                "track": 51,
                "name": "Ladygaga-Poker Face",
                "length": "4:46",
                "file": "欧美音乐/Ladygaga-Poker Face.mp3"
				},
				{
                "track": 50,
                "name": "Klymaxx-IMissYou",
                "length": "4:46",
                "file": "欧美音乐/Klymaxx-IMissYou.mp3"
				},
				{
                "track": 49,
                "name": "Kelly ClarksonCatch My Breath",
                "length": "4:46",
                "file": "欧美音乐/Kelly ClarksonCatch My Breath.mp3"
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