import Ember from 'ember';

const { Controller, A } = Ember;

export default Controller.extend({
  listData: A([{
    face: 'tomster.png',
    who: 'tomster 1',
    what: 'a message for you',
    notes: 'this is a message for you about ember'
  }, {
    face: 'tomster.png',
    who: 'tomster 2',
    what: 'a message for you',
    notes: 'this is a message for you about ember'
  }, {
    face: 'tomster.png',
    who: 'tomster 3',
    what: 'a message for you',
    notes: 'this is a message for you about ember'
  }, {
    face: 'tomster.png',
    who: 'tomster 4',
    what: 'a message for you',
    notes: 'this is a message for you about ember'
  }, {
    face: 'tomster.png',
    who: 'tomster 5',
    what: 'a message for you',
    notes: 'this is a message for you about ember'
  }])
});
