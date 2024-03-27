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
                "track": 27,
                "name": "陈伟霆、宝石Gem-野狼Disco",
                "length": "4:46",
                "file": "简选/国语/陈伟霆、宝石Gem-野狼Disco.mp3"
				},
				{
                "track": 26,
                "name": "陈淑桦-情关",
                "length": "4:46",
                "file": "简选/国语/陈淑桦-情关.mp3"
				},
				{
                "track": 25,
                "name": "陈瑞-白狐",
                "length": "4:46",
                "file": "简选/国语/陈瑞-白狐.mp3"
				},
				{
                "track": 24,
                "name": "陈明-我要找到你",
                "length": "4:46",
                "file": "简选/国语/陈明-我要找到你.mp3"
				},
				{
                "track": 23,
                "name": "陈明-等你爱我",
                "length": "4:46",
                "file": "简选/国语/陈明-等你爱我.mp3"
				},
				{
                "track": 22,
                "name": "陈琳-爱就爱了",
                "length": "4:46",
                "file": "简选/国语/陈琳-爱就爱了.mp3"
				},
				{
                "track": 21,
                "name": "陈慧娴-千千阙歌",
                "length": "4:46",
                "file": "简选/国语/陈慧娴-千千阙歌.mp3"
				},
				{
                "track": 20,
                "name": "陈冠蒲-太多",
                "length": "4:46",
                "file": "简选/国语/陈冠蒲-太多.mp3"
				},
				{
                "track": 19,
                "name": "陈冠蒲-就让你走",
                "length": "4:46",
                "file": "简选/国语/陈冠蒲-就让你走.mp3"
				},
				{
                "track": 18,
                "name": "岑雨桥、萧全-触电(爱的魔力转圈圈)",
                "length": "4:46",
                "file": "简选/国语/岑雨桥、萧全-触电(爱的魔力转圈圈).mp3"
				},
				{
                "track": 17,
                "name": "岑宁儿-追光者",
                "length": "4:46",
                "file": "简选/国语/岑宁儿-追光者.mp3"
				},
				{
                "track": 16,
                "name": "蔡健雅-无底洞",
                "length": "4:46",
                "file": "简选/国语/蔡健雅-无底洞.mp3"
				},
				{
                "track": 15,
                "name": "伯爵Johnny、唐伯虎Annie-西厢寻他",
                "length": "4:46",
                "file": "简选/国语/伯爵Johnny、唐伯虎Annie-西厢寻他.mp3"
				},
				{
                "track": 14,
                "name": "半阳-一曲相思",
                "length": "4:46",
                "file": "简选/国语/半阳-一曲相思.mp3"
				},
				{
                "track": 13,
                "name": "艾辰-错位时空",
                "length": "4:46",
                "file": "简选/国语/艾辰-错位时空.mp3"
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