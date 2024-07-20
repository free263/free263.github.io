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
                "track": 422,
                "name": "马旭东-入戏太深",
                "length": "4:46",
                "file": "精选/马旭东-入戏太深.mp3"
				},
				{
                "track": 421,
                "name": "马天宇-该死的温柔",
                "length": "4:46",
                "file": "精选/马天宇-该死的温柔.mp3"
				},
				{
                "track": 420,
                "name": "马頔-南山南",
                "length": "4:46",
                "file": "精选/马頔-南山南.mp3"
				},
				{
                "track": 419,
                "name": "吕方-老情歌",
                "length": "4:46",
                "file": "精选/吕方-老情歌.mp3"
				},
				{
                "track": 418,
                "name": "洛天依-小鸡哔哔",
                "length": "4:46",
                "file": "精选/洛天依-小鸡哔哔.mp3"
				},
				{
                "track": 417,
                "name": "罗志祥-恋爱达人",
                "length": "4:46",
                "file": "精选/罗志祥-恋爱达人.mp3"
				},
				{
                "track": 416,
                "name": "罗志祥-狐狸精",
                "length": "4:46",
                "file": "精选/罗志祥-狐狸精.mp3"
				},
				{
                "track": 415,
                "name": "罗文、甄妮-铁血丹心",
                "length": "4:46",
                "file": "精选/罗文、甄妮-铁血丹心.mp3"
				},
				{
                "track": 414,
                "name": "罗大佑-你的样子",
                "length": "4:46",
                "file": "精选/罗大佑-你的样子.mp3"
				},
				{
                "track": 413,
                "name": "罗大佑-光阴的故事",
                "length": "4:46",
                "file": "精选/罗大佑-光阴的故事.mp3"
				},
				{
                "track": 412,
                "name": "罗大佑、陈淑桦-滚滚红尘",
                "length": "4:46",
                "file": "精选/罗大佑、陈淑桦-滚滚红尘.mp3"
				},
				{
                "track": 411,
                "name": "陆思恒、陆可儿-千禧恋曲2020",
                "length": "4:46",
                "file": "精选/陆思恒、陆可儿-千禧恋曲2020.mp3"
				},
				{
                "track": 410,
                "name": "陆虎-雪落下的声音",
                "length": "4:46",
                "file": "精选/陆虎-雪落下的声音.mp3"
				},
				{
                "track": 409,
                "name": "卢冠廷-一生所爱",
                "length": "4:46",
                "file": "精选/卢冠廷-一生所爱.mp3"
				},
				{
                "track": 408,
                "name": "六哲-错错错",
                "length": "4:46",
                "file": "精选/六哲-错错错.mp3"
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