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
                "track": 114,
                "name": "BoA-LoveHurts",
                "length": "4:46",
                "file": "韩国音乐/BoA-LoveHurts.mp3"
				},
				{
                "track": 113,
                "name": "BoA-LoveCanMakeAMiracle",
                "length": "4:46",
                "file": "韩国音乐/BoA-LoveCanMakeAMiracle.mp3"
				},
				{
                "track": 112,
                "name": "BoA-LOVE",
                "length": "4:46",
                "file": "韩国音乐/BoA-LOVE.mp3"
				},
				{
                "track": 111,
                "name": "BoA-LookWhosTalking",
                "length": "4:46",
                "file": "韩国音乐/BoA-LookWhosTalking.mp3"
				},
				{
                "track": 110,
                "name": "BoA-LongTimeNoSee",
                "length": "4:46",
                "file": "韩国音乐/BoA-LongTimeNoSee.mp3"
				},
				{
                "track": 109,
                "name": "BoA-LOLLIPOP",
                "length": "4:46",
                "file": "韩国音乐/BoA-LOLLIPOP.mp3"
				},
				{
                "track": 108,
                "name": "BoA-LittleMore",
                "length": "4:46",
                "file": "韩国音乐/BoA-LittleMore.mp3"
				},
				{
                "track": 107,
                "name": "BoA-LittleBird",
                "length": "4:46",
                "file": "韩国音乐/BoA-LittleBird.mp3"
				},
				{
                "track": 106,
                "name": "BoA-LISTENTOMYHEART(EnglishVersion)",
                "length": "4:46",
                "file": "韩国音乐/BoA-LISTENTOMYHEART(EnglishVersion).mp3"
				},
				{
                "track": 105,
                "name": "BoA-ListenToMyHeart(BonusTrack)",
                "length": "4:46",
                "file": "韩国音乐/BoA-ListenToMyHeart(BonusTrack).mp3"
				},
				{
                "track": 104,
                "name": "BoA-LetUGo",
                "length": "4:46",
                "file": "韩国音乐/BoA-LetUGo.mp3"
				},
				{
                "track": 103,
                "name": "BoA-LetMe",
                "length": "4:46",
                "file": "韩国音乐/BoA-LetMe.mp3"
				},
				{
                "track": 102,
                "name": "BoA-LastCristmas",
                "length": "4:46",
                "file": "韩国音乐/BoA-LastCristmas.mp3"
				},
				{
                "track": 101,
                "name": "BoA-LALLAOLALOVESONG",
                "length": "4:46",
                "file": "韩国音乐/BoA-LALLAOLALOVESONG.mp3"
				},
				{
                "track": 100,
                "name": "BoA-KissMyLips",
                "length": "4:46",
                "file": "韩国音乐/BoA-KissMyLips.mp3"
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