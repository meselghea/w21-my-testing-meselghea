# Week 21 Assignment (testing with vitest Server-side rendering (SSR) )

v0.32.4 /Users/meselgheahilyatinisrin/w21-my-testing-meselghea
Coverage enabled with v8

✓ app/utils.test.ts (2)
✓ safeRedirect
✓ validateEmail returns true for emails

Test Files 1 passed (1)
Tests 2 passed (2)
Start at 11:13:04
Duration 515ms (transform 40ms, setup 148ms, collect 30ms, tests 1ms, environment 115ms, prepare 71ms)

% Coverage report from v8
----------|---------|----------|---------|---------|------------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s  
----------|---------|----------|---------|---------|------------------------
All files | 45.07 | 100 | 16.66 | 45.07 |  
 utils.ts | 45.07 | 100 | 16.66 | 45.07 | ...5,47-49,52-57,60-67
----------|---------|----------|---------|---------|------------------------

- Terminal will be reused by tasks, press any key to close it.

- Executing task: npm run test:e2e:dev

> test:e2e:dev
> start-server-and-test dev http://localhost:3000 "npx cypress open"

1: starting server using command "npm run dev"
and when url "[ 'http://localhost:3000' ]" is responding with HTTP status code 200
running tests using command "npx cypress open"

> dev
> run-p dev:\*

> dev:build
> cross-env NODE_ENV=development npm run build:server -- --watch

> dev:remix
> cross-env NODE_ENV=development remix watch

> dev:server
> cross-env NODE_ENV=development node --inspect --require ./node_modules/dotenv/config --require ./mocks ./build/server.js

Debugger listening on ws://127.0.0.1:9229/ab480df5-a779-4690-82a9-ff44a5d77eb0
For help, see: https://nodejs.org/en/docs/inspector
🔶 Mock server running

> build:server
> esbuild --platform=node --format=cjs ./server.ts --outdir=build --bundle --watch

✅ app ready: http://localhost:3000
✅ metrics ready: http://localhost:3001/metrics
[watch] build finished, watching for changes...
Watching Remix app in development mode...
HEAD / 200 - - 18.964 ms
💿 Building...
💿 Rebuilt in 472ms

