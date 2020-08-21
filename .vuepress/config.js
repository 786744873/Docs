module.exports = {
    title: '📖Documents',
    description: 'This is a personal document library for development work',
    base: '/',
    host: '127.0.0.1',
    port: '90',
    head: [
        ['script', {}, `
        var _mtac = {"senseQuery":1};
        (function() {
            var mta = document.createElement("script");
            mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
            mta.setAttribute("name", "MTAH5");
            mta.setAttribute("sid", "500727760");
            mta.setAttribute("cid", "500727761");
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(mta, s);
        })();
        `],
    ],
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        'vuepress-plugin-smooth-scroll',
        'reading-progress',
        [
            '@vuepress/search', {
                searchMaxSuggestions: 10
            }
        ],
        '@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        '@vuepress/medium-zoom', {
            selector: 'img.zoom-custom-imgs',
            options: {
                margin: 16
            }
        },
        [
            '@vssue/vuepress-plugin-vssue', {
                platform: 'github',
                owner: 'Meowv',
                repo: 'docs',
                clientId: 'dfcb3e4078504d07ccbf',
                clientSecret: 'f182d64e6d5063e0b137c0d039d4a99a5cebda00',
            }
        ],
        [
            "vuepress-plugin-code-copy", {
                align: "top",
                color: "#5a9600",
                backgroundColor: "#5a9600",
                successText: "复制成功"
            }
        ],
        [
            '@vuepress/last-updated', {
                transformer: (timestamp, lang) => {
                    const moment = require('moment');
                    moment.locale(lang);
                    return moment(timestamp).fromNow();
                }
            }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'meowv/docs',
        repoLabel: '⭐️GitHub',
        docsRepo: 'meowv/docs',
        docsDir: '/',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        sidebarDepth: 2,
        smoothScroll: true,
        nav: [
            {
                text: '⚡系列文章',
                items: [
                    {
                        text: '🚀基于 abp vNext 和 .NET Core 开发博客项目',
                        link: '/aspnetcore/abp-blog/'
                    }
                ]
            },
            {
                text: '🎈Python',
                link: '/python/'
            },
            {
                text: '🍺技术栈',
                link: '/stack/'
            },
            {
                text: '🎉总结',
                link: '/summary/'
            }
        ],
        sidebar: {
            '/aspnetcore/abp-blog/': [
                "abp-cli",
                "slim-and-run",
                "beautify-with-swagger",
                "ef-and-codefirst",
                "repositories-and-crud",
                "return-api",
                "swagger-group-describe-authorize",
                "generate-jwt-with-github",
                "exception-and-logging",
                "use-redis-cachedatas",
                "task-processing-with-hangfire",
                "object-mapping-with-automapper",
                "task-processing-bestpractice-1",
                "task-processing-bestpractice-2",
                "task-processing-bestpractice-3",
                "blog-api-bestpractice-1",
                "blog-api-bestpractice-2",
                "blog-api-bestpractice-3",
                "blog-api-bestpractice-4",
                "blog-api-bestpractice-5",
                "blazor-bestpractice-1",
                "blazor-bestpractice-2",
                "blazor-bestpractice-3",
                "blazor-bestpractice-4",
                "blazor-bestpractice-5",
                "blazor-bestpractice-6",
                "blazor-bestpractice-7",
                "blazor-bestpractice-8",
                "blazor-bestpractice-9",
                "publish-blog"
            ],
            '/python/': [
                {
                    title: '网络请求',
                    collapsable: false,
                    children: [
                        'network-request/http',
                        'network-request/urllib',
                        'network-request/requests'
                    ]
                },
                {
                    title: '数据提取',
                    collapsable: false,
                    children: [
                        'data-extraction/xpath',
                        'data-extraction/lxml',
                        'data-extraction/beautifulsoup',
                        'data-extraction/regex',
                        'data-extraction/python-re'
                    ]
                },
                {
                    title: '数据存储',
                    collapsable: false,
                    children: [
                        'data-storage/json',
                        'data-storage/csv',
                        'data-storage/pymysql',
                        'data-storage/mongodb'
                    ]
                },
                {
                    title: '爬虫进阶',
                    collapsable: false,
                    children: [
                        'spider/multithreading',
                        'spider/selenium',
                        'spider/tesseract',
                        'spider/scrapy',
                        'spider/scrapy-redis'
                    ]
                }
            ],
            '/stack/': [
                {
                    title: '.NET Core',
                    children: [
                        'dotnetcore/mta-package',
                        'dotnetcore/operate-git-auto-publish-to-github',
                        'dotnetcore/epplus-wps-error',
                        'dotnetcore/publish-to-centos'
                    ]
                },
                {
                    title: 'Blazor',
                    children: [
                        'blazor/gomoku-games-based-on-blazor'
                    ]
                },
                {
                    title: 'Docker',
                    children: [
                        {
                            title: '安装 Docker',
                            children: [
                                'docker/install/ubuntu',
                                'docker/install/debian',
                                'docker/install/fedora',
                                'docker/install/centos',
                                'docker/install/raspberry-pi',
                                'docker/install/offline',
                                'docker/install/mac',
                                'docker/install/windows',
                                'docker/install/mirror',
                                'docker/install/experimental'
                            ]
                        },
                        {
                            title: 'Docker 简介',
                            children: [
                                'docker/introduction/what',
                                'docker/introduction/why'
                            ]
                        },
                        {
                            title: 'Docker 基本概念',
                            children: [
                                'docker/basic_concept/image',
                                'docker/basic_concept/container',
                                'docker/basic_concept/repository',
                            ]
                        },
                        {
                            title: 'Docker 仓库',
                            children: [
                                'docker/repository/',
                                'docker/repository/dockerhub',
                                'docker/repository/registry',
                                'docker/repository/registry_auth',
                                'docker/repository/nexus3_registry',
                            ]
                        },
                        {
                            title: '使用 Docker 镜像',
                            children: [
                                'docker/image/pull',
                                'docker/image/list',
                                'docker/image/rm',
                                'docker/image/commit',
                                'docker/image/build',
                                'docker/image/other',
                                'docker/image/internal'
                            ]
                        },
                        {
                            title: 'Dockerfile',
                            children: [
                                'docker/dockerfile/copy',
                                'docker/dockerfile/add',
                                'docker/dockerfile/cmd',
                                'docker/dockerfile/entrypoint',
                                'docker/dockerfile/env',
                                'docker/dockerfile/arg',
                                'docker/dockerfile/volume',
                                'docker/dockerfile/expose',
                                'docker/dockerfile/workdir',
                                'docker/dockerfile/user',
                                'docker/dockerfile/healthcheck',
                                'docker/dockerfile/onbuild',
                                'docker/dockerfile/references',
                                'docker/dockerfile/multistage-builds',
                                'docker/dockerfile/manifest'
                            ]
                        },
                        {
                            title: '操作 Docker 容器',
                            children: [
                                'docker/container/run',
                                'docker/container/daemon',
                                'docker/container/stop',
                                'docker/container/attach_exec',
                                'docker/container/import_export',
                                'docker/container/rm'
                            ]
                        },
                        {
                            title: 'Docker 数据管理',
                            children: [
                                'docker/data_management/volume',
                                'docker/data_management/bind-mounts'
                            ]
                        },
                        {
                            title: 'Docker 网络配置',
                            children: [
                                'docker/network/port_mapping',
                                'docker/network/linking',
                                'docker/network/dns'
                            ]
                        },
                        {
                            title: 'Swarm mode',
                            children: [
                                'docker/swarm_mode/overview',
                                'docker/swarm_mode/create',
                                'docker/swarm_mode/deploy',
                                'docker/swarm_mode/stack',
                                'docker/swarm_mode/secret',
                                'docker/swarm_mode/config',
                                'docker/swarm_mode/rolling_update'
                            ]
                        },
                        {
                            title: 'podman',
                            path: 'docker/podman/'
                        },
                        {
                            title: '常见问题总结',
                            path: 'docker/faq/'
                        },
                        {
                            title: 'Docker 常用镜像',
                            children: [
                                'docker/repo/'
                            ]
                        },
                        {
                            title: 'Docker 命令',
                            children: [
                                'docker/command/docker',
                                'docker/command/dockerd',
                            ]
                        },
                        {
                            title: 'Dockerfile 最佳实践',
                            path: 'docker/best_practices/'
                        },
                        {
                            title: '如何调试 Docker',
                            path: 'docker/debug/'
                        },
                        {
                            title: '资源链接',
                            path: 'docker/resources/'
                        },
                        {
                            title: 'CI/CD',
                            children: [
                                'docker/cicd/',
                                'docker/cicd/github-actions',
                                'docker/cicd/drone',
                                'docker/cicd/drone-install',
                                'docker/cicd/travis'
                            ]
                        }
                    ]
                },
                {
                    title: 'Kubernetes',
                    children: [
                        'kubernetes/'
                    ]
                },
                {
                    title: 'Message Queue',
                    children: [
                        'messagequeue/kafka',
                        'messagequeue/rabbitmq'
                    ]
                },
                {
                    title: 'Grafana',
                    children: [
                        'grafana/'
                    ]
                },
                {
                    title: 'Zabbix',
                    children: [
                        'zabbix/'
                    ]
                },
                {
                    title: 'Storage',
                    children: [
                        {
                            title: 'Elasticsearch',
                            children: [
                                'storage/elasticsearch/'
                            ]
                        },
                        {
                            title: 'Redis',
                            children: [
                                'storage/redis/quick-start-with-redis'
                            ]
                        },
                        {
                            title: 'MongoDB',
                            children: [
                                'storage/mongodb/mongodb-shell'
                            ]
                        },
                        {
                            title: 'SqlServer',
                            children: [
                                'storage/sql/query',
                                'storage/sql/execute-big-sql',
                                'storage/sql/cursor-loop-processing-data',
                                'storage/sql/sql-to-model'
                            ]
                        },
                        {
                            title: 'MySQL',
                            children: [
                                'storage/mysql/mysql-install'
                            ]
                        },
                        {
                            title: 'SQLite',
                            path: 'storage/sqlite/'
                        }
                    ]
                },
                {
                    title: 'Git',
                    children: [
                        'git/git-commit-emojis',
                        'git/git-scripts'
                    ]
                },
                {
                    title: 'Web',
                    children: [
                        'web/http-content-type',
                        'web/html-escape-characters',
                        'web/ascii-table',
                        'web/http-statuscode',
                        'web/js-minimize-code'
                    ]
                },
                {
                    title: 'Other',
                    children: [
                        'other/batch-rename-with-powershell',
                        'other/revoke-wechart-msg-patcher',
                        'other/visual-studio-2019-keys',
                        'other/windows10-run-android-emulator-bsod-solution',
                        'other/remove-windows-shortcuts'
                    ]
                },
            ],
            '/summary/': [
                'COVID-19-battle-summary',
                "2019-summary",
                "2018-summary",
                "2017-summary",
                "2016-summary",
                "internship-month-summary",
                "internship-summary"
            ]
        }
    }
}
