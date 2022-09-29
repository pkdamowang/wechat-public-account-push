/* eslint-disable */
const USER_CONFIG = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: 'wx346ce58f98c4a6fe',

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '8b38e91e08b172e07fff4e7c86889142',

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    /** 星座运势 */
    horoscope: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    
  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
 // LITERARY_PREFERENCE: '',

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: '蛋卷儿',
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oQMvp6fGWNGh-pLPKCoQHv5WTSWk',
      // 你想对他发送的模板消息的模板ID
      useTemplateId: ' xeesNiXzihqW4zrPtsPNuWJyOgeQZZSeNjmls4kMIik',
      // 所在省份
      province: '四川',
      // 所在城市
      city: '成都',
      // 新历生日, 仅用作获取星座运势, 格式必须
      //horoscopeDate: '11-19',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      //horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://wangxinleo.cn',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        //{
          type: '*生日', name: '老婆', year: '2002', date: '10-15',
        //},
        //{
         // type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',
       //},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        //{
         // type: '生日', name: '李四', year: '1996', date: '09-31',
      //  },
       // {
        //  type: '节日', name: '被搭讪纪念日', year: '2021', date: '09-01',
       //}
      //],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
         在一起的日子
        { keyword: 'love_day', date: '2022-05-01' },
         结婚纪念日
        { keyword: 'marry_day', date: '2023-05-01' },
        
      ],
  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    //{ keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
  // 默认的课表配置
  //COURSE_SCHEDULE: null
}

module.exports = USER_CONFIG

