meteor-pirobox
========

Pirobox is yet another Lightbox-like plugin by Diego Valobra.
It's been repackaged for the Meteor.js framework.


How to use
----------

	mrt install pirobox
	
	
	You mark up your Meteor/Handlebars template this:
	<a href="{{bigimageurl}}" media="single" class="pirobox" 
	  title="{{title}}"><img src="{{iconurl}}" alt="{{title}}"></a>
	
	You can use media="gallery" if you want a gallery
	(you also have to change the class to "pirobox_gall")
	You can also use media="inline" if you want inline HTML.
	Galleries support mixed content.
	
	Then you can initialize it in your template's rendered method like this:
	  Template.gallery.rendered = function () {
            $.pirobox_ext({
              piro_speed : 700,
              bg_alpha : 0.5,
              piro_scroll : true //pirobox always positioned at the center of the page
            });
          }
        To enable facebook/twitter sharing, you can also add the "share:true" parameter.

The full documentation is here http://www.pirolab.it/pirobox/.  You can look at the examples there for alternative ways of setting up Pirobox.

style_3 is included in this packaging of Pirobox...there should be a way to give Meteor's packaging system a parameter so you can select alternative styles in the package, but AFAIK, there is none.
