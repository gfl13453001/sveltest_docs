---
layout: doc
title: 发送邮件
---



### 发送邮件
> sveltest提供较为丰富的自动化测试邮件报告结果功能

改功能将在后续版本分离至`NextTestRunner` 新的一代unittest执行器,目前已集成至了sveltest无需自行下载

`NextTestRunner`下的nextEmail类中`send()`方法
```python
def send(self,to:Union[str,Dict[str,str],List]=None,
         cc:Union[str,Dict[str,str],List]=None,
         bcc:Union[str,Dict[str,str],List]=None,
         subject:Union[str,Dict[str,str]]=None,
         contents:Union[List,str]=None,
         preview_only:Optional[bool]=None,
         attachments:Optional[List]=None,
         prettify_html:Optional[bool]=True,
         headers:Optional[Dict]=None,
         ) -> NoReturn :

```

::: tip 提示

sveltest 中要想使用自动邮件非常方便仅需配置settings.py文件即可,但必须在非DEBUG模式下才有效

 :::

 在你的项目`settings.py`文件中配置如下内容；

 ```python

# 自动邮箱状态
AUTO_SEND_EMAIL = True

# 邮件配置
EMAIL_CONFIG = {
    "HOST":'smtp.163.com',
    "USERNAME":"gfl13453001@163.com",
    "LISTS":["localhost@host.com"],
    "CC_LIST":[],
    "PWD":"",
    "TEMPLATE":"",
    "BACKEND":"",
    # 发送邮件成功后接收到的标题前缀
    "EMAIL_SUBJECT_PREFIX":'[sveltest] ',
    "TITLE":'自动化测试报告',
    "BCC_LISTS":[],
}

 ```

#### 配置说明：
**AUTO_SEND_EMAIL**：在非DEBUG模式下你可以关闭邮件发送功能，那么你将需要配置为False，否则为True，默认为True。

**EMAIL_CONFIG**：邮件相关配置

   - **HOST**：发送邮箱服务主机如：smtp.163.com
    
   - **USERNAME**：发送人的邮件用户名
    
   - **LISTS**：收件人列表，可支持多个收件人
    
   - **CC_LIST**：抄送人列表，可支持多个抄送人
    
   - **PWD**：发送人的授权码。如何获取请[查看这里](https://xinzhi.wenda.so.com/a/1644390991203805)
   
   - **TEMPLATE**：发送邮件时需要以什么模板作为邮件正文，该选项后续将提供模板配置。
   
   - **BACKEND**：使用什么模板类来作为邮件发送的配置暂无用处后续提供。
   
   - **EMAIL_SUBJECT_PREFIX**：发送邮件后如果使用sveltest内置的邮件功能则会在邮件标题前加上该前缀。
   
   - **TITLE**：邮件的标题
   
   - **BCC_LISTS**：密送，与抄送不同的是收件人看不到其他人的邮箱地址
   
​配置了如上内容后在执行测试时则会根据配置的内容进行发送邮件，如果不配置则不会进行收到自动化测试报告邮件。
