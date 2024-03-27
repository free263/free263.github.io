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
                "track": 849,
                "name": "邓丽君-0850-もしかして part(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0850-もしかして part(日语）.mp3"
				},
				{
                "track": 848,
                "name": "邓丽君-0849-ホテル(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0849-ホテル(日语）.mp3"
				},
				{
                "track": 847,
                "name": "邓丽君-0848-ふるさとはどこですか(1977版-日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0848-ふるさとはどこですか(1977版-日语）.mp3"
				},
				{
                "track": 846,
                "name": "邓丽君-0847-ふだたびの（日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0847-ふだたびの（日语）.mp3"
				},
				{
                "track": 845,
                "name": "邓丽君-0846-はぐれた小鳩(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0846-はぐれた小鳩(日语）.mp3"
				},
				{
                "track": 844,
                "name": "邓丽君-0845-ノスタルジア（日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0845-ノスタルジア（日语）.mp3"
				},
				{
                "track": 843,
                "name": "邓丽君-0844-なみだ恋(日语)",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0844-なみだ恋(日语).mp3"
				},
				{
                "track": 842,
                "name": "邓丽君-0843-トワイライトタウン(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0843-トワイライトタウン(日语）.mp3"
				},
				{
                "track": 841,
                "name": "邓丽君-0842-とまり木(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0842-とまり木(日语）.mp3"
				},
				{
                "track": 840,
                "name": "邓丽君-0841-ムーンライトダンシング(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0841-ムーンライトダンシング(日语）.mp3"
				},
				{
                "track": 839,
                "name": "邓丽君-0840-つぐない（日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0840-つぐない（日语）.mp3"
				},
				{
                "track": 838,
                "name": "邓丽君-0839-ついしん追伸(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0839-ついしん追伸(日语）.mp3"
				},
				{
                "track": 837,
                "name": "邓丽君-0838-タ凪(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0838-タ凪(日语）.mp3"
				},
				{
                "track": 836,
                "name": "邓丽君-0837-そんな女のひとりごと(日语)",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0837-そんな女のひとりごと(日语).mp3"
				},
				{
                "track": 835,
                "name": "邓丽君-0836-そしてめぐり逢い(合唱-日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0836-そしてめぐり逢い(合唱-日语）.mp3"
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