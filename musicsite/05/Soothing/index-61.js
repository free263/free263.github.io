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
                "track": 156,
                "name": "1050.Tristana-NilsFrahm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1050.Tristana-NilsFrahm.mp3"
				},
				{
                "track": 155,
                "name": "105.Thenshallyoutrulydance",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/105.Thenshallyoutrulydance.mp3"
				},
				{
                "track": 154,
                "name": "1049.CelticSphere-MargotReisinger",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1049.CelticSphere-MargotReisinger.mp3"
				},
				{
                "track": 153,
                "name": "1048.AnAncientTale-MargotReisinger",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1048.AnAncientTale-MargotReisinger.mp3"
				},
				{
                "track": 152,
                "name": "1047.St.BrighidsWell-MargotReisinger",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1047.St.BrighidsWell-MargotReisinger.mp3"
				},
				{
                "track": 151,
                "name": "1046.TirNanOg",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1046.TirNanOg.mp3"
				},
				{
                "track": 150,
                "name": "1045.MysteryOfAmergin",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1045.MysteryOfAmergin.mp3"
				},
				{
                "track": 149,
                "name": "1044.AirlannPilgrimage",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1044.AirlannPilgrimage.mp3"
				},
				{
                "track": 148,
                "name": "1043.Blessing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1043.Blessing.mp3"
				},
				{
                "track": 147,
                "name": "1042.HymnToHope",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1042.HymnToHope.mp3"
				},
				{
                "track": 146,
                "name": "1041.WentMissing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1041.WentMissing.mp3"
				},
				{
                "track": 145,
                "name": "1040.IfIwereaBird",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1040.IfIwereaBird.mp3"
				},
				{
                "track": 144,
                "name": "104.Itsonlytheendasyouknowit",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/104.Itsonlytheendasyouknowit.mp3"
				},
				{
                "track": 143,
                "name": "1039.TheLevelPlain(MaghScola)",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1039.TheLevelPlain(MaghScola).mp3"
				},
				{
                "track": 142,
                "name": "1038.ConniesButterfly",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1038.ConniesButterfly.mp3"
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