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
                "name": "027.月光洒向海面（海水、浪花、钢琴）",
                "length": "4:46",
                "file": "自然之声/027.月光洒向海面（海水、浪花、钢琴）.mp3"
				},
				{
                "track": 26,
                "name": "026.星星、月亮与满满（流水潺潺、钢琴）",
                "length": "4:46",
                "file": "自然之声/026.星星、月亮与满满（流水潺潺、钢琴）.mp3"
				},
				{
                "track": 25,
                "name": "025.夏风之声（潮汐、蝉鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/025.夏风之声（潮汐、蝉鸣、钢琴）.mp3"
				},
				{
                "track": 24,
                "name": "024.像从前那样（虫鸣、鸟鸣、钢琴、和声）",
                "length": "4:46",
                "file": "自然之声/024.像从前那样（虫鸣、鸟鸣、钢琴、和声）.mp3"
				},
				{
                "track": 23,
                "name": "023.在月亮下跳舞吧（清风、雨水、钢琴）",
                "length": "4:46",
                "file": "自然之声/023.在月亮下跳舞吧（清风、雨水、钢琴）.mp3"
				},
				{
                "track": 22,
                "name": "022.流水潺潺（溪水、竖琴、钢琴、钢片琴、钟琴）",
                "length": "4:46",
                "file": "自然之声/022.流水潺潺（溪水、竖琴、钢琴、钢片琴、钟琴）.mp3"
				},
				{
                "track": 21,
                "name": "021.蒲公英的幻想（溪水、鸟鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/021.蒲公英的幻想（溪水、鸟鸣、钢琴）.mp3"
				},
				{
                "track": 20,
                "name": "020.我爱我家（猫咪、篝火、钢琴、钢片琴）",
                "length": "4:46",
                "file": "自然之声/020.我爱我家（猫咪、篝火、钢琴、钢片琴）.mp3"
				},
				{
                "track": 19,
                "name": "019.从前慢（虫鸣、钢琴、大提琴、钢片琴）",
                "length": "4:46",
                "file": "自然之声/019.从前慢（虫鸣、钢琴、大提琴、钢片琴）.mp3"
				},
				{
                "track": 18,
                "name": "018.浪漫篝火（篝火、钢琴、长笛、双簧管、贝斯）",
                "length": "4:46",
                "file": "自然之声/018.浪漫篝火（篝火、钢琴、长笛、双簧管、贝斯）.mp3"
				},
				{
                "track": 17,
                "name": "017.房前清泉（泉水叮咚、钢琴）",
                "length": "4:46",
                "file": "自然之声/017.房前清泉（泉水叮咚、钢琴）.mp3"
				},
				{
                "track": 16,
                "name": "016.为你撑伞（雨水、吉他、竖琴）",
                "length": "4:46",
                "file": "自然之声/016.为你撑伞（雨水、吉他、竖琴）.mp3"
				},
				{
                "track": 15,
                "name": "015.凉风有信（淅淅沥沥的下雨、脚步声、钢琴、马林巴、钟琴）",
                "length": "4:46",
                "file": "自然之声/015.凉风有信（淅淅沥沥的下雨、脚步声、钢琴、马林巴、钟琴）.mp3"
				},
				{
                "track": 14,
                "name": "014.长路慢行（海浪、钢琴、长笛、弦乐器、钢片琴）",
                "length": "4:46",
                "file": "自然之声/014.长路慢行（海浪、钢琴、长笛、弦乐器、钢片琴）.mp3"
				},
				{
                "track": 13,
                "name": "013.等你（下雨、拨打电话、钢琴、马林巴、竖琴、钢片琴）",
                "length": "4:46",
                "file": "自然之声/013.等你（下雨、拨打电话、钢琴、马林巴、竖琴、钢片琴）.mp3"
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