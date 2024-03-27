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
                "track": 11,
                "name": "011.无悔 -李汉颖 （加长版）",
                "length": "4:46",
                "file": "唯美纯音乐/011.无悔 -李汉颖 （加长版）.mp3"
				},
				{
                "track": 10,
                "name": "010.夜曲(很伤感的纯音乐) - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/010.夜曲(很伤感的纯音乐) - 神秘园.mp3"
				},
				{
                "track": 9,
                "name": "009.琵琶语-纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/009.琵琶语-纯音乐.mp3"
				},
				{
                "track": 8,
                "name": "008.太极 — 纯音乐 （古琴）",
                "length": "4:46",
                "file": "唯美纯音乐/008.太极 — 纯音乐 （古琴）.mp3"
				},
				{
                "track": 7,
                "name": "007.易经—纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/007.易经—纯音乐.mp3"
				},
				{
                "track": 6,
                "name": "006.童年-纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/006.童年-纯音乐.mp3"
				},
				{
                "track": 5,
                "name": "005.心灵雨伞 — 轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/005.心灵雨伞 — 轻音乐.mp3"
				},
				{
                "track": 4,
                "name": "004.天籁之音，荡涤心灵 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/004.天籁之音，荡涤心灵 - 唯美纯音乐.mp3"
				},
				{
                "track": 3,
                "name": "003.静水禅音，返朴归真-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/003.静水禅音，返朴归真-唯美纯音乐.mp3"
				},
				{
                "track": 2,
                "name": "002.故乡风景，醉美画卷 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/002.故乡风景，醉美画卷 - 唯美纯音乐.mp3"
				},
				{
                "track": 1,
                "name": "001.半山听雨，放空自己（古琴）-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/001.半山听雨，放空自己（古琴）-唯美纯音乐.mp3"
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