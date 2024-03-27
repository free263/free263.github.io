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
                "track": 92,
                "name": "陈慧琳-记事本",
                "length": "4:46",
                "file": "精选/陈慧琳-记事本.mp3"
				},
				{
                "track": 91,
                "name": "陈慧琳-不如跳舞",
                "length": "4:46",
                "file": "精选/陈慧琳-不如跳舞.mp3"
				},
				{
                "track": 90,
                "name": "陈红-走过长安街",
                "length": "4:46",
                "file": "精选/陈红-走过长安街.mp3"
				},
				{
                "track": 89,
                "name": "陈光荣-再见...警察...再见",
                "length": "4:46",
                "file": "精选/陈光荣-再见...警察...再见.mp3"
				},
				{
                "track": 88,
                "name": "陈冠蒲-太多",
                "length": "4:46",
                "file": "精选/陈冠蒲-太多.mp3"
				},
				{
                "track": 87,
                "name": "陈冠蒲-就让你走",
                "length": "4:46",
                "file": "精选/陈冠蒲-就让你走.mp3"
				},
				{
                "track": 86,
                "name": "陈妃平-永远到底有多远",
                "length": "4:46",
                "file": "精选/陈妃平-永远到底有多远.mp3"
				},
				{
                "track": 85,
                "name": "陈楚生-有没有人告诉你",
                "length": "4:46",
                "file": "精选/陈楚生-有没有人告诉你.mp3"
				},
				{
                "track": 84,
                "name": "陈百强-一生何求",
                "length": "4:46",
                "file": "精选/陈百强-一生何求.mp3"
				},
				{
                "track": 83,
                "name": "陈百强-偏偏喜欢你",
                "length": "4:46",
                "file": "精选/陈百强-偏偏喜欢你.mp3"
				},
				{
                "track": 82,
                "name": "曾春年-最幸福的人",
                "length": "4:46",
                "file": "精选/曾春年-最幸福的人.mp3"
				},
				{
                "track": 81,
                "name": "岑雨桥、萧全-触电(爱的魔力转圈圈)",
                "length": "4:46",
                "file": "精选/岑雨桥、萧全-触电(爱的魔力转圈圈).mp3"
				},
				{
                "track": 80,
                "name": "岑宁儿-追光者",
                "length": "4:46",
                "file": "精选/岑宁儿-追光者.mp3"
				},
				{
                "track": 79,
                "name": "草蜢-失恋阵线联盟",
                "length": "4:46",
                "file": "精选/草蜢-失恋阵线联盟.mp3"
				},
				{
                "track": 78,
                "name": "草蜢-宝贝对不起",
                "length": "4:46",
                "file": "精选/草蜢-宝贝对不起.mp3"
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