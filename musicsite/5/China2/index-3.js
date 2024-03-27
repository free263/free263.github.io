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
                "track": 297,
                "name": "周华健-难念的经",
                "length": "4:46",
                "file": "简选/国语/周华健-难念的经.mp3"
				},
				{
                "track": 296,
                "name": "周华健-风雨无阻",
                "length": "4:46",
                "file": "简选/国语/周华健-风雨无阻.mp3"
				},
				{
                "track": 295,
                "name": "周传雄-黄昏",
                "length": "4:46",
                "file": "简选/国语/周传雄-黄昏.mp3"
				},
				{
                "track": 294,
                "name": "周笔畅-笔记",
                "length": "4:46",
                "file": "简选/国语/周笔畅-笔记.mp3"
				},
				{
                "track": 293,
                "name": "指尖笑-不问别离",
                "length": "4:46",
                "file": "简选/国语/指尖笑-不问别离.mp3"
				},
				{
                "track": 292,
                "name": "指尖笑-不问ciaga(不问别离)",
                "length": "4:46",
                "file": "简选/国语/指尖笑-不问ciaga(不问别离).mp3"
				},
				{
                "track": 291,
                "name": "赵露思-时光话",
                "length": "4:46",
                "file": "简选/国语/赵露思-时光话.mp3"
				},
				{
                "track": 290,
                "name": "赵雷-成都",
                "length": "4:46",
                "file": "简选/国语/赵雷-成都.mp3"
				},
				{
                "track": 289,
                "name": "赵方婧-直觉",
                "length": "4:46",
                "file": "简选/国语/赵方婧-直觉.mp3"
				},
				{
                "track": 288,
                "name": "赵方婧-小暑",
                "length": "4:46",
                "file": "简选/国语/赵方婧-小暑.mp3"
				},
				{
                "track": 287,
                "name": "赵方婧-瑞鹤仙",
                "length": "4:46",
                "file": "简选/国语/赵方婧-瑞鹤仙.mp3"
				},
				{
                "track": 286,
                "name": "赵方婧-青灯",
                "length": "4:46",
                "file": "简选/国语/赵方婧-青灯.mp3"
				},
				{
                "track": 285,
                "name": "赵方婧-芒种",
                "length": "4:46",
                "file": "简选/国语/赵方婧-芒种.mp3"
				},
				{
                "track": 284,
                "name": "赵方婧-尽头",
                "length": "4:46",
                "file": "简选/国语/赵方婧-尽头.mp3"
				},
				{
                "track": 283,
                "name": "赵方婧-闭月",
                "length": "4:46",
                "file": "简选/国语/赵方婧-闭月.mp3"
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