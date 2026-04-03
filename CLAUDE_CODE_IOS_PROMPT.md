# Claude Code: Celaya Solutions iOS App
# Brand Guidelines v1.0.0 — Mobile Native Implementation

## Mission
Build a production-ready React Native (Expo) iOS app for Celaya Solutions.
Every decision — layout, color, type, motion, copy — must trace back to the
brand guidelines. This is not a port of the website. It is the brand expressed
natively on glass.

---

## Phase 0 — Environment Setup

```bash
# Verify prerequisites
node --version        # 18+
npm --version
expo --version || npm install -g expo-cli
eas --version  || npm install -g eas-cli

# Bootstrap
npx create-expo-app celaya-solutions-app --template blank-typescript
cd celaya-solutions-app

# Core dependencies
npx expo install expo-font @expo-google-fonts/jetbrains-mono @expo-google-fonts/syne @expo-google-fonts/dm-sans
npx expo install expo-linear-gradient expo-blur expo-haptics expo-linking expo-status-bar
npx expo install react-native-safe-area-context react-native-screens
npx expo install expo-navigation-bar expo-system-ui
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack
npm install react-native-reanimated react-native-gesture-handler
npm install react-native-svg
npm install date-fns

# Print installed versions after setup
cat package.json
```

Confirm the setup prints clean before proceeding to Phase 1.

---

## Phase 1 — Design Token System

Create `src/tokens/index.ts`. This is the single source of truth.
NO hardcoded hex values anywhere else in the codebase. Ever.

```typescript
// src/tokens/index.ts

export const Colors = {
  // Brand
  black:   '#000000',
  white:   '#FFFFFF',
  orange:  '#FF6B35',
  green:   '#06D6A0',
  yellow:  '#FFBE0B',

  // Neutral scale
  gray900: '#0A0A0A',
  gray800: '#111111',
  gray700: '#1A1A1A',
  gray600: '#242424',
  gray500: '#3A3A3A',
  gray400: '#6B6B6B',
  gray300: '#9A9A9A',
  gray200: '#CCCCCC',

  // Semantic aliases
  background:      '#000000',
  surface:         '#0A0A0A',
  surfaceElevated: '#111111',
  border:          '#242424',
  borderAccent:    '#FF6B35',
  textPrimary:     '#FFFFFF',
  textSecondary:   '#9A9A9A',
  textMuted:       '#6B6B6B',
  textDisabled:    '#3A3A3A',

  // Transparent accents
  orangeAlpha15: 'rgba(255, 107, 53, 0.15)',
  orangeAlpha08: 'rgba(255, 107, 53, 0.08)',
  greenAlpha10:  'rgba(6, 214, 160, 0.10)',
  greenAlpha08:  'rgba(6, 214, 160, 0.08)',
  yellowAlpha10: 'rgba(255, 190, 11, 0.10)',
  whiteAlpha05:  'rgba(255, 255, 255, 0.05)',
  whiteAlpha02:  'rgba(255, 255, 255, 0.02)',
} as const

export const Typography = {
  // Families (loaded via expo-google-fonts)
  mono:    'JetBrainsMono_400Regular',
  monoMd:  'JetBrainsMono_500Medium',
  monoBd:  'JetBrainsMono_700Bold',
  display: 'Syne_800ExtraBold',
  displaySm: 'Syne_600SemiBold',
  body:    'DMSans_400Regular',
  bodyMd:  'DMSans_500Medium',

  // Scale (sp units — React Native scales with system font size)
  xs:    10,   // captions, timestamps
  sm:    11,   // labels, tags
  base:  15,   // body
  lg:    18,   // subheadings
  xl:    24,   // section headers
  '2xl': 36,   // display
  '3xl': 52,   // hero

  // Line heights
  tight:   1.1,
  snug:    1.3,
  normal:  1.5,
  relaxed: 1.7,

  // Tracking (letterSpacing in React Native is per-character in sp)
  trackingTight:  -0.5,
  trackingNormal:  0,
  trackingWide:    1.2,
  trackingWidest:  2.0,
} as const

export const Spacing = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  8:  32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
} as const

export const Radii = {
  none: 0,
  sm:   2,
  base: 4,
  md:   8,
  lg:   12,
  full: 9999,
} as const

export const Motion = {
  durationFast: 200,
  durationBase: 300,
  durationSlow: 500,
  // Use with react-native-reanimated Easing
  easeStandard: [0.4, 0, 0.2, 1],
  easeSpring:   { damping: 14, stiffness: 180 },
} as const

export const Layout = {
  screenPaddingH: 20,
  screenPaddingV: 24,
  maxContentWidth: 428,  // iPhone 14 Pro Max width
  tabBarHeight: 84,
  headerHeight: 56,
  cardRadius: Radii.base,
  borderWidth: 1,
} as const
```

