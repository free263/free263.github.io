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
                "track": 894,
                "name": "邓丽君-0895-春の雪(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0895-春の雪(日语）.mp3"
				},
				{
                "track": 893,
                "name": "邓丽君-0894-別れの予感(VS夏川りみ)（日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0894-別れの予感(VS夏川りみ)（日语）.mp3"
				},
				{
                "track": 892,
                "name": "邓丽君-0893-赤坂たそがれ（日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0893-赤坂たそがれ（日语）.mp3"
				},
				{
                "track": 891,
                "name": "邓丽君-0892-草原情歌(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0892-草原情歌(日语）.mp3"
				},
				{
                "track": 890,
                "name": "邓丽君-0891-氷雨(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0891-氷雨(日语）.mp3"
				},
				{
                "track": 889,
                "name": "邓丽君-0890-大阪の女(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0890-大阪の女(日语）.mp3"
				},
				{
                "track": 888,
                "name": "邓丽君-0889-大阪しぐれ(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0889-大阪しぐれ(日语）.mp3"
				},
				{
                "track": 887,
                "name": "邓丽君-0888-冬の駅(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0888-冬の駅(日语）.mp3"
				},
				{
                "track": 886,
                "name": "邓丽君-0887-冬の階段(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0887-冬の階段(日语）.mp3"
				},
				{
                "track": 885,
                "name": "邓丽君-0886-冬の街から(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0886-冬の街から(日语）.mp3"
				},
				{
                "track": 884,
                "name": "邓丽君-0885-冬のひまわり(混音版-日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0885-冬のひまわり(混音版-日语）.mp3"
				},
				{
                "track": 883,
                "name": "邓丽君-0884-道化师(ピエロ)(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0884-道化师(ピエロ)(日语）.mp3"
				},
				{
                "track": 882,
                "name": "邓丽君-0883-待ちわびて(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0883-待ちわびて(日语）.mp3"
				},
				{
                "track": 881,
                "name": "邓丽君-0882-北国の春(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0882-北国の春(日语）.mp3"
				},
				{
                "track": 880,
                "name": "邓丽君-0881-長崎は今日も雨だった(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0881-長崎は今日も雨だった(日语）.mp3"
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