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
                "track": 108,
                "name": "有里知花-I_Cry",
                "length": "4:46",
                "file": "欧美音乐/有里知花-I_Cry.mp3"
				},
				{
                "track": 107,
                "name": "英文经典-我的名字叫伊莲",
                "length": "4:46",
                "file": "欧美音乐/英文经典-我的名字叫伊莲.mp3"
				},
				{
                "track": 106,
                "name": "维塔斯-海豚音",
                "length": "4:46",
                "file": "欧美音乐/维塔斯-海豚音.mp3"
				},
				{
                "track": 105,
                "name": "铁达尼号主题曲-MyHeartWillGoOn",
                "length": "4:46",
                "file": "欧美音乐/铁达尼号主题曲-MyHeartWillGoOn.mp3"
				},
				{
                "track": 104,
                "name": "斯维特拉娜 斯维吉科娃-天使消逝的地方",
                "length": "4:46",
                "file": "欧美音乐/斯维特拉娜 斯维吉科娃-天使消逝的地方.mp3"
				},
				{
                "track": 103,
                "name": "手嶌葵-the rose",
                "length": "4:46",
                "file": "欧美音乐/手嶌葵-the rose.mp3"
				},
				{
                "track": 102,
                "name": "欧美群星-WeAreTheWorld",
                "length": "4:46",
                "file": "欧美音乐/欧美群星-WeAreTheWorld.mp3"
				},
				{
                "track": 101,
                "name": "马克尔杰克逊-HealTheWorld",
                "length": "4:46",
                "file": "欧美音乐/马克尔杰克逊-HealTheWorld.mp3"
				},
				{
                "track": 100,
                "name": "卡朋特-YesterdayOnceMore",
                "length": "4:46",
                "file": "欧美音乐/卡朋特-YesterdayOnceMore.mp3"
				},
				{
                "track": 99,
                "name": "卡洛儿-写给海洋",
                "length": "4:46",
                "file": "欧美音乐/卡洛儿-写给海洋.mp3"
				},
				{
                "track": 98,
                "name": "卡洛儿-假如爱有天意",
                "length": "4:46",
                "file": "欧美音乐/卡洛儿-假如爱有天意.mp3"
				},
				{
                "track": 97,
                "name": "布兰妮-everytime",
                "length": "4:46",
                "file": "欧美音乐/布兰妮-everytime.mp3"
				},
				{
                "track": 96,
                "name": "布兰妮-BabyOneMoreTime",
                "length": "4:46",
                "file": "欧美音乐/布兰妮-BabyOneMoreTime.mp3"
				},
				{
                "track": 95,
                "name": "WizKhalifa-See You Again",
                "length": "4:46",
                "file": "欧美音乐/WizKhalifa-See You Again.mp3"
				},
				{
                "track": 94,
                "name": "Wiz Khalifa、Charlie PuthSee You Again (feat. Charlie Puth)",
                "length": "4:46",
                "file": "欧美音乐/Wiz Khalifa、Charlie PuthSee You Again (feat. Charlie Puth).mp3"
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