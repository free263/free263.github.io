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
                "track": 647,
                "name": "萧敬腾-王妃",
                "length": "4:46",
                "file": "精选/萧敬腾-王妃.mp3"
				},
				{
                "track": 646,
                "name": "萧煌奇-偷走",
                "length": "4:46",
                "file": "精选/萧煌奇-偷走.mp3"
				},
				{
                "track": 645,
                "name": "香香-猪之歌",
                "length": "4:46",
                "file": "精选/香香-猪之歌.mp3"
				},
				{
                "track": 644,
                "name": "夏婉安-听不完的情歌",
                "length": "4:46",
                "file": "精选/夏婉安-听不完的情歌.mp3"
				},
				{
                "track": 643,
                "name": "希亚-心醉",
                "length": "4:46",
                "file": "精选/希亚-心醉.mp3"
				},
				{
                "track": 642,
                "name": "希林娜依高-瑕面舞会",
                "length": "4:46",
                "file": "精选/希林娜依高-瑕面舞会.mp3"
				},
				{
                "track": 641,
                "name": "希林娜依高-那年星辰",
                "length": "4:46",
                "file": "精选/希林娜依高-那年星辰.mp3"
				},
				{
                "track": 640,
                "name": "希林娜依高-红尘莫欺我年少",
                "length": "4:46",
                "file": "精选/希林娜依高-红尘莫欺我年少.mp3"
				},
				{
                "track": 639,
                "name": "希莉娜依、胡兵-归去来",
                "length": "4:46",
                "file": "精选/希莉娜依、胡兵-归去来.mp3"
				},
				{
                "track": 638,
                "name": "伍思凯-特别的爱给特别的你",
                "length": "4:46",
                "file": "精选/伍思凯-特别的爱给特别的你.mp3"
				},
				{
                "track": 637,
                "name": "伍佰-突然的自我",
                "length": "4:46",
                "file": "精选/伍佰-突然的自我.mp3"
				},
				{
                "track": 636,
                "name": "伍佰-挪威的森林",
                "length": "4:46",
                "file": "精选/伍佰-挪威的森林.mp3"
				},
				{
                "track": 635,
                "name": "五月天-突然好想你",
                "length": "4:46",
                "file": "精选/五月天-突然好想你.mp3"
				},
				{
                "track": 634,
                "name": "五月天-你不是真正的快乐",
                "length": "4:46",
                "file": "精选/五月天-你不是真正的快乐.mp3"
				},
				{
                "track": 633,
                "name": "吴亦凡-大碗宽面",
                "length": "4:46",
                "file": "精选/吴亦凡-大碗宽面.mp3"
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