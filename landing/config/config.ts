import { IConfig } from 'umi-types';

export default {
    plugins: [
        ['umi-plugin-react', {
            dynamicImport: {
                webpackChunkName: true,
                level: 3,
            },
            dva: true,
            antd: true,
            routes: {
                // 规定只有index文件会被识别成路由
                exclude: [
                    /(?<![\s\S]*index\$?\.(js|jsx|ts|tsx)?)$/,
                    /model\.(j|t)sx?$/,
                    /\.test\.(j|t)sx?$/,
                    /service\.(j|t)sx?$/,
                    /models\//,
                    /components\//,
                    /services\//
                ]
            },
        }]
    ],
} as IConfig;