---

## Phase 2 — Font Loading

```typescript
// src/hooks/useFonts.ts
import * as Font from 'expo-font'
import {
  JetBrainsMono_300Light,
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  JetBrainsMono_700Bold,
} from '@expo-google-fonts/jetbrains-mono'
import {
  Syne_400Regular,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from '@expo-google-fonts/syne'
import {
  DMSans_300Light,
  DMSans_400Regular,
  DMSans_500Medium,
} from '@expo-google-fonts/dm-sans'

export const useBrandFonts = () => {
  const [fontsLoaded] = Font.useFonts({
    JetBrainsMono_300Light,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_700Bold,
    Syne_400Regular,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
    DMSans_300Light,
    DMSans_400Regular,
    DMSans_500Medium,
  })
  return fontsLoaded
}
```

---

## Phase 3 — App Entry and Navigation

```typescript
// App.tsx
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useBrandFonts } from './src/hooks/useFonts'
import { RootNavigator } from './src/navigation/RootNavigator'
import { Colors } from './src/tokens'

export default function App() {
  const fontsLoaded = useBrandFonts()

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.black, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={Colors.orange} />
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer theme={{
          dark: true,
          colors: {
            primary:      Colors.orange,
            background:   Colors.black,
            card:         Colors.gray900,
            text:         Colors.white,
            border:       Colors.gray600,
            notification: Colors.orange,
          }
        }}>
          <StatusBar style="light" backgroundColor={Colors.black} />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
```

### Navigation Structure

```typescript
// src/navigation/RootNavigator.tsx
// Bottom tab navigator with 5 tabs:

// Tab 1: Home        — icon: grid/square, route: HomeScreen
// Tab 2: Research    — icon: cpu/chip,    route: ResearchScreen
// Tab 3: Proof       — icon: shield,      route: ProofScreen (EPPE)
// Tab 4: Civic       — icon: map-pin,     route: CivicScreen (Project Jupiter)
// Tab 5: About       — icon: info,        route: AboutScreen

// Tab bar spec:
// backgroundColor: Colors.gray900
// borderTopColor:  Colors.gray700
// borderTopWidth:  1
// height:          84 (accounts for home indicator)
// activeTintColor:   Colors.orange
// inactiveTintColor: Colors.gray400
// labelStyle: { fontFamily: Typography.mono, fontSize: 9, letterSpacing: 1.2 }
// All labels UPPERCASE

// Use react-native-svg for custom tab icons
// Icon stroke color inherits from tintColor
// Active icon: stroke = Colors.orange, strokeWidth = 1.5
// Inactive icon: stroke = Colors.gray400, strokeWidth = 1.5
```

---

## Phase 4 — Reusable UI Components

Build these components in `src/components/ui/`.
Every component: TypeScript, StyleSheet.create, tokens only.

### 4.1 Typography

```typescript
// src/components/ui/Text.tsx
// Implement these variants:

// <DisplayXL>   — Syne_800ExtraBold, 52sp, tracking -0.5, leading tight
// <Display>     — Syne_800ExtraBold, 36sp, tracking -0.5
// <Heading1>    — Syne_700Bold, 28sp, tracking -0.3
// <Heading2>    — Syne_600SemiBold, 22sp
// <Heading3>    — Syne_600SemiBold, 18sp
// <Body>        — DMSans_400Regular, 15sp, leading relaxed
// <BodyMedium>  — DMSans_500Medium, 15sp
// <Label>       — JetBrainsMono_500Medium, 11sp, tracking 1.2, UPPERCASE
// <Caption>     — JetBrainsMono_400Regular, 10sp, tracking 1.0, color textMuted
// <Code>        — JetBrainsMono_400Regular, 13sp, color green

// All accept: color, style, numberOfLines props
// All default color: Colors.textPrimary
// NEVER use system fonts anywhere in the app
```

