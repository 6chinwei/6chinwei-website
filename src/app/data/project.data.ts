export const project = {
    title: '作品集',
    icon: 'thumbs-up',
    list: [
        {
            name: 'Quantum EHS',
            keywords: ['AngularJS', 'SCSS', 'Cordova', 'Jenkins'],
            year: '2015 ~ 2017',
            descriptions: [
                'Quantum EHS 是一套給企業使用的環境衛生安全(EHS)雲端管理軟體',
                '前端使用 AngularJS 為開發框架；使用 SCSS 作為 CSS 的前處理器；使用 Gulp 作為自動化處理工具',
                '在團隊中除了負責前端開發工作之外，同時也擔任開發團隊的負責人，負責分配開發工作，並隨時掌握團隊的開發進度',
                '成功導入持續整合(CI)：設定自動化佈署簡化佈署工作，建立自動化測試確保程式碼品質。前端使用 Karma 撰寫單元測試、使用 Protractor 與 Selenium IDE 撰寫 E2E 測試。整套 CI 流程是架設在 AWS EC2 上，使用 Jenkins 來管理',
                '<a href="http://demo-qcs.6chinwei.cc" target="_blank">點此前往 Demo 網站</a>'
            ],
            coverImageSrc: 'quantum-ehs/cover.png',
            gallery: [
                { src: 'quantum-ehs/001.png', title: 'Quantum EHS 首頁' },
                { src: 'quantum-ehs/002.png', title: '員工管理頁' },
                { src: 'quantum-ehs/003.png', title: '員工管理頁' }
            ]
        },
        {
            name: 'LVAD Mobile App',
            keywords: ['iOS App', 'Ionic', 'Laravel'],
            year: '2016 ~ 2017',
            link: null,
            descriptions: [
                'LVAD 是一套醫療裝置的追蹤與管理系統，包含 iOS App 與管理後台',
                'iOS App 使用 Ionic 為主要開發框架。管理後台則是使用 PHP 的 Laravel 為主要開發框架',
                '在團隊中負責 iOS App 的開發與上架發佈'
            ],
            coverImageSrc: 'lvad/cover.jpeg',
            gallery: [
                { src: 'lvad/001.png', title: 'iOS App 登入頁面' },
                { src: 'lvad/002.png', title: 'iOS App 內容頁面' },
                { src: 'lvad/003.png', title: 'iOS App 內容頁面' },
                { src: 'lvad/004.png', title: 'iOS App 帳號管理頁面' }
            ]
        },
        {
            name: 'LINE Pay PHP Tutorial',
            keywords: ['PHP', 'LINE Pay'],
            year: '2015',
            descriptions: [
                '使用 PHP 串接 LINE Pay 支付的入門教學文章，分享在 Github 上',
                '內容涵蓋 LINE Pay 的支付流程介紹與 API 介紹，並附上範例程式碼',
                '<a href="https://github.com/6chinwei/LINE-Pay-PHP-Tutorial" target="_blank">點此前往 Github 查看文章</a>'
            ],
            coverImageSrc: 'line-pay-php-tutorial/cover.png',
            gallery: [
                { src: 'line-pay-php-tutorial/001.png', title: 'LINE Pay PHP 教學文章' },
                { src: 'line-pay-php-tutorial/002.png', title: '付款流程範例' }
                
            ]
        },
        {
            name: 'Video-enable Dynamic Site Planner',
            keywords: ['Unity3D', 'C#'],
            year: '2014',
            descriptions: [
                'Video-enable Dynamic Site Planner 是一套虛擬實境的工地模擬軟體，讓工地的工程師可以透過現地的即時影片，進行動態物體的3D建模，並將建立好的 3D 模型整合到一虛擬工地中。',
                '我在 2014 年完成此程式的開發，同時也是我的碩士畢業論文，指導教授為康仕仲教授。',
                '本研究使用 Unity3D 遊戲引擎做為開發工具，主要開發的語言為 C#。',
                '本研究已於 2014 年 6 月 23 日發表到國際研討會－ICCCBE 2014，<a href="http://ascelibrary.org/doi/abs/10.1061/9780784413616.194" target="_blank">點此前往 ASCE Library 查看文章</a>'
            ],
            coverImageSrc: 'site-planner/cover.jpeg',
            gallery: [
                { src: 'site-planner/001.jpg', title: '程式介面' },
                { src: 'site-planner/002.png', title: '程式介面' },
                { src: 'site-planner/003.jpg', title: '方法與流程' }
            ]
        }
    ]
}