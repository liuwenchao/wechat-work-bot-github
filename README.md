# Wechat work bot to post commit news from github. 企业微信机器人，推送Github提交动态

### 下载后使用步骤：

1. [企业微信中新建机器人](https://work.weixin.qq.com/api/doc/90000/90136/91770)，获得机器人连接，类似：`https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=11111111-1111-eeee-eeee-282839384738`
2. [腾讯云上新建云函数](https://console.cloud.tencent.com/scf/list-create?rid=4&ns=default&count=12), 运行环境选择nodejs8.9, 创建方式选择空白函数，点击下一步。
3. 在函数配置页，提交方法中选择本地上传文件夹，选择下载好的该仓库代码；高级配置中创建环境变量WEBHOOK_KEY, 值为第一步中获得的key。其他选项不变。
4. 等待创建完成后，在函数代码页面中的测试模板中新建一个模板，把test.json粘贴进去。点击测试，确保测试通过。如遇到问题无法解决，截上函数配置页和函数代码页面提issue。
5. 通过后把触发方式中的访问路径填入到github仓库的webhook中。
6. 提交代码测试是否企业微信群中有收到消息。
