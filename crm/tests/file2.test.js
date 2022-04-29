/**
 * Testing async code
 */

function fetchData(callback) {
    setTimeout(() => {
        callback("Vishwa")
    }, 2000);
}
/**
test("testing the call back function", ()=>{
    
    function callback(data){
        expect(data).toEqual("Kareena");
    }
    fetchData(callback);
});
**/


test("testing the call back function", (done) => {

    try {
        function callback(data) {
            expect(data).toEqual("Vishwa");
            done(); // unless untill this line is called..test will wait
        }
    }
    catch (err) {
        done(err);
    }
    fetchData(callback);
});

/**
 * 1.fetchBack expects a call back function
 * 2. Callback function should have 1 arguments
 * 3. If we execute this function by passing callbak fn
 * after 2 seconds, call back function will be called with
 * the argument Vishwa
 *
 */