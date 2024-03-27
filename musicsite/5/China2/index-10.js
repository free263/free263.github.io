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
                "track": 192,
                "name": "许慧欣-七月七日晴",
                "length": "4:46",
                "file": "简选/国语/许慧欣-七月七日晴.mp3"
				},
				{
                "track": 191,
                "name": "徐佳莹-突然好想你",
                "length": "4:46",
                "file": "简选/国语/徐佳莹-突然好想你.mp3"
				},
				{
                "track": 190,
                "name": "信乐团-死了都要爱",
                "length": "4:46",
                "file": "简选/国语/信乐团-死了都要爱.mp3"
				},
				{
                "track": 189,
                "name": "信乐团-离歌",
                "length": "4:46",
                "file": "简选/国语/信乐团-离歌.mp3"
				},
				{
                "track": 188,
                "name": "信乐团-假如",
                "length": "4:46",
                "file": "简选/国语/信乐团-假如.mp3"
				},
				{
                "track": 187,
                "name": "信乐团-海阔天空",
                "length": "4:46",
                "file": "简选/国语/信乐团-海阔天空.mp3"
				},
				{
                "track": 186,
                "name": "辛晓琪-味道",
                "length": "4:46",
                "file": "简选/国语/辛晓琪-味道.mp3"
				},
				{
                "track": 185,
                "name": "小潘潘、小峰峰-学猫叫",
                "length": "4:46",
                "file": "简选/国语/小潘潘、小峰峰-学猫叫.mp3"
				},
				{
                "track": 184,
                "name": "萧亚轩-最熟悉的陌生人",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-最熟悉的陌生人.mp3"
				},
				{
                "track": 183,
                "name": "萧亚轩-一个人的精彩",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-一个人的精彩.mp3"
				},
				{
                "track": 182,
                "name": "萧亚轩-我爱你那么多",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-我爱你那么多.mp3"
				},
				{
                "track": 181,
                "name": "萧亚轩-突然想起你",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-突然想起你.mp3"
				},
				{
                "track": 180,
                "name": "萧亚轩-蔷薇",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-蔷薇.mp3"
				},
				{
                "track": 179,
                "name": "萧亚轩-类似爱情",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-类似爱情.mp3"
				},
				{
                "track": 178,
                "name": "萧亚轩-窗外的天气",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-窗外的天气.mp3"
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