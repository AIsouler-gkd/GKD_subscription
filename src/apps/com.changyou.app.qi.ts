import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.changyou.app.qi',
  name: '777影视',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '快手广告',
          quickFind: true,
          activityIds: 'com.changyou.app.qi.MainActivity',
          matches: '[vid="ksad_auto_close_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/687f8201-8b15-491e-9c51-f3af0dc00260',
          snapshotUrls: 'https://i.gkd.li/import/14228685',
        },
        {
          key: 1,
          name: '腾讯广告',
          activityIds: 'com.changyou.app.qi.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout[index=2][childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/14296873',
        },
      ],
    },
  ],
});
