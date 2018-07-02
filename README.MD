# Overview

The ERC dEX Trade Widget provides an easy way to offer users access to token liquidity from any website. With simple setup that even non-technical users can take advantage of, users will be able to securely purchase tokens on any website using peer-to-peer technology.

[Live Demo](https://ercdex.github.io/widget/)

[Demo Source Code](https://github.com/ERCdEX/widget/blob/master/docs/index.html)

# Setup

### Insert script in website and initialize Widget

```
<script src="https://raw.githubusercontent.com/ERCdEX/widget/master/docs/widget.js"></script>
<script>
  ErcDexTradeWidget.initialize({
    // ...options
  });
</script>
```

### Launch widget from any click handler
```
ErcDexTradeWidget.launch();
```

### Initialization Options

```
interface IErcDexTradeWidgetParams {
  // currently only sidebar mode supported
  // default: 'sidebar'
  mode?: 'sidebar';
  // 'dark' is 'night' theme, 'light' is 'day' theme
  // default: 'dark'
  theme?: 'dark' | 'light'
  // optional: array of token symbols supported as base tokens
  baseTokens?: string[];
  // optional: array of token symbols supported as quote tokens
  quoteTokens?: string[];
}
```
