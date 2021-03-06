'use strict';

describe('Metrics Controller Spec', function() {

    beforeEach(module('ngRoute'));
    beforeEach(module('pcApp.metrics'));

    describe('MetricDetailController', function(){
        var scope, metDetCtrl;

        beforeEach(inject(function($rootScope, $routeParams, $controller){
            $routeParams.metricId = 1;
            scope = $rootScope.$new();
            metDetCtrl = $controller('MetricDetailController',{
                $scope: scope
            });
        }));

        it('should have a message',function(){
            expect(scope.metric).toHaveBeenCalled;
        });

    } );


});