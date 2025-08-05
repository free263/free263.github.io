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
                "track": 452,
                "name": "欧得洋-孤单北半球",
                "length": "4:46",
                "file": "精选/欧得洋-孤单北半球.mp3"
				},
				{
                "track": 451,
                "name": "慕容晓晓-爱情买卖",
                "length": "4:46",
                "file": "精选/慕容晓晓-爱情买卖.mp3"
				},
				{
                "track": 450,
                "name": "莫文蔚-这世界那么多人",
                "length": "4:46",
                "file": "精选/莫文蔚-这世界那么多人.mp3"
				},
				{
                "track": 449,
                "name": "莫文蔚-阴天",
                "length": "4:46",
                "file": "精选/莫文蔚-阴天.mp3"
				},
				{
                "track": 448,
                "name": "莫文蔚-他不爱我",
                "length": "4:46",
                "file": "精选/莫文蔚-他不爱我.mp3"
				},
				{
                "track": 447,
                "name": "莫文蔚-盛夏的果实",
                "length": "4:46",
                "file": "精选/莫文蔚-盛夏的果实.mp3"
				},
				{
                "track": 446,
                "name": "莫文蔚-寂寞的恋人啊",
                "length": "4:46",
                "file": "精选/莫文蔚-寂寞的恋人啊.mp3"
				},
				{
                "track": 445,
                "name": "莫文蔚-电台情歌",
                "length": "4:46",
                "file": "精选/莫文蔚-电台情歌.mp3"
				},
				{
                "track": 444,
                "name": "莫文蔚 张洪量-广岛之恋",
                "length": "4:46",
                "file": "精选/莫文蔚 张洪量-广岛之恋.mp3"
				},
				{
                "track": 443,
                "name": "摩登兄弟刘宇宁-就在江湖之上",
                "length": "4:46",
                "file": "精选/摩登兄弟刘宇宁-就在江湖之上.mp3"
				},
				{
                "track": 442,
                "name": "梦然-是你",
                "length": "4:46",
                "file": "精选/梦然-是你.mp3"
				},
				{
                "track": 441,
                "name": "梦然-少年",
                "length": "4:46",
                "file": "精选/梦然-少年.mp3"
				},
				{
                "track": 440,
                "name": "梦然-没有你陪伴真的好孤单",
                "length": "4:46",
                "file": "精选/梦然-没有你陪伴真的好孤单.mp3"
				},
				{
                "track": 439,
                "name": "孟庭苇-羞答答的玫瑰静悄悄地开",
                "length": "4:46",
                "file": "精选/孟庭苇-羞答答的玫瑰静悄悄地开.mp3"
				},
				{
                "track": 438,
                "name": "孟庭苇-谁的眼泪在飞",
                "length": "4:46",
                "file": "精选/孟庭苇-谁的眼泪在飞.mp3"
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