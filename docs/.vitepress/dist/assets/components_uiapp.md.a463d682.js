import{_ as s,o as a,c as n,a as p}from"./app.f84a59c3.js";const C=JSON.parse('{"title":"APP \u81EA\u52A8\u5316\u6D4B\u8BD5\u7EC4\u4EF6","description":"","frontmatter":{"layout":"doc","title":"APP \u81EA\u52A8\u5316\u6D4B\u8BD5\u7EC4\u4EF6"},"headers":[{"level":2,"title":"uiapp","slug":"uiapp","link":"#uiapp","children":[]},{"level":2,"title":"\u4EE5\u4E0B\u662F\u90E8\u5206API","slug":"\u4EE5\u4E0B\u662F\u90E8\u5206api","link":"#\u4EE5\u4E0B\u662F\u90E8\u5206api","children":[]},{"level":2,"title":"\u8FDE\u63A5\u8BBE\u5907","slug":"\u8FDE\u63A5\u8BBE\u5907","link":"#\u8FDE\u63A5\u8BBE\u5907","children":[]},{"level":2,"title":"\u5E94\u7528\u7A0B\u5E8F\u5305\u7BA1\u7406","slug":"\u5E94\u7528\u7A0B\u5E8F\u5305\u7BA1\u7406","link":"#\u5E94\u7528\u7A0B\u5E8F\u5305\u7BA1\u7406","children":[{"level":3,"title":"\u57FA\u7840","slug":"\u57FA\u7840","link":"#\u57FA\u7840","children":[]},{"level":3,"title":"\u542F\u52A8\u4E0E\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F","slug":"\u542F\u52A8\u4E0E\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F","link":"#\u542F\u52A8\u4E0E\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F","children":[]}]},{"level":2,"title":"\u5143\u7D20\u5B9A\u4F4D","slug":"\u5143\u7D20\u5B9A\u4F4D","link":"#\u5143\u7D20\u5B9A\u4F4D","children":[]},{"level":2,"title":"\u5143\u7D20\u64CD\u4F5C","slug":"\u5143\u7D20\u64CD\u4F5C","link":"#\u5143\u7D20\u64CD\u4F5C","children":[]},{"level":2,"title":"\u5E94\u7528\u5B89\u88C5\u4E0E\u5378\u8F7D","slug":"\u5E94\u7528\u5B89\u88C5\u4E0E\u5378\u8F7D","link":"#\u5E94\u7528\u5B89\u88C5\u4E0E\u5378\u8F7D","children":[{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":3,"title":"\u5378\u8F7D","slug":"\u5378\u8F7D","link":"#\u5378\u8F7D","children":[]}]},{"level":2,"title":"\u8BBE\u5907\u76F8\u5173","slug":"\u8BBE\u5907\u76F8\u5173","link":"#\u8BBE\u5907\u76F8\u5173","children":[]},{"level":2,"title":"\u7CFB\u7EDF\u8D44\u6E90","slug":"\u7CFB\u7EDF\u8D44\u6E90","link":"#\u7CFB\u7EDF\u8D44\u6E90","children":[]},{"level":2,"title":"\u7F51\u7EDC","slug":"\u7F51\u7EDC","link":"#\u7F51\u7EDC","children":[]},{"level":2,"title":"\u6309\u952E\u64CD\u4F5C","slug":"\u6309\u952E\u64CD\u4F5C","link":"#\u6309\u952E\u64CD\u4F5C","children":[]},{"level":2,"title":"\u8F93\u5165\u6CD5\u64CD\u4F5C","slug":"\u8F93\u5165\u6CD5\u64CD\u4F5C","link":"#\u8F93\u5165\u6CD5\u64CD\u4F5C","children":[]},{"level":2,"title":"\u547C\u5524\u7CFB\u7EDF\u5E94\u7528","slug":"\u547C\u5524\u7CFB\u7EDF\u5E94\u7528","link":"#\u547C\u5524\u7CFB\u7EDF\u5E94\u7528","children":[]},{"level":2,"title":"\u5176\u4ED6\u65B9\u6CD5","slug":"\u5176\u4ED6\u65B9\u6CD5","link":"#\u5176\u4ED6\u65B9\u6CD5","children":[]}],"relativePath":"components/uiapp.md"}'),l={name:"components/uiapp.md"},o=p(`<h2 id="uiapp" tabindex="-1">uiapp <a class="header-anchor" href="#uiapp" aria-hidden="true">#</a></h2><p>uiapp \u662F\u6211\u7684\u4E2A\u4EBA\u53E6\u4E00\u4E2A\u9879\u76EE\u57FA\u4E8EAndroid ADB\u5E95\u5C42\u5C01\u88C5\u5B9E\u73B0\u7684\uFF0C\u5168\u90E8\u81EA\u5DF1\u5B9E\u73B0\u65E0\u4EFB\u4F55appium-client\u7B49\u4F9D\u8D56 \u540E\u7EED\u5C06\u63D0\u4F9B\u7ED9sveltest\u4F5C\u4E3A\u4E00\u4E2A\u7EC4\u4EF6\u6765\u8F85\u52A9\u6211\u4EEC\u505AAndroid APP UI\u81EA\u52A8\u5316\u6D4B\u8BD5</p><p>\u76EE\u524D\u57FA\u672C\u57FA\u7840\u529F\u80FD\u5DF2\u5B8C\u6210\u5B9E\u73B0\uFF0C\u6B63\u5728\u52A0\u6025\u6D4B\u8BD5\u4E2D\u3002</p><h2 id="\u4EE5\u4E0B\u662F\u90E8\u5206api" tabindex="-1">\u4EE5\u4E0B\u662F\u90E8\u5206API <a class="header-anchor" href="#\u4EE5\u4E0B\u662F\u90E8\u5206api" aria-hidden="true">#</a></h2><h2 id="\u8FDE\u63A5\u8BBE\u5907" tabindex="-1">\u8FDE\u63A5\u8BBE\u5907 <a class="header-anchor" href="#\u8FDE\u63A5\u8BBE\u5907" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> uiapp </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> start</span></span>
<span class="line"><span style="color:#676E95;"># \u53EA\u6709\u4E00\u53F0\u8BBE\u5907\u65F6\u65E0\u9700\u8F93\u5165\u8BBE\u5907\u5E8F\u5217\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u591A\u8BBE\u5907\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">192.168.19.180:5555</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">port</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u4FEE\u6539\u8BBE\u5907\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">disconnect</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u65AD\u5F00\u8BBE\u5907\u8FDE\u63A5</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5E94\u7528\u7A0B\u5E8F\u5305\u7BA1\u7406" tabindex="-1">\u5E94\u7528\u7A0B\u5E8F\u5305\u7BA1\u7406 <a class="header-anchor" href="#\u5E94\u7528\u7A0B\u5E8F\u5305\u7BA1\u7406" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840" tabindex="-1">\u57FA\u7840 <a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u6E05\u7406\u5E94\u7528\u7A0B\u5E8F\u7684\u7F13\u5B58\u53CA\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear_data</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u5F53\u524D\u542F\u52A8\u7A0B\u5E8F\u7684\u4FE1\u606F()</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">current_package_info</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u5F53\u524D\u542F\u52A8\u7684\u5E94\u7528\u7684activity</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">activity</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u5F53\u524D\u542F\u52A8\u7684\u5E94\u7528\u7684package name</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_package</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u5217\u51FA\u8BBE\u5907\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u7684\u6240\u6709\u5E94\u7528\u5305\uFF08\u5305\u62EC\u7CFB\u7EDF\u5E94\u7528\u548C\u7528\u6237\u5E94\u7528\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">package_list</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u6240\u6709\u5B89\u88C5\u7A0B\u5E8F\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">package_path_list</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u5224\u65AD\u6307\u5B9A\u7684\u7A0B\u5E8F\u5305\u662F\u5426\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">is_package</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u5F53\u524D/\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_app_path</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">package_name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u542F\u52A8\u4E0E\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F" tabindex="-1">\u542F\u52A8\u4E0E\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F <a class="header-anchor" href="#\u542F\u52A8\u4E0E\u9000\u51FA\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u542F\u52A8app</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">com.jideos.module_main.pad.ui.activity.NoteListActivity</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u9000\u51FA\u5E94\u7528\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">quit</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5143\u7D20\u5B9A\u4F4D" tabindex="-1">\u5143\u7D20\u5B9A\u4F4D <a class="header-anchor" href="#\u5143\u7D20\u5B9A\u4F4D" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u4F7F\u7528\u6587\u672C\u5143\u7D20\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_text</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">QQ\u97F3\u4E50HD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528resourceId\u5143\u7D20\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes:id/add_note</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u91C7\u7528\u5750\u6807\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_coord</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">487</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1165</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528className\u5143\u7D20\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_class</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">android.widget.RadioButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528xpath\u8FDB\u884C\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">element_by_xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">//*[@resource-id=&quot;com.example.jideailicense:id/btn_request_license&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528\u6587\u672C\u5143\u7D20\u5B9A\u4F4D\u4E00\u7EC4\u63A7\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">elements_by_text</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">QQ\u97F3\u4E50HD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528className\u5143\u7D20\u5B9A\u4F4D\u4E00\u7EC4\u63A7\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">elements_by_class</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">android.widget.RadioButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5143\u7D20\u64CD\u4F5C" tabindex="-1">\u5143\u7D20\u64CD\u4F5C <a class="header-anchor" href="#\u5143\u7D20\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">#\u70B9\u51FB\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#82AAFF;">value</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">#\u8F93\u5165\u6587\u672C/\u952E\u76D8\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#82AAFF;">slide</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">#\u6ED1\u52A8\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#82AAFF;">description</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u83B7\u53D6\u63CF\u8FF0\u6587\u672C</span></span>
<span class="line"><span style="color:#82AAFF;">text</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u83B7\u53D6\u6587\u672C\u5185\u5BB9</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5E94\u7528\u5B89\u88C5\u4E0E\u5378\u8F7D" tabindex="-1">\u5E94\u7528\u5B89\u88C5\u4E0E\u5378\u8F7D <a class="header-anchor" href="#\u5E94\u7528\u5B89\u88C5\u4E0E\u5378\u8F7D" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;">#\u9ED8\u8BA4\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile\\docs</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">ote_apk</span><span style="color:#A6ACCD;">\\a</span><span style="color:#C3E88D;">pp-release.apk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">default</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u5F3A\u5236\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile\\docs</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">ote_apk</span><span style="color:#A6ACCD;">\\a</span><span style="color:#C3E88D;">pp-release.apk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">r</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u5B89\u88C5\u6D4B\u8BD5\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile\\docs</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">ote_apk</span><span style="color:#A6ACCD;">\\a</span><span style="color:#C3E88D;">pp-release.apk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">t</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u5141\u8BB8\u964D\u7EA7\u8986\u76D6\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile\\docs</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">ote_apk</span><span style="color:#A6ACCD;">\\a</span><span style="color:#C3E88D;">pp-release.apk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u90E8\u5206\u5E94\u7528\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile\\docs</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">ote_apk</span><span style="color:#A6ACCD;">\\a</span><span style="color:#C3E88D;">pp-release.apk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">p</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u4E3A\u5E94\u7528\u7A0B\u5E8F\u6388\u4E88\u6240\u6709\u8FD0\u884C\u65F6\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">install</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">E:</span><span style="color:#A6ACCD;">\\f</span><span style="color:#C3E88D;">ile\\docs</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">ote_apk</span><span style="color:#A6ACCD;">\\a</span><span style="color:#C3E88D;">pp-release.apk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">g</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5378\u8F7D" tabindex="-1">\u5378\u8F7D <a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a></h3><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u8FDB\u884C\u9ED8\u8BA4\u5378\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">uninstall</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">default</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">package_name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;"># \u5378\u8F7D\u7A0B\u5E8F\u4F46\u4E0D\u6E05\u7406\u5E94\u7528\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">uninstall</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">k</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.jideos.jnotes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8BBE\u5907\u76F8\u5173" tabindex="-1">\u8BBE\u5907\u76F8\u5173 <a class="header-anchor" href="#\u8BBE\u5907\u76F8\u5173" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">port</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u4FEE\u6539\u8BBE\u5907adb\u670D\u52A1\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">version</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u83B7\u53D6\u8BBE\u5907Android\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;"># \u8BBE\u5907\u5C3A\u5BF8\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set_size</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1200</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;"># \u8BBE\u7F6E\u5206\u8FA8\u7387</span></span>
<span class="line"><span style="color:#676E95;"># \u622A\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">screen</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">F:</span><span style="color:#A6ACCD;">\\i</span><span style="color:#C3E88D;">nterfaceTestng\\data</span><span style="color:#A6ACCD;">\\222</span><span style="color:#C3E88D;">.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">for_wait</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u8FDB\u884C\u91CD\u65B0\u91CD\u542Fadb\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start_server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u5F00\u542F\u672C\u5730adb\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">kill_server</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u5173\u95ED\u672C\u5730adb\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reboot</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u91CD\u542F\u8BBE\u5907</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7CFB\u7EDF\u8D44\u6E90" tabindex="-1">\u7CFB\u7EDF\u8D44\u6E90 <a class="header-anchor" href="#\u7CFB\u7EDF\u8D44\u6E90" aria-hidden="true">#</a></h2><h2 id="\u7F51\u7EDC" tabindex="-1">\u7F51\u7EDC <a class="header-anchor" href="#\u7F51\u7EDC" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">netstat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">view</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u67E5\u770B\u7F51\u7EDC\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">netstat</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u4FDD\u5B58\u7F51\u7EDC\u4FE1\u606F\u5230\u6307\u5B9A\u6587\u4EF6</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6309\u952E\u64CD\u4F5C" tabindex="-1">\u6309\u952E\u64CD\u4F5C <a class="header-anchor" href="#\u6309\u952E\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u6309\u4E0Bhome\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">home</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u8FD4\u56DE\u4E0A\u4E00\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">back</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">search</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u6253\u5F00\u641C\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">powerUp</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u6309\u4E0B\u7535\u6E90</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8F93\u5165\u6CD5\u64CD\u4F5C" tabindex="-1">\u8F93\u5165\u6CD5\u64CD\u4F5C <a class="header-anchor" href="#\u8F93\u5165\u6CD5\u64CD\u4F5C" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u7CFB\u7EDF\u6240\u6709\u8F93\u5165\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">inputmethod</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u5F53\u524D\u7CFB\u7EDF\u9ED8\u8BA4\u8F93\u5165\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">inputmethod</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_setting_default</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u6210\u7CFB\u7EDF\u7684\u9ED8\u8BA4\u8F93\u5165\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">inputmethod</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set_sys_default</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u6307\u5B9A\u7684\u9ED8\u8BA4\u8F93\u5165\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">inputmethod</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">com.baidu.input_huawei/.ImeService</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u547C\u5524\u7CFB\u7EDF\u5E94\u7528" tabindex="-1">\u547C\u5524\u7CFB\u7EDF\u5E94\u7528 <a class="header-anchor" href="#\u547C\u5524\u7CFB\u7EDF\u5E94\u7528" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open_dial</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u6253\u5F00\u62E8\u53F7\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hang_up</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;">#\u6302\u65AD\u7535\u8BDD</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open_browser</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;">#\u6253\u5F00\u6D4F\u89C8\u5668</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5176\u4ED6\u65B9\u6CD5" tabindex="-1">\u5176\u4ED6\u65B9\u6CD5 <a class="header-anchor" href="#\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a></h2>`,32),e=[o];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
