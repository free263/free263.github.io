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
                "track": 222,
                "name": "叶倩文-真心真意过一生",
                "length": "4:46",
                "file": "简选/国语/叶倩文-真心真意过一生.mp3"
				},
				{
                "track": 221,
                "name": "叶倩文、林子祥-选择",
                "length": "4:46",
                "file": "简选/国语/叶倩文、林子祥-选择.mp3"
				},
				{
                "track": 220,
                "name": "叶丽仪-上海滩",
                "length": "4:46",
                "file": "简选/国语/叶丽仪-上海滩.mp3"
				},
				{
                "track": 219,
                "name": "要不要买菜-下山",
                "length": "4:46",
                "file": "简选/国语/要不要买菜-下山.mp3"
				},
				{
                "track": 218,
                "name": "洋澜一-化风行万里",
                "length": "4:46",
                "file": "简选/国语/洋澜一-化风行万里.mp3"
				},
				{
                "track": 217,
                "name": "杨宗纬 张碧晨-凉凉",
                "length": "4:46",
                "file": "简选/国语/杨宗纬 张碧晨-凉凉.mp3"
				},
				{
                "track": 216,
                "name": "杨丞琳-水墨如烟",
                "length": "4:46",
                "file": "简选/国语/杨丞琳-水墨如烟.mp3"
				},
				{
                "track": 215,
                "name": "严艺丹-三寸天堂",
                "length": "4:46",
                "file": "简选/国语/严艺丹-三寸天堂.mp3"
				},
				{
                "track": 214,
                "name": "薛之谦-演员",
                "length": "4:46",
                "file": "简选/国语/薛之谦-演员.mp3"
				},
				{
                "track": 213,
                "name": "薛之谦-你还要我怎样",
                "length": "4:46",
                "file": "简选/国语/薛之谦-你还要我怎样.mp3"
				},
				{
                "track": 212,
                "name": "薛之谦-丑八怪",
                "length": "4:46",
                "file": "简选/国语/薛之谦-丑八怪.mp3"
				},
				{
                "track": 211,
                "name": "薛之谦-暧昧",
                "length": "4:46",
                "file": "简选/国语/薛之谦-暧昧.mp3"
				},
				{
                "track": 210,
                "name": "许巍-曾经的你",
                "length": "4:46",
                "file": "简选/国语/许巍-曾经的你.mp3"
				},
				{
                "track": 209,
                "name": "许韶洋-幸福的瞬间",
                "length": "4:46",
                "file": "简选/国语/许韶洋-幸福的瞬间.mp3"
				},
				{
                "track": 208,
                "name": "许韶洋-花香",
                "length": "4:46",
                "file": "简选/国语/许韶洋-花香.mp3"
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