# <span style="color:#4CAF50;">tooltipwme</span>

A <strong>simple, easy-to-use tooltip library</strong> for your projects. Works with plain <em>HTML, CSS, and JS</em>.

---

## <span style="color:#2196F3;">Installation</span>

<pre style="background:#1e1e1e;color:#fff;padding:10px;border-radius:5px;">
npm install tooltipwme
</pre>

---

## <span style="color:#FF9800;">Usage</span>

### 1️⃣ Import JS & CSS

<pre style="background:#1e1e1e;color:#fff;padding:10px;border-radius:5px;">
import { tooltipWME } from "tooltipwme";
import "tooltipwme/tooltipwme.css";
</pre>

### 2️⃣ Add HTML elements

<pre style="background:#1e1e1e;color:#fff;padding:10px;border-radius:5px;">
&lt;button class="tooltip-toogler" data-title="Hello tooltip!" data-dir="onTop"&gt;
  Hover me
&lt;/button&gt;

&lt;button class="tooltip-toogler" data-title="Another tooltip!" data-dir="onBottom"&gt;
  Hover me too
&lt;/button&gt;
</pre>

### 3️⃣ Initialize tooltips

<pre style="background:#1e1e1e;color:#fff;padding:10px;border-radius:5px;">
tooltipWME();            // Applies tooltips to all .tooltip-toogler
tooltipWME(".my-tooltip"); // Or a custom selector
</pre>

---

## <span style="color:#E91E63;">Tooltip Directions</span>

| Direction | Class Name |
|-----------|------------|
| Top       | <code>onTop</code> |
| Bottom    | <code>onBottom</code> |
| Left      | <code>onLeft</code> |
| Right     | <code>onRight</code> |

---

## <span style="color:#9C27B0;">Example HTML</span>

<pre style="background:#1e1e1e;color:#fff;padding:10px;border-radius:5px;">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;tooltipwme Demo&lt;/title&gt;
  &lt;link rel="stylesheet" href="node_modules/tooltipwme/tooltipwme.css"&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;button class="tooltip-toogler" data-title="Hello tooltip!" data-dir="onTop"&gt;
    Hover me
  &lt;/button&gt;

  &lt;script type="module"&gt;
    import { tooltipWME } from "./node_modules/tooltipwme/index.js";
    tooltipWME();
  &lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

---

## <span style="color:#4CAF50;">License</span>

MIT License
