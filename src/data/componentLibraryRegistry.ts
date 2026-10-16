import DepthCardRaw from "../components/DepthCard.astro?raw";
import PersonalBusinessCardRaw from "../components/PersonalBusinessCard.astro?raw";
import ActionButtonRaw from "../components/ActionButton.astro?raw";
import HoverExpandButtonRaw from "../components/HoverExpandButton.astro?raw";
import CheckboxRaw from "../components/Checkbox.astro?raw";
import RadioButtonRaw from "../components/RadioButton.astro?raw";
import ToggleSwitchRaw from "../components/ToggleSwitch.astro?raw";
import FormSliderRaw from "../components/FormSlider.astro?raw";
import TextInputRaw from "../components/TextInput.astro?raw";
import PasswordInputRaw from "../components/PasswordInput.astro?raw";
import LimitTextareaRaw from "../components/LimitTextarea.astro?raw";
import FormSelectRaw from "../components/FormSelect.astro?raw";
import SearchDropdownRaw from "../components/SearchDropdown.astro?raw";
import DatePickerRaw from "../components/DatePicker.astro?raw";
import SquareWaveLoaderRaw from "../components/SquareWaveLoader.astro?raw";
import StatusBadgeRaw from "../components/StatusBadge.astro?raw";
import MetricCardRaw from "../components/MetricCard.astro?raw";
import AuthorAvatarRaw from "../components/AuthorAvatar.astro?raw";
import ProjectTileRaw from "../components/ProjectTile.astro?raw";
import MorphingProjectCardRaw from "../components/MorphingProjectCard.astro?raw";
import AppWindowRaw from "../components/AppWindow.astro?raw";
import SystemTopologyRaw from "../components/SystemTopology.astro?raw";
import TrendChartRaw from "../components/TrendChart.astro?raw";
import KioskTimelineRaw from "../components/KioskTimeline.astro?raw";
import FrameRankChartRaw from "../components/FrameRankChart.astro?raw";
import GithubContributionDividerRaw from "../components/GithubContributionDivider.astro?raw";
import AsciiParticleFieldRaw from "../components/AsciiParticleField.astro?raw";
import ConceptMetaballFieldRaw from "../components/ascii-concepts/ConceptMetaballField.astro?raw";
import ConceptFloatingParticleBlobsRaw from "../components/ascii-concepts/ConceptFloatingParticleBlobs.astro?raw";
import DitheringShaderRaw from "../components/ui/dithering-shader.tsx?raw";

export interface TunableConstant {
  key: string;
  label: string;
  type: "range" | "select" | "boolean" | "color";
  defaultValue: number | string | boolean;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  options?: { label: string; value: string }[];
  cssVar?: string;
}

export interface ComponentRegistryEntry {
  id: string;
  number: string;
  title: string;
  navLabel: string;
  group: "foundations" | "interaction" | "feedback" | "systems";
  fileName: string;
  language: "astro" | "tsx" | "css" | "html";
  dependencies: string[];
  constants: TunableConstant[];
  rawSource: string;
}

const COLOR_TOKENS_SNIPPET = `@theme {
  --color-accent: #52FF1A;
  --color-bg-light: #fcfbf9;
  --color-bg-dark: #0e0e0e;
  --color-surface-light: #f6f4ee;
  --color-surface-dark: #141414;
}

:root {
  --color-accent: #52FF1A;
  background-color: #fcfbf9;
  color: #0a0a0a;
}

@media (prefers-color-scheme: dark) {
  :root {
    background-color: #0e0e0e;
    color: #fcfbf9;
  }
}`;

const TYPOGRAPHY_TOKENS_SNIPPET = `@theme {
  --font-heading: 'Syne', sans-serif;
  --font-sans: 'Outfit', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Heading Hierarchy Rules:
 * - Display / Hero: font-heading font-extrabold tracking-tight uppercase
 * - Section / Card Titles: font-heading font-bold
 * - Body & UI Controls: font-sans (Outfit) natural/title case
 * - Developer Metadata / Tokens: font-mono text-xs
 */`;

