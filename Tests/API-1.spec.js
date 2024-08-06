const {test,expect,request} = require('@playwright/test')

// The beforeAll method, it run only once before the all method.
test.beforeAll( async ()=>{
    const loginPayload = {email:"atul.p@mim-essay.com",password:"Atul@123",timezone:"Asia/Calcutta"} // Remove the "" from the fist key, in javascript we represt obect and value.
    const authTokens = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZTgwNzJjNGMxY2ZjNjE3OWUyZjgyOTVhNTIxZmQyYTQ1MjBmYzQ1YzYyNjA0MGZkYmRmOTNkNmEyOTA4NTM4NWJhM2Q1YjBkNmYzZDNjOTMiLCJpYXQiOjE3MjI1MDE0MjUsIm5iZiI6MTcyMjUwMTQyNSwiZXhwIjoxNzU0MDM3NDI1LCJzdWIiOiIxMTM2OTAiLCJzY29wZXMiOltdfQ.vAsFIDFKn6N_uf9swnKSU0ikQxnybMumx1xYZ-RR90DRKy8K9MES-q6zPhae3Yn2e8N2huQdF0xvNdlHUD-ksw95pWdNTMg_pU-ULoMzLddTewydNucROSX6cc51XYBq2p1a_dKrrH7_TVtPNecUP2Or0X_MMfjtBRSXWWIY6vyRoTEjS9hOUBNFFundFef4ea_c0A2X4yH7ihFkkcajPu0fyuOgu_UKYbyjsuFFT1spfkh5OBagY6lZFTyxABpAT2KI8fooUQHUGshFJOclg9hbrGzWxcUY21tP4yQMb-myTBeKL-GXqJLr1CXJ_jkC9qX1mQ_UQDTf3C9udsBIHkleG-3IHOWq93Gd0-NDepHuzLTFj7dHn8f0MRDjDQyjSl4nHAPXaqvyi4hSElFNVF1UlSLYFo-fgvxrT0riKmvadO8rDmkeROU8OTnlWOxx4tyLSLtxSA08KA4g9Q5zv8Ma6-owKqmzOfUOGf_cQy1l867LUB1fUYWQPFFQUMiJueQIw8ZfKJAO5MIg8h48ERJBFs5vZ1BaHAwODkZstBtZyHkRPtNutt6MsO5J5mnM7PlFlE6jJKP1rlo6XrxpbDrFl8_HpstOU2xlWG6SQHMRbixVIOdBf_wSds7kGw7jfjoMbJRKol4lnCNaFue1sjkWU8C0wnxigK3Q1WLvELU";
    const API_URL= "https://staging-laravel.mentr-me.com/api/login" ; 
    const homepage = "https://staging.mentr-me.com/";

    // create context
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post(API_URL,{
        data:loginPayload
    })

    // verify the API response is ok [200, 201, ...]
    expect(loginResponse.ok()).toBeTruthy();

    // store login response in json
    const loginResponseJson = await loginResponse.json();

    // Extract the token from the json.
    const token = loginResponseJson.access_token;

    // print the token in console
    console.log(token);
})

test.only('open mentr-me',async ({page})=>{

    page.addInitScript(value => {

    // set the token in brower local storage
    page.localStorage.setItem('authTokens',value);
}, token );
    
    // Navisge to the mentr-me
    await page.goto('https://staging.mentr-me.com/');
});