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
                "track": 141,
                "name": "1037.BuddhasBlessing(OmManiPadmeHum)",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1037.BuddhasBlessing(OmManiPadmeHum).mp3"
				},
				{
                "track": 140,
                "name": "1036.Fragments-NilsFrahm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1036.Fragments-NilsFrahm.mp3"
				},
				{
                "track": 139,
                "name": "1035.Sea&Silence",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1035.Sea&Silence.mp3"
				},
				{
                "track": 138,
                "name": "1034.春蝉-Gontiti",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1034.春蝉-Gontiti.mp3"
				},
				{
                "track": 137,
                "name": "1033.Revelations-7and5",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1033.Revelations-7and5.mp3"
				},
				{
                "track": 136,
                "name": "1032.KindredSpirits-RobertFox",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1032.KindredSpirits-RobertFox.mp3"
				},
				{
                "track": 135,
                "name": "1031.GayatriMantra-MargotReisinger",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1031.GayatriMantra-MargotReisinger.mp3"
				},
				{
                "track": 134,
                "name": "1030.HeartofCompassionPart1-MargotReisinger",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1030.HeartofCompassionPart1-MargotReisinger.mp3"
				},
				{
                "track": 133,
                "name": "103.Lightup",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/103.Lightup.mp3"
				},
				{
                "track": 132,
                "name": "1029.HeartofCompassionPart2-MargotReisinger",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1029.HeartofCompassionPart2-MargotReisinger.mp3"
				},
				{
                "track": 131,
                "name": "1028.Devotion-MargotReisinger",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1028.Devotion-MargotReisinger.mp3"
				},
				{
                "track": 130,
                "name": "1027.Mystery",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1027.Mystery.mp3"
				},
				{
                "track": 129,
                "name": "1026.VoiceInTheEyes-LuigiRubino",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1026.VoiceInTheEyes-LuigiRubino.mp3"
				},
				{
                "track": 128,
                "name": "1025.Lament-Balmorhea",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1025.Lament-Balmorhea.mp3"
				},
				{
                "track": 127,
                "name": "1024.BrightLightWaltz-GeorgeWinston",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1024.BrightLightWaltz-GeorgeWinston.mp3"
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