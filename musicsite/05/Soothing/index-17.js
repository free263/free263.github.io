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
                "track": 816,
                "name": "759.DelAire-将自己包裹在适合游离的黑色外套里",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/759.DelAire-将自己包裹在适合游离的黑色外套里.mp3"
				},
				{
                "track": 815,
                "name": "758.AWarmWinterAfternoon-那些川流不息的回忆",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/758.AWarmWinterAfternoon-那些川流不息的回忆.mp3"
				},
				{
                "track": 814,
                "name": "757.AsTheShadowFollows-如影随形",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/757.AsTheShadowFollows-如影随形.mp3"
				},
				{
                "track": 813,
                "name": "756.Knihasmíchuazapomnění-笑忘录",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/756.Knihasmíchuazapomnění-笑忘录.mp3"
				},
				{
                "track": 812,
                "name": "755.EvenSunflowersCastShadows-TheNameofThatBook",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/755.EvenSunflowersCastShadows-TheNameofThatBook.mp3"
				},
				{
                "track": 811,
                "name": "754.Natural",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/754.Natural.mp3"
				},
				{
                "track": 810,
                "name": "753.TheGiftofTheSky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/753.TheGiftofTheSky.mp3"
				},
				{
                "track": 809,
                "name": "752.ARoadToChildhood-致记忆中童年的那些明媚日子",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/752.ARoadToChildhood-致记忆中童年的那些明媚日子.mp3"
				},
				{
                "track": 808,
                "name": "751.EndoftheDream-梦境尽头梦想从未结束",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/751.EndoftheDream-梦境尽头梦想从未结束.mp3"
				},
				{
                "track": 807,
                "name": "750.LePapillon-我们长途跋涉寻找的可能一直都在身边",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/750.LePapillon-我们长途跋涉寻找的可能一直都在身边.mp3"
				},
				{
                "track": 806,
                "name": "749.quandjetevoissourire",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/749.quandjetevoissourire.mp3"
				},
				{
                "track": 805,
                "name": "748.Eternal-永恒不过是一个美好的愿望",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/748.Eternal-永恒不过是一个美好的愿望.mp3"
				},
				{
                "track": 804,
                "name": "747.Perception-感知一切无常与寂静心安一切皆安",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/747.Perception-感知一切无常与寂静心安一切皆安.mp3"
				},
				{
                "track": 803,
                "name": "746.Loveistheshapeofyoursoul-爱是你灵魂的模样",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/746.Loveistheshapeofyoursoul-爱是你灵魂的模样.mp3"
				},
				{
                "track": 802,
                "name": "745.OntheContrarywithDespair-绝望背后",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/745.OntheContrarywithDespair-绝望背后.mp3"
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