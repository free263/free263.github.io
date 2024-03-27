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
                "track": 24,
                "name": "BoA-AmazingKiss",
                "length": "4:46",
                "file": "韩国音乐/BoA-AmazingKiss.mp3"
				},
				{
                "track": 23,
                "name": "BoA-AmazingKiss(EnglishVersion)",
                "length": "4:46",
                "file": "韩国音乐/BoA-AmazingKiss(EnglishVersion).mp3"
				},
				{
                "track": 22,
                "name": "BoA-AllThatJazz",
                "length": "4:46",
                "file": "韩国音乐/BoA-AllThatJazz.mp3"
				},
				{
                "track": 21,
                "name": "BoA-Aggressive",
                "length": "4:46",
                "file": "韩国音乐/BoA-Aggressive.mp3"
				},
				{
                "track": 20,
                "name": "BoA-Again",
                "length": "4:46",
                "file": "韩国音乐/BoA-Again.mp3"
				},
				{
                "track": 19,
                "name": "BoA-Adrenaline",
                "length": "4:46",
                "file": "韩国音乐/BoA-Adrenaline.mp3"
				},
				{
                "track": 18,
                "name": "BoA-Addiction(Bo)",
                "length": "4:46",
                "file": "韩国音乐/BoA-Addiction(Bo).mp3"
				},
				{
                "track": 17,
                "name": "BoA-Action",
                "length": "4:46",
                "file": "韩国音乐/BoA-Action.mp3"
				},
				{
                "track": 16,
                "name": "BoA-???",
                "length": "4:46",
                "file": "韩国音乐/BoA-???.mp3"
				},
				{
                "track": 15,
                "name": "BoA-??,???(NoWay)",
                "length": "4:46",
                "file": "韩国音乐/BoA-??,???(NoWay).mp3"
				},
				{
                "track": 14,
                "name": "BoA、郑允浩-Swing",
                "length": "4:46",
                "file": "韩国音乐/BoA、郑允浩-Swing.mp3"
				},
				{
                "track": 13,
                "name": "BoA、YutakaFurukawa-LOSEYOURMIND",
                "length": "4:46",
                "file": "韩国音乐/BoA、YutakaFurukawa-LOSEYOURMIND.mp3"
				},
				{
                "track": 12,
                "name": "BoA、WISE-MyWayYourWay",
                "length": "4:46",
                "file": "韩国音乐/BoA、WISE-MyWayYourWay.mp3"
				},
				{
                "track": 11,
                "name": "BoA、VERBAL-BUMPBUMP!",
                "length": "4:46",
                "file": "韩国音乐/BoA、VERBAL-BUMPBUMP!.mp3"
				},
				{
                "track": 10,
                "name": "BoA、SeanGarrett-IDidItForLove",
                "length": "4:46",
                "file": "韩国音乐/BoA、SeanGarrett-IDidItForLove.mp3"
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