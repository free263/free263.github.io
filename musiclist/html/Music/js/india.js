$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"MeghnaMishra-NachdiPhirA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/MeghnaMishra-NachdiPhira.mp3",},
{title:"阿育王插曲-AsokaTheme",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/阿育王插曲-AsokaTheme.mp3",},
{title:"阿育王主题曲-RoshiniSe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/阿育王主题曲-RoshiniSe.mp3",},
{title:"印度歌曲-KaruneshPunjab",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度歌曲-KaruneshPunjab.mp3",},
{title:"印度音乐-WadaNaTod",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-WadaNaTod.mp3",},
{title:"印度音乐-阿育王 忧伤的笛子",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-阿育王 忧伤的笛子.mp3",},
{title:"印度音乐-芭杜尔快来吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-芭杜尔快来吧.mp3",},
{title:"印度音乐-不要不要",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-不要不要.mp3",},
{title:"印度音乐-纯净如天簌的",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-纯净如天簌的.mp3",},
{title:"印度音乐-大悲咒",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-大悲咒.mp3",},
{title:"印度音乐-的士高劲歌舞曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-的士高劲歌舞曲.mp3",},
{title:"印度音乐-肚皮舞 卡西卡少女之春",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-肚皮舞 卡西卡少女之春.mp3",},
{title:"印度音乐-风情舞动",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-风情舞动.mp3",},
{title:"印度音乐-吉米来吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-吉米来吧.mp3",},
{title:"印度音乐-吉特巴舞曲踩着我的节拍跳起来吧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-吉特巴舞曲踩着我的节拍跳起来吧.mp3",},
{title:"印度音乐-绝对动听的印度歌曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-绝对动听的印度歌曲.mp3",},
{title:"印度音乐-雷鬼",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-雷鬼.mp3",},
{title:"印度音乐-麻吉_印度神游",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-麻吉_印度神游.mp3",},
{title:"印度音乐-慢摇_非常舒服的节奏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-慢摇_非常舒服的节奏.mp3",},
{title:"印度音乐-慢摇精华舞曲_酒吧dj音乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-慢摇精华舞曲_酒吧dj音乐.mp3",},
{title:"印度音乐-慢摇英文跳舞曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-慢摇英文跳舞曲.mp3",},
{title:"印度音乐-迷幻音乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-迷幻音乐.mp3",},
{title:"印度音乐-秘密桑巴",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-秘密桑巴.mp3",},
{title:"印度音乐-奴里 清楚版",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-奴里 清楚版.mp3",},
{title:"印度音乐-情字路上",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-情字路上.mp3",},
{title:"印度音乐-热辣媚娘_恰恰",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-热辣媚娘_恰恰.mp3",},
{title:"印度音乐-神秘国度_印度民族音乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-神秘国度_印度民族音乐.mp3",},
{title:"印度音乐-天使之吻 亲嘴歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-天使之吻 亲嘴歌.mp3",},
{title:"印度音乐-天使之吻_亲嘴歌_女声版",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-天使之吻_亲嘴歌_女声版.mp3",},
{title:"印度音乐-天竺少女",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-天竺少女.mp3",},
{title:"印度音乐-我终生爱你至死不渝",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-我终生爱你至死不渝.mp3",},
{title:"印度音乐-妩媚撩人_巨好听的印度慢摇舞曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-妩媚撩人_巨好听的印度慢摇舞曲.mp3",},
{title:"印度音乐-想要对你说爱你的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-想要对你说爱你的人.mp3",},
{title:"印度音乐-一首超爽的印度舞曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-一首超爽的印度舞曲.mp3",},
{title:"印度音乐-音乐心情_一首超好听的印度歌曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-音乐心情_一首超好听的印度歌曲.mp3",},
{title:"印度音乐-印度魔咒_dj舞曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-印度魔咒_dj舞曲.mp3",},
{title:"印度音乐-印度音乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-印度音乐.mp3",},
{title:"印度音乐-印度之花",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-印度之花.mp3",},
{title:"印度音乐-用爱对我",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/印度歌曲/印度音乐-用爱对我.mp3",}


];

	// Load playlist
	for (var i = 0; i < playlist.length; i++) {
		var item = playlist[i];
		$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		audio, timeout, isPlaying, playCounts;

	var play = function () {
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	};

	var pause = function () {
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	};

	// Update progress
	var setProgress = function (value) {
		var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value / 60) + ':' + currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	};

	var updateProgress = function () {
		setProgress(audio.currentTime);
	};

	// Progress slider
	$('.progress .slider').slider({
		step: 0.1,
		slide: function (event, ui) {
			$(this).addClass('enable');
			setProgress(audio.duration * ui.value / 100);
			clearInterval(timeout);
		},
		stop: function (event, ui) {
			audio.currentTime = audio.duration * ui.value / 100;
			$(this).removeClass('enable');
			timeout = setInterval(updateProgress, 500);
		}
	});

	// Volume slider
	var setVolume = function (value) {
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	};

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({
		max: 1,
		min: 0,
		step: 0.01,
		value: volume,
		slide: function (event, ui) {
			setVolume(ui.value);
			$(this).addClass('enable');
			$('.mute').removeClass('enable');
		},
		stop: function () {
			$(this).removeClass('enable');
		}
	}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function () {
		if ($(this).hasClass('enable')) {
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function (i) {
		if (i < 0) {
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length) {
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	};

	// Shuffle
	var shufflePlay = function () {
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function () {
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1) {
			play();
		} else {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				if (repeat == 2) {
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function () {
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
	}

	// Fire when track loaded completely
	var afterLoad = function () {
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function (i) {
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');

		$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
		$('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function () {
		if ($(this).hasClass('playing')) {
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function (i) {
		var _i = i;
		$(this).on('click', function () {
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1) {
		$('.repeat').addClass('once');
	} else if (repeat == 2) {
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function () {
		if ($(this).hasClass('once')) {
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')) {
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function () {
		if ($(this).hasClass('enable')) {
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
		$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
});