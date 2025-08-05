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
                "track": 737,
                "name": "杨培安-我相信",
                "length": "4:46",
                "file": "精选/杨培安-我相信.mp3"
				},
				{
                "track": 736,
                "name": "杨培安-爱上你是一个错",
                "length": "4:46",
                "file": "精选/杨培安-爱上你是一个错.mp3"
				},
				{
                "track": 735,
                "name": "杨幂-爱的供养",
                "length": "4:46",
                "file": "精选/杨幂-爱的供养.mp3"
				},
				{
                "track": 734,
                "name": "杨坤-无所谓",
                "length": "4:46",
                "file": "精选/杨坤-无所谓.mp3"
				},
				{
                "track": 733,
                "name": "杨坤-那一天",
                "length": "4:46",
                "file": "精选/杨坤-那一天.mp3"
				},
				{
                "track": 732,
                "name": "杨坤、陈琳-两个人的世界",
                "length": "4:46",
                "file": "精选/杨坤、陈琳-两个人的世界.mp3"
				},
				{
                "track": 731,
                "name": "杨丞琳-一千零一个愿望",
                "length": "4:46",
                "file": "精选/杨丞琳-一千零一个愿望.mp3"
				},
				{
                "track": 730,
                "name": "杨丞琳-水墨如烟",
                "length": "4:46",
                "file": "精选/杨丞琳-水墨如烟.mp3"
				},
				{
                "track": 729,
                "name": "杨丞琳-暧昧",
                "length": "4:46",
                "file": "精选/杨丞琳-暧昧.mp3"
				},
				{
                "track": 728,
                "name": "杨臣刚-老鼠爱大米",
                "length": "4:46",
                "file": "精选/杨臣刚-老鼠爱大米.mp3"
				},
				{
                "track": 727,
                "name": "央金兰泽-遇上你是我的缘",
                "length": "4:46",
                "file": "精选/央金兰泽-遇上你是我的缘.mp3"
				},
				{
                "track": 726,
                "name": "严正花-都走吧",
                "length": "4:46",
                "file": "精选/严正花-都走吧.mp3"
				},
				{
                "track": 725,
                "name": "严艺丹-三寸天堂",
                "length": "4:46",
                "file": "精选/严艺丹-三寸天堂.mp3"
				},
				{
                "track": 724,
                "name": "严艺丹-等你的季节",
                "length": "4:46",
                "file": "精选/严艺丹-等你的季节.mp3"
				},
				{
                "track": 723,
                "name": "薛之谦-演员",
                "length": "4:46",
                "file": "精选/薛之谦-演员.mp3"
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