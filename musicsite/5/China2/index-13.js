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
                "track": 147,
                "name": "邰正宵-九百九十九朵玫瑰",
                "length": "4:46",
                "file": "简选/国语/邰正宵-九百九十九朵玫瑰.mp3"
				},
				{
                "track": 146,
                "name": "邰正宵、孙悦-好人好梦",
                "length": "4:46",
                "file": "简选/国语/邰正宵、孙悦-好人好梦.mp3"
				},
				{
                "track": 145,
                "name": "孙悦-心情不错",
                "length": "4:46",
                "file": "简选/国语/孙悦-心情不错.mp3"
				},
				{
                "track": 144,
                "name": "孙燕姿-原来你什么都不要",
                "length": "4:46",
                "file": "简选/国语/孙燕姿-原来你什么都不要.mp3"
				},
				{
                "track": 143,
                "name": "孙燕姿-遇见",
                "length": "4:46",
                "file": "简选/国语/孙燕姿-遇见.mp3"
				},
				{
                "track": 142,
                "name": "孙燕姿-我要的幸福",
                "length": "4:46",
                "file": "简选/国语/孙燕姿-我要的幸福.mp3"
				},
				{
                "track": 141,
                "name": "孙燕姿-天黑黑",
                "length": "4:46",
                "file": "简选/国语/孙燕姿-天黑黑.mp3"
				},
				{
                "track": 140,
                "name": "苏芮-牵手",
                "length": "4:46",
                "file": "简选/国语/苏芮-牵手.mp3"
				},
				{
                "track": 139,
                "name": "深海鱼子酱-千千万万",
                "length": "4:46",
                "file": "简选/国语/深海鱼子酱-千千万万.mp3"
				},
				{
                "track": 138,
                "name": "沙宝亮-斑马斑马",
                "length": "4:46",
                "file": "简选/国语/沙宝亮-斑马斑马.mp3"
				},
				{
                "track": 137,
                "name": "沙宝亮-暗香",
                "length": "4:46",
                "file": "简选/国语/沙宝亮-暗香.mp3"
				},
				{
                "track": 136,
                "name": "三楠-晚风作酒",
                "length": "4:46",
                "file": "简选/国语/三楠-晚风作酒.mp3"
				},
				{
                "track": 135,
                "name": "萨顶顶-左手指月",
                "length": "4:46",
                "file": "简选/国语/萨顶顶-左手指月.mp3"
				},
				{
                "track": 134,
                "name": "萨顶顶、周深-左手指月",
                "length": "4:46",
                "file": "简选/国语/萨顶顶、周深-左手指月.mp3"
				},
				{
                "track": 133,
                "name": "容祖儿-小小",
                "length": "4:46",
                "file": "简选/国语/容祖儿-小小.mp3"
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