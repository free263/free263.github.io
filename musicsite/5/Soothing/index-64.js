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
                "track": 111,
                "name": "101.Feastofflowers",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/101.Feastofflowers.mp3"
				},
				{
                "track": 110,
                "name": "1009.ChildhoodMemory",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1009.ChildhoodMemory.mp3"
				},
				{
                "track": 109,
                "name": "1008.四季~そして僕は海に還る~",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1008.四季~そして僕は海に還る~.mp3"
				},
				{
                "track": 108,
                "name": "1007.Hatsukoi",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1007.Hatsukoi.mp3"
				},
				{
                "track": 107,
                "name": "1006.StarOfBaghdad",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1006.StarOfBaghdad.mp3"
				},
				{
                "track": 106,
                "name": "1005.OneSummersDay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1005.OneSummersDay.mp3"
				},
				{
                "track": 105,
                "name": "1004.OutoftheDarknessintotheLight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1004.OutoftheDarknessintotheLight.mp3"
				},
				{
                "track": 104,
                "name": "1003.WhereIsTheLove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1003.WhereIsTheLove.mp3"
				},
				{
                "track": 103,
                "name": "1002.SongoftheRiver",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1002.SongoftheRiver.mp3"
				},
				{
                "track": 102,
                "name": "1001.SunCircle",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1001.SunCircle.mp3"
				},
				{
                "track": 101,
                "name": "1000.CanyonEchoes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1000.CanyonEchoes.mp3"
				},
				{
                "track": 100,
                "name": "100.Howtobreathefire",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/100.Howtobreathefire.mp3"
				},
				{
                "track": 99,
                "name": "099.Eveninmydreams",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/099.Eveninmydreams.mp3"
				},
				{
                "track": 98,
                "name": "098.TodayIamwisesoIamchangingmyself",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/098.TodayIamwisesoIamchangingmyself.mp3"
				},
				{
                "track": 97,
                "name": "097.Ialmostwishwewerebutterflies",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/097.Ialmostwishwewerebutterflies.mp3"
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