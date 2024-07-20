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
                "track": 117,
                "name": "潘玮柏-不得不爱",
                "length": "4:46",
                "file": "简选/国语/潘玮柏-不得不爱.mp3"
				},
				{
                "track": 116,
                "name": "莫文蔚-盛夏的果实",
                "length": "4:46",
                "file": "简选/国语/莫文蔚-盛夏的果实.mp3"
				},
				{
                "track": 115,
                "name": "莫文蔚-电台情歌",
                "length": "4:46",
                "file": "简选/国语/莫文蔚-电台情歌.mp3"
				},
				{
                "track": 114,
                "name": "摩登兄弟刘宇宁-就在江湖之上",
                "length": "4:46",
                "file": "简选/国语/摩登兄弟刘宇宁-就在江湖之上.mp3"
				},
				{
                "track": 113,
                "name": "梦然-是你",
                "length": "4:46",
                "file": "简选/国语/梦然-是你.mp3"
				},
				{
                "track": 112,
                "name": "梦然-少年",
                "length": "4:46",
                "file": "简选/国语/梦然-少年.mp3"
				},
				{
                "track": 111,
                "name": "满文军-懂你",
                "length": "4:46",
                "file": "简选/国语/满文军-懂你.mp3"
				},
				{
                "track": 110,
                "name": "洛天依-小鸡哔哔",
                "length": "4:46",
                "file": "简选/国语/洛天依-小鸡哔哔.mp3"
				},
				{
                "track": 109,
                "name": "罗文、甄妮-铁血丹心",
                "length": "4:46",
                "file": "简选/国语/罗文、甄妮-铁血丹心.mp3"
				},
				{
                "track": 108,
                "name": "卢冠廷-一生所爱",
                "length": "4:46",
                "file": "简选/国语/卢冠廷-一生所爱.mp3"
				},
				{
                "track": 107,
                "name": "刘若英-一辈子的孤单",
                "length": "4:46",
                "file": "简选/国语/刘若英-一辈子的孤单.mp3"
				},
				{
                "track": 106,
                "name": "刘若英-为爱痴狂",
                "length": "4:46",
                "file": "简选/国语/刘若英-为爱痴狂.mp3"
				},
				{
                "track": 105,
                "name": "刘若英-后来",
                "length": "4:46",
                "file": "简选/国语/刘若英-后来.mp3"
				},
				{
                "track": 104,
                "name": "刘若英-很爱很爱你",
                "length": "4:46",
                "file": "简选/国语/刘若英-很爱很爱你.mp3"
				},
				{
                "track": 103,
                "name": "刘珂矣-芙蓉雨",
                "length": "4:46",
                "file": "简选/国语/刘珂矣-芙蓉雨.mp3"
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