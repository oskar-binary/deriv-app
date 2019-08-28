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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/AccountSignupModal.css","0005ff5f023a3b76ae833737a733f0dc"],["/css/app.css","7114af25ac249befbef4810b83bfb9af"],["/css/default~open_position~1833eefb.css","130af4e9eb678230b33ebe9901ae9f97"],["/css/digits.css","975831af82a0ab7404f72f47b0a887dd"],["/css/modals.css","b7310b655e9e17d84d770a00e2362c30"],["/css/notification-messages.css","0c369254ed4f4c0da020b71217edbd5c"],["/css/reports.css","dfffea937e37a309c2e930b0e9f61869"],["/css/screen-small.css","3bfc014cb86baa473c34e52598a1641a"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","f0eee1d0a3345c4155e0d44cae52729b"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","f6a7579140bf8c27de3aee558f0a89e2"],["/js/0.436b98602a2752cc36e1.js","0b614ee32a6501d373520121aa90ec7b"],["/js/1.436b98602a2752cc36e1.js","f1a1d87f9a632def0c55a8597b4f4773"],["/js/10.436b98602a2752cc36e1.js","a24104568512d940d6480aa12cde9fb1"],["/js/11.436b98602a2752cc36e1.js","35bb18f41135a7301db7ca8e5d33d93c"],["/js/12.436b98602a2752cc36e1.js","9f692fb23120b3d2e4f8560ff333ecac"],["/js/13.436b98602a2752cc36e1.js","d90486cc733a14e8185cfe1f8fcc763c"],["/js/14.436b98602a2752cc36e1.js","b7a22efd88df6c0cb41854a3bff23929"],["/js/15.436b98602a2752cc36e1.js","a06bfe11ae598a429f531943fca3d131"],["/js/16.436b98602a2752cc36e1.js","b4310e25e4c5f1d601c35a9187a58fb2"],["/js/17.436b98602a2752cc36e1.js","4acf77fcece15c08d68478f4e8af7751"],["/js/18.436b98602a2752cc36e1.js","0c00c3ccd029e9cb7dca9aee5ecf1c9a"],["/js/19.436b98602a2752cc36e1.js","a224edff3089f6bced1a3854ad04c817"],["/js/2.436b98602a2752cc36e1.js","1e38f8d1580b083265f79ca3206858b2"],["/js/20.436b98602a2752cc36e1.js","799e28eaf24418a27ae393f33c5bec10"],["/js/21.436b98602a2752cc36e1.js","0ed3fa6b688834a4a96ca9f77b7928cd"],["/js/22.436b98602a2752cc36e1.js","8dee4efe068a9289404873ce86fdc730"],["/js/23.436b98602a2752cc36e1.js","de4cdcac7064caae171e3544097f5de7"],["/js/24.436b98602a2752cc36e1.js","da2003d50163e40e6117d278289e1685"],["/js/25.436b98602a2752cc36e1.js","c05e0dac23168ff8fec3de5abcb3b017"],["/js/26.436b98602a2752cc36e1.js","af69172f6cffc9b442ab877cdbcbadc0"],["/js/27.436b98602a2752cc36e1.js","f4332841c046189c996b00b4093f6dda"],["/js/28.436b98602a2752cc36e1.js","b7c703f3b3a886416e862490e070c350"],["/js/29.436b98602a2752cc36e1.js","2d6c45aa1f0d104e9cc201cec792f9b8"],["/js/3.436b98602a2752cc36e1.js","0ce7dbe36839d6ab00097ea0d2976c41"],["/js/30.436b98602a2752cc36e1.js","e287884ca82bc1c8bc7a25350235cb76"],["/js/31.436b98602a2752cc36e1.js","e5daca8b583e6c0f72922437da010e4b"],["/js/32.436b98602a2752cc36e1.js","4c8b23566d69665255d9ff80f93b4dd8"],["/js/33.436b98602a2752cc36e1.js","a2d661c07d4e33c29528aabec1533dd4"],["/js/34.436b98602a2752cc36e1.js","34dfd7f0597c876a9c2a9e1714da0347"],["/js/35.436b98602a2752cc36e1.js","37f9bbc60674fa23ec04cb6148d988d9"],["/js/36.436b98602a2752cc36e1.js","912756fe06d5437dc42494b3f70d0fbc"],["/js/37.436b98602a2752cc36e1.js","c63c333755eee3f6610e3233125166c9"],["/js/38.436b98602a2752cc36e1.js","0b9a4637e5b7d4215913ea8ff78de345"],["/js/39.436b98602a2752cc36e1.js","414b88a7225fe63f2dc2ea17943a27da"],["/js/4.436b98602a2752cc36e1.js","e7bc5a1150eaf6982bd4704fdf0c40f9"],["/js/40.436b98602a2752cc36e1.js","21986354334e90d9eaddeb4de5aecfd0"],["/js/404.436b98602a2752cc36e1.js","9363216bff90fa6bbfa9def394b92d16"],["/js/41.436b98602a2752cc36e1.js","824a771c86c3c227c597f4a2fbcbc590"],["/js/42.436b98602a2752cc36e1.js","ddfb6cb8b6f8909ab58ff9a4cec9dace"],["/js/43.436b98602a2752cc36e1.js","93630cce8f5073415128b1ceac12f6aa"],["/js/44.436b98602a2752cc36e1.js","f36a562499976c5a58641473e6e5657f"],["/js/45.436b98602a2752cc36e1.js","c6f998db1dada23c20959487f41d846c"],["/js/46.436b98602a2752cc36e1.js","be67dc6998352b3945f0b5404a42e913"],["/js/47.436b98602a2752cc36e1.js","4d39a26c83bccec6eb90670aba70402a"],["/js/48.436b98602a2752cc36e1.js","9998d97be0cb843854d724c7e3ba432b"],["/js/49.436b98602a2752cc36e1.js","d44fee00d1eba947d8e6b26ed9cbf180"],["/js/5.436b98602a2752cc36e1.js","ef32271aaeda07ea8c7515283d70aa82"],["/js/50.436b98602a2752cc36e1.js","f18b24484d25dbeb0b53c891ff89086b"],["/js/51.436b98602a2752cc36e1.js","0a67f4981379be44b47eb7b707eac546"],["/js/52.436b98602a2752cc36e1.js","58157f3a6184b6b4f4241ed7bf5b0b31"],["/js/53.436b98602a2752cc36e1.js","e25a2ef32bcb113f0b83271138ce03d4"],["/js/54.436b98602a2752cc36e1.js","e1d5f7fd1cb3589e97f82976283a8143"],["/js/55.436b98602a2752cc36e1.js","b56e6716ab5ed94e9a9dff15b868eed5"],["/js/56.436b98602a2752cc36e1.js","f899317111381a491520cc7c281d870a"],["/js/57.436b98602a2752cc36e1.js","2b72497a6d4b1c384bc28e3716629dd6"],["/js/58.436b98602a2752cc36e1.js","f3b92296b42b12df7de3c001c2957c0a"],["/js/59.436b98602a2752cc36e1.js","631369550e8d4e5dcc11b2020df0a1a2"],["/js/6.436b98602a2752cc36e1.js","6fce23add7957d1c296cd9d4cbb2e267"],["/js/60.436b98602a2752cc36e1.js","6325c2d76ecf6943feffaf5766c87b92"],["/js/61.436b98602a2752cc36e1.js","c85af05eb59d33e75a00e1d60d192906"],["/js/62.436b98602a2752cc36e1.js","d200be51b9ce96a0b7e907cb51f78284"],["/js/63.436b98602a2752cc36e1.js","b41c1456fea8e1ed6cef15ea161a3bc1"],["/js/64.436b98602a2752cc36e1.js","d23b196b7e9f33fae67a4a7d520ae040"],["/js/65.436b98602a2752cc36e1.js","84ca28172154b05e92cf8fccbcb3f447"],["/js/66.436b98602a2752cc36e1.js","86620e6ce07f443f23cc864d6ba0bef7"],["/js/67.436b98602a2752cc36e1.js","e55b1e1592290bca81d3be525c82cebd"],["/js/68.436b98602a2752cc36e1.js","879098e7db22afe9e65bc4430047151a"],["/js/69.436b98602a2752cc36e1.js","fd6530eb4daf54297f2b88b57043593d"],["/js/7.436b98602a2752cc36e1.js","b98afec90331f106315a1b9c076f3146"],["/js/70.436b98602a2752cc36e1.js","d6d6f9345371bcaed97fa5eb30849562"],["/js/71.436b98602a2752cc36e1.js","1372327d74e4ea64edf455385a7677f2"],["/js/8.436b98602a2752cc36e1.js","48bc18da4dad14c579768b7bc9b64579"],["/js/9.436b98602a2752cc36e1.js","aa356f0a237b4171c8142a2d43ff0758"],["/js/AccountSignupModal.436b98602a2752cc36e1.js","01dff60eac4f564ed3a389c3beb2ff29"],["/js/account-info.436b98602a2752cc36e1.js","e8b72ec4c8b319e062e6dbc3359b2d8f"],["/js/contract.436b98602a2752cc36e1.js","00ce70c00cc4515e13aeef5d5fd44872"],["/js/default~open_position~1833eefb.436b98602a2752cc36e1.js","dcbdf3a519a9ce6b5db76f2bd82866d7"],["/js/digits.436b98602a2752cc36e1.js","888a7022496a5c0eb7f1b45d4a02e42c"],["/js/info-box.436b98602a2752cc36e1.js","17d0acfc1c7829815d1bea18c409a441"],["/js/modals.436b98602a2752cc36e1.js","4e63ea3768fff13b5d182f8500333420"],["/js/notification-messages.436b98602a2752cc36e1.js","516654b1e9f5910bf38106545b2ec358"],["/js/open_positions.436b98602a2752cc36e1.js","1b4ed823e506094f36f315586e0c88a2"],["/js/profit_table.436b98602a2752cc36e1.js","d653eaa9ff8bb5ab8c7de4c6d2b88ec3"],["/js/push-notification.436b98602a2752cc36e1.js","c982ba18fa47b4fede72dbc9f644931b"],["/js/reports.436b98602a2752cc36e1.js","ab5bb521d93b0f0fe6caef060eabec63"],["/js/screen-small.436b98602a2752cc36e1.js","fc966dc000053a49172037270581e82f"],["/js/settings-chart.436b98602a2752cc36e1.js","f95316f107b62cbf88d023bf80e22868"],["/js/settings-language.436b98602a2752cc36e1.js","f8104d9fa1a6ca6ad28d805779da812a"],["/js/settings-theme.436b98602a2752cc36e1.js","4c4bac180da76284c6526e0355a0261e"],["/js/smart_chart.436b98602a2752cc36e1.js","87f1827a4a6ad9fc48fd83518f45eddb"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.436b98602a2752cc36e1.js","18afd9b8d1ac3691e89d166b6e3059e9"],["/js/toggle-menu-drawer.436b98602a2752cc36e1.js","01f4d53bbde161f55901d2f112c82dd5"],["/js/two-month-picker.436b98602a2752cc36e1.js","621adedb251cec6ab60411c55bd6f6f6"],["/js/vendors~AccountSignupModal.436b98602a2752cc36e1.js","c1c81f40d68ba17d2d179d41fffd4962"],["/js/vendors~open_position~7c650be5.436b98602a2752cc36e1.js","35e9a0b928d379da3420c5b85c32e316"],["/js/vendors~smart_chart.436b98602a2752cc36e1.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/work-in-progress.436b98602a2752cc36e1.js","fb14e19d08a55d63b4951a1093e0d5ad"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







