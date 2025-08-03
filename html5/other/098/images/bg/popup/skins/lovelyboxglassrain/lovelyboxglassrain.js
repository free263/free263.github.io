$(function ()
{
	// Register Smart skin.
	$.lovelygalleryPopup.registerSmartSkin('lovelyboxglassrain', function (overlay, container)
	{
		// We don't want to brake anything if there is no overlay.
		if (!overlay)
		{
			return ;
		}

		if ($.lovelygalleryPopup.browser_ie && $.lovelygalleryPopup.browser_ie < 9)
		{
			return;
		}

		var drops = '<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>';
		var clouds = '<div class="cloud x1"></div><div class="cloud x2"></div><div class="cloud x3"></div><div class="cloud x4"></div><div class="cloud x5"></div>';

		overlay.append(drops);
		overlay.append(clouds);
	});
});