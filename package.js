Package.describe({
summary : "Pirobox (yet another Lightbox-like jQuery module) for Meteor"
});

Package.on_use(function(api) {
api.use('jquery', 'client');
api.add_files([
	'lib/js/pirobox_extended.js',
	'lib/js/error.jpg',
        'lib/css/style_8/bg_mdl.png',
        'lib/css/style_8/blank.gif',
        'lib/css/style_8/buttons.png',
        'lib/css/style_8/caption.png',
        'lib/css/style_8/caption_up_down.png',
        'lib/css/style_8/caption_w.png',
        'lib/css/style_8/close_p.png',
        'lib/css/style_8/loader.gif',
        'lib/css/style_8/loader_nav.png',
        'lib/css/style_8/new_skin.png',
        'lib/css/style_8/new_skin_left.png',
        'lib/css/style_8/new_skin_top.png',
        'lib/css/style_8/style.css']
, 'client');
});
