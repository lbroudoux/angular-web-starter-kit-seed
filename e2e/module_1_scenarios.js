'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Module1', function() {

  describe('Module1Controller', function() {

    beforeEach(function() {
      browser.get('module_1/module_1.html');
    });


    it('should filter the twoop list as user types into the search box', function() {

      var twoops = element.all(by.repeater('twoop in twoops'));
      var query = element(by.model('query'));

      expect(twoops.count()).toBe(2);

      query.sendKeys('too');
      expect(twoops.count()).toBe(1);

      query.clear();
      query.sendKeys('hello');
      expect(twoops.count()).toBe(2);
    });
  });
});