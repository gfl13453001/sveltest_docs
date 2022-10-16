import{_ as s,o as a,c as n,a as l}from"./app.f84a59c3.js";const F=JSON.parse('{"title":"\u57FA\u672C\u89C4\u8303","description":"","frontmatter":{"layout":"dos","title":"\u57FA\u672C\u89C4\u8303"},"headers":[{"level":2,"title":"\u521B\u5EFA\u6D4B\u8BD5","slug":"\u521B\u5EFA\u6D4B\u8BD5","link":"#\u521B\u5EFA\u6D4B\u8BD5","children":[{"level":3,"title":"\u6267\u884C\u6D4B\u8BD5","slug":"\u6267\u884C\u6D4B\u8BD5","link":"#\u6267\u884C\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"\u57FA\u672C\u89C4\u8303","slug":"\u57FA\u672C\u89C4\u8303","link":"#\u57FA\u672C\u89C4\u8303","children":[]}],"relativePath":"basics/base_.md"}'),e={name:"basics/base_.md"},p=l(`<p><code>sveltest </code>\u7684\u4E00\u4E9B\u6838\u5FC3\u7C7B\u90FD\u7EE7\u627F<code>unittest</code>\u6D4B\u8BD5\u6846\u67B6\u4E2D\u76F8\u5173\u7684\u7C7B\uFF0C\u56E0\u6B64<code>sveltest</code>\u7684\u7F16\u5199\u89C4\u8303\u4E0E<a href="https://docs.python.org/3/library/unittest.html" target="_blank" rel="noreferrer">unittest</a>\u53EF\u4EE5\u65E0\u7F1D\u8854\u63A5\u3002</p><h2 id="\u521B\u5EFA\u6D4B\u8BD5" tabindex="-1">\u521B\u5EFA\u6D4B\u8BD5 <a class="header-anchor" href="#\u521B\u5EFA\u6D4B\u8BD5" aria-hidden="true">#</a></h2><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> sveltest </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> TestCase</span></span>
<span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> sveltest </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SveltTestCase</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">TestCase</span><span style="color:#89DDFF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setUp</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_case</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span><span style="color:#676E95;">\u7B2C\u4E00\u6D4B\u8BD5\u7528\u4F8Bdemo</span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assertEqual</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tearDown</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">debug</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6267\u884C\u6D4B\u8BD5" tabindex="-1">\u6267\u884C\u6D4B\u8BD5 <a class="header-anchor" href="#\u6267\u884C\u6D4B\u8BD5" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u7531\u4E8E<code>sveltest</code> \u5BF9<code>unittest</code>\u76F8\u5173\u8FDB\u884C\u90E8\u5206\u7684\u81EA\u5B9A\u4E49\u6269\u5C55\uFF0C\u5982\u679C\u5728\u6267\u884C<code>sveltest</code>\u7F16\u5199\u7684\u7528\u4F8B\u65F6\u8981\u6CE8\u610F\u4E0B\u9762\u51E0\u70B9\u60C5\u51B5\uFF0C\u53EF\u80FD\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF01\uFF01\uFF01</p><p><a href="/docs/unit/execute_test.html">\u70B9\u51FB\u8FD9\u91CC</a></p></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">================================ \u7528\u4F8B\u5F00\u59CB\u6267\u884C =================================</span></span>
<span class="line"><span style="color:#A6ACCD;">test_case (__main__.SveltTestCase)   PASS</span></span>
<span class="line"><span style="color:#A6ACCD;">******************************** \u6D4B\u8BD5\u7ED3\u679C\u6C47\u603B *********************************</span></span>
<span class="line"><span style="color:#A6ACCD;">     \u6267\u884C\u7ED3\u679C     </span></span>
<span class="line"><span style="color:#A6ACCD;">\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 status \u2502 count \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 PASS   \u2502 1     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 FAIL   \u2502 0     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 SKIP   \u2502 0     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 ERROR  \u2502 0     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502 COUNT  \u2502 1     \u2502</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</span></span>
<span class="line"><span style="color:#A6ACCD;">================= \u603B\u5171\u8FD0\u884C\u4E86 1 \u6761\u6D4B\u8BD5\u7528\u4F8B  \u603B\u5171\u8FD0\u884C\u4E86 0.000s ==================</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u57FA\u672C\u89C4\u8303" tabindex="-1">\u57FA\u672C\u89C4\u8303 <a class="header-anchor" href="#\u57FA\u672C\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u4F1Aunittest\u76F8\u5173\u57FA\u7840\uFF0C\u5176\u5B9Esveltest\u4F60\u4E5F\u4F1A\u5F88\u5FEB\u7406\u89E3\u5E76\u638C\u63E1\u5176\u4E2D\u7684\u7F16\u5199\u89C4\u8303</p><ol><li>\u521B\u5EFA\u6D4B\u8BD5\u7C7B<code>SveltTestCase</code>\u5E76\u7EE7\u627F<code>sveltest.TestCase</code>\u7C7B\u3002</li><li>\u521B\u5EFA\u6D4B\u8BD5\u65B9\u6CD5<code>test_case</code>, \u5FC5\u987B\u4EE5<code>test</code>\u5F00\u5934\u3002</li><li><code>sveltest.mian()</code>\u662F\u6846\u67B6\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\u7684\u4E3B\u7A0B\u5E8F\u65B9\u6CD5\uFF0C\u5177\u4F53\u4F7F\u7528\u5C06\u5728\u4E0B\u9762\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u3002</li></ol>`,9),o=[p];function t(c,r,i,D,A,C){return a(),n("div",null,o)}const d=s(e,[["render",t]]);export{F as __pageData,d as default};
