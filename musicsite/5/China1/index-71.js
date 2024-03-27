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
                "track": 62,
                "name": "蔡健雅-Letting Go",
                "length": "4:46",
                "file": "精选/蔡健雅-Letting Go.mp3"
				},
				{
                "track": 61,
                "name": "蔡国权-顺流逆流",
                "length": "4:46",
                "file": "精选/蔡国权-顺流逆流.mp3"
				},
				{
                "track": 60,
                "name": "蔡国权-不装饰你的梦",
                "length": "4:46",
                "file": "精选/蔡国权-不装饰你的梦.mp3"
				},
				{
                "track": 59,
                "name": "布兰妮-everytime",
                "length": "4:46",
                "file": "精选/布兰妮-everytime.mp3"
				},
				{
                "track": 58,
                "name": "布兰妮-BabyOneMoreTime",
                "length": "4:46",
                "file": "精选/布兰妮-BabyOneMoreTime.mp3"
				},
				{
                "track": 57,
                "name": "不才-化身孤岛的鲸",
                "length": "4:46",
                "file": "精选/不才-化身孤岛的鲸.mp3"
				},
				{
                "track": 56,
                "name": "伯爵Johnny、唐伯虎Annie-西厢寻他",
                "length": "4:46",
                "file": "精选/伯爵Johnny、唐伯虎Annie-西厢寻他.mp3"
				},
				{
                "track": 55,
                "name": "半阳-一曲相思",
                "length": "4:46",
                "file": "精选/半阳-一曲相思.mp3"
				},
				{
                "track": 54,
                "name": "安琥-天使的翅膀",
                "length": "4:46",
                "file": "精选/安琥-天使的翅膀.mp3"
				},
				{
                "track": 53,
                "name": "艾辰-错位时空",
                "length": "4:46",
                "file": "精选/艾辰-错位时空.mp3"
				},
				{
                "track": 52,
                "name": "阿悠悠-旧梦一场",
                "length": "4:46",
                "file": "精选/阿悠悠-旧梦一场.mp3"
				},
				{
                "track": 51,
                "name": "阿泱-氧气",
                "length": "4:46",
                "file": "精选/阿泱-氧气.mp3"
				},
				{
                "track": 50,
                "name": "阿桑-一直很安静",
                "length": "4:46",
                "file": "精选/阿桑-一直很安静.mp3"
				},
				{
                "track": 49,
                "name": "阿桑-叶子",
                "length": "4:46",
                "file": "精选/阿桑-叶子.mp3"
				},
				{
                "track": 48,
                "name": "阿桑-受了点伤",
                "length": "4:46",
                "file": "精选/阿桑-受了点伤.mp3"
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