### 4.2 SectionLabel

```typescript
// src/components/ui/SectionLabel.tsx
// Layout: horizontal row
// Left: orange dot (6px circle, Colors.orange)
// Middle: Label text (JetBrainsMono, 10sp, tracking 2.0, uppercase, Colors.orange)
// Right: thin line (1px height, width 32, Colors.orange, opacity 0.5)
// marginBottom: Spacing[4]
```

### 4.3 Button

```typescript
// src/components/ui/Button.tsx

// Variants: 'primary' | 'secondary' | 'ghost' | 'danger'

// primary:
//   background: Colors.orange
//   text: Colors.black
//   font: JetBrainsMono_700Bold, 11sp, tracking 1.5, uppercase
//   paddingH: 24, paddingV: 14
//   borderRadius: Radii.sm
//   onPress haptic: Haptics.ImpactFeedbackStyle.Medium

// secondary:
//   background: transparent
//   border: 1px Colors.gray500
//   text: Colors.white
//   onPress: border flashes Colors.orange for 150ms

// ghost:
//   background: Colors.greenAlpha08
//   border: 1px rgba(6,214,160,0.3)
//   text: Colors.green

// danger:
//   background: transparent
//   border: 1px rgba(255,68,68,0.3)
//   text: #FF4444

// All: Animated.View scale 0.97 on press, spring back on release
// All: Disabled state opacity 0.35
```

### 4.4 Card

```typescript
// src/components/ui/Card.tsx

// Base card:
//   background: Colors.surface
//   border: 1px Colors.border
//   borderRadius: Radii.base
//   padding: Spacing[4]

// accent prop: adds 2px top border in Colors.orange

// Pressable variant: scale 0.98 on press with spring animation

// AgentCard (for research instruments):
//   header row: system name (Label, orange) + status tag
//   body: description (Body, textSecondary)
//   footer: tech stack tags

// DataCard (for civic/proof data):
//   has header with mono label
//   large metric value (Display, white)
//   sub-metric (Caption, textMuted)
//   optional bottom accent bar
```

### 4.5 Tag / Badge

```typescript
// src/components/ui/Tag.tsx
// Variants: 'active' | 'verified' | 'pending' | 'archived' | 'research'

// active:    bg orangeAlpha15, text orange, border orangeAlpha15*2
// verified:  bg greenAlpha10,  text green,  border rgba(6,214,160,0.25)
// pending:   bg yellowAlpha10, text yellow, border rgba(255,190,11,0.25)
// archived:  bg transparent,   text gray400, border gray500
// research:  bg whiteAlpha05,  text gray300, border gray600

// Font: JetBrainsMono_500Medium, 9sp, tracking 1.0, UPPERCASE
// Padding: horizontal 8, vertical 4
// BorderRadius: Radii.sm
```

### 4.6 Callout

```typescript
// src/components/ui/Callout.tsx
// Types: 'info' | 'warn' | 'error'

// info:  bg greenAlpha08, border rgba(6,214,160,0.2), label green
// warn:  bg yellowAlpha10, border rgba(255,190,11,0.2), label yellow
// error: bg rgba(255,68,68,0.08), border rgba(255,68,68,0.2), label #FF4444

// Layout: row, icon label (mono 9sp) + body text (DM Sans 13sp, textSecondary)
// BorderLeft: 3px solid (accent color)
// BorderRadius: Radii.sm
// Padding: Spacing[3] horizontal, Spacing[3] vertical
```

### 4.7 Divider

```typescript
// src/components/ui/Divider.tsx
// height: 1
// background: LinearGradient transparent -> gray600 -> transparent
// marginVertical: Spacing[6]
```

### 4.8 ScreenWrapper

```typescript
// src/components/ui/ScreenWrapper.tsx
// Wraps every screen:
// - SafeAreaView with background Colors.black
// - ScrollView with paddingH: Layout.screenPaddingH, paddingV: Layout.screenPaddingV
// - bounces: true, showsVerticalScrollIndicator: false
// - contentContainerStyle paddingBottom: Layout.tabBarHeight + Spacing[8]
```