const TREE_INDEX_SNIPPET = `<!-- Directory & Tree Index Pattern with Auto-Overflow Marquee -->
<div class="space-y-3 font-sans">
  <div class="flex items-center gap-2.5 min-w-0 group">
    <span class="text-neutral-400 dark:text-neutral-600 select-none font-medium text-sm shrink-0">├──</span>
    <span class="text-xs text-neutral-500 font-semibold shrink-0">2026</span>
    <h3 class="text-sm sm:text-base text-neutral-950 dark:text-white group-hover:text-[var(--color-accent,#52FF1A)] transition-colors font-heading font-bold truncate">
      Project Specimen Title
    </h3>
  </div>
  <div class="pl-7 text-[11px] text-neutral-400 dark:text-neutral-500 flex items-center">
    <span class="text-neutral-300 dark:text-neutral-700 select-none shrink-0 mr-2">└──</span>
    <span class="font-medium shrink-0 mr-1.5">stack:</span>
    <span class="text-neutral-500 dark:text-neutral-400">Astro 5 • Tailwind v4 • TypeScript</span>
  </div>
</div>`;

export const COMPONENT_LIBRARY_REGISTRY: Record<string, ComponentRegistryEntry> = {
  "colors": {
    id: "colors",
    number: "01",
    title: "01 / Color Palette & Surface Tokens",
    navLabel: "Color Tokens",
    group: "foundations",
    fileName: "src/styles/global.css",
    language: "css",
    dependencies: ["Tailwind CSS v4 (@theme)"],
    constants: [
      {
        key: "accentHex",
        label: "Accent Token",
        type: "color",
        defaultValue: "#52FF1A",
        cssVar: "--color-accent",
      },
      {
        key: "swatchHeight",
        label: "Swatch Height",
        type: "range",
        defaultValue: 112,
        min: 72,
        max: 160,
        step: 8,
        unit: "px",
        cssVar: "--cl-swatch-h",
      },
    ],
    rawSource: COLOR_TOKENS_SNIPPET,
  },
  "typography": {
    id: "typography",
    number: "02",
    title: "02 / Typography Hierarchy (Syne + Outfit + Mono)",
    navLabel: "Typography Hierarchy",
    group: "foundations",
    fileName: "src/styles/global.css",
    language: "css",
    dependencies: ["@fontsource/syne", "@fontsource/outfit", "Tailwind CSS v4"],
    constants: [
      {
        key: "headingTracking",
        label: "Heading Tracking",
        type: "range",
        defaultValue: -0.03,
        min: -0.06,
        max: 0.05,
        step: 0.01,
        unit: "em",
        cssVar: "--cl-heading-tracking",
      },
      {
        key: "bodyLineHeight",
        label: "Body Leading",
        type: "range",
        defaultValue: 1.6,
        min: 1.2,
        max: 2.0,
        step: 0.05,
        unit: "",
        cssVar: "--cl-body-leading",
      },
    ],
    rawSource: TYPOGRAPHY_TOKENS_SNIPPET,
  },
  "depth-cards": {
    id: "depth-cards",
    number: "03",
    title: "03 / Spatial Depth & Surface Elevation Cards",
    navLabel: "Spatial Depth Cards",
    group: "foundations",
    fileName: "DepthCard.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4"],
    constants: [
      {
        key: "hoverLift",
        label: "Hover Lift",
        type: "range",
        defaultValue: 4,
        min: 0,
        max: 12,
        step: 1,
        unit: "px",
        cssVar: "--cl-card-lift",
      },
      {
        key: "cardPadding",
        label: "Card Padding",
        type: "range",
        defaultValue: 24,
        min: 12,
        max: 40,
        step: 4,
        unit: "px",
        cssVar: "--cl-card-pad",
      },
    ],
    rawSource: DepthCardRaw,
  },
  "business-card": {
    id: "business-card",
    number: "04",
    title: "04 / Interactive 3D Skeuomorphic Business Card",
    navLabel: "3D Business Card",
    group: "foundations",
    fileName: "PersonalBusinessCard.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "cardScale",
        label: "Stage Scale",
        type: "range",
        defaultValue: 1,
        min: 0.8,
        max: 1.15,
        step: 0.05,
        unit: "x",
        cssVar: "--cl-bcard-scale",
      },
      {
        key: "perspective",
        label: "3D Perspective",
        type: "range",
        defaultValue: 1000,
        min: 500,
        max: 2000,
        step: 100,
        unit: "px",
        cssVar: "--cl-bcard-perspective",
      },
    ],
    rawSource: PersonalBusinessCardRaw,
  },
  "buttons": {
    id: "buttons",
    number: "05",
    title: "05 / Action Buttons & Micro Triggers",
    navLabel: "Action Buttons",
    group: "interaction",
    fileName: "ActionButton.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne font"],
    constants: [
      {
        key: "btnScale",
        label: "Hover Scale",
        type: "range",
        defaultValue: 1.03,
        min: 1.0,
        max: 1.1,
        step: 0.01,
        unit: "x",
        cssVar: "--cl-btn-scale",
      },
      {
        key: "btnGap",
        label: "Specimen Gap",
        type: "range",
        defaultValue: 16,
        min: 8,
        max: 32,
        step: 4,
        unit: "px",
        cssVar: "--cl-btn-gap",
      },
    ],
    rawSource: ActionButtonRaw,
  },
  "kinetic-triggers": {
    id: "kinetic-triggers",
    number: "06",
    title: "06 / Kinetic Expand-on-Hover Triggers",
    navLabel: "Kinetic Triggers",
    group: "interaction",
    fileName: "HoverExpandButton.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne font"],
    constants: [
      {
        key: "expandDuration",
        label: "Expand Duration",
        type: "range",
        defaultValue: 300,
        min: 120,
        max: 700,
        step: 20,
        unit: "ms",
        cssVar: "--cl-kinetic-duration",
      },
    ],
    rawSource: HoverExpandButtonRaw,
  },
  "checkboxes": {
    id: "checkboxes",
    number: "07",
    title: "07 / 3-State Checkboxes (Unchecked, Checked, Indeterminate)",
    navLabel: "3-State Checkboxes",
    group: "interaction",
    fileName: "Checkbox.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "rowGap",
        label: "Option Spacing",
        type: "range",
        defaultValue: 10,
        min: 4,
        max: 24,
        step: 2,
        unit: "px",
        cssVar: "--cl-checkbox-gap",
      },
    ],
    rawSource: CheckboxRaw,
  },
  "radios": {
    id: "radios",
    number: "08",
    title: "08 / Tactile Radio Button Group",
    navLabel: "Radio Buttons",
    group: "interaction",
    fileName: "RadioButton.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "rowGap",
        label: "Option Spacing",
        type: "range",
        defaultValue: 10,
        min: 4,
        max: 24,
        step: 2,
        unit: "px",
        cssVar: "--cl-radio-gap",
      },
    ],
    rawSource: RadioButtonRaw,
  },
  "toggles": {
    id: "toggles",
    number: "09",
    title: "09 / Binary Toggle Switches",
    navLabel: "Toggle Switches",
    group: "interaction",
    fileName: "ToggleSwitch.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "rowGap",
        label: "Switch Spacing",
        type: "range",
        defaultValue: 12,
        min: 4,
        max: 24,
        step: 2,
        unit: "px",
        cssVar: "--cl-toggle-gap",
      },
    ],
    rawSource: ToggleSwitchRaw,
  },
  "sliders": {
    id: "sliders",
    number: "10",
    title: "10 / Precision Range Form Sliders",
    navLabel: "Form Sliders",
    group: "interaction",
    fileName: "FormSlider.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit + Syne fonts"],
    constants: [
      {
        key: "sliderStep",
        label: "Step Increment",
        type: "select",
        defaultValue: "1",
        options: [
          { label: "1 unit", value: "1" },
          { label: "5 units", value: "5" },
          { label: "10 units", value: "10" },
        ],
      },
    ],
    rawSource: FormSliderRaw,
  },
  "text-inputs": {
    id: "text-inputs",
    number: "11",
    title: "11 / Text Inputs & Validation States",
    navLabel: "Text Inputs",
    group: "interaction",
    fileName: "TextInput.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "inputGap",
        label: "Field Spacing",
        type: "range",
        defaultValue: 16,
        min: 8,
        max: 32,
        step: 4,
        unit: "px",
        cssVar: "--cl-input-gap",
      },
    ],
    rawSource: TextInputRaw,
  },
  "password-input": {
    id: "password-input",
    number: "12",
    title: "12 / Password Input with Visibility Toggle",
    navLabel: "Password Input",
    group: "interaction",
    fileName: "PasswordInput.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "maskStyle",
        label: "Default State",
        type: "select",
        defaultValue: "password",
        options: [
          { label: "Masked (password)", value: "password" },
          { label: "Revealed (text)", value: "text" },
        ],
      },
    ],
    rawSource: PasswordInputRaw,
  },
  "limit-textarea": {
    id: "limit-textarea",
    number: "13",
    title: "13 / Soft-Limit Character Counter Textarea",
    navLabel: "Limit Textarea",
    group: "interaction",
    fileName: "LimitTextarea.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "maxLength",
        label: "Character Limit",
        type: "range",
        defaultValue: 120,
        min: 40,
        max: 500,
        step: 20,
        unit: "chars",
      },
    ],
    rawSource: LimitTextareaRaw,
  },
  "form-select": {
    id: "form-select",
    number: "14",
    title: "14 / Custom Popover Form Select",
    navLabel: "Form Select",
    group: "interaction",
    fileName: "FormSelect.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "menuMaxH",
        label: "Popover Max Height",
        type: "range",
        defaultValue: 240,
        min: 140,
        max: 360,
        step: 20,
        unit: "px",
        cssVar: "--cl-select-max-h",
      },
    ],
    rawSource: FormSelectRaw,
  },
  "search-dropdown": {
    id: "search-dropdown",
    number: "15",
    title: "15 / Searchable Live-Filter Dropdown",
    navLabel: "Search Dropdown",
    group: "interaction",
    fileName: "SearchDropdown.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "menuMaxH",
        label: "Filter List Height",
        type: "range",
        defaultValue: 240,
        min: 140,
        max: 360,
        step: 20,
        unit: "px",
        cssVar: "--cl-search-max-h",
      },
    ],
    rawSource: SearchDropdownRaw,
  },
  "date-picker": {
    id: "date-picker",
    number: "16",
    title: "16 / Interactive Calendar Date Picker",
    navLabel: "Date Picker",
    group: "interaction",
    fileName: "DatePicker.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "pickerScale",
        label: "Calendar Scale",
        type: "range",
        defaultValue: 1,
        min: 0.85,
        max: 1.1,
        step: 0.05,
        unit: "x",
        cssVar: "--cl-datepicker-scale",
      },
    ],
    rawSource: DatePickerRaw,
  },
  "loaders": {
    id: "loaders",
    number: "17",
    title: "17 / Square Wave Loaders",
    navLabel: "Square Wave Loaders",
    group: "interaction",
    fileName: "SquareWaveLoader.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4"],
    constants: [
      {
        key: "waveSpeed",
        label: "Wave Cycle Duration",
        type: "range",
        defaultValue: 1.2,
        min: 0.4,
        max: 3.0,
        step: 0.1,
        unit: "s",
        cssVar: "--cl-wave-duration",
      },
    ],
    rawSource: SquareWaveLoaderRaw,
  },
  "status-badges": {
    id: "status-badges",
    number: "18",
    title: "18 / Semantic Status & Telemetry Badges",
    navLabel: "Status Badges",
    group: "feedback",
    fileName: "StatusBadge.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne font"],
    constants: [
      {
        key: "badgeVariant",
        label: "Preview Variant",
        type: "select",
        defaultValue: "accent",
        options: [
          { label: "accent", value: "accent" },
          { label: "neon", value: "neon" },
          { label: "neutral", value: "neutral" },
          { label: "warning", value: "warning" },
          { label: "danger", value: "danger" },
          { label: "info", value: "info" },
        ],
      },
    ],
    rawSource: StatusBadgeRaw,
  },
  "metric-cards": {
    id: "metric-cards",
    number: "19",
    title: "19 / System Telemetry Metric Cards",
    navLabel: "Metric Cards",
    group: "feedback",
    fileName: "MetricCard.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts", "StatusBadge.astro"],
    constants: [
      {
        key: "cardGap",
        label: "Grid Gap",
        type: "range",
        defaultValue: 24,
        min: 8,
        max: 40,
        step: 4,
        unit: "px",
        cssVar: "--cl-metric-gap",
      },
    ],
    rawSource: MetricCardRaw,
  },
  "author-avatars": {
    id: "author-avatars",
    number: "20",
    title: "20 / Author & Co-Author Avatars (Multi-Scale Matrix)",
    navLabel: "Author Avatars",
    group: "feedback",
    fileName: "AuthorAvatar.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Outfit font"],
    constants: [
      {
        key: "avatarOverlap",
        label: "Cluster Overlap",
        type: "range",
        defaultValue: -10,
        min: -24,
        max: 8,
        step: 2,
        unit: "px",
        cssVar: "--cl-avatar-overlap",
      },
    ],
    rawSource: AuthorAvatarRaw,
  },
  "project-tiles": {
    id: "project-tiles",
    number: "21",
    title: "21 / Static Case Study Project Tiles",
    navLabel: "Project Tiles (Static)",
    group: "systems",
    fileName: "ProjectTile.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "StatusBadge.astro", "ActionButton.astro", "MediaModal.astro"],
    constants: [
      {
        key: "tileGap",
        label: "Grid Spacing",
        type: "range",
        defaultValue: 32,
        min: 12,
        max: 48,
        step: 4,
        unit: "px",
        cssVar: "--cl-tile-gap",
      },
    ],
    rawSource: ProjectTileRaw,
  },
  "morph-cards": {
    id: "morph-cards",
    number: "22",
    title: "22 / Morphing Project Cards (Physical Geometric Bloom)",
    navLabel: "Morphing Project Cards",
    group: "systems",
    fileName: "MorphingProjectCard.astro",
    language: "astro",
    dependencies: ["motion", "Tailwind CSS v4", "StatusBadge.astro", "ActionButton.astro", "MediaModal.astro"],
    constants: [
      {
        key: "bloomFactor",
        label: "Bloom Expansion",
        type: "range",
        defaultValue: 1.25,
        min: 1.05,
        max: 1.45,
        step: 0.05,
        unit: "x",
      },
      {
        key: "morphDuration",
        label: "Morph Duration",
        type: "range",
        defaultValue: 0.42,
        min: 0.18,
        max: 0.9,
        step: 0.04,
        unit: "s",
      },
    ],
    rawSource: MorphingProjectCardRaw,
  },
  "tree-index": {
    id: "tree-index",
    number: "23",
    title: "23 / Directory & Tree Index Pattern",
    navLabel: "Directory Tree Index",
    group: "systems",
    fileName: "TreeIndexPattern.astro",
    language: "html",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "marqueeSpeed",
        label: "Marquee Speed",
        type: "range",
        defaultValue: 38,
        min: 15,
        max: 90,
        step: 5,
        unit: "px/s",
      },
    ],
    rawSource: TREE_INDEX_SNIPPET,
  },
  "app-window": {
    id: "app-window",
    number: "24",
    title: "24 / Application Window Mockup (Interactive Showcase Frame)",
    navLabel: "App Window Mockup",
    group: "systems",
    fileName: "AppWindow.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "windowScale",
        label: "Viewport Scale",
        type: "range",
        defaultValue: 1,
        min: 0.8,
        max: 1.05,
        step: 0.05,
        unit: "x",
        cssVar: "--cl-window-scale",
      },
    ],
    rawSource: AppWindowRaw,
  },
  "system-topology": {
    id: "system-topology",
    number: "25",
    title: "25 / Exploded 3D Isometric System Topology",
    navLabel: "System Topology",
    group: "systems",
    fileName: "SystemTopology.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "topoScale",
        label: "Diagram Scale",
        type: "range",
        defaultValue: 1,
        min: 0.75,
        max: 1.15,
        step: 0.05,
        unit: "x",
        cssVar: "--cl-topo-scale",
      },
    ],
    rawSource: SystemTopologyRaw,
  },
  "trend-chart": {
    id: "trend-chart",
    number: "26",
    title: "26 / Telemetry Trend Spline (Monotone Cubic Curve)",
    navLabel: "Telemetry Trend Spline",
    group: "systems",
    fileName: "TrendChart.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "strokeWidth",
        label: "Spline Stroke",
        type: "range",
        defaultValue: 2.5,
        min: 1,
        max: 6,
        step: 0.5,
        unit: "px",
        cssVar: "--cl-spline-stroke",
      },
    ],
    rawSource: TrendChartRaw,
  },
  "kiosk-timeline": {
    id: "kiosk-timeline",
    number: "27",
    title: "27 / Activity Schedule Timeline (Multi-Track Gantt)",
    navLabel: "Activity Schedule Timeline",
    group: "systems",
    fileName: "KioskTimeline.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "timelineHeight",
        label: "Container Opacity",
        type: "range",
        defaultValue: 1,
        min: 0.5,
        max: 1,
        step: 0.05,
        unit: "",
        cssVar: "--cl-timeline-opacity",
      },
    ],
    rawSource: KioskTimelineRaw,
  },
  "frame-rank-chart": {
    id: "frame-rank-chart",
    number: "28",
    title: "28 / Filmstrip Asset Ranking (Proportional Filmstrip Slots)",
    navLabel: "Filmstrip Asset Ranking",
    group: "systems",
    fileName: "FrameRankChart.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "slotGap",
        label: "Filmstrip Gap",
        type: "range",
        defaultValue: 6,
        min: 2,
        max: 16,
        step: 2,
        unit: "px",
        cssVar: "--cl-filmstrip-gap",
      },
    ],
    rawSource: FrameRankChartRaw,
  },
  "github-contributions": {
    id: "github-contributions",
    number: "29",
    title: "29 / GitHub Telemetry Heatmap (Activity Density Divider)",
    navLabel: "GitHub Telemetry Divider",
    group: "systems",
    fileName: "GithubContributionDivider.astro",
    language: "astro",
    dependencies: ["Tailwind CSS v4", "Syne + Outfit fonts"],
    constants: [
      {
        key: "cellSize",
        label: "Cell Size (--cell)",
        type: "range",
        defaultValue: 14,
        min: 8,
        max: 20,
        step: 1,
        unit: "px",
      },
      {
        key: "cellGap",
        label: "Cell Gap (--gap)",
        type: "range",
        defaultValue: 2,
        min: 1,
        max: 6,
        step: 1,
        unit: "px",
      },
    ],
    rawSource: GithubContributionDividerRaw,
  },
  "ascii-particles": {
    id: "ascii-particles",
    number: "30",
    title: "30 / Ambient Fluid ASCII Particle Field (Production Specimen)",
    navLabel: "ASCII Fluid Particles",
    group: "systems",
    fileName: "AsciiParticleField.astro",
    language: "astro",
    dependencies: ["Canvas 2D", "Tailwind CSS v4"],
    constants: [
      {
        key: "opacityMultiplier",
        label: "Opacity Multiplier",
        type: "range",
        defaultValue: 1.5,
        min: 0.4,
        max: 2.5,
        step: 0.1,
        unit: "x",
      },
      {
        key: "fieldHeight",
        label: "Stage Height",
        type: "range",
        defaultValue: 384,
        min: 240,
        max: 560,
        step: 16,
        unit: "px",
        cssVar: "--cl-ascii-h",
      },
    ],
    rawSource: AsciiParticleFieldRaw,
  },
  "ascii-metaballs": {
    id: "ascii-metaballs",
    number: "31",
    title: "31 / Central Morphing Metaball ASCII Field",
    navLabel: "ASCII Metaball Field",
    group: "systems",
    fileName: "ConceptMetaballField.astro",
    language: "astro",
    dependencies: ["Canvas 2D", "Tailwind CSS v4"],
    constants: [
      {
        key: "speedMultiplier",
        label: "Harmonic Speed",
        type: "range",
        defaultValue: 1.0,
        min: 0.2,
        max: 3.0,
        step: 0.1,
        unit: "x",
      },
      {
        key: "threshold",
        label: "Field Cutoff",
        type: "range",
        defaultValue: 1.0,
        min: 0.5,
        max: 1.8,
        step: 0.1,
        unit: "x",
      },
    ],
    rawSource: ConceptMetaballFieldRaw,
  },
  "ascii-blobs": {
    id: "ascii-blobs",
    number: "32",
    title: "32 / Orbital Satellite Particle Blobs Field",
    navLabel: "ASCII Orbital Blobs",
    group: "systems",
    fileName: "ConceptFloatingParticleBlobs.astro",
    language: "astro",
    dependencies: ["Canvas 2D", "Tailwind CSS v4"],
    constants: [
      {
        key: "speedMultiplier",
        label: "Orbit Speed",
        type: "range",
        defaultValue: 1.0,
        min: 0.2,
        max: 3.0,
        step: 0.1,
        unit: "x",
      },
      {
        key: "radiusScale",
        label: "Orbit Radius",
        type: "range",
        defaultValue: 1.0,
        min: 0.5,
        max: 1.6,
        step: 0.1,
        unit: "x",
      },
    ],
    rawSource: ConceptFloatingParticleBlobsRaw,
  },
  "dithering-shader": {
    id: "dithering-shader",
    number: "33",
    title: "33 / Bayer Matrix Dithering Shader (WebGL GPU Wave Simulation)",
    navLabel: "Bayer Dithering Shader",
    group: "systems",
    fileName: "dithering-shader.tsx",
    language: "tsx",
    dependencies: ["react", "three", "Tailwind CSS v4"],
    constants: [
      {
        key: "pxSize",
        label: "Pixel Size (pxSize)",
        type: "range",
        defaultValue: 1,
        min: 1,
        max: 6,
        step: 1,
        unit: "px",
      },
      {
        key: "speed",
        label: "Wave Speed",
        type: "range",
        defaultValue: 0.6,
        min: 0.1,
        max: 2.5,
        step: 0.1,
        unit: "x",
      },
      {
        key: "pattern",
        label: "Shader Pattern",
        type: "select",
        defaultValue: "0",
        options: [
          { label: "0: Directional Wave", value: "0" },
          { label: "1: Radial Halo", value: "1" },
          { label: "2: Topographic Contour", value: "2" },
          { label: "3: CRT Matrix", value: "3" },
          { label: "4: Risograph Dots", value: "4" },
          { label: "5: Cloudy Interference", value: "5" },
        ],
      },
      {
        key: "palette",
        label: "Color LUT Palette",
        type: "select",
        defaultValue: "0",
        options: [
          { label: "0: Cyber Wave", value: "0" },
          { label: "1: Retro Ink", value: "1" },
          { label: "2: Terminal Glow", value: "2" },
          { label: "3: Warm Editorial", value: "3" },
          { label: "4: Subtle Charcoal", value: "4" },
        ],
      },
    ],
    rawSource: DitheringShaderRaw,
  },
};

export const ORDERED_SECTION_IDS = Object.keys(COMPONENT_LIBRARY_REGISTRY);
