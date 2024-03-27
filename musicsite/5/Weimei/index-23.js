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
                "track": 26,
                "name": "026.青花瓷 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/026.青花瓷 - 钢琴曲.mp3"
				},
				{
                "track": 25,
                "name": "025.梦里水乡 - 中国民乐",
                "length": "4:46",
                "file": "唯美纯音乐/025.梦里水乡 - 中国民乐.mp3"
				},
				{
                "track": 24,
                "name": "024.好一朵美丽的茉莉花 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/024.好一朵美丽的茉莉花 - 钢琴曲.mp3"
				},
				{
                "track": 23,
                "name": "023.日晷之梦(电台背景音乐) ——纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/023.日晷之梦(电台背景音乐) ——纯音乐.mp3"
				},
				{
                "track": 22,
                "name": "022.The Beginning (开始) - Ryran·Tomson",
                "length": "4:46",
                "file": "唯美纯音乐/022.The Beginning (开始) - Ryran·Tomson.mp3"
				},
				{
                "track": 21,
                "name": "021.岁月如歌 ——哼唱歌手",
                "length": "4:46",
                "file": "唯美纯音乐/021.岁月如歌 ——哼唱歌手.mp3"
				},
				{
                "track": 20,
                "name": "020.净化心灵的声音 - Karunesh",
                "length": "4:46",
                "file": "唯美纯音乐/020.净化心灵的声音 - Karunesh.mp3"
				},
				{
                "track": 19,
                "name": "019.安妮的仙境 - 轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/019.安妮的仙境 - 轻音乐.mp3"
				},
				{
                "track": 18,
                "name": "018.走过绿意 - Kevin Kern",
                "length": "4:46",
                "file": "唯美纯音乐/018.走过绿意 - Kevin Kern.mp3"
				},
				{
                "track": 17,
                "name": "017.寂静之声 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/017.寂静之声 - 班得瑞.mp3"
				},
				{
                "track": 16,
                "name": "016.纯音乐 - 雪花神剑（萧）",
                "length": "4:46",
                "file": "唯美纯音乐/016.纯音乐 - 雪花神剑（萧）.mp3"
				},
				{
                "track": 15,
                "name": "015.纯音乐 - 高山流水 (古筝)",
                "length": "4:46",
                "file": "唯美纯音乐/015.纯音乐 - 高山流水 (古筝).mp3"
				},
				{
                "track": 14,
                "name": "014.纯音乐 - 此情永不移（钢琴）",
                "length": "4:46",
                "file": "唯美纯音乐/014.纯音乐 - 此情永不移（钢琴）.mp3"
				},
				{
                "track": 13,
                "name": "013.纯音乐 - 昨日重现（钢琴）",
                "length": "4:46",
                "file": "唯美纯音乐/013.纯音乐 - 昨日重现（钢琴）.mp3"
				},
				{
                "track": 12,
                "name": "012.和兰花在一起 — 雅尼",
                "length": "4:46",
                "file": "唯美纯音乐/012.和兰花在一起 — 雅尼.mp3"
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