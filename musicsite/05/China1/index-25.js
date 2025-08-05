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
                "track": 752,
                "name": "叶倩文-真心真意过一生",
                "length": "4:46",
                "file": "精选/叶倩文-真心真意过一生.mp3"
				},
				{
                "track": 751,
                "name": "叶倩文-潇洒走一回",
                "length": "4:46",
                "file": "精选/叶倩文-潇洒走一回.mp3"
				},
				{
                "track": 750,
                "name": "叶倩文、林子祥-选择",
                "length": "4:46",
                "file": "精选/叶倩文、林子祥-选择.mp3"
				},
				{
                "track": 749,
                "name": "叶丽仪-上海滩",
                "length": "4:46",
                "file": "精选/叶丽仪-上海滩.mp3"
				},
				{
                "track": 748,
                "name": "叶蓓-想把我唱给你听",
                "length": "4:46",
                "file": "精选/叶蓓-想把我唱给你听.mp3"
				},
				{
                "track": 747,
                "name": "要不要买菜-下山",
                "length": "4:46",
                "file": "精选/要不要买菜-下山.mp3"
				},
				{
                "track": 746,
                "name": "洋澜一-化风行万里",
                "length": "4:46",
                "file": "精选/洋澜一-化风行万里.mp3"
				},
				{
                "track": 745,
                "name": "杨宗纬-一次就好",
                "length": "4:46",
                "file": "精选/杨宗纬-一次就好.mp3"
				},
				{
                "track": 744,
                "name": "杨宗纬-洋葱",
                "length": "4:46",
                "file": "精选/杨宗纬-洋葱.mp3"
				},
				{
                "track": 743,
                "name": "杨宗纬 张碧晨-凉凉",
                "length": "4:46",
                "file": "精选/杨宗纬 张碧晨-凉凉.mp3"
				},
				{
                "track": 742,
                "name": "杨钰莹-我不想说",
                "length": "4:46",
                "file": "精选/杨钰莹-我不想说.mp3"
				},
				{
                "track": 741,
                "name": "杨钰莹-轻轻的告诉你",
                "length": "4:46",
                "file": "精选/杨钰莹-轻轻的告诉你.mp3"
				},
				{
                "track": 740,
                "name": "杨钰莹、毛宁-心雨",
                "length": "4:46",
                "file": "精选/杨钰莹、毛宁-心雨.mp3"
				},
				{
                "track": 739,
                "name": "杨小曼-我爱你胜过你爱我",
                "length": "4:46",
                "file": "精选/杨小曼-我爱你胜过你爱我.mp3"
				},
				{
                "track": 738,
                "name": "杨千桦-小城大事",
                "length": "4:46",
                "file": "精选/杨千桦-小城大事.mp3"
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