console.log('#001 TEST GOOGLE SEARCH');
describe('#001 TEST FIND GOOGLE', ()=>{

   it('#001_1 SEARCH FOR GOOGLE', function(){
       console.log('#001_1a TESTING GOOGLE.COM can be reached by ');
       browser.url('http://google.com');   
   });  

   it('#001_2 TEST NO SEARCH TERM', function(){
       console.log('#001_2a SEARCH FOR NOTHING ');
       browser.url('http://google.com');   
   });  

});
