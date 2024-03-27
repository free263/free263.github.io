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
                "track": 236,
                "name": "236.悲歌 Cancion Triste - Jesse Cook",
                "length": "4:46",
                "file": "唯美纯音乐/236.悲歌 Cancion Triste - Jesse Cook.mp3"
				},
				{
                "track": 235,
                "name": "235.暗恋过结局呢(节奏) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/235.暗恋过结局呢(节奏) - 纯音乐.mp3"
				},
				{
                "track": 234,
                "name": "234.Your Beautiful Love - Back to Earth",
                "length": "4:46",
                "file": "唯美纯音乐/234.Your Beautiful Love - Back to Earth.mp3"
				},
				{
                "track": 233,
                "name": "233.Palace Memories~Sunset - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/233.Palace Memories~Sunset - 纯音乐.mp3"
				},
				{
                "track": 232,
                "name": "232.ひだまりの（向阳之乡） - 日本ACG",
                "length": "4:46",
                "file": "唯美纯音乐/232.ひだまりの（向阳之乡） - 日本ACG.mp3"
				},
				{
                "track": 231,
                "name": "231.Numb 钢琴版 - 林肯公园",
                "length": "4:46",
                "file": "唯美纯音乐/231.Numb 钢琴版 - 林肯公园.mp3"
				},
				{
                "track": 230,
                "name": "230.舒伯特-天鹅之歌 (小夜曲) - Arthur Grumiaux",
                "length": "4:46",
                "file": "唯美纯音乐/230.舒伯特-天鹅之歌 (小夜曲) - Arthur Grumiaux.mp3"
				},
				{
                "track": 229,
                "name": "229.醉梦西班牙 - Aage Kvalbein",
                "length": "4:46",
                "file": "唯美纯音乐/229.醉梦西班牙 - Aage Kvalbein.mp3"
				},
				{
                "track": 228,
                "name": "228.爱的记忆- Phil Coulter",
                "length": "4:46",
                "file": "唯美纯音乐/228.爱的记忆- Phil Coulter.mp3"
				},
				{
                "track": 227,
                "name": "227.雪花颂E (Snow Flower Song E) - Sweet Rain",
                "length": "4:46",
                "file": "唯美纯音乐/227.雪花颂E (Snow Flower Song E) - Sweet Rain.mp3"
				},
				{
                "track": 226,
                "name": "226.久远~光和波的记忆~ -日本ACG",
                "length": "4:46",
                "file": "唯美纯音乐/226.久远~光和波的记忆~ -日本ACG.mp3"
				},
				{
                "track": 225,
                "name": "225.梦中见——凯文·科恩",
                "length": "4:46",
                "file": "唯美纯音乐/225.梦中见——凯文·科恩.mp3"
				},
				{
                "track": 224,
                "name": "224.善良的心 - Marc Enfroy",
                "length": "4:46",
                "file": "唯美纯音乐/224.善良的心 - Marc Enfroy.mp3"
				},
				{
                "track": 223,
                "name": "223.游戏《蓝莓花园》的原声集 (Entre deux) - Daduk",
                "length": "4:46",
                "file": "唯美纯音乐/223.游戏《蓝莓花园》的原声集 (Entre deux) - Daduk.mp3"
				},
				{
                "track": 222,
                "name": "222.suiren - a_hisa",
                "length": "4:46",
                "file": "唯美纯音乐/222.suiren - a_hisa.mp3"
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