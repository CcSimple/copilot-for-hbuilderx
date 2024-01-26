# GitHub Copilot for HBuilderX use BUS or TAOBAO

Your AI pair programmer

## 关于

GitHub Copilot 使用 OpenAI Codex 从你的编辑器实时建议代码和整个函数。经过数十亿行公共代码的训练，GitHub Copilot 会启用自然语言提示，GitHub Copilot 可以将自然语言提示(包括注释和方法名)转换为数十种语言的编码建议。

本 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 插件基于 [GitHub Copilot](https://github.com/features/copilot) 官方项目 [Copilot.vim](https://github.com/github/copilot.vim) 开发。代码建议参考开源项目 [CopilotForXcode](https://github.com/intitni/CopilotForXcode)、代码聊天参考开源项目 [CopilotChat.nvim](https://github.com/gptlang/CopilotChat.nvim)、插件配置参考 Visual Studio Code 官方插件 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)。

要了解更多 GitHub Copilot 信息，请访问 [https://github.com/features/copilot](https://github.com/features/copilot).

## 关于本仓库

forked from [zhetengbiji/copilot-for-hbuilderx](https://github.com/zhetengbiji/copilot-for-hbuilderx)

基于以上仓库，做出了一些调整: 以支持国内`“公车”`或`"淘宝"`版本。

> 本想着在原仓库提PR，但考虑到`“公车”`或`"淘宝"`版本使用和正版使用出现未知的问题。所以fork后并重新上传新插件。


## 使用方式

1. 从 [HBuilderX 插件市场](https://ext.dcloud.net.cn/plugin?id=16504)下载并导入本插件。
2. 编辑配置模板 bus-hosts.json 到对应目录

> win:    C:\Users\user\AppData\Local\github-copilot\bus-hosts.json
> other:  ~/.config/github-copilot/bus-hosts.json

```json
{
    "github.com": {
        "user": "UserName",
        "oauth_token": "公车或者淘宝买的授权 获取到的token",
        "dev_override": {
            "copilot_token_url": "公车或者淘宝买的授权 API地址/copilot_internal/v2/token"
        }
    }
}
```

3. 编辑环境变量

> win: 系统->系统属性->环境变量
> mac: ~/.bash_profile

```js
{
    CODESPACES: true,
    GITHUB_API_URL: "xxxx", // 公车  或者淘宝授权 激活插件 会生成
    GITHUB_SERVER_URL: "https://github.com",
    GITHUB_TOKEN: "xxxx", // 公车  或者淘宝授权 激活插件 会生成
}
```

4. 点击 HBuilderX 右下角 GitHub Copilot 图标查看状态。正常即可正常使用。有时网络稍慢，多测试几次、或者试试聊天功能。


## 快捷键

- 接受建议： `Tab 键`
- 拒绝建议： `Esc 键`
- 主动触发编码建议：`Ctrl/Command 键` + `Alt 键` + `\ 键`
- 开始代码聊天：
  - `Ctrl/Command 键` + `I 键`
  - 点击右下角 GitHub Copilot 图标 -> `开始代码聊天`
  - 编辑区选中代码右键，选择菜单 `GitHub Copilot` -> `开始代码聊天`



## 支持本项目

可以通过以下任意方式激励来加速本项目的发展：

* 在 [HBuilderX 插件市场](https://ext.dcloud.net.cn/plugin?id=16504) 下载本插件或真心评价。
* 在 [GitHub 开源仓库](https://github.com/zhetengbiji/copilot-for-hbuilderx) 给予 Star 或贡献有效代码。
* 在 [HBuilderX 插件市场](https://ext.dcloud.net.cn/plugin?id=16504) 进行赞助。

## 沟通交流

如果你知道某宝买哪个，可私信或加我沟通交流。

<table>
<tr>
<td><img src="https://github.com/CcSimple/copilot-for-hbuilderx/raw/main/assets/wechat1.jpg" style="height:200px"></img></td>
<td><img src="https://github.com/CcSimple/copilot-for-hbuilderx/raw/main/assets/wechat2.jpg" style="height:200px"></img></td>
</tr>
<tr>
<td style="text-align:center">微信</td>
<td style="text-align:center">公众号: 不简说</td>
</tr>

</table>


## 参考与学习

* [zhetengbiji/copilot-for-hbuilderx](https://github.com/zhetengbiji/copilot-for-hbuilderx)
* [Copilot.vim](https://github.com/github/copilot.vim) 
* 感谢原插件作者[zhetengbiji](https://github.com/zhetengbiji)