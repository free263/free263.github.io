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
                "track": 159,
                "name": "邓丽君-前生有缘（国语）0206",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-前生有缘（国语）0206.mp3"
				},
				{
                "track": 158,
                "name": "邓丽君-凤阳花鼓（国语）0170",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-凤阳花鼓（国语）0170.mp3"
				},
				{
                "track": 157,
                "name": "邓丽君-几时再见（国语）0175",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-几时再见（国语）0175.mp3"
				},
				{
                "track": 156,
                "name": "邓丽君-冬之恋情（国语）0162",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-冬之恋情（国语）0162.mp3"
				},
				{
                "track": 155,
                "name": "邓丽君-再来一杯（国语）0276",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-再来一杯（国语）0276.mp3"
				},
				{
                "track": 154,
                "name": "邓丽君-再度蜜月（国语）0275",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-再度蜜月（国语）0275.mp3"
				},
				{
                "track": 153,
                "name": "邓丽君-你是魔鬼（国语）0200",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-你是魔鬼（国语）0200.mp3"
				},
				{
                "track": 152,
                "name": "邓丽君-你怎么说（演唱会）0202",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-你怎么说（演唱会）0202.mp3"
				},
				{
                "track": 151,
                "name": "邓丽君-你怎么说（国语）0201",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-你怎么说（国语）0201.mp3"
				},
				{
                "track": 150,
                "name": "邓丽君-伊人何处（国语）0256",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-伊人何处（国语）0256.mp3"
				},
				{
                "track": 149,
                "name": "邓丽君-什么都怕（国语）0219",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-什么都怕（国语）0219.mp3"
				},
				{
                "track": 148,
                "name": "邓丽君-人面桃花（新伴奏）0215",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-人面桃花（新伴奏）0215.mp3"
				},
				{
                "track": 147,
                "name": "邓丽君-人面桃花（国语）0214",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-人面桃花（国语）0214.mp3"
				},
				{
                "track": 146,
                "name": "邓丽君-乡村姑娘（国语）0237",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-乡村姑娘（国语）0237.mp3"
				},
				{
                "track": 145,
                "name": "邓丽君-丝丝小雨（国语）0222",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-丝丝小雨（国语）0222.mp3"
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