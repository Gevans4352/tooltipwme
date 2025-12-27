# tooltipwme

A simple, easy-to-use tooltip library for your projects. Works with plain HTML, CSS, and JS.  

## Installation

```bash
npm install tooltipwme

import { tooltipWME } from "tooltipwme";
import "tooltipwme/tooltipwme.css";

<button class="tooltip-toogler" data-title="Hello tooltip!" data-dir="onTop">
  Hover me
</button>

<button class="tooltip-toogler" data-title="Another tooltip!" data-dir="onBottom">
  Hover me too
</button>

tooltipWME(); // applies tooltips to all elements with class .tooltip-toogler

tooltipWME(".my-tooltip"); 

CSS

The package comes with a default tooltip style in tooltipwme.css. You can customize it as you like.