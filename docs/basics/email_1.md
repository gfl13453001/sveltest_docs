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
可支持单独使用，但目前版本不建议这样做。

#### 参数说明
**to**:邮件接收人
用来指定发送的对象即收件人，传递字符串格式yag.send(to='objname@mail.com')
当指定多个发送对象时，可以用列表或元组的形式，如yag.send(to=['3577****11@qq.com','wei*******dj@163.com'])
如果要对电子邮件地址提供别名，可以用字典形式：

recipients={'mike@xxx.com':'MIKE','mary@xxx.com':'MARY'}
yag.send(to=recipients)

**cc**:邮件抄送人

**bcc**:密送，与抄送不同的是收件人看不到其他人的邮箱地址

**subject**:密送，与抄送不同的是收件人看不到其他人的邮箱地址

**contents**:密送，与抄送不同的是收件人看不到其他人的邮箱地址

**preview_only**:密送，与抄送不同的是收件人看不到其他人的邮箱地址

**attachments**:密送，与抄送不同的是收件人看不到其他人的邮箱地址