### 4.9 HashDisplay

```typescript
// src/components/ui/HashDisplay.tsx
// For showing SHA256 / Solana tx hashes
// Background: Colors.gray800, border: 1px Colors.gray600, borderLeft: 3px Colors.green
// Font: JetBrainsMono_400Regular, 11sp, Colors.green
// Shows truncated hash: first 8 chars ... last 8 chars
// Full hash visible on long press (copy to clipboard + haptic)
// Small "Copy" tag in top right
// BorderRadius: Radii.sm
// Padding: Spacing[3]
```

---

## Phase 5 — Screens

Build all screens in `src/screens/`. Each gets its own folder with `index.tsx`.

### 5.1 HomeScreen

Content sections in order:

**Hero Block:**
- Background: black with subtle dot grid pattern (SVG, 30px spacing, 3% opacity dots)
- Radial gradient overlay: orange at top-right, green at bottom-left (very subtle)
- Eyebrow: SectionLabel "Celaya Solutions / Research Lab"
- Headline: DisplayXL "Make Coherence Visible" (white, orange on "Coherence")
- Subhead: Display "El Paso, Texas." (gray300)
- CTA row: Primary button "Explore Research" + Secondary button "View Proof"
- Meta pills row (horizontal scroll): Founded / EP, Systems / 31+, Live / 3

**Mission Statement Block:**
- Heading1 "What we're actually building"
- Body copy (2 paragraphs, gray300): explain the lab's purpose in direct, evidence-first voice. No em dashes. No corporate filler.

**Quick Stats Row:**
- 3 stat cards side by side (horizontal scroll if needed)
- Each: large number (Display, orange) + label (Caption, gray400)
- Stats: "14" agents in CORTEX / "31+" instruments / "3" civic deployments

**Latest Activity:**
- Section label "Recent"
- 3 activity items: timestamp (mono, gray500) + description (body, white)
- Each tappable, opens relevant screen

### 5.2 ResearchScreen

Header: "Research Ecosystem"
Subhead: "31+ instruments. Cross-domain by design."

**Filter row** (horizontal scroll, no wrap):
Tags: All / Active / Live / Research / Civic
Selected tag: filled orange background, black text
Unselected: ghost style

**Instrument cards list** (FlatList, filtered by tag):

Build a card for each system below. Each card has:
- System name (Label, orange or color by status)
- One-line description (Body, gray300)
- Status tag
- Tech stack tags (horizontal, smaller)
- Chevron right

Systems:
```
CORTEX       | Active   | 14-agent manufacturing intelligence platform
CLOS         | Research | 37-agent cognitive life operating system
EPPE         | Live     | El Paso Proof Engine — civic accountability infrastructure
MORTEM       | Live     | Biometric blockchain lifecycle — pacemaker data to Solana
Project Jupiter | Live  | Water demand analysis — civic data discrepancy documentation
Neural Child | Research | Developmental AI with emotional memory architecture
Celaya Chain Protocol | Research | Layer 3 blockchain, Proof of Coherence consensus
Juniper      | Active   | 7-agent OpenClaw architecture, 9 cron jobs deployed
MERIDIAN     | Research | Meta-framework for cross-domain cognitive pattern recognition
SIGNAL       | Research | [signal processing / pattern detection instrument]
VERDICT      | Research | [reasoning and adjudication instrument]
SENTINEL     | Active   | Monitoring and alert agent
```

Tapping a card opens a detail sheet (bottom sheet or push screen) with:
- Full system name + status
- Longer description
- Architecture notes
- GitHub link if public
- Hash / proof anchor if applicable

### 5.3 ProofScreen (EPPE)

This is the El Paso Proof Engine screen.

Header: "El Paso Proof Engine"
Subhead: "Hash your evidence. Anchor it. No accounts. No tracking."

**How It Works** (3 steps, numbered cards):
1. Select a document or image
2. SHA-256 hash computed on-device — never uploaded
3. Hash anchored to Solana blockchain

**Hash Tool** (functional):
- Large upload area: "Tap to select a file"
- Supported: images, PDFs
- On select: compute SHA-256 hash locally using `expo-crypto`
- Display: HashDisplay component showing computed hash
- Button: "Copy Hash" (clipboard + haptic)
- Button: "Share Hash" (native share sheet)
- Callout (info): "Your file never leaves this device. Only the hash is shown."

