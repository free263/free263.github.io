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
                "track": 326,
                "name": "326.世外桃源 ，飘逸幽远 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/326.世外桃源 ，飘逸幽远 - 唯美纯音乐.mp3"
				},
				{
                "track": 325,
                "name": "325.时光如流沙，珍惜当下 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/325.时光如流沙，珍惜当下 - 唯美纯音乐.mp3"
				},
				{
                "track": 324,
                "name": "324.爱恨离别，梁祝化蝶 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/324.爱恨离别，梁祝化蝶 - 唯美纯音乐.mp3"
				},
				{
                "track": 323,
                "name": "323.曾经追梦，现已不年轻-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/323.曾经追梦，现已不年轻-唯美纯音乐.mp3"
				},
				{
                "track": 322,
                "name": "322.相恋在夏季-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/322.相恋在夏季-唯美纯音乐.mp3"
				},
				{
                "track": 321,
                "name": "321.是谁在你耳畔呢喃-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/321.是谁在你耳畔呢喃-唯美纯音乐.mp3"
				},
				{
                "track": 320,
                "name": "320.玉烟笛梦，诉说人生-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/320.玉烟笛梦，诉说人生-唯美纯音乐.mp3"
				},
				{
                "track": 319,
                "name": "319.绾青丝，别离殇（二胡）唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/319.绾青丝，别离殇（二胡）唯美纯音乐.mp3"
				},
				{
                "track": 318,
                "name": "318.缘聚 （醉人的水墨中国风）-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/318.缘聚 （醉人的水墨中国风）-唯美纯音乐.mp3"
				},
				{
                "track": 317,
                "name": "317.薰衣草的阴影-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/317.薰衣草的阴影-唯美纯音乐.mp3"
				},
				{
                "track": 316,
                "name": "316.江南印象，隽永舒畅-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/316.江南印象，隽永舒畅-唯美纯音乐.mp3"
				},
				{
                "track": 315,
                "name": "315.司岗里情，相依相望-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/315.司岗里情，相依相望-唯美纯音乐.mp3"
				},
				{
                "track": 314,
                "name": "314.《水墨兰亭》沉静如水，静逸如诗-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/314.《水墨兰亭》沉静如水，静逸如诗-唯美纯音乐.mp3"
				},
				{
                "track": 313,
                "name": "313.红颜旧，此情不忘，忍别离 (笛子版)-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/313.红颜旧，此情不忘，忍别离 (笛子版)-唯美纯音乐.mp3"
				},
				{
                "track": 312,
                "name": "312.下雨的时候（小提琴） -唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/312.下雨的时候（小提琴） -唯美纯音乐.mp3"
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