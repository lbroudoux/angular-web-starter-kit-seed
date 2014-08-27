'use strict';

describe('Module1Controller', function(){

  beforeEach(module('Module1'));
  
  it('should create "twoops" model with 2 twoops', inject(function($controller) {
    var scope = {}, 
        ctrl = $controller('Module1Controller', {$scope:scope});
    
    expect(scope.twoops.length).toBe(2);
  }));
});