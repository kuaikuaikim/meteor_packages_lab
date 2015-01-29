if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


  Template.layout.rendered = function(){
    Meteor.borderMenu.init();
  };




  Template.animation.events({
    'click #move_btn': function () {
      // increment the counter when button is clicked
      $("#move_block")
  // .velocity({height: "200px",width: "100%"}, { duration: 1500 })
   //.velocity("reverse")
   //.velocity("slideDown", { duration: 1500 })
  //.velocity({translateY: "100px"},{easing: "spring"})
   //.velocity("slideUp", { duration: 1500 }) 
  .velocity("transition.slideUpBigIn",{easing:"spring",duration:500})  
 .velocity("callout.bounce")    
; 

  $("#move_block")
  //.velocity({translateY: "100px"},{duration:1500});

 
  }
  });


var slideLeft = {
  "in": function(node, next) {
    var $node;
    $node = $(node);
    $.Velocity.hook($node, "translateX", "-100%");
    return $node.insertBefore(next).velocity({
      translateX: ['0%', '-100%']
    }, {
      duration: 500,
      easing: 'ease-in-out',
      queue: false
    });
  },
  out: function(node) {
    var $node;
    $node = $(node);
    return $node.velocity({
      translateX: '100%'
    }, {
      duration: 500,
      easing: 'ease-in-out',
      queue: false,
      complete: function() {
        return $node.remove();
      }
    });
  }
}; 


  Transitioner.transition({
    fromRoute: 'main',
    toRoute: 'two',
    velocityAnimaton: slideLeft
  });

  Transitioner.transition({
    fromRoute: 'two',
    toRoute: 'main',
    velocityAnimaton: slideLeft
  });



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
/*
Transitioner.transition({
    fromRoute: 'main',
    toRoute: 'two',
    velocityAnimation: {
        in: 'transition.slideRightBigIn',
        out: 'transition.slideLeftBigOut'
    }
})

Transitioner.transition({
    fromRoute: 'two',
    toRoute: 'main',
    velocityAnimation: {
        in: 'transition.slideRightBigIn',
        out: 'transition.slideLeftBigOut'
    }
})

*/

