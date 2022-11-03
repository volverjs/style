---
title: Default Style without Classes
description: Use native HTML tags semantic keeping the code simple. The perfect companion for Markdown generated templates.
---

*Preflight* is already included in compliled *CSS*. In a custom build keep preflight import at the end. 

```scss
@import '@volverjs/style/scss/reset';
@import '@volverjs/style/scss/props';
@import '@volverjs/style/scss/components';
@import '@volverjs/style/scss/utilities';
/* keep at the end */
@import '@volverjs/style/scss/preflight';
```

To use *Preflight* just add `preflight` class to the wrapper element.

```html
<div class="preflight">
    ...
</div>
```

WARNING: *Preflight* is not 100% available with Firefox.

<code-editor resource-type="getting-started" resource-folder="examples" resource-name="preflight-form" class="mb-lg">
</code-editor>
<code-editor resource-type="getting-started" resource-folder="examples" resource-name="preflight-typography" class="mb-lg">
</code-editor>
<code-editor resource-type="getting-started" resource-folder="examples" resource-name="preflight-buttons" class="mb-lg">
</code-editor>
<code-editor resource-type="getting-started" resource-folder="examples" resource-name="preflight-table">
</code-editor>