**Sealed Envelope Protocol Explainer:**
- Card with methodology description
- Link to GitHub Pages publication if available

**Privacy Statement:**
- Callout (info): "No sign-up. No analytics. No third-party scripts. Photos never leave the device."

### 5.4 CivicScreen (Project Jupiter)

Header: "Project Jupiter"
Subhead: "El Paso water demand analysis. Published. Hashed. Anchored."

**Key Findings** (data cards):
- Data center demand at 197% of surplus capacity
- Discrepancies between stated and permitted plant sizes
- Grid analysis for EP44 corridor

**Data visualization:**
- Bar chart using react-native-svg
- Bars: orange for demand, green for baseline/surplus
- Labels: JetBrainsMono, 10sp
- X-axis, Y-axis: mono labels, gray400
- Title: Label above chart
- Legend: colored dots + mono labels

**Publication Links:**
- Card with: "Published on GitHub Pages"
- HashDisplay showing document hash
- Solana tx anchor if available
- Button: "View Full Analysis" (opens expo-linking to GitHub Pages URL)

**Methodology note:**
- Callout: Sealed Envelope Protocol description

### 5.5 AboutScreen

Header: "Celaya Solutions"
Subhead: "Independent AI research lab."

**Mission block:**
- Body copy, direct voice, evidence-first, no em dashes

**Founding context:**
- El Paso, TX
- Cross-domain: industrial electrical + AI architecture + civic accountability
- 11+ years critical infrastructure (data centers, medium-voltage, Navy nuclear context)

**Behavioral Standards** (9 cards, same as brand guidelines):
1. Evidence Before Claims
2. Identity Protection by Default
3. IP Documented in Real Time
4. No Sign-Up, No Tracking
5. El Paso as Operating Context
6. Surprise Over Market Fit
7. Systems Speak, Not Silos
8. Direct First, Diplomatic Always
9. Version What You Change

Each card: card number (mono, gray600) + title (Heading3) + description (Body, gray400)
Bottom accent line alternates orange / green / yellow

**Contact block:**
- "hello@celayasolutions.com" — mailto link, tappable
- "chris@chriscelaya.com" — mailto link, tappable
- Each: card with mono font, orange text, border flash on tap

**Version info:**
- Caption: "App v1.0.0 / Brand Guidelines v1.0.0"
- Caption: "Celaya Solutions / El Paso, TX"

---

## Phase 6 — Gestures and Motion

All animations use `react-native-reanimated`. No `Animated` from react-native core.

**Rules:**
- Press feedback: scale to 0.97, spring back (damping 14, stiffness 180)
- Screen entry: fade + translateY from 12 to 0, duration 300ms, ease standard
- List items: staggered entry, 40ms delay per item, first 6 items only
- Tab bar: active icon scales to 1.1 on select, spring
- Cards: no hover state on iOS — use press state only
- Haptics: always pair with meaningful state changes

```typescript
// src/hooks/useEntryAnimation.ts
// Returns animated style for screen/component entry
// translateY: 12 -> 0
// opacity: 0 -> 1
// duration: Motion.durationBase
// delay: optional prop

// src/hooks/usePressScale.ts
// Returns { animatedStyle, onPressIn, onPressOut }
// scale: 1.0 -> 0.97 on press, spring back on release
```

**Reduced motion:**
```typescript
import { useReduceMotion } from 'react-native-reanimated'
// Check at app level, disable animations if true
// Always respect this — accessibility requirement
```

---

## Phase 7 — iOS-Specific Configuration

### app.json / app.config.ts

```json
{
  "expo": {
    "name": "Celaya Solutions",
    "slug": "celaya-solutions",
    "version": "1.0.0",
    "orientation": "portrait",
    "userInterfaceStyle": "dark",
    "backgroundColor": "#000000",
    "ios": {
      "supportsTablet": false,
      "bundleIdentifier": "com.celayasolutions.app",
      "buildNumber": "1",
      "requireFullScreen": true,
      "infoPlist": {
        "NSCameraUsageDescription": "Used to capture documents for hash verification.",
        "NSPhotoLibraryUsageDescription": "Used to select documents for hash verification. Images never leave your device.",
        "CFBundleDisplayName": "Celaya"
      }
    },
    "splash": {
      "backgroundColor": "#000000",
      "resizeMode": "contain"
    },
    "plugins": [
      "expo-font",
      "expo-haptics",
      [
        "expo-build-properties",
        {
          "ios": {
            "deploymentTarget": "16.0"
          }
        }
      ]
    ]
  }
}
```

### Splash Screen

Black background (#000000), centered Celaya Solutions wordmark:
- "Celaya" in Syne 800, white, 42sp
- "Solutions" in JetBrains Mono, orange, 12sp, tracking 3.5, uppercase
- Small orange dot (8px) below the lockup, centered
- No animation on splash — clean cut to app

### App Icon

128x128 base (Expo generates all sizes):
- Background: #000000
- Centered: "CS" in Syne 800, white, large
- Bottom-right: 16px orange circle (the proof dot)
- No rounded corners on source — iOS applies them

### Status Bar

- `style="light"` always
- `backgroundColor="#000000"`
- translucent: false

### Navigation Bar (Android — set anyway for consistency)

- `navigationBarColor="#000000"`

---

## Phase 8 — Accessibility

Implement ALL of these. Non-negotiable.

```typescript
// Every touchable element:
accessibilityRole="button"          // or appropriate role
accessibilityLabel="[clear label]"  // describe the action, not the element
accessibilityHint="[what happens]"  // optional but preferred for non-obvious actions

// Every image:
accessibilityLabel="[description]"
accessible={true}

// Dynamic content (data, hashes):
accessibilityLiveRegion="polite"

// Minimum touch target: 44x44 points (iOS HIG requirement)
// Use hitSlop if visual is smaller: hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}

// Text scaling: test with largest accessibility font size
// Use sp units (not dp/pt) for all font sizes
// Never hardcode lineHeight — use multiplier: fontSize * Typography.normal

// Color contrast:
// All text pairs verified (white/black 21:1, orange/black 4.6:1, green/black 8.6:1)
// Never rely on color alone to convey state — always add text or icon

// Reduced motion: useReduceMotion() from reanimated — check on every animated component
```

---

## Phase 9 — Privacy and Security

These are behavioral standards made native:

```typescript
// Privacy manifest (PrivacyInfo.xcprivacy — add to ios/ folder after prebuild):
// NSPrivacyCollectedDataTypes: [] (empty — we collect nothing)
// NSPrivacyAccessedAPITypes: file-access only (for hash computation)
// NSPrivacyTrackingDomains: [] (no tracking)
// NSPrivacyTracking: false

// No analytics SDK. No Sentry. No Firebase. No Amplitude.
// No remote logging of user behavior.

// Hash computation:
import * as Crypto from 'expo-crypto'
const hash = await Crypto.digestStringAsync(
  Crypto.CryptoDigestAlgorithm.SHA256,
  fileContent,
  { encoding: Crypto.CryptoEncoding.HEX }
)
// File content stays in memory only. Never written to disk.
// Never sent to any server.

// No third-party SDKs that phone home.
// Review every dependency with `npx expo install --check` after adding anything.
```

---

## Phase 10 — Content Rules

Apply to every string in the app. Search and replace before committing.

1. **No em dashes** — use colons, commas, periods, parentheses
2. **No corporate filler** — grep and remove: leverage, synergy, empower, innovative, cutting-edge, disrupt, paradigm, thought leader
3. **Evidence-first** — every capability claim is specific and verifiable
4. **No form elements that submit data** — hash tool is local only
5. **Minimum font size 10sp** everywhere (iOS smallest readable)
6. **No hardcoded colors** — tokens only
7. **No hardcoded strings** — create `src/constants/copy.ts` for all user-visible text
8. **Personal names** — initials or variables only in any public-facing copy

---

## Phase 11 — Build and Submission Prep

```bash
# Local development
npx expo start --ios

# Prebuild (generates ios/ folder)
npx expo prebuild --platform ios

# EAS build config
eas build:configure

# eas.json (create in root):
{
  "cli": { "version": ">= 5.0.0" },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": { "simulator": true }
    },
    "preview": {
      "distribution": "internal",
      "ios": { "simulator": false }
    },
    "production": {
      "ios": { "buildConfiguration": "Release" }
    }
  },
  "submit": {
    "production": {}
  }
}

# Build for simulator (test first)
eas build --platform ios --profile development

# Build for device
eas build --platform ios --profile preview
```

---

## Phase 12 — File Structure

After completion, the repo structure must be:

```
celaya-solutions-app/
├── App.tsx
├── app.json
├── eas.json
├── package.json
├── tsconfig.json
├── BRAND.md
├── CHANGELOG.md
├── src/
│   ├── tokens/
│   │   └── index.ts              ← single source of truth
│   ├── hooks/
│   │   ├── useFonts.ts
│   │   ├── useEntryAnimation.ts
│   │   └── usePressScale.ts
│   ├── navigation/
│   │   └── RootNavigator.tsx
│   ├── screens/
│   │   ├── Home/index.tsx
│   │   ├── Research/index.tsx
│   │   ├── Proof/index.tsx
│   │   ├── Civic/index.tsx
│   │   └── About/index.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── Text.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Tag.tsx
│   │       ├── Callout.tsx
│   │       ├── Divider.tsx
│   │       ├── HashDisplay.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── ScreenWrapper.tsx
│   │       └── index.ts          ← re-exports all
│   └── constants/
│       └── copy.ts               ← all user-visible strings
└── assets/
    ├── icon.png
    └── splash.png
```

---

## Phase 13 — Verification Checklist

Before tagging v1.0.0:

```bash
# 1. Em dash grep
grep -r " — " src/ --include="*.tsx" --include="*.ts"
# Must return zero results

# 2. Hardcoded color grep
grep -rE "#[0-9A-Fa-f]{6}" src/ --include="*.tsx" --include="*.ts"
# Only tokens/index.ts should have results

# 3. System font usage
grep -r "fontFamily" src/ --include="*.tsx" | grep -v "JetBrains\|Syne\|DMSans"
# Zero results

# 4. Font size below 10
grep -rE "fontSize:\s*[1-9][^0-9]" src/ --include="*.tsx"
# Review every hit

# 5. TypeScript
npx tsc --noEmit
# Zero errors

# 6. Build succeeds
eas build --platform ios --profile development --local

# 7. Manual accessibility test
# - Enable VoiceOver, navigate entire app
# - Enable Larger Text (max), verify no layout breaks
# - Enable Reduce Motion, verify all animations disabled
# - Test in dark mode only (app is dark-only)
```

**Commit message:**
```
feat(ios): Celaya Solutions app v1.0.0

- Expo + React Native, TypeScript throughout
- Full design token system (Colors, Typography, Spacing, Motion, Layout)
- Component library: Button, Card, Tag, Callout, HashDisplay, SectionLabel
- 5 screens: Home, Research (11 instruments), Proof (EPPE), Civic (Jupiter), About
- SHA-256 hash tool: fully local, no upload, no tracking
- Behavioral standards: no analytics, no accounts, no third-party scripts
- Privacy manifest: empty data collection declaration
- Accessibility: WCAG AA+, VoiceOver, reduced motion, minimum 44pt targets
- Em dashes: zero (grep verified)
- EAS build configured for development, preview, production
```

---

## Constraints

DO NOT:
- Use any analytics SDK (no Firebase, Sentry, Amplitude, Mixpanel, etc.)
- Add any sign-up, login, or account system
- Send any user data to any server (hash computation is local only)
- Use system fonts anywhere in the app
- Use any color not in `src/tokens/index.ts`
- Use em dashes in any string
- Set any font size below 10sp
- Add any third-party UI library (no NativeBase, no React Native Paper, no Tamagui)
- Add any social sharing that pre-populates text (share hash is native share sheet only)
- Build for Android in this phase — iOS only

DO:
- Pair every meaningful interaction with an appropriate haptic
- Test on iPhone SE (smallest current supported) for layout
- Keep all SHA-256 computation in `expo-crypto`, never a remote API
- Comment every component file with the brand token it uses
- Respect `prefers-reduced-motion` on every animated component

---

*Celaya Solutions Brand Guidelines v1.0.0 / hello@celayasolutions.com*
*iOS App Implementation Spec v1.0.0*
