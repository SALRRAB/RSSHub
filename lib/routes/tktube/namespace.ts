import { Namespace } from '@/types';

export const namespace: Namespace = {
    name: 'TKTube',
    url: 'tktube.com',
    categories: ['multimedia'],
    description: `
        TKTube 视频增强订阅，支持自动匹配 DMM 预览视频。
        
        ### 路由说明
        - 抓取标签页下的最新视频。
        - 自动探测并嵌入 DMM 高清预览（hhb/mhb）。
        - 包含原站播放器嵌入。
    `,
    zh: {
        name: 'TKTube',
    },
};
