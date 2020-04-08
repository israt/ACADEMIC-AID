/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */
;( function() {
	
	'use strict';

	var bodyEl = document.body,
		videoWrap = document.querySelector('.video-wrap2'),
		videoEl = videoWrap.querySelector('video2'),
		playCtrl = document.querySelector('.action--play2'),
		closeCtrl = document.querySelector('.action--close2');

	function init() {
		initEvents();
	}

	function initEvents() {
		playCtrl.addEventListener('click', play);
		closeCtrl.addEventListener('click', hide);
		videoEl.addEventListener('canplaythrough', allowPlay);
		videoEl.addEventListener('ended', hide);
	}

	function allowPlay() {
		classie.add(bodyEl, 'video-loaded2');
	}

	function play() {
		videoEl.currentTime = 0;
		classie.remove(videoWrap, 'video-wrap--hide2');
		classie.add(videoWrap, 'video-wrap--show2');
		setTimeout(function() {videoEl.play();}, 600);
	}

	function hide() {
		classie.remove(videoWrap, 'video-wrap--show2');
		classie.add(videoWrap, 'video-wrap--hide2');
		videoEl.pause();
	}

	init();

})();