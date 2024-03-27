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
                "track": 576,
                "name": "519.Nymph",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/519.Nymph.mp3"
				},
				{
                "track": 575,
                "name": "518.Huginn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/518.Huginn.mp3"
				},
				{
                "track": 574,
                "name": "517.Seahorse",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/517.Seahorse.mp3"
				},
				{
                "track": 573,
                "name": "516.Orangeflower",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/516.Orangeflower.mp3"
				},
				{
                "track": 572,
                "name": "515.Withme",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/515.Withme.mp3"
				},
				{
                "track": 571,
                "name": "514.FamilyTree",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/514.FamilyTree.mp3"
				},
				{
                "track": 570,
                "name": "513.Behindthesoul",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/513.Behindthesoul.mp3"
				},
				{
                "track": 569,
                "name": "512.Lifeamber",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/512.Lifeamber.mp3"
				},
				{
                "track": 568,
                "name": "511.Undertherain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/511.Undertherain.mp3"
				},
				{
                "track": 567,
                "name": "510.Giftfor",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/510.Giftfor.mp3"
				},
				{
                "track": 566,
                "name": "509.Peripateticexistence",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/509.Peripateticexistence.mp3"
				},
				{
                "track": 565,
                "name": "508.Facesonthestree",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/508.Facesonthestree.mp3"
				},
				{
                "track": 564,
                "name": "507.Girlandherkite",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/507.Girlandherkite.mp3"
				},
				{
                "track": 563,
                "name": "506.Leaping",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/506.Leaping.mp3"
				},
				{
                "track": 562,
                "name": "505.TheLifeAquatic",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/505.TheLifeAquatic.mp3"
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