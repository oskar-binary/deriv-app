/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/app.css","febf3532ece658ed1d8782dab3a3e198"],["/css/digits.css","38b154689c1e536ad26457ca565559cd"],["/css/modals.css","c5177dff0f8cc110c707f21559f9108e"],["/css/notification-messages.css","c5d8c87b0f88e04625563fee530c7a3c"],["/css/reports.css","39926358c35fac76aab20690099ca742"],["/css/screen-small.css","188ff62dfffb062258cfb30b4bdef947"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","d402a33396ba20f7f232fe37031d70e0"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","81812dcca6e17873caad38347f8b62a9"],["/js/0.aa29e9a9dc243bb3aea5.js","cd64f6944f924ab86df8c9ba104dc683"],["/js/1.aa29e9a9dc243bb3aea5.js","f1a1d87f9a632def0c55a8597b4f4773"],["/js/10.aa29e9a9dc243bb3aea5.js","b85190b3efea2c49c9f6dc92de6ebd95"],["/js/11.aa29e9a9dc243bb3aea5.js","030569157d31c1b237423fc9452103a5"],["/js/12.aa29e9a9dc243bb3aea5.js","5389179f734dc2b25ed95113cd97b0b0"],["/js/13.aa29e9a9dc243bb3aea5.js","390b9f051fcad176acfb3da2ea14f2c3"],["/js/14.aa29e9a9dc243bb3aea5.js","87b5b90e2310ca342116cba296a58385"],["/js/15.aa29e9a9dc243bb3aea5.js","e0c5f2f4d679969479beb946160ae62f"],["/js/16.aa29e9a9dc243bb3aea5.js","59452121c909c0883bac96f327218603"],["/js/17.aa29e9a9dc243bb3aea5.js","4d83adab89decd2be917c44e2647580a"],["/js/18.aa29e9a9dc243bb3aea5.js","e4d1949f0b9b0cd77a0fcc04afa83f5a"],["/js/19.aa29e9a9dc243bb3aea5.js","cff5264b4470487d1da1a1491115481b"],["/js/2.aa29e9a9dc243bb3aea5.js","1e38f8d1580b083265f79ca3206858b2"],["/js/20.aa29e9a9dc243bb3aea5.js","3ea52d1abaed0847de01ea03a42a72e4"],["/js/21.aa29e9a9dc243bb3aea5.js","37c00a6c07a15d9f7e2a18cd74ec5619"],["/js/22.aa29e9a9dc243bb3aea5.js","7d55993da23fe3d9c1488f130bb227ec"],["/js/23.aa29e9a9dc243bb3aea5.js","917ab16d90ce9079309aee5a44bd1b7e"],["/js/24.aa29e9a9dc243bb3aea5.js","81e5fc73604b28d04685f48dde668060"],["/js/25.aa29e9a9dc243bb3aea5.js","00a0546e5a856fbce85b5806a15f32f2"],["/js/26.aa29e9a9dc243bb3aea5.js","6624a3323a4ae63880dbfa301bc0bc43"],["/js/27.aa29e9a9dc243bb3aea5.js","bf560bfef9d034a7d2c3e1fd736c1314"],["/js/28.aa29e9a9dc243bb3aea5.js","c63dd654fd25d10c40088abc45ecf2fb"],["/js/29.aa29e9a9dc243bb3aea5.js","b07712f50bc3b00071abd5536bc28432"],["/js/3.aa29e9a9dc243bb3aea5.js","4715f7b8b9aa34b163c770f680de789f"],["/js/30.aa29e9a9dc243bb3aea5.js","ed3424bcda3b9bdfea5cc0a53f385744"],["/js/31.aa29e9a9dc243bb3aea5.js","2560c6d376bcb4d3088991db9f886db3"],["/js/32.aa29e9a9dc243bb3aea5.js","75c7dfaf375d73fd5f0da7bee45cab83"],["/js/33.aa29e9a9dc243bb3aea5.js","252b69198b016d73c92e5ae774543991"],["/js/34.aa29e9a9dc243bb3aea5.js","4d2a3095ef0f5723724ea00d7916b5ca"],["/js/35.aa29e9a9dc243bb3aea5.js","55fb00292ae8c9709328e1776bd7b21b"],["/js/36.aa29e9a9dc243bb3aea5.js","7d2e1d4f98982902b8935d4e761913d7"],["/js/37.aa29e9a9dc243bb3aea5.js","524f99f5b2d9d771cf749a5e78a9876a"],["/js/38.aa29e9a9dc243bb3aea5.js","a4bcb0d10bdde1bc8d45e346952633a3"],["/js/39.aa29e9a9dc243bb3aea5.js","33e069a4e2271947c757e80a1ccc934d"],["/js/4.aa29e9a9dc243bb3aea5.js","2631aac71a45f4ae025281eb25f35b5a"],["/js/40.aa29e9a9dc243bb3aea5.js","1abb2e80227c9900314a169190cc24c0"],["/js/404.aa29e9a9dc243bb3aea5.js","9363216bff90fa6bbfa9def394b92d16"],["/js/41.aa29e9a9dc243bb3aea5.js","f9bebfe5d218ca2468231f569ba9c913"],["/js/42.aa29e9a9dc243bb3aea5.js","d2f2d2d5f7a5454fadf54ad02e12a513"],["/js/43.aa29e9a9dc243bb3aea5.js","8beb5f58b9e5d73aedc45f242e2f983c"],["/js/44.aa29e9a9dc243bb3aea5.js","d13b4c21482bcddfc552e25883f78f43"],["/js/45.aa29e9a9dc243bb3aea5.js","ce150317abc4874a6ee6518a80c19530"],["/js/46.aa29e9a9dc243bb3aea5.js","41b12bac21965fedd046c31d99872231"],["/js/47.aa29e9a9dc243bb3aea5.js","963fee103667e5a3e92f53dfa4c4d02f"],["/js/48.aa29e9a9dc243bb3aea5.js","f29ea0af4c0bf69b92b425652094213b"],["/js/49.aa29e9a9dc243bb3aea5.js","e35bc05b4266d0108645846b1b5c4048"],["/js/5.aa29e9a9dc243bb3aea5.js","875ff567ffd62fa80d4ae869779d47e7"],["/js/50.aa29e9a9dc243bb3aea5.js","a4879f6fea724791cd80274c115c2317"],["/js/51.aa29e9a9dc243bb3aea5.js","e112ae793aa75a42e14c8a962287d89c"],["/js/52.aa29e9a9dc243bb3aea5.js","efe56d42f44efbec95c8f5ad175e8d20"],["/js/53.aa29e9a9dc243bb3aea5.js","79613e26e23ae94d4ca8be181a4b52c3"],["/js/54.aa29e9a9dc243bb3aea5.js","2255992255c4b8e11c5d5a42bccd4e7b"],["/js/55.aa29e9a9dc243bb3aea5.js","35cca9e1abd7acf43d40d9fbd5609a27"],["/js/56.aa29e9a9dc243bb3aea5.js","4701f79ce738c85724832da06e55cafd"],["/js/57.aa29e9a9dc243bb3aea5.js","81d7381380814f3569064ce139a34ed3"],["/js/58.aa29e9a9dc243bb3aea5.js","76f3b6052a6a2947303615cb3927fbe0"],["/js/59.aa29e9a9dc243bb3aea5.js","b946ccd27167463277240512a70e3100"],["/js/6.aa29e9a9dc243bb3aea5.js","4e9c12ca15ab5915dd8d6ff8a3483a2a"],["/js/60.aa29e9a9dc243bb3aea5.js","99a36bdb11c5aee7d4e971d7c5ca5578"],["/js/61.aa29e9a9dc243bb3aea5.js","e0339088b696fb8207ba6177d7e10383"],["/js/62.aa29e9a9dc243bb3aea5.js","09ba3a1e2b2a376227dd8d12019720a3"],["/js/63.aa29e9a9dc243bb3aea5.js","4d2da48d2a3f47fd7fc9830d7a1b964a"],["/js/64.aa29e9a9dc243bb3aea5.js","0eebac8e749965863fed1afd1eeba5d0"],["/js/65.aa29e9a9dc243bb3aea5.js","6297f2bc414c7d3a3bdd937d69d8cb03"],["/js/66.aa29e9a9dc243bb3aea5.js","5592b1b92c445851f0ccb63c6d00794c"],["/js/67.aa29e9a9dc243bb3aea5.js","0c08265d50aaced93dc365da3e165fc4"],["/js/68.aa29e9a9dc243bb3aea5.js","e2650ae2111dd61ce8329fdb9b9470ca"],["/js/69.aa29e9a9dc243bb3aea5.js","c515b2b5427650b1b4b01076274ee85a"],["/js/7.aa29e9a9dc243bb3aea5.js","2657fd077994830e429bc211320707a3"],["/js/70.aa29e9a9dc243bb3aea5.js","61ad5d27f46459eca4eac8d576c69ce7"],["/js/8.aa29e9a9dc243bb3aea5.js","a38c03a92505e075141200559693e041"],["/js/9.aa29e9a9dc243bb3aea5.js","da9b6bdf4e60a8a26abfe14a2ea1b267"],["/js/account-info.aa29e9a9dc243bb3aea5.js","e8b72ec4c8b319e062e6dbc3359b2d8f"],["/js/contract.aa29e9a9dc243bb3aea5.js","82e5b51f2c052c7dcc0c55ae824dea6e"],["/js/default~open_position~1833eefb.aa29e9a9dc243bb3aea5.js","ead256ca222da74fc17b66888150c430"],["/js/digits.aa29e9a9dc243bb3aea5.js","ea1ef8189ef7c0cbf7eacebed0ec6421"],["/js/info-box.aa29e9a9dc243bb3aea5.js","17d0acfc1c7829815d1bea18c409a441"],["/js/modals.aa29e9a9dc243bb3aea5.js","b550f14762f030bd9c6c3d85f6ed4da0"],["/js/notification-messages.aa29e9a9dc243bb3aea5.js","ff5e16f8580e6ce00b041d4faaa9aa26"],["/js/open_positions.aa29e9a9dc243bb3aea5.js","1b4ed823e506094f36f315586e0c88a2"],["/js/profit_table.aa29e9a9dc243bb3aea5.js","d653eaa9ff8bb5ab8c7de4c6d2b88ec3"],["/js/push-notification.aa29e9a9dc243bb3aea5.js","c982ba18fa47b4fede72dbc9f644931b"],["/js/reports.aa29e9a9dc243bb3aea5.js","14b9e98dab013f4e2100e02535d7e2b5"],["/js/screen-small.aa29e9a9dc243bb3aea5.js","d06903f52574e4aed65e07c865f070d2"],["/js/settings-chart.aa29e9a9dc243bb3aea5.js","1be2ae416ccbb9493d938cb4a6de70d2"],["/js/settings-language.aa29e9a9dc243bb3aea5.js","f8104d9fa1a6ca6ad28d805779da812a"],["/js/settings-theme.aa29e9a9dc243bb3aea5.js","02b93ebdb72f4fd748593d7e70aec036"],["/js/smart_chart.aa29e9a9dc243bb3aea5.js","87f1827a4a6ad9fc48fd83518f45eddb"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.aa29e9a9dc243bb3aea5.js","18afd9b8d1ac3691e89d166b6e3059e9"],["/js/toggle-menu-drawer.aa29e9a9dc243bb3aea5.js","540ade3f4fef4e05c05b1b5554455ad5"],["/js/two-month-picker.aa29e9a9dc243bb3aea5.js","621adedb251cec6ab60411c55bd6f6f6"],["/js/vendors~open_position~7c650be5.aa29e9a9dc243bb3aea5.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.aa29e9a9dc243bb3aea5.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/work-in-progress.aa29e9a9dc243bb3aea5.js","5c702e7b04c1702f75901a8052c2c038"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







