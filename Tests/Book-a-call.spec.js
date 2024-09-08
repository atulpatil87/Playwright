const {test,expect} = require('@playwright/test')
import LoginPage from "../pageobjects/LoginPage";
import BookACall from "../pageobjects/BookACall";
import Intake from "../pageobjects/Intake";
import Calender from "../pageobjects/CalenderPage"


test("Book a call", async ({page}) => {
    
    const Email = "Atul1@mim-essay.com";
    const Password = "123456";
    const phone = "000000123"
    
    // adding wait until network calls
    await page.waitForLoadState("networkidle");

    // // Create an instance of LoginPage class.
    // const loginPage = new LoginPage(page);

    // // go to the login page.
    // await loginPage.goto();

    // // wait until dom content loaded.
    // await page.waitForLoadState('domcontentloaded');

    // // Click on the email btn.
    // await loginPage.switchTab();
    
    // // Valid login
    // await loginPage.validLogin(Email,Password);

    // // Verify the User logged in successfully.
    // await page.locator(".desktop-login").isVisible();

  // create a instance
  const bookACall = new BookACall(page);
  
  // go to the book a call page.
  await bookACall.goto();

  // Verify the Heading.
  await expect(page.locator('div').filter({ hasText: /^We can help you get into your Dream Schools$/ })).toBeVisible();

  // Verify the input box should be Empty.
  await  bookACall.verifyInputEmpty();

  // Enter the Details
  await bookACall.fillDetails();

  // Click on Book a Free Strategy Session.
  await bookACall.bookSession();

  // create instance of intake class
  const intake = new Intake(page);
  
  // Select Intake
  await intake.selectIntake1();

  // Create instance of calender.
  const calender = new Calender(page);

   // adding wait until network calls
   await page.waitForLoadState("networkidle");

  // Verify the calender Content.
  await calender.verifyContent();

  // Book a slot.
  await calender.bookSlot();

  });







// test('test', async ({ page }) => {
//   await page.goto('https://staging.mim-essay.com/study-abroad-consultants');
//   await page.locator('div').filter({ hasText: /^We can help you get into your Dream Schools$/ }).click();
//   await page.getByRole('heading', { name: '98% Success Rate | 10,000' }).click();
//   await page.getByText('Book a Free Strategy Session').click();
//   await page.getByRole('list').getByText('Detailed Analysis of Profile').click();
//   await page.getByRole('list').getByText('⁠Ideal 8 Schools to target').click();
//   await page.getByRole('list').getByText('What GMAT Score do you really').click();
//   await page.getByText('Things you can do now to').click();
//   await page.getByRole('list').getByText('Scholarship chance').click();
//   await page.getByRole('list').locator('li').filter({ hasText: 'Detailed Analysis of Profile' }).locator('img').click();
//   await page.getByRole('list').locator('li').filter({ hasText: '⁠Ideal 8 Schools to target' }).locator('img').click();
//   await page.getByRole('list').locator('li').filter({ hasText: 'What GMAT Score do you really' }).locator('img').click();
//   await page.locator('li').filter({ hasText: 'Things you can do now to' }).locator('img').click();
//   await page.getByRole('list').locator('li').filter({ hasText: 'How to improve your Admit and' }).locator('img').click();
//   await page.locator('#book_an_appointment_form').click();
//   await page.locator('#book_an_appointment_form').getByText('Name', { exact: true }).click();
//   await page.locator('#book_an_appointment_form').getByText('Email ID').click();
//   await page.locator('#book_an_appointment_form').getByPlaceholder('Enter email').click();
//   await page.locator('#book_an_appointment_form').getByRole('button', { name: 'Book a Free Session' }).click();
//   await page.locator('#book_an_appointment_form').getByRole('button', { name: 'Book a Free Session' }).click();
//   await page.locator('#book_an_appointment_form').getByRole('button', { name: 'Book a Free Session' }).click();
//   await page.getByText('We’ve helped 1000’s of Applicants get into Top Schools such as...').click();
//   await page.getByText('Top Schools').click();
//   await page.locator('#jssor_1 > div > div > div:nth-child(2)').click();
//   await page.locator('div:nth-child(26) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(27) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(28) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(29) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(29) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(30) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(31) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(32) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(33) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(34) > div > .ls-is-cached').click();
//   await page.locator('.ls-is-cached').first().click();
//   await page.locator('div:nth-child(2) > div > .ls-is-cached').first().click();
//   await page.locator('div:nth-child(3) > div > .ls-is-cached').first().click();
//   await page.locator('div:nth-child(4) > div > .ls-is-cached').first().click();
//   await page.locator('div:nth-child(5) > div > .ls-is-cached').first().click();
//   await page.locator('div:nth-child(5) > div > .ls-is-cached').first().click();
//   await page.locator('div:nth-child(6) > div > .ls-is-cached').first().click();
//   await page.locator('div:nth-child(7) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(8) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(9) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(9) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(11) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(10) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(11) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(12) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(13) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(14) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(15) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(15) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(15) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(16) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(17) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(18) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(19) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(20) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(21) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(22) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(22) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(23) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(24) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(25) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(26) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(27) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(28) > div > .lazyloaded').click();
//   await page.locator('div:nth-child(29) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(30) > div > .ls-is-cached').click();
//   await page.locator('div:nth-child(31) > div > .ls-is-cached').click();
//   await page.getByText('and many more...').click();
//   await page.getByText('Here’s what some of our Happy Clients say about us Nimisha "Before reaching out').click();
//   await page.getByText('Happy Clients').click();
//   await page.getByText('Here’s what some of our Happy').click();
//   await page.getByText('Nimisha "Before reaching out').click();
//   await page.getByText('Nimisha "Before reaching out').click();
//   await page.locator('.ba--happy-clients-details > .lazyloaded').first().click();
//   await page.getByText('Nimisha').click();
//   await page.getByText('"Before reaching out to MiM-').click();
//   await page.locator('.admit-received-heading').first().click();
//   await page.locator('.img-style').first().click();
//   await page.locator('img:nth-child(2)').first().click();
//   await page.locator('div:nth-child(2) > .ba--happy-clients-details > .lazyloaded').click();
//   await page.getByText('Piyush').click();
//   await page.getByText('"I was seeking a consultant').click();
//   await page.locator('div:nth-child(2) > .admit-received-heading').click();
//   await page.locator('div:nth-child(2) > .stretch > img').first().click();
//   await page.locator('div:nth-child(2) > .stretch > img:nth-child(2)').click();
//   await page.locator('div:nth-child(3) > .ba--happy-clients-details > .lazyloaded').click();
//   await page.getByText('Ankita').click();
//   await page.getByText('"The reason for making it to').click();
//   await page.locator('div:nth-child(3) > .admit-received-heading').click();
//   await page.locator('div:nth-child(3) > .stretch > img').first().click();
//   await page.locator('div:nth-child(3) > .stretch > img:nth-child(2)').click();
//   await page.locator('div:nth-child(4) > .ba--happy-clients-details > .lazyloaded').click();
//   await page.getByText('Karthik').click();
//   await page.getByText('"At first, I was hesitant to').click();
//   await page.locator('div:nth-child(4) > .admit-received-heading').click();
//   await page.locator('div:nth-child(4) > .stretch > img').first().click();
//   await page.locator('div:nth-child(4) > .stretch > img:nth-child(2)').click();
//   await page.locator('div:nth-child(5) > .ba--happy-clients-details > .lazyloaded').click();
//   await page.getByText('Supreet').click();
//   await page.getByText('"To make it simpler, I am').click();
//   await page.locator('div:nth-child(5) > .admit-received-heading').click();
//   await page.locator('div:nth-child(5) > .stretch > img').first().click();
//   await page.locator('div:nth-child(5) > .stretch > img:nth-child(2)').click();
//   await page.locator('div:nth-child(6) > .ba--happy-clients-details > .lazyloaded').click();
//   await page.getByText('Simran').click();
//   await page.getByText('"The best part was the utmost').click();
//   await page.locator('div:nth-child(6) > .stretch > img').first().click();
//   await page.locator('div:nth-child(6) > .stretch > img:nth-child(2)').click();
//   await page.locator('img:nth-child(3)').click();
//   await page.locator('img:nth-child(4)').click();
//   await page.getByText('How our Inbox looks after School Results are announced Admit from ESSEC Admit').click();
//   await page.locator('div:nth-child(9) > .item').click();
//   await page.getByRole('figure').getByRole('img', { name: 'Admit from HEC Paris' }).click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByText('Admit from HEC Paris').first().click();
//   await page.getByText('Admit from London Business').first().click();
//   await page.getByRole('figure').getByRole('img', { name: 'Admit from London Business' }).click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByText('Admit from INSEAD').first().click();
//   await page.getByRole('figure').getByRole('img', { name: 'Admit from INSEAD' }).click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('button').nth(2).click();
//   await page.getByText('Admit from Michigan').first().click();
//   await page.getByRole('figure').getByRole('img', { name: 'Admit from Michigan' }).click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('button').nth(2).click();
//   await page.getByRole('button').nth(2).click();
//   await page.getByText('Admit from Duke University', { exact: true }).nth(1).click();
//   await page.locator('div').filter({ hasText: '×Loading...' }).first().click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('button').nth(2).click();
//   await page.getByText('Admit from INSEAD').nth(1).click();
//   await page.getByRole('figure').getByRole('img', { name: 'Admit from INSEAD' }).click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('button').nth(2).click();
//   await page.getByText('Admit from ISB').first().click();
//   await page.getByRole('figure').getByRole('img', { name: 'Admit from ISB' }).click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('button').nth(2).click();
//   await page.getByText('Admit from ESSEC').nth(1).click();
//   await page.getByRole('button').nth(2).click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByText('Admit from IVEY').nth(1).click();
//   await page.getByText('How are we Better than other Consultants? Focus on Top B-Schools Our goal is to').click();
//   await page.getByText('How are we').click();
//   await page.getByText('Better', { exact: true }).click();
//   await page.getByText('than other Consultants?').click();
//   await page.getByRole('img', { name: 'Focus on Top B-Schools' }).click();
//   await page.locator('#app-form div').filter({ hasText: 'Focus on Top B-Schools Our' }).nth(2).click();
//   await page.getByText('Focus on Top B-Schools').click();
//   await page.getByText('Our goal is to help you').click();
//   await page.locator('#app-form div').filter({ hasText: 'Personalized School & Degree' }).nth(2).click();
//   await page.getByRole('img', { name: 'Personalized School & Degree' }).click();
//   await page.getByText('Personalized School & Degree').click();
//   await page.getByText('We analyze your profile to').click();
//   await page.locator('#app-form div').filter({ hasText: 'Guidance from Alumni' }).nth(2).click();
//   await page.getByRole('img', { name: 'Guidance from Alumni' }).click();
//   await page.getByText('Guidance from Alumni').click();
//   await page.getByText('Get expert advice from').click();
//   await page.locator('#app-form div').filter({ hasText: 'Comprehensive All-in-One' }).nth(2).click();
//   await page.getByRole('img', { name: 'Comprehensive All-in-One' }).click();
//   await page.getByText('Comprehensive All-in-One').click();
//   await page.getByText('Track your applications,').click();
//   await page.locator('#app-form div').filter({ hasText: 'Personalised Applications We' }).nth(2).click();
//   await page.getByRole('img', { name: 'Personalised Applications' }).click();
//   await page.getByText('Personalised Applications').click();
//   await page.getByText('We offer unlimited edits and').click();
//   await page.locator('#app-form div').filter({ hasText: '4 School Guarantee In the' }).nth(2).click();
//   await page.locator('#app-form div').filter({ hasText: '4 School Guarantee In the' }).nth(2).click();
//   await page.getByRole('img', { name: 'School Guarantee' }).click();
//   await page.getByText('School Guarantee').click();
//   await page.getByText('In the rare case if you don\'t').click();
//   await page.getByText('Interested in working with us?').click();
//   await page.getByText('Interested').click();
//   await page.getByText('in working with us?').click();
//   await page.getByText('Name', { exact: true }).nth(1).click();
//   await page.locator('div:nth-child(3) > .modal-content > .modal-body').click();
//   await page.locator('div:nth-child(3) > .modal-content').click();
//   await page.getByText('Name', { exact: true }).nth(1).click();
//   await page.getByPlaceholder('Enter name').nth(1).click();
//   await page.getByText('Email ID').nth(1).click();
//   await page.getByText('Contact Number').nth(1).click();
//   await page.getByRole('option', { name: 'India (भारत) +' }).click();
//   await page.getByPlaceholder('E.g. 7838xxxxxx').nth(1).click();
//   await page.getByRole('button', { name: 'Book a Free Session' }).nth(1).click();
//   await expect(page.locator('#app-form > div:nth-child(10)')).toBeVisible();
//   await expect(page.locator('.book-an-app--study-bg-img').first()).toBeVisible();
//   await expect(page.locator('div:nth-child(12) > div > .lazyloaded')).toBeVisible();
//   await expect(page.locator('#book_an_appointment_form')).toContainText('Book a Free Strategy Session to discuss: Detailed Analysis of Profile Strengths and Weaknesses ⁠Ideal 8 Schools to target What GMAT Score do you really need Things you can do now to Improve your Profile How to improve your Admit and Scholarship chance Detailed Analysis of Profile Strengths and Weaknesses ⁠Ideal 8 Schools to target What GMAT Score do you really need How to improve your Admit and Scholarship chance Name Enter your Name Email ID Enter your Email Contact Number +91 India (भारत) +91 Afghanistan (‫افغانستان‬‎) +93 Albania (Shqipëri) +355 Algeria (‫الجزائر‬‎) +213 American Samoa +1 Andorra +376 Angola +244 Anguilla +1 Antigua and Barbuda +1 Argentina +54 Armenia (Հայաստան) +374 Aruba +297 Ascension Island +247 Australia +61 Austria (Österreich) +43 Azerbaijan (Azərbaycan) +994 Bahamas +1 Bahrain (‫البحرين‬‎) +973 Bangladesh (বাংলাদেশ) +880 Barbados +1 Belarus (Беларусь) +375 Belgium (België) +32 Belize +501 Benin (Bénin) +229 Bermuda +1 Bhutan (འབྲུག) +975 Bolivia +591 Bosnia and Herzegovina (Босна и Херцеговина) +387 Botswana +267 Brazil (Brasil) +55 British Indian Ocean Territory +246 British Virgin Islands +1 Brunei +673 Bulgaria (България) +359 Burkina Faso +226 Burundi (Uburundi) +257 Cambodia (កម្ពុជា) +855 Cameroon (Cameroun) +237 Canada +1 Cape Verde (Kabu Verdi) +238 Caribbean Netherlands +599 Cayman Islands +1 Central African Republic (République centrafricaine) +236 Chad (Tchad) +235 Chile +56 China (中国) +86 Christmas Island +61 Cocos (Keeling) Islands +61 Colombia +57 Comoros (‫جزر القمر‬‎) +269 Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo) +243 Congo (Republic) (Congo-Brazzaville) +242 Cook Islands +682 Costa Rica +506 Côte d’Ivoire +225 Croatia (Hrvatska) +385 Cuba +53 Curaçao +599 Cyprus (Κύπρος) +357 Czech Republic (Česká republika) +420 Denmark (Danmark) +45 Djibouti +253 Dominica +1 Dominican Republic (República Dominicana) +1 Ecuador +593 Egypt (‫مصر‬‎) +20 El Salvador +503 Equatorial Guinea (Guinea Ecuatorial) +240 Eritrea +291 Estonia (Eesti) +372 Eswatini +268 Ethiopia +251 Falkland Islands (Islas Malvinas) +500 Faroe Islands (Føroyar) +298 Fiji +679 Finland (Suomi) +358 France +33 French Guiana (Guyane française) +594 French Polynesia (Polynésie française) +689 Gabon +241 Gambia +220 Georgia (საქართველო) +995 Germany (Deutschland) +49 Ghana (Gaana) +233 Gibraltar +350 Greece (Ελλάδα) +30 Greenland (Kalaallit Nunaat) +299 Grenada +1 Guadeloupe +590 Guam +1 Guatemala +502 Guernsey +44 Guinea (Guinée) +224 Guinea-Bissau (Guiné Bissau) +245 Guyana +592 Haiti +509 Honduras +504 Hong Kong (香港) +852 Hungary (Magyarország) +36 Iceland (Ísland) +354 Indonesia +62 Iran (‫ایران‬‎) +98 Iraq (‫العراق‬‎) +964 Ireland +353 Isle of Man +44 Israel (‫ישראל‬‎) +972 Italy (Italia) +39 Jamaica +1 Japan (日本) +81 Jersey +44 Jordan (‫الأردن‬‎) +962 Kazakhstan (Казахстан) +7 Kenya +254 Kiribati +686 Kosovo +383 Kuwait (‫الكويت‬‎) +965 Kyrgyzstan (Кыргызстан) +996 Laos (ລາວ) +856 Latvia (Latvija) +371 Lebanon (‫لبنان‬‎) +961 Lesotho +266 Liberia +231 Libya (‫ليبيا‬‎) +218 Liechtenstein +423 Lithuania (Lietuva) +370 Luxembourg +352 Macau (澳門) +853 Macedonia (FYROM) (Македонија) +389 Madagascar (Madagasikara) +261 Malawi +265 Malaysia +60 Maldives +960 Mali +223 Malta +356 Marshall Islands +692 Martinique +596 Mauritania (‫موريتانيا‬‎) +222 Mauritius (Moris) +230 Mayotte +262 Mexico (México) +52 Micronesia +691 Moldova (Republica Moldova) +373 Monaco +377 Mongolia (Монгол) +976 Montenegro (Crna Gora) +382 Montserrat +1 Morocco (‫المغرب‬‎) +212 Mozambique (Moçambique) +258 Myanmar (Burma) (မြန်မာ) +95 Namibia (Namibië) +264 Nauru +674 Nepal (नेपाल) +977 Netherlands (Nederland) +31 New Caledonia (Nouvelle-Calédonie) +687 New Zealand +64 Nicaragua +505 Niger (Nijar) +227 Nigeria +234 Niue +683 Norfolk Island +672 North Korea (조선 민주주의 인민 공화국) +850 Northern Mariana Islands +1 Norway (Norge) +47 Oman (‫عُمان‬‎) +968 Pakistan (‫پاکستان‬‎) +92 Palau +680 Palestine (‫فلسطين‬‎) +970 Panama (Panamá) +507 Papua New Guinea +675 Paraguay +595 Peru (Perú) +51 Philippines +63 Poland (Polska) +48 Portugal +351 Puerto Rico +1 Qatar (‫قطر‬‎) +974 Réunion (La Réunion) +262 Romania (România) +40 Russia (Россия) +7 Rwanda +250 Saint Barthélemy +590 Saint Helena +290 Saint Kitts and Nevis +1 Saint Lucia +1 Saint Martin (Saint-Martin (partie française)) +590 Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon) +508 Saint Vincent and the Grenadines +1 Samoa +685 San Marino +378 São Tomé and Príncipe (São Tomé e Príncipe) +239 Saudi Arabia (‫المملكة العربية السعودية‬‎) +966 Senegal (Sénégal) +221 Serbia (Србија) +381 Seychelles +248 Sierra Leone +232 Singapore +65 Sint Maarten +1 Slovakia (Slovensko) +421 Slovenia (Slovenija) +386 Solomon Islands +677 Somalia (Soomaaliya) +252 South Africa +27 South Korea (대한민국) +82 South Sudan (‫جنوب السودان‬‎) +211 Spain (España) +34 Sri Lanka (ශ්‍රී ලංකාව) +94 Sudan (‫السودان‬‎) +249 Suriname +597 Svalbard and Jan Mayen +47 Sweden (Sverige) +46 Switzerland (Schweiz) +41 Syria (‫سوريا‬‎) +963 Taiwan (台灣) +886 Tajikistan +992 Tanzania +255 Thailand (ไทย) +66 Timor-Leste +670 Togo +g888 Tokelau +690 Tonga +676 Trinidad and Tobago +1 Tunisia (‫تونس‬‎) +216 Turkey (Türkiye) +90 Turkmenistan +993 Turks and Caicos Islands +1 Tuvalu +688 U.S. Virgin Islands +1 Uganda +256 Ukraine (Україна) +380 United Arab Emirates (‫الإمارات العربية المتحدة‬‎) +971 United Kingdom +44 United States +1 Uruguay +598 Uzbekistan (Oʻzbekiston) +998 Vanuatu +678 Vatican City (Città del Vaticano) +39 Venezuela +58 Vietnam (Việt Nam) +84 Wallis and Futuna (Wallis-et-Futuna) +681 Western Sahara (‫الصحراء الغربية‬‎) +212 Yemen (‫اليمن‬‎) +967 Zambia +260 Zimbabwe +263 Åland Islands +358 Enter your Number Book a Free Session');
//   await expect(page.locator('#book_an_appointment_form').getByPlaceholder('Enter name')).toBeEmpty();
// });
