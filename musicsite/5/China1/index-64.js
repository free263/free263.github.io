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
                "track": 167,
                "name": "刁寒-花好月圆",
                "length": "4:46",
                "file": "精选/刁寒-花好月圆.mp3"
				},
				{
                "track": 166,
                "name": "电影原声-沧海一声笑",
                "length": "4:46",
                "file": "精选/电影原声-沧海一声笑.mp3"
				},
				{
                "track": 165,
                "name": "迪丽热巴、汪苏泷-偏偏",
                "length": "4:46",
                "file": "精选/迪丽热巴、汪苏泷-偏偏.mp3"
				},
				{
                "track": 164,
                "name": "迪克牛仔-有多少爱可以重来",
                "length": "4:46",
                "file": "精选/迪克牛仔-有多少爱可以重来.mp3"
				},
				{
                "track": 163,
                "name": "邓紫棋-喜欢你",
                "length": "4:46",
                "file": "精选/邓紫棋-喜欢你.mp3"
				},
				{
                "track": 162,
                "name": "邓紫棋-桃花诺",
                "length": "4:46",
                "file": "精选/邓紫棋-桃花诺.mp3"
				},
				{
                "track": 161,
                "name": "邓紫棋-泡沫",
                "length": "4:46",
                "file": "精选/邓紫棋-泡沫.mp3"
				},
				{
                "track": 160,
                "name": "邓紫棋-你把我灌醉",
                "length": "4:46",
                "file": "精选/邓紫棋-你把我灌醉.mp3"
				},
				{
                "track": 159,
                "name": "邓紫棋-光年之外",
                "length": "4:46",
                "file": "精选/邓紫棋-光年之外.mp3"
				},
				{
                "track": 158,
                "name": "邓紫棋-多远都要在一起",
                "length": "4:46",
                "file": "精选/邓紫棋-多远都要在一起.mp3"
				},
				{
                "track": 157,
                "name": "邓紫棋-倒数",
                "length": "4:46",
                "file": "精选/邓紫棋-倒数.mp3"
				},
				{
                "track": 156,
                "name": "邓丽欣、方力申-十分爱",
                "length": "4:46",
                "file": "精选/邓丽欣、方力申-十分爱.mp3"
				},
				{
                "track": 155,
                "name": "邓丽君-小城故事",
                "length": "4:46",
                "file": "精选/邓丽君-小城故事.mp3"
				},
				{
                "track": 154,
                "name": "邓丽君-独上西楼",
                "length": "4:46",
                "file": "精选/邓丽君-独上西楼.mp3"
				},
				{
                "track": 153,
                "name": "等什么君-江湖策马",
                "length": "4:46",
                "file": "精选/等什么君-江湖策马.mp3"
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