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
                "track": 864,
                "name": "邓丽君-0865-愛のモトマチ(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0865-愛のモトマチ(日语）.mp3"
				},
				{
                "track": 863,
                "name": "邓丽君-0864-愛のくらし(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0864-愛のくらし(日语）.mp3"
				},
				{
                "track": 862,
                "name": "邓丽君-0863-愛に疲れて(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0863-愛に疲れて(日语）.mp3"
				},
				{
                "track": 861,
                "name": "邓丽君-0862-爱しき日々(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0862-爱しき日々(日语）.mp3"
				},
				{
                "track": 860,
                "name": "邓丽君-0861-愛し愛されて(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0861-愛し愛されて(日语）.mp3"
				},
				{
                "track": 859,
                "name": "邓丽君-0860-ワインカラーの記憶(日语)",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0860-ワインカラーの記憶(日语).mp3"
				},
				{
                "track": 858,
                "name": "邓丽君-0859-ルージュで書いたサヨナラ(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0859-ルージュで書いたサヨナラ(日语）.mp3"
				},
				{
                "track": 857,
                "name": "邓丽君-0858-リターン東京(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0858-リターン東京(日语）.mp3"
				},
				{
                "track": 856,
                "name": "邓丽君-0857-ララバイ東京(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0857-ララバイ東京(日语）.mp3"
				},
				{
                "track": 855,
                "name": "邓丽君-0856-ラストシーン(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0856-ラストシーン(日语）.mp3"
				},
				{
                "track": 854,
                "name": "邓丽君-0855-よせばいいのに(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0855-よせばいいのに(日语）.mp3"
				},
				{
                "track": 853,
                "name": "邓丽君-0854-もう泣かないわ(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0854-もう泣かないわ(日语）.mp3"
				},
				{
                "track": 852,
                "name": "邓丽君-0853-みちのくひとり旅（日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0853-みちのくひとり旅（日语）.mp3"
				},
				{
                "track": 851,
                "name": "邓丽君-0852-みちづれ(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0852-みちづれ(日语）.mp3"
				},
				{
                "track": 850,
                "name": "邓丽君-0851-まごころ(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0851-まごころ(日语）.mp3"
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