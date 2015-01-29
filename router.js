Router.configure({
layoutTemplate:'layout'
});

Router.route('/',function(){
  this.render('pageone');
},{name:'main'});

Router.route('/two',function(){
  this.render('pagetwo');
},{name:'two'});



