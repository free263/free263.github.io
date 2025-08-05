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
                "track": 527,
                "name": "孙国庆-代价",
                "length": "4:46",
                "file": "精选/孙国庆-代价.mp3"
				},
				{
                "track": 526,
                "name": "苏运莹-野子",
                "length": "4:46",
                "file": "精选/苏运莹-野子.mp3"
				},
				{
                "track": 525,
                "name": "苏永康-男人不该让女人流泪",
                "length": "4:46",
                "file": "精选/苏永康-男人不该让女人流泪.mp3"
				},
				{
                "track": 524,
                "name": "苏永康-爱一个人好难",
                "length": "4:46",
                "file": "精选/苏永康-爱一个人好难.mp3"
				},
				{
                "track": 523,
                "name": "苏星婕-听悲伤的情歌",
                "length": "4:46",
                "file": "精选/苏星婕-听悲伤的情歌.mp3"
				},
				{
                "track": 522,
                "name": "苏芮-牵手",
                "length": "4:46",
                "file": "精选/苏芮-牵手.mp3"
				},
				{
                "track": 521,
                "name": "苏慧伦-鸭子",
                "length": "4:46",
                "file": "精选/苏慧伦-鸭子.mp3"
				},
				{
                "track": 520,
                "name": "斯琴高丽-犯错",
                "length": "4:46",
                "file": "精选/斯琴高丽-犯错.mp3"
				},
				{
                "track": 519,
                "name": "顺子-回家(Live)",
                "length": "4:46",
                "file": "精选/顺子-回家(Live).mp3"
				},
				{
                "track": 518,
                "name": "水木年华-在他乡",
                "length": "4:46",
                "file": "精选/水木年华-在他乡.mp3"
				},
				{
                "track": 517,
                "name": "水木年华-一生有你",
                "length": "4:46",
                "file": "精选/水木年华-一生有你.mp3"
				},
				{
                "track": 516,
                "name": "淑熙-啦啦啦",
                "length": "4:46",
                "file": "精选/淑熙-啦啦啦.mp3"
				},
				{
                "track": 515,
                "name": "石头-坚强的石头",
                "length": "4:46",
                "file": "精选/石头-坚强的石头.mp3"
				},
				{
                "track": 514,
                "name": "石头 李玉刚-雨花石",
                "length": "4:46",
                "file": "精选/石头 李玉刚-雨花石.mp3"
				},
				{
                "track": 513,
                "name": "深海鱼子酱-千千万万",
                "length": "4:46",
                "file": "精选/深海鱼子酱-千千万万.mp3"
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