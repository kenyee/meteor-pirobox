Package.describe({
summary : "Pirobox (yet another Lightbox-like jQuery module) for Meteor"
});

Package.on_use(function(api) {
api.use('jquery', 'client');
api.add_files([
	'lib/js/pirobox_extended.js',
	'lib/js/error.jpg',
        'lib/css/style_3/6.png',
        'lib/css/style_3/arrow_l.png',
        'lib/css/style_3/arrow_r.png',
        'lib/css/style_3/blank.gif',
        'lib/css/style_3/buttons.png',
        'lib/css/style_3/caption.png',
        'lib/css/style_3/caption_up_down.png',
        'lib/css/style_3/loader_nav.png',
        'lib/css/style_3/nav-bg.png',
        'lib/css/style_3/new_skin.png',
        'lib/css/style_3/new_skin_left.png',
        'lib/css/style_3/new_skin_top.png',
        'lib/css/style_3/style.css']
, 'client');
});
