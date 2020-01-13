# Wechat work bot to post commit news from github. 企业微信机器人，推送Github提交动态

### 下载后使用步骤：

1. 企业微信中新建机器人，获得机器人连接，类似：`https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=11111111-1111-eeee-eeee-282839384738`
2. 修改index.js, 设置webhook_key的值为上面获得的key的值
3. 上传云函数代码到云函数托管商处
4. 使用test.json进行测试
5. 通过后把云函数对外的地址填入到github仓库的webhook中
6. 提交代码测试是否企业微信群中有收到消息。

### TODO

1. 抽取key为环境变量
