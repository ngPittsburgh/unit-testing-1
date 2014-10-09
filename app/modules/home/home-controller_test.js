// Describe the Context
describe('Home Controller Test', function () {

    var sut;

    // Load module into Angular context
    beforeEach(function () {
        module(homeModule.name);
    });

    // Mock dependencies
    beforeEach(function () {
        module(function ($provide) {
            $provide.value("HomeService", {
                getAlbums : jasmine.createSpy("HomeService getAlbums")
            });
            $provide.value("$state", {});
        })
    });

    // Define system under test
    beforeEach(function () {
        inject(function ($controller, _$q_) {
            sut = $controller("HomeCtrl");
        });
    });

    it('should be defined', function () {
        expect(sut).toBeDefined();
    });
});







