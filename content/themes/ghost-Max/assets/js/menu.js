(function(window) {
'use strict'

function each(collection, callback) {
  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    callback(item);
  }
}

function Menu(){
    this._init();
}

Menu.prototype._init = function() {
  this.body = document.body;
  this.wrapper = document.querySelector('.container');
  this.menu = document.querySelector('.menu');
  this.mask = document.querySelector('.menu-mask');
  this.toggleBtn = document.querySelector('.hamburger-btn');
  this._initEvents();
};

Menu.prototype._initEvents = function() {
  this.toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (this.toggleBtn.classList.contains("toggle-active") === true){
        this.toggleBtn.classList.remove("toggle-active")
        this.close();
    }
    else{
        this.toggleBtn.classList.add("toggle-active")
        this.open();
    }
  }.bind(this));

  this.mask.addEventListener('click', function(e) {
    e.preventDefault();
    this.close();
    this.toggleBtn.classList.remove("toggle-active")
  }.bind(this));
};

Menu.prototype.open = function() {
  this.body.classList.add('has-active-menu');
  this.wrapper.classList.add('has-push-top');
  this.menu.classList.add('is-active');
  this.mask.classList.add('is-active');
};

Menu.prototype.close = function() {
  this.body.classList.remove('has-active-menu');
  this.wrapper.classList.remove('has-push-top');
  this.menu.classList.remove('is-active');
  this.mask.classList.remove('is-active');
}

var Menu = new Menu();

})(window)