DevTools listening on ws://127.0.0.1:62499/devtools/browser/017e196c-0c76-4033-bc45-17e34e986a70
GET /**/ 200 1.874 ms - -
GET /**/assets/index-67d8978e.css 200 1.469 ms - -
GET /**/assets/polyfills-03994127.js 200 4.973 ms - -
GET /**/assets/index-3bfc5aad.js 200 2.842 ms - -
GET /**cypress/runner/cypress_runner.css 200 2.172 ms - -
GET /**/assets/Specs-845f48e7.js 200 1.885 ms - 523
GET /**/assets/route-block-c0a8bdd8.js 200 3.479 ms - 45
POST /ListAccounts?gpsia=1&source=ChromiumBrowser&json=standard 200 630.689 ms - -
GET /**/assets/TrackedBanner.vue_vue_type_script_setup_true_lang-d55d1744.js 200 8.738 ms - -
GET /**/assets/InlineCodeFragment.vue_vue_type_script_setup_true_lang-a4b1e495.js 200 4.082 ms - -
GET /**/assets/box-open_x48-6ea7ed16.js 200 2.803 ms - -
GET /**/assets/SpecPatterns.vue_vue_type_script_setup_true_lang-8bc34cc3.js 200 2.594 ms - -
GET /**/assets/InlineCodeFragment-63f519c9.css 200 3.213 ms - 310
GET /**/assets/Index-a0bbbfc7.js 200 9.307 ms - -
GET /**/assets/graphql-4429ccf4.js 200 0.803 ms - 535
GET /**/assets/SpecNameDisplay.vue_vue_type_script_setup_true_lang-19b5cf80.js 200 1.236 ms - -
GET /**/assets/PromoHeader.vue_vue_type_script_setup_true_lang-9b2d5c47.js 200 0.674 ms - -
GET /**/assets/settings_x16-3c6e406b.js 200 0.743 ms - -
GET /**/assets/Index-f90bad12.css 200 0.488 ms - -
GET /**/assets/cypress_s-29af549a.png 200 0.721 ms - 4425
GET /**/assets/chrome-98045c79.svg 200 0.788 ms - -
GET /**/assets/electron-fb07f5cc.svg 200 0.779 ms - -
GET /chrome-variations/seed?osname=mac&channel=stable&milestone=114 304 781.304 ms - -
GET /**cypress/runner/cypress_runner.js 200 2.323 ms - -
GET /v1/pages/ChVDaHJvbWUvMTE0LjAuNTczNS4xOTgSEAmZ_btOmwfnBhIFDRNQn9Q=?alt=proto 200 670.820 ms - -
GET /**/assets/Switch.vue_vue_type_script_setup_true_lang-1bdbd718.js 200 2.669 ms - -
GET /**/assets/refresh_x16-28c37d52.js 200 1.445 ms - -
GET /**/assets/Runner-ad79f59f.css 200 1.004 ms - -
GET /**/assets/Runner-61be506b.js 200 4.631 ms - -
GET /**cypress/iframes/cypress%2Fe2e%2Fsmoke.cy.ts?browserFamily=chromium 200 4.106 ms - -
GET /v1/pages/ChVDaHJvbWUvMTE0LjAuNTczNS4xOTgSFwkyWoxKH6I8mBIFDTec3tMSBQ2RYZVO?alt=proto 200 583.451 ms - -
GET /**cypress/tests?p=cypress/e2e/smoke.cy.ts 200 863.020 ms - -
GET /**cypress/tests?p=cypress/support/e2e.ts 200 1336.653 ms - -
GET / 200 - - 43.883 ms
GET / 200 9.600 ms - -
GET /build/\_assets/app-5GOVE7EZ.css 200 17.725 ms - -
GET /build/\_shared/chunk-3K2JK6MY.js 200 34.707 ms - -
GET /build/\_shared/chunk-WLTRNBV5.js 200 35.948 ms - -
GET /build/\_shared/chunk-IU43IUTG.js 200 50.887 ms - -
GET /build/root-WC2Z6RSD.js 200 37.393 ms - -
GET /build/\_shared/chunk-AINY7747.js 200 15.786 ms - -
GET /build/routes/\_index-PTESD2X3.js 200 14.400 ms - -
GET /build/\_shared/chunk-Q2VWKU2O.js 200 54.281 ms - -
GET /build/manifest-1D9B333D.js 200 6.859 ms - -
GET /build/entry.client-G6UVXH43.js 200 50.853 ms - -
GET /free-photo/men-women-warm-up-before-after-exercising_1150-23003.jpg?w=1800&t=st=1688179933~exp=1688180533~hmac=4868ec8779f6672a916fe8e8d682417356596f20df014783c7c5db5b3d75b2ca 200 147.899 ms - -
GET /build/routes/join-GRGZNCUA.js 200 7.721 ms - -
GET /join?\_data=routes%2Fjoin 200 - - 6.470 ms
GET /join?\_data=routes%2Fjoin 200 12.469 ms - -
GET /**cypress/runner/fonts/fa-solid-900.woff2 200 2.796 ms - 126828
GET /build/\_shared/chunk-CMWXK6I4.js 200 5.084 ms - -
GET /v1/pages/ChVDaHJvbWUvMTE0LjAuNTczNS4xOTgSJQlFL14vRAh1ShIFDTec3tMSBQ2RYZVOEgUNg6hbPRIFDc5BTHoSFwkyWoxKH6I8mBIFDTec3tMSBQ2RYZVOEhcJ7qlv_ff-Bb0SBQ2DqFs9EgUNzkFMeg==?alt=proto 200 576.311 ms - -
POST /join?\_data=routes%2Fjoin 204 - - 381.954 ms
POST /join?\_data=routes%2Fjoin 204 390.201 ms - -
GET /?\_data=root 200 - - 56.556 ms
GET /?\_data=root 200 61.323 ms - -
POST /**cypress/add-verified-command 204 2.094 ms - -
POST /v1:GetModels?key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw 200 627.710 ms - -
GET /downloads?name=2202180000&target=OPTIMIZATION_TARGET_SEGMENTATION_CHROME_LOW_USER_ENGAGEMENT 200 546.703 ms - -
POST /**cypress/add-verified-command 204 0.451 ms - -
GET / 200 - - 32.689 ms
GET / 200 4.268 ms - -
POST /**cypress/add-verified-command 204 0.561 ms - -
GET /**cypress/runner/cypress_runner.css 304 1.176 ms - -
GET /**/assets/index-67d8978e.css 304 1.173 ms - -
GET /**/assets/InlineCodeFragment-63f519c9.css 304 1.232 ms - -
GET /**/assets/Index-f90bad12.css 304 0.745 ms - -
GET /**/assets/Runner-ad79f59f.css 304 0.712 ms - -
GET /\_\_cypress/runner/popper.js.map 404 0.401 ms - 136
GET /serve_file/@c3029382d11c5f499e4fc317353a43d411a5ce1c/third_party/vscode.web-custom-data/browsers.css-data.json 200 1062.679 ms - -
GET /build/\_shared/chunk-3K2JK6MY.js.map 200 518.294 ms - -
GET /build/root-WC2Z6RSD.js.map 200 523.877 ms - -
GET /build/\_shared/chunk-AINY7747.js.map 200 523.688 ms - -
GET /build/routes/\_index-PTESD2X3.js.map 200 522.620 ms - -
GET /build/\_shared/chunk-WLTRNBV5.js.map 200 520.522 ms - -
GET /build/\_shared/chunk-IU43IUTG.js.map 200 520.334 ms - -
GET /build/\_shared/chunk-Q2VWKU2O.js.map 200 534.597 ms - -
GET /build/entry.client-G6UVXH43.js.map 200 532.811 ms - -
GET /tools/pso/ping?as=chrome&brand=CHFA&pid=&hl=en&events=C5S&rep=2&rlz=C5:1C5CHFA_enID1007ID1007,C6:1C6CHFA_enID1007,C8:1C8CHFA_enID1007&id=2FE7A9896E12C11A6775D811E8F522D9D9DB3CDF0000000107 200 1841.141 ms - -
