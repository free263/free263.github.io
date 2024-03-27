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
                "track": 471,
                "name": "414.SoundsofSilence",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/414.SoundsofSilence.mp3"
				},
				{
                "track": 470,
                "name": "413.MoonJelly",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/413.MoonJelly.mp3"
				},
				{
                "track": 469,
                "name": "412.Daydreaming",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/412.Daydreaming.mp3"
				},
				{
                "track": 468,
                "name": "411.Wetland",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/411.Wetland.mp3"
				},
				{
                "track": 467,
                "name": "410.TheStairsattheEndoftheWorld",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/410.TheStairsattheEndoftheWorld.mp3"
				},
				{
                "track": 466,
                "name": "409.SunnSand",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/409.SunnSand.mp3"
				},
				{
                "track": 465,
                "name": "408.Guided",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/408.Guided.mp3"
				},
				{
                "track": 464,
                "name": "407.PeaceonEarth",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/407.PeaceonEarth.mp3"
				},
				{
                "track": 463,
                "name": "406.Timerunningout",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/406.Timerunningout.mp3"
				},
				{
                "track": 462,
                "name": "405.Nothingbutamask",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/405.Nothingbutamask.mp3"
				},
				{
                "track": 461,
                "name": "404.Onthephone",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/404.Onthephone.mp3"
				},
				{
                "track": 460,
                "name": "403.Gettingwarm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/403.Gettingwarm.mp3"
				},
				{
                "track": 459,
                "name": "402.ForestGlowinPink",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/402.ForestGlowinPink.mp3"
				},
				{
                "track": 458,
                "name": "401.Beyondtheyear",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/401.Beyondtheyear.mp3"
				},
				{
                "track": 457,
                "name": "400.Raincloud",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/400.Raincloud.mp3"
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