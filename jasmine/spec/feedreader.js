/* This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /* This is our first test suite named "RSS Feeds".
    */
    describe('RSS Feeds', ()=> {
        /* This tests to make sure that the allFeeds variable has been defined and that it is not empty.*/
        it('are defined', ()=> {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL',()=>{
           allFeeds.forEach((item) => {
           expect(item.url).toBeDefined();
           expect(item.url.length).not.toBe(0);
           });
        });

        /* This loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name',()=>{
            allFeeds.forEach((item) => {
            expect(item.name).toBeDefined();
            expect(item.name.length).not.toBe(0);
            });
         });
    });

    /* A new test suite named "The menu" */
    describe('The menu', ()=> {

        /* This ensures the menu element is hidden by default.*/
        it('should be hidden',()=>{
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
         /* This ensures the menu changes visibility when the menu icon is clicked.*/
        it('should change visibility when clicked',()=>{
          let menuIconShape = document.querySelector('a.menu-icon-link');
          menuIconShape.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(false);
          menuIconShape.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', ()=>{
        /* This ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
        beforeEach((done)=>{
          loadFeed(0, ()=>{
            done();
          });
        });
        it('should not be 0', ()=>{
          expect($('.feed .entry').length).not.toBe(0);
        });
    });
    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', ()=>{
        //Defining two variables and storing in each one the loaded feed from HTML
        let feedOne;
        let feedTwo;
        beforeEach((done)=>{
          loadFeed(1,()=>{
            feedOne=$('.feed').html();
            done();
          });
          loadFeed(2,()=>{
            feedTwo=$('.feed').html();
            done();
          });
        });
        //Here, we are expecting the first feed not to equal second feed.
        it('feed two should not be feed one',()=>{
          expect(feedOne).not.toBe(feedTwo);
        });
    });
}());
