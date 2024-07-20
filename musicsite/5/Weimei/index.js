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
                "track": 356,
                "name": "356.失去你，我会迷失-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/356.失去你，我会迷失-唯美纯音乐.mp3"
				},
				{
                "track": 355,
                "name": "355.清新自然，雪的梦幻 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/355.清新自然，雪的梦幻 - 唯美纯音乐.mp3"
				},
				{
                "track": 354,
                "name": "354.英雄落寞，悲壮豪迈-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/354.英雄落寞，悲壮豪迈-唯美纯音乐.mp3"
				},
				{
                "track": 353,
                "name": "353.灵魂的呼唤，雄鹰之歌-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/353.灵魂的呼唤，雄鹰之歌-唯美纯音乐.mp3"
				},
				{
                "track": 352,
                "name": "352.音符跳动，抚慰心灵-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/352.音符跳动，抚慰心灵-唯美纯音乐.mp3"
				},
				{
                "track": 351,
                "name": "351.竹笛声悠扬，和夜莺很像-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/351.竹笛声悠扬，和夜莺很像-唯美纯音乐.mp3"
				},
				{
                "track": 350,
                "name": "350.秋叶珊珊，伴君入眠 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/350.秋叶珊珊，伴君入眠 - 唯美纯音乐.mp3"
				},
				{
                "track": 349,
                "name": "349.余生很短，请别错过 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/349.余生很短，请别错过 - 唯美纯音乐.mp3"
				},
				{
                "track": 348,
                "name": "348.一曲一净土，一弦一清心 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/348.一曲一净土，一弦一清心 - 唯美纯音乐.mp3"
				},
				{
                "track": 347,
                "name": "347.青春短暂，让人怀念 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/347.青春短暂，让人怀念 - 唯美纯音乐.mp3"
				},
				{
                "track": 346,
                "name": "346.真爱永恒，相伴一生 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/346.真爱永恒，相伴一生 - 唯美纯音乐.mp3"
				},
				{
                "track": 345,
                "name": "345.永浴爱河 ，至真至深- 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/345.永浴爱河 ，至真至深- 唯美纯音乐.mp3"
				},
				{
                "track": 344,
                "name": "344.安静养心，舒缓心情 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/344.安静养心，舒缓心情 - 唯美纯音乐.mp3"
				},
				{
                "track": 343,
                "name": "343.且听风吟 ，触动人心 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/343.且听风吟 ，触动人心 - 唯美纯音乐.mp3"
				},
				{
                "track": 342,
                "name": "342.梦里水乡，让人向往 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/342.梦里水乡，让人向往 - 唯美纯音乐.mp3"
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