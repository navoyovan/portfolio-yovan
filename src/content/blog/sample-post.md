---
title: "Hello World;"
publishDate: 1969-02-31
description: "A deliberately hostile showcase post: every heading depth, every callout, ten-plus languages, wide tables, overflow bait, unicode edge cases, footnotes, nested lists, and slug collisions, all in one page."
tags: ["Architecture", "AI Collaboration", "Astro 5", "TypeScript", "Performance", "Systems", "Stress Test", "Typography", "Edge Cases"]
project: "editorial-engine"
draft: false
noindex: true
authors:
  - name: "Yovan Gunardio Darmawan"
    role: "Lead Software Engineer & Systems Architect"
    avatar: "/images/yg.png"
  - name: "Anthropic Claude"
    role: "Text generation and audit"
    avatar: "/images/cld.png"
  - name: "Google Gemini"
    role: "Code refactoring and audit"
    avatar: "/images/gem.png"
---

## Colophon

This document serves as both an editorial stress test and a technical benchmark for the portfolio's markdown rendering engine. It was co-authored through human systems architecture and multi-agent AI collaboration.

| Contributor | Harness & Model | Role & Scope |
| :--- | :--- | :--- |
| **Yovan Gunardio Darmawan** | Homo Sapiens Sapiens Systems Architect | Systems architecture, typography rules, layout engine, curation, verification |
| **Anthropic Claude** | Sonnet 5.5 | Initial stress-test prose, unicode edge cases, multi-language benchmarks |
| **Google Gemini** | Gemini 3.8 Flash *(Antigravity)* | Components refactoring, UI primitives |

### Editorial Engine Specs

- **Framework**: Astro 5 (Content Layer API) + Tailwind CSS v4
- **Compiler**: Markdown is compiled through Astro's native pipeline with Shiki syntax highlighting, producing pure static HTML with zero client-side JavaScript runtime overhead for prose content.
- **Typography**: Satoshi (`font-sans`) across all heading depths (H1–H6) and editorial prose; JetBrains Mono (`font-mono`) for code blocks, inline snippets, and developer telemetry.
- **Table of Contents (ToC)**: Dynamic scroll-spy outline indexing H2 through H4 with progressive depth muting, declarative `data-active` tracking, and tactile scrollbar notch telemetry.

---

This post exists to break things. Every section targets a specific failure mode in the editorial engine: overflow, wrapping, slug generation, scroll spy, code highlighting, table density, callout nesting, and unicode handling. If the page survives this, it survives anything I will ever write.

Here is a lead paragraph with **bold**, *italic*, ***both***, ~~strikethrough~~, `inline code`, a [regular link](https://example.com), an [autolink-style URL](https://example.com/a/very/long/path/that/keeps/going/and/going/to/test/how/links/wrap/inside/a/narrow/mobile/column), and a footnote reference.[^1] It also has an abbreviation like <abbr title="Table of Contents">ToC</abbr>, a <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> shortcut, H<sub>2</sub>O, and E = mc<sup>2</sup>.

---

## 1. Heading Depth Gauntlet

# H1: Summit of the Hierarchy

## H2: Major Division

### H3: The First Descent

#### H4: Going Deeper

##### H5: Rarely Used, Frequently Broken

###### H6: The Bottom of the Barrel

Back to body text. The ToC indexes H2 through H4 with progressive depth muting and scroll-spy tracking, while H5 and H6 provide styled deep-hierarchy sectioning without cluttering navigation.

### H3: A Heading That Is Intentionally Long So It Wraps Across Multiple Lines On Narrow Mobile Viewports And Tests The Sidebar Truncation Logic

Short paragraph under a very long heading.

### H3: Heading with `inline code`, **bold**, and *italic*

### H3: Special Characters & Symbols: "Quotes", 'Apostrophes', <Angle Brackets>, 100% (Parens) / Slashes?

### H3: Emoji in Headings 🚀🔥✨

### H3: Duplicate Slug Test

First one.

### H3: Duplicate Slug Test

Second one. The slugger must produce `duplicate-slug-test-1` or equivalent, not a collision that breaks anchor navigation.

### H3: Duplicate Slug Test

Third one.

### H3: 日本語の見出し (Japanese Heading)

### H3: عنوان باللغة العربية (Arabic Heading)

---

## 2. Callout Matrix

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

### Callouts With Rich Content

> [!NOTE]
> A callout containing **bold**, *italic*, `inline code`, and a [link](https://example.com).
>
> A second paragraph inside the same callout.
>
> - A list inside a callout
> - With multiple items
>   - And a nested item
>
> ```ts
> const insideCallout: string = "code blocks inside callouts must not break layout";
> ```

> [!WARNING]
> A very long unbroken string inside a callout: `SUPERCALIFRAGILISTICEXPIALIDOCIOUS_SUPERCALIFRAGILISTICEXPIALIDOCIOUS_SUPERCALIFRAGILISTICEXPIALIDOCIOUS_SUPERCALIFRAGILISTICEXPIALIDOCIOUS`

### Plain Blockquotes

> A regular blockquote with no alert type. It should look distinct from the callouts above.

> Nested blockquotes:
>
> > Second level.
> >
> > > Third level. Does the left border stack gracefully or turn into a rainbow of confusion?

> "The best way to predict the future is to implement it, then write a post about how it broke."
>
> — Nobody Important, Probably

---

## 3. Polyglot Code Gauntlet

### TypeScript

```ts
interface KioskSession {
  readonly id: string;
  tenantId: string;
  status: 'idle' | 'capturing' | 'processing' | 'printing' | 'error';
  startedAt: Date;
  frames: ReadonlyArray<Blob>;
}

export async function advanceSession<T extends KioskSession>(
  session: T,
  next: T['status'],
  signal?: AbortSignal,
): Promise<T> {
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  return { ...session, status: next };
}
```

### TSX

```tsx
import { useEffect, useReducer } from 'react';

export function BoothStatus({ channel }: { channel: string }) {
  const [state, dispatch] = useReducer(reducer, { online: false, queue: 0 });

  useEffect(() => {
    const sub = window.Echo.channel(channel).listen('.status', (e: StatusEvent) => {
      dispatch({ type: 'STATUS', payload: e });
    });
    return () => sub.stopListening('.status');
  }, [channel]);

  return (
    <div className="flex items-center gap-2 rounded-xl border px-3 py-2">
      <span className={state.online ? 'bg-green-500' : 'bg-red-500'} />
      <span>{state.queue} in queue</span>
    </div>
  );
}
```

### PHP (Laravel)

```php
<?php

namespace App\Http\Controllers;

use App\Events\BoothStatusChanged;
use App\Models\Booth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BoothController extends Controller
{
    public function heartbeat(Request $request, Booth $booth): JsonResponse
    {
        $validated = $request->validate([
            'queue' => ['required', 'integer', 'min:0'],
            'camera_ok' => ['required', 'boolean'],
        ]);

        $booth->update(['last_seen_at' => now()] + $validated);

        broadcast(new BoothStatusChanged($booth))->toOthers();

        return response()->json(['ok' => true]);
    }
}
```

### C#

```csharp
public sealed class ThrottledDirectoryScanner : IDisposable
{
    private readonly FileSystemWatcher _watcher;
    private readonly Timer _debounce;
    private int _pending;

    public ThrottledDirectoryScanner(string path, int debounceMs = 250)
    {
        _debounce = new Timer(_ => Flush(), null, Timeout.Infinite, Timeout.Infinite);
        _watcher = new FileSystemWatcher(path) { IncludeSubdirectories = true, EnableRaisingEvents = true };
        _watcher.Changed += (_, _) => Kick(debounceMs);
    }

    private void Kick(int ms)
    {
        Interlocked.Increment(ref _pending);
        _debounce.Change(ms, Timeout.Infinite);
    }

    private void Flush() => Console.WriteLine($"[FS] {Interlocked.Exchange(ref _pending, 0)} events");

    public void Dispose() { _watcher.Dispose(); _debounce.Dispose(); }
}
```

### Rust

```rust
use std::collections::HashMap;

#[derive(Debug, Clone)]
struct Frame<'a> {
    id: u32,
    pixels: &'a [u8],
}

fn histogram(frame: &Frame) -> HashMap<u8, usize> {
    let mut map = HashMap::new();
    for &p in frame.pixels {
        *map.entry(p).or_insert(0) += 1;
    }
    map
}
```

### Go

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func worker(ctx context.Context, jobs <-chan int, out chan<- string) {
	for {
		select {
		case <-ctx.Done():
			return
		case j := <-jobs:
			out <- fmt.Sprintf("job %d done at %s", j, time.Now().Format(time.RFC3339))
		}
	}
}
```

### Python

```python
from dataclasses import dataclass, field
from typing import Iterator


@dataclass(slots=True)
class Palette:
    name: str
    colors: list[tuple[int, int, int]] = field(default_factory=list)

    def __iter__(self) -> Iterator[str]:
        for r, g, b in self.colors:
            yield f"#{r:02x}{g:02x}{b:02x}"
```

### SQL

```sql
SELECT
    t.name AS tenant,
    COUNT(s.id) AS sessions,
    AVG(TIMESTAMPDIFF(SECOND, s.started_at, s.finished_at)) AS avg_seconds
FROM tenants t
LEFT JOIN sessions s ON s.tenant_id = t.id
WHERE s.started_at >= NOW() - INTERVAL 30 DAY
GROUP BY t.id
HAVING sessions > 100
ORDER BY avg_seconds ASC
LIMIT 20;
```

### Bash

```bash
#!/usr/bin/env bash
set -euo pipefail

for f in ./frames/*.png; do
  echo "Processing $f"
  convert "$f" -resize 50% "./out/$(basename "$f" .png).webp"
done

docker compose up -d --build && docker compose logs -f --tail=50 app
```

### Dockerfile

```dockerfile
FROM php:8.3-fpm-alpine AS base
RUN apk add --no-cache git unzip libpng-dev \
    && docker-php-ext-install pdo_mysql gd pcntl

WORKDIR /var/www/html
COPY --chown=www-data:www-data . .
RUN composer install --no-dev --optimize-autoloader

EXPOSE 9000
CMD ["php-fpm"]
```

### YAML

```yaml
services:
  app:
    build: .
    environment:
      APP_ENV: production
      REVERB_HOST: "0.0.0.0"
    ports:
      - "8080:8080"
    depends_on:
      db:
        condition: service_healthy
```

### JSON

```json
{
  "name": "hypebox-kiosk",
  "version": "1.1.2",
  "scripts": { "dev": "electron .", "build": "electron-builder" },
  "nested": { "array": [1, 2, 3, { "deep": true, "nothing": null }] }
}
```

### CSS

```css
:root {
  --glass: color-mix(in oklab, white 12%, transparent);
  --radius: clamp(12px, 2vw, 24px);
}

.card {
  background: var(--glass);
  backdrop-filter: blur(20px) saturate(1.4);
  border-radius: var(--radius);
  container-type: inline-size;
}

@container (min-width: 480px) {
  .card > .body { columns: 2; }
}
```

### HTML

```html
<article class="post" data-theme="dark">
  <header>
    <h1>Hello World;</h1>
    <time datetime="2026-10-12">12 Oct 2026</time>
  </header>
  <img src="/images/yg.png" alt="Author portrait" loading="lazy" />
</article>
```

### Diff

```diff
- const timeout = 5000;
+ const timeout = 250;

  function debounce(fn, ms) {
-   return fn;
+   let t;
+   return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  }
```

### Plain Text, No Language

```
No language tag here.
    Indentation   is   preserved.
Tabs	and	spaces	mixed.
```

### Overflow Bait: One Absurdly Long Line

```bash
curl -X POST "https://api.example.com/v1/tenants/00000000-0000-0000-0000-000000000000/booths/11111111-1111-1111-1111-111111111111/sessions/22222222-2222-2222-2222-222222222222/frames?format=webp&quality=92&resize=1920x1080&watermark=false&callback=https%3A%2F%2Fexample.com%2Fwebhooks%2Fframes%2Fready" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
```

### Inline Code Overflow

An inline path that refuses to break: `C:\Users\Yovan\AppData\Local\Programs\hypebox-kiosk\resources\app.asar.unpacked\node_modules\sharp\vendor\8.15.0\win32-x64\lib\libvips-42.dll`, and the paragraph should still behave.

---

## 4. Tables Under Pressure

### Small, Aligned

| Left | Center | Right |
| :--- | :----: | ----: |
| a | b | c |
| longer left | longer center | longer right |
| `code` | **bold** | *italic* |

### Wide: Forces Horizontal Scroll on Mobile

| Pipeline Phase | Naïve Scan (v1.0) | Multi-Thread (v1.1) | Zero-Alloc Batched (v1.1.2) | Notes | Owner | Last Verified | Risk Level | Rollback Plan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Directory Walk (10k files)** | 4,200 ms | 1,850 ms | **198 ms** | Bounded depth, async iterator | Yovan | 2026-10-10 | Low | Revert to v1.1 |
| **JSON Manifest Parse** | 820 ms | 310 ms | **44 ms** | Streaming parser, no intermediate string | Antigravity | 2026-10-11 | Medium | Feature flag |
| **UI Main-Thread Latency** | Full freeze (4.2 s) | Frame drops (800 ms) | **0 ms (60 FPS)** | Offloaded to worker pool | Yovan | 2026-10-11 | Low | Revert to v1.1 |
| **Peak Heap Allocation** | 184 MB | 92 MB | **14.2 MB** | Pooled buffers via ArrayPool | Antigravity | 2026-10-12 | High | Disable pooling |

### Tall: Many Rows

| # | Event | Status |
| -: | :--- | :--- |
| 1 | Kiosk boots | ✅ |
| 2 | Camera handshake | ✅ |
| 3 | Payment QR rendered | ✅ |
| 4 | Webhook received | ✅ |
| 5 | Countdown starts | ✅ |
| 6 | Shutter fires | ✅ |
| 7 | Frames uploaded | ⚠️ |
| 8 | Template composited | ✅ |
| 9 | Print job queued | ❌ |
| 10 | Receipt emailed | ✅ |
| 11 | Session archived | ✅ |
| 12 | Kiosk resets to idle | ✅ |

### Tables With Long Unbreakable Cells

| Key | Value |
| :--- | :--- |
| `REVERB_APP_SECRET` | `aGVsbG8gd29ybGQgdGhpcyBpcyBhIHZlcnkgbG9uZyBiYXNlNjQgc3RyaW5nIHRoYXQgc2hvdWxkIG5vdCBicmVhayB0aGUgbGF5b3V0IG9mIHRoZSB0YWJsZSBhdCBhbGw=` |
| Plain long text | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. |

---

## 5. Lists Within Lists Within Lists

### Unordered, Deeply Nested

- Level 1
  - Level 2
    - Level 3
      - Level 4
        - Level 5, if the indentation is still sane by now, I am impressed
- Back at level 1, with a paragraph:

  This paragraph belongs to the list item above, not to the document.

- Level 1 with code:

  ```ts
  const nested = true;
  ```

### Ordered, With Mixed Nesting

1. First
2. Second
   1. Second-A
   2. Second-B
      - Unordered inside ordered
      - Another one
   3. Second-C
3. Third
   > A blockquote inside a list item.
4. Fourth, starting a very long sentence that wraps across multiple lines to confirm that hanging indents on list markers hold up properly, even when the line wraps three or four times on a phone.

### Starting At An Odd Number

7. Seven
8. Eight
9. Nine

### Task Lists

- [x] Multi-author frontmatter with schema validation
- [x] SVG avatar for the AI co-author
- [x] Portrait for the human author
- [x] Sticky section scrubber
- [ ] Live telemetry chart
  - [x] Sub-task done
  - [ ] Sub-task pending
- [ ] World domination (stretch goal)

---

## 6. Typography & Unicode Torture

### Quotes, Dashes, Ellipses

"Straight quotes" and “curly quotes”. It's vs it’s. En–dash, em—dash, minus −, ellipsis… and three dots...

### Scripts

- Latin with diacritics: Café, naïve, Zürich, Œuvre, Ångström
- Japanese: こんにちは世界、ハローワールド
- Chinese: 你好，世界
- Korean: 안녕하세요 세계
- Arabic (RTL): مرحبا بالعالم
- Hindi: नमस्ते दुनिया
- Thai: สวัสดีชาวโลก
- Javanese: ꦲꦭꦺꦴ​ꦢꦸꦤꦶꦪ
- Emoji: 🚀 🔥 ✨ 🧪 🐛 👩🏽‍💻 🫪 (ZWJ sequences included)
- Weird Unicodes: ⊛ ￼ ​

- Weird Fonts: H̵̨̛̛̫͈̟̝͙͉̘̭̖̾̐̓͗͌͘͠͝ę̵̩̥͉͎͒̓̒̈́͛͆͌̋͝ľ̵͖̩̫̱̱͈̐̎͒͗̉l̵̢͚̳͉͖̆̿ǒ̵͚̼̰̱̲͕̬̅͐͜ ̶̨͔̫͈̹͓͋̈́̈́͝Ẅ̷̨͍̥̜͎̠̀̋̔̽̂͌͒̀̏o̸̰̩̱̼̪̰̣̦̘̳̾̆̈́̈r̸̡̥͎̖̲̪̎̉̾̽l̴͉̪̪̩̳̘̲̞̝̓̍͝d̴̻͍͍̟͔̱̣̘̍͂̀̀̉̚;̵̱͖̤̮̖̹͚͂͆͜

### Math-ish Symbols

α + β = γ, ∑ᵢ xᵢ², ∀x ∈ ℝ, √2 ≈ 1.4142, ≤ ≥ ≠ ≈ ∞

### A Word That Is Too Long

Pneumonoultramicroscopicsilicovolcanoconiosis_and_then_some_more_characters_without_any_spaces_to_force_the_wrapping_logic_to_make_a_decision_about_overflow_wrap.

---

## 7. Media & Embeds

### Image With Alt and Title

![Author portrait used as a stand-in image](/images/yg.png "Yovan, rendered as a test image")

### Image Inside a Link

[![Claude avatar](/images/cld.png)](https://example.com)

### Broken Image (Fallback Behaviour)

![This image does not exist and should degrade gracefully](/images/does-not-exist.png)

### HTML Figure With Caption

<figure>
  <img src="/images/yg.png" alt="Figure test" />
  <figcaption>Figure 1: A figure with a caption, in raw HTML.</figcaption>
</figure>

---

## 8. Raw HTML & Disclosure

<details>
<summary>Click to expand: a collapsed section with rich content</summary>

Hidden content with **markdown** inside HTML, a list:

- One
- Two

```ts
console.log('hidden code block');
```

</details>

<details open>
<summary>This one starts open</summary>

Open by default.

</details>

---

## 9. Footnotes, References, and Definitions

Footnotes are a classic source of bugs.[^2] Multiple references to one note work too.[^1] And a note with a long body.[^long]

Term One
: Definition-list syntax, which may or may not be supported by the renderer.

Term Two
: Another definition.

[^1]: The first footnote, referenced twice. Both back-links should point to the right place.
[^2]: A second footnote with `inline code` and a [link](https://example.com).
[^long]: A deliberately long footnote that spans multiple sentences to test wrapping in the footnote section. It should remain readable on mobile, keep its numbering, and offer a working back-link to the reference that sits far above in the document, many scroll-heights away.

---

## 10. Spacing, Rules, and Rhythm

Paragraph one.

Paragraph two, immediately after. Paragraph spacing should be consistent.

***

Three rule syntaxes (`---`, `***`, `___`) should render identically.

___

A line with a hard break  
right here, via two trailing spaces.

A line with a hard break\
right here, via a backslash.

Text directly followed by a code block, with no blank line:
```ts
const tight = true;
```
And text directly after it.

---

## 11. Scroll-Spy Padding

The sections below exist only to give the scroll-spy and tick-track enough runway to matter. Each one is short, but the sidebar must highlight them correctly as they cross the viewport threshold.

### Runway A

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Runway B

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Runway C

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.

### Runway D

Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.

---

## 12. Author Profile Specimen

<div class="my-8 p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/50 shadow-xs [&>h1:first-child]:!mt-0">

# Yovan Gunardio Darmawan

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=16&duration=2800&pause=1000&color=0969da&width=550&lines=I+build+software+that+makes+ideas+real.;Web+%E2%80%A2+Desktop+%E2%80%A2+IoT+%E2%80%A2+DevTools;Turning+complex+problems+into+working+systems.;optimizations+freak+%E2%86%91" alt="Typing animation" class="!my-2 dark:hidden" />
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=16&duration=2800&pause=1000&color=52FF1A&width=550&lines=I+build+software+that+makes+ideas+real.;Web+%E2%80%A2+Desktop+%E2%80%A2+IoT+%E2%80%A2+Tools;Turning+complex+problems+into+working+systems.;optimizations+freak+%E2%86%91" alt="Typing animation" class="!my-2 hidden dark:block" />

<div class="flex items-center gap-2 flex-wrap my-3 not-prose">
  <img alt="profile views" src="https://shieldcn.dev/views/user/navoyovan.svg?variant=outline&mode=light&font=geist" class="!my-0 inline-block h-5 dark:hidden" />
  <img alt="profile views" src="https://shieldcn.dev/views/user/navoyovan.svg?variant=outline&font=geist" class="!my-0 hidden dark:inline-block h-5" />
  <img alt="repo views" src="https://shieldcn.dev/views/user/navoyovan/repos.svg?variant=outline&mode=light&font=geist" class="!my-0 inline-block h-5 dark:hidden" />
  <img alt="repo views" src="https://shieldcn.dev/views/user/navoyovan/repos.svg?variant=outline&font=geist" class="!my-0 hidden dark:inline-block h-5" />
</div>

Hey, I'm **Yovan** (or **van** for 1 syllable). Software engineer, likes building stuff from the idea all the way to something people enjoy.

I work across web applications, desktop IPC software, IoT systems, and internal tools.

Visit my GitHub: [github.com/navoyovan](https://github.com/navoyovan)

### Stacks & Technologies

<img src="https://skillicons.dev/icons?i=ts,js,php,html,css,cs,react,laravel,astro,dotnet,nodejs,tailwind,vite,electron,sqlite,mysql,docker,gcp,git,github&perline=10&theme=light" alt="Tech stack" class="!my-2 dark:hidden" />
<img src="https://skillicons.dev/icons?i=ts,js,php,html,css,cs,react,laravel,astro,dotnet,nodejs,tailwind,vite,electron,sqlite,mysql,docker,gcp,git,github&perline=10&theme=dark" alt="Tech stack" class="!my-2 hidden dark:block" />

</div>

---

## Conclusion

If you are reading this on a phone with no horizontal scroll on the page, a sidebar that kept its footing, code blocks that scrolled instead of exploding, and a table of contents that never tripped over an emoji, then the engine holds. If not, you now have a list of exactly where to look.
