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
                "track": 801,
                "name": "744.GreenWheatFieldsAuvers1890byVincentvanGogh",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/744.GreenWheatFieldsAuvers1890byVincentvanGogh.mp3"
				},
				{
                "track": 800,
                "name": "743.Lacancióndelosolvidados-遗忘之歌",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/743.Lacancióndelosolvidados-遗忘之歌.mp3"
				},
				{
                "track": 799,
                "name": "742.EtzhaChayim-生命之树",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/742.EtzhaChayim-生命之树.mp3"
				},
				{
                "track": 798,
                "name": "741.Isawyousmilingaftertherainyseason-雨季之后我看到你微笑的模样",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/741.Isawyousmilingaftertherainyseason-雨季之后我看到你微笑的模样.mp3"
				},
				{
                "track": 797,
                "name": "740.Relief-释然那些被称为缅怀的心心念念",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/740.Relief-释然那些被称为缅怀的心心念念.mp3"
				},
				{
                "track": 796,
                "name": "739.Aguasazules-掉入颠倒的天空之中",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/739.Aguasazules-掉入颠倒的天空之中.mp3"
				},
				{
                "track": 795,
                "name": "738.Rosadeoto_o",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/738.Rosadeoto_o.mp3"
				},
				{
                "track": 794,
                "name": "737.PeaceofMind-心安即是归处",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/737.PeaceofMind-心安即是归处.mp3"
				},
				{
                "track": 793,
                "name": "736.No.1__3",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/736.No.1__3.mp3"
				},
				{
                "track": 792,
                "name": "735.DoYou",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/735.DoYou.mp3"
				},
				{
                "track": 791,
                "name": "734.AfterTomorrow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/734.AfterTomorrow.mp3"
				},
				{
                "track": 790,
                "name": "733.everythingissilentstill-一切寂静如昨",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/733.everythingissilentstill-一切寂静如昨.mp3"
				},
				{
                "track": 789,
                "name": "732.DancewiththeSilence-与沉默共舞",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/732.DancewiththeSilence-与沉默共舞.mp3"
				},
				{
                "track": 788,
                "name": "731.Iridescent-暖意一如彩虹的光芒",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/731.Iridescent-暖意一如彩虹的光芒.mp3"
				},
				{
                "track": 787,
                "name": "730.Rosydawn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/730.Rosydawn.mp3"
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