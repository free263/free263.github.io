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
                "track": 804,
                "name": "邓丽君-0805-My Song(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0805-My Song(日语）.mp3"
				},
				{
                "track": 803,
                "name": "邓丽君-0804-Merry X mas in Summer(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0804-Merry X mas in Summer(日语）.mp3"
				},
				{
                "track": 802,
                "name": "邓丽君-0803-I Love You(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0803-I Love You(日语）.mp3"
				},
				{
                "track": 801,
                "name": "邓丽君-0802-Fire Of Love(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0802-Fire Of Love(日语）.mp3"
				},
				{
                "track": 800,
                "name": "邓丽君-0801-あなたに帰りたい(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0801-あなたに帰りたい(日语）.mp3"
				},
				{
                "track": 799,
                "name": "邓丽君-0800-Teratai（印尼语-想你想断肠）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0800-Teratai（印尼语-想你想断肠）.mp3"
				},
				{
                "track": 798,
                "name": "邓丽君-0799-Selamat Jalan Kekasih（印尼语-再见我的爱人）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0799-Selamat Jalan Kekasih（印尼语-再见我的爱人）.mp3"
				},
				{
                "track": 797,
                "name": "邓丽君-0798-Sekuntum Bunga Mawar（印尼语-我怎能离开你）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0798-Sekuntum Bunga Mawar（印尼语-我怎能离开你）.mp3"
				},
				{
                "track": 796,
                "name": "邓丽君-0797-Satu Di Antara Dua（印尼语-小村之恋）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0797-Satu Di Antara Dua（印尼语-小村之恋）.mp3"
				},
				{
                "track": 795,
                "name": "邓丽君-0796-Mimpi Sedih（印尼语-悲哀的梦）老唱片珍藏",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0796-Mimpi Sedih（印尼语-悲哀的梦）老唱片珍藏.mp3"
				},
				{
                "track": 794,
                "name": "邓丽君-0795-Mila（印尼语-海韵海韻）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0795-Mila（印尼语-海韵海韻）.mp3"
				},
				{
                "track": 793,
                "name": "邓丽君-0794-Merantau（印尼语-流浪的人）老唱片珍藏",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0794-Merantau（印尼语-流浪的人）老唱片珍藏.mp3"
				},
				{
                "track": 792,
                "name": "邓丽君-0793-Lupakan Diriku（印尼语-我没有骗你）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0793-Lupakan Diriku（印尼语-我没有骗你）.mp3"
				},
				{
                "track": 791,
                "name": "邓丽君-0792-Lagu Untukmu（印尼语-丝丝小雨）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0792-Lagu Untukmu（印尼语-丝丝小雨）.mp3"
				},
				{
                "track": 790,
                "name": "邓丽君-0791-Kisah Remaja（印尼语-世界多美丽）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0791-Kisah Remaja（印尼语-世界多美丽）.mp3"
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