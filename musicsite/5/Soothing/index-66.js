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
                "track": 81,
                "name": "081.Lostisalovelyplacetofindyourself",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/081.Lostisalovelyplacetofindyourself.mp3"
				},
				{
                "track": 80,
                "name": "080.Careofthecylinder",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/080.Careofthecylinder.mp3"
				},
				{
                "track": 79,
                "name": "079.LoveYouToTheMoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/079.LoveYouToTheMoon.mp3"
				},
				{
                "track": 78,
                "name": "078.Youshallseewonders",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/078.Youshallseewonders.mp3"
				},
				{
                "track": 77,
                "name": "077.Whatareyourstorms",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/077.Whatareyourstorms.mp3"
				},
				{
                "track": 76,
                "name": "076.Okbutnotok",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/076.Okbutnotok.mp3"
				},
				{
                "track": 75,
                "name": "075.DoItAnyway",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/075.DoItAnyway.mp3"
				},
				{
                "track": 74,
                "name": "074.Mycalmandmystorm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/074.Mycalmandmystorm.mp3"
				},
				{
                "track": 73,
                "name": "073.Theleavesarepuzzlepieces",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/073.Theleavesarepuzzlepieces.mp3"
				},
				{
                "track": 72,
                "name": "072.Itooktheonelesstraveledroads",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/072.Itooktheonelesstraveledroads.mp3"
				},
				{
                "track": 71,
                "name": "071.Lovesong",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/071.Lovesong.mp3"
				},
				{
                "track": 70,
                "name": "070.StargazingatNoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/070.StargazingatNoon.mp3"
				},
				{
                "track": 69,
                "name": "069.Flora",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/069.Flora.mp3"
				},
				{
                "track": 68,
                "name": "068.Wonderinyoureyes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/068.Wonderinyoureyes.mp3"
				},
				{
                "track": 67,
                "name": "067.Iamchangingmyself",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/067.Iamchangingmyself.mp3"
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