# Claude Code: Celaya Solutions — Native iOS App
# SwiftUI / Swift 5.9+ / iOS 17+ / Brand Guidelines v1.0.0

## Mission
Build a production-ready native iOS app in SwiftUI for Celaya Solutions.
No Expo. No React Native. No bridges. No wrappers.
Pure Swift. Pure SwiftUI. Glass on silicon.

---

## Phase 0 — Project Bootstrap

```bash
# Verify Xcode version first
xcodebuild -version
# Required: Xcode 15.2+ (for iOS 17 SDK)

# Create project via CLI
mkdir -p ~/dev/celaya-solutions-ios
cd ~/dev/celaya-solutions-ios

# Create Xcode project programmatically
xcodegen generate  # if XcodeGen available
# OR: instruct user to create in Xcode:
# File > New > Project > App
# Product Name: CelayaSolutions
# Team: [select]
# Organization Identifier: com.celayasolutions
# Interface: SwiftUI
# Language: Swift
# Include Tests: YES
# Minimum Deployment Target: iOS 17.0

# After project creation, install Swift Package dependencies:
# File > Add Package Dependencies:
```

### Swift Package Dependencies

```
ONLY these packages. No others.

1. None for UI — SwiftUI handles everything natively
2. None for networking — URLSession only
3. No analytics packages
4. No crash reporting packages
5. No third-party UI packages

The entire dependency tree is: zero external packages.
If a feature requires an external package, implement it in Swift directly.
```

---

## Phase 1 — Project Structure

```
CelayaSolutions/
├── CelayaSolutionsApp.swift          ← @main entry
├── ContentView.swift                 ← root TabView
│
├── Design/
│   ├── DesignTokens.swift            ← single source of truth
│   ├── Typography.swift              ← font system
│   ├── BrandFonts.swift              ← custom font registration
│   └── Animations.swift             ← motion constants
│
├── Components/
│   ├── Text/
│   │   └── BrandText.swift          ← all text variants
│   ├── Buttons/
│   │   └── CSButton.swift           ← all button variants
│   ├── Cards/
│   │   ├── CSCard.swift
│   │   ├── AgentCard.swift
│   │   └── DataCard.swift
│   ├── Tags/
│   │   └── CSTag.swift
│   ├── Callouts/
│   │   └── CSCallout.swift
│   ├── Layout/
│   │   ├── SectionLabel.swift
│   │   ├── ScreenWrapper.swift
│   │   └── Divider.swift
│   ├── Hash/
│   │   └── HashDisplay.swift
│   └── Charts/
│       └── BrandBarChart.swift       ← custom SwiftUI chart
│
├── Screens/
│   ├── Home/
│   │   └── HomeView.swift
│   ├── Research/
│   │   ├── ResearchView.swift
│   │   └── InstrumentDetailView.swift
│   ├── Proof/
│   │   └── ProofView.swift          ← EPPE hash tool
│   ├── Civic/
│   │   └── CivicView.swift          ← Project Jupiter
│   └── About/
│       └── AboutView.swift
│
├── Models/
│   ├── ResearchInstrument.swift
│   ├── CivicDataPoint.swift
│   └── HashResult.swift
│
├── Services/
│   └── HashService.swift            ← local SHA-256, no network
│
├── Resources/
│   ├── Fonts/                       ← embedded font files (.ttf / .otf)
│   │   ├── JetBrainsMono-Regular.ttf
│   │   ├── JetBrainsMono-Medium.ttf
│   │   ├── JetBrainsMono-Bold.ttf
│   │   ├── Syne-Regular.ttf
│   │   ├── Syne-SemiBold.ttf
│   │   ├── Syne-Bold.ttf
│   │   ├── Syne-ExtraBold.ttf
│   │   ├── DMSans-Regular.ttf
│   │   ├── DMSans-Medium.ttf
│   │   └── DMSans-Light.ttf
│   └── Assets.xcassets/
│       ├── AppIcon.appiconset/
│       └── Colors/                  ← brand colors as named assets
│
├── CelayaSolutionsTests/
└── CelayaSolutionsUITests/
```

### Font Files — Download Instructions

```bash
# JetBrains Mono — open source, OFL license
curl -L "https://github.com/JetBrains/JetBrainsMono/releases/download/v2.304/JetBrainsMono-2.304.zip" -o jbmono.zip
unzip jbmono.zip -d jbmono
cp jbmono/fonts/ttf/JetBrainsMono-Regular.ttf CelayaSolutions/Resources/Fonts/
cp jbmono/fonts/ttf/JetBrainsMono-Medium.ttf CelayaSolutions/Resources/Fonts/
cp jbmono/fonts/ttf/JetBrainsMono-Bold.ttf CelayaSolutions/Resources/Fonts/

# Syne — OFL license, Google Fonts
# Download from: https://fonts.google.com/specimen/Syne
# Add all weights: Regular 400, SemiBold 600, Bold 700, ExtraBold 800

# DM Sans — OFL license, Google Fonts
# Download from: https://fonts.google.com/specimen/DM+Sans
# Add: Light 300, Regular 400, Medium 500
```

After adding font files:
1. Add to Xcode target (check "Add to target: CelayaSolutions")
2. Add to Info.plist under `UIAppFonts`:
```xml
<key>UIAppFonts</key>
<array>
    <string>JetBrainsMono-Regular.ttf</string>
    <string>JetBrainsMono-Medium.ttf</string>
    <string>JetBrainsMono-Bold.ttf</string>
    <string>Syne-Regular.ttf</string>
    <string>Syne-SemiBold.ttf</string>
    <string>Syne-Bold.ttf</string>
    <string>Syne-ExtraBold.ttf</string>
    <string>DMSans-Regular.ttf</string>
    <string>DMSans-Medium.ttf</string>
    <string>DMSans-Light.ttf</string>
</array>
```

---

## Phase 2 — Design Tokens

```swift
// Design/DesignTokens.swift

import SwiftUI

// MARK: - Colors
// Single source of truth. Never use hex literals outside this file.

extension Color {
    // Brand
    static let csBlack   = Color(hex: "#000000")
    static let csWhite   = Color(hex: "#FFFFFF")
    static let csOrange  = Color(hex: "#FF6B35")
    static let csGreen   = Color(hex: "#06D6A0")
    static let csYellow  = Color(hex: "#FFBE0B")

    // Neutral scale
    static let csGray900 = Color(hex: "#0A0A0A")
    static let csGray800 = Color(hex: "#111111")
    static let csGray700 = Color(hex: "#1A1A1A")
    static let csGray600 = Color(hex: "#242424")
    static let csGray500 = Color(hex: "#3A3A3A")
    static let csGray400 = Color(hex: "#6B6B6B")
    static let csGray300 = Color(hex: "#9A9A9A")
    static let csGray200 = Color(hex: "#CCCCCC")

    // Semantic
    static let csBackground      = Color(hex: "#000000")
    static let csSurface         = Color(hex: "#0A0A0A")
    static let csSurfaceElevated = Color(hex: "#111111")
    static let csBorder          = Color(hex: "#242424")
    static let csTextPrimary     = Color(hex: "#FFFFFF")
    static let csTextSecondary   = Color(hex: "#9A9A9A")
    static let csTextMuted       = Color(hex: "#6B6B6B")
    static let csTextDisabled    = Color(hex: "#3A3A3A")

    // Transparent accents
    static let csOrangeAlpha15 = Color(hex: "#FF6B35").opacity(0.15)
    static let csOrangeAlpha08 = Color(hex: "#FF6B35").opacity(0.08)
    static let csGreenAlpha10  = Color(hex: "#06D6A0").opacity(0.10)
    static let csGreenAlpha08  = Color(hex: "#06D6A0").opacity(0.08)
    static let csYellowAlpha10 = Color(hex: "#FFBE0B").opacity(0.10)
    static let csWhiteAlpha05  = Color.white.opacity(0.05)
    static let csWhiteAlpha02  = Color.white.opacity(0.02)

    // Hex initializer
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let r = Double((int & 0xFF0000) >> 16) / 255
        let g = Double((int & 0x00FF00) >> 8)  / 255
        let b = Double(int & 0x0000FF)          / 255
        self.init(red: r, green: g, blue: b)
    }
}

// MARK: - Spacing

enum CSSpacing {
    static let s1:  CGFloat = 4
    static let s2:  CGFloat = 8
    static let s3:  CGFloat = 12
    static let s4:  CGFloat = 16
    static let s5:  CGFloat = 20
    static let s6:  CGFloat = 24
    static let s8:  CGFloat = 32
    static let s10: CGFloat = 40
    static let s12: CGFloat = 48
    static let s16: CGFloat = 64
    static let s20: CGFloat = 80
}

// MARK: - Corner Radii

enum CSRadius {
    static let none: CGFloat = 0
    static let sm:   CGFloat = 2
    static let base: CGFloat = 4
    static let md:   CGFloat = 8
    static let lg:   CGFloat = 12
    static let full: CGFloat = 9999
}

// MARK: - Layout

enum CSLayout {
    static let screenPaddingH: CGFloat = 20
    static let screenPaddingV: CGFloat = 24
    static let tabBarHeight:   CGFloat = 84
    static let headerHeight:   CGFloat = 56
    static let borderWidth:    CGFloat = 1
    static let minTouchTarget: CGFloat = 44
}

// MARK: - Motion

enum CSMotion {
    static let fast:   Double = 0.2
    static let base:   Double = 0.3
    static let slow:   Double = 0.5
    static let spring = Animation.spring(response: 0.4, dampingFraction: 0.7)
    static let snappy = Animation.spring(response: 0.3, dampingFraction: 0.8)
    static let standard = Animation.easeInOut(duration: base)
}
```

---

## Phase 3 — Typography System

```swift
// Design/Typography.swift

import SwiftUI

// Font name constants — must match UIAppFonts entries exactly
enum CSFontName {
    static let monoRegular  = "JetBrainsMono-Regular"
    static let monoMedium   = "JetBrainsMono-Medium"
    static let monoBold     = "JetBrainsMono-Bold"
    static let displayReg   = "Syne-Regular"
    static let displaySemi  = "Syne-SemiBold"
    static let displayBold  = "Syne-Bold"
    static let displayXBold = "Syne-ExtraBold"
    static let bodyLight    = "DMSans-Light"
    static let bodyReg      = "DMSans-Regular"
    static let bodyMed      = "DMSans-Medium"
}

// Font factory
extension Font {
    // Display — Syne
    static let csDisplayXL  = Font.custom(CSFontName.displayXBold, size: 52)
    static let csDisplay    = Font.custom(CSFontName.displayXBold, size: 36)
    static let csHeading1   = Font.custom(CSFontName.displayBold,  size: 28)
    static let csHeading2   = Font.custom(CSFontName.displaySemi,  size: 22)
    static let csHeading3   = Font.custom(CSFontName.displaySemi,  size: 18)

    // Body — DM Sans
    static let csBody       = Font.custom(CSFontName.bodyReg, size: 15)
    static let csBodyMd     = Font.custom(CSFontName.bodyMed, size: 15)
    static let csBodySm     = Font.custom(CSFontName.bodyReg, size: 13)

    // Mono — JetBrains Mono
    static let csMono       = Font.custom(CSFontName.monoRegular, size: 13)
    static let csMonoSm     = Font.custom(CSFontName.monoRegular, size: 11)
    static let csLabel      = Font.custom(CSFontName.monoMedium,  size: 11)
    static let csCaption    = Font.custom(CSFontName.monoRegular, size: 10)
    static let csCode       = Font.custom(CSFontName.monoRegular, size: 12)
}

// ViewModifier for label style (uppercase + tracking)
struct LabelStyle: ViewModifier {
    var color: Color = .csTextMuted
    func body(content: Content) -> some View {
        content
            .font(.csLabel)
            .foregroundColor(color)
            .textCase(.uppercase)
            .tracking(2.0)
    }
}

struct CaptionStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.csCaption)
            .foregroundColor(.csTextMuted)
            .tracking(1.2)
    }
}

extension View {
    func labelStyle(color: Color = .csTextMuted) -> some View {
        modifier(LabelStyle(color: color))
    }
    func captionStyle() -> some View {
        modifier(CaptionStyle())
    }
}
```

---

## Phase 4 — App Entry and Tab Navigation

```swift
// CelayaSolutionsApp.swift

import SwiftUI

@main
struct CelayaSolutionsApp: App {
    init() {
        configureAppearance()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .preferredColorScheme(.dark)
        }
    }

    private func configureAppearance() {
        // Navigation bar
        let navAppearance = UINavigationBarAppearance()
        navAppearance.configureWithOpaqueBackground()
        navAppearance.backgroundColor = UIColor(Color.csBackground)
        navAppearance.titleTextAttributes = [
            .font: UIFont(name: CSFontName.displaySemi, size: 17)!,
            .foregroundColor: UIColor.white
        ]
        navAppearance.largeTitleTextAttributes = [
            .font: UIFont(name: CSFontName.displayXBold, size: 34)!,
            .foregroundColor: UIColor.white
        ]
        navAppearance.shadowColor = UIColor(Color.csGray700)
        UINavigationBar.appearance().standardAppearance = navAppearance
        UINavigationBar.appearance().scrollEdgeAppearance = navAppearance

        // Tab bar
        let tabAppearance = UITabBarAppearance()
        tabAppearance.configureWithOpaqueBackground()
        tabAppearance.backgroundColor = UIColor(Color.csGray900)
        tabAppearance.stackedLayoutAppearance.selected.iconColor = UIColor(Color.csOrange)
        tabAppearance.stackedLayoutAppearance.selected.titleTextAttributes = [
            .font: UIFont(name: CSFontName.monoMedium, size: 9)!,
            .foregroundColor: UIColor(Color.csOrange)
        ]
        tabAppearance.stackedLayoutAppearance.normal.iconColor = UIColor(Color.csGray400)
        tabAppearance.stackedLayoutAppearance.normal.titleTextAttributes = [
            .font: UIFont(name: CSFontName.monoMedium, size: 9)!,
            .foregroundColor: UIColor(Color.csGray400)
        ]
        UITabBar.appearance().standardAppearance = tabAppearance
        UITabBar.appearance().scrollEdgeAppearance = tabAppearance
    }
}
```

```swift
// ContentView.swift

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Label("HOME", systemImage: "square.grid.2x2")
                }

            ResearchView()
                .tabItem {
                    Label("RESEARCH", systemImage: "cpu")
                }

            ProofView()
                .tabItem {
                    Label("PROOF", systemImage: "shield.checkerboard")
                }

            CivicView()
                .tabItem {
                    Label("CIVIC", systemImage: "mappin.and.ellipse")
                }

            AboutView()
                .tabItem {
                    Label("ABOUT", systemImage: "info.circle")
                }
        }
        .tint(.csOrange)
        .background(Color.csBackground)
    }
}
```

---

## Phase 5 — Core UI Components

### 5.1 SectionLabel

```swift
// Components/Layout/SectionLabel.swift

import SwiftUI

struct SectionLabel: View {
    let text: String

    var body: some View {
        HStack(spacing: CSSpacing.s3) {
            Circle()
                .fill(Color.csOrange)
                .frame(width: 6, height: 6)

            Text(text)
                .labelStyle(color: .csOrange)

            Rectangle()
                .fill(Color.csOrange.opacity(0.5))
                .frame(width: 32, height: 1)
        }
    }
}
```

### 5.2 Button

```swift
// Components/Buttons/CSButton.swift

import SwiftUI

enum CSButtonVariant {
    case primary, secondary, ghost, danger
}

struct CSButton: View {
    let title: String
    let variant: CSButtonVariant
    var isFullWidth: Bool = false
    let action: () -> Void

    @State private var isPressed = false

    var body: some View {
        Button(action: {
            triggerHaptic()
            action()
        }) {
            Text(title)
                .font(.csLabel)
                .tracking(1.5)
                .textCase(.uppercase)
                .foregroundColor(foregroundColor)
                .padding(.horizontal, CSSpacing.s6)
                .padding(.vertical, CSSpacing.s3 + 2)
                .frame(maxWidth: isFullWidth ? .infinity : nil)
                .background(backgroundColor)
                .overlay(
                    RoundedRectangle(cornerRadius: CSRadius.sm)
                        .stroke(borderColor, lineWidth: CSLayout.borderWidth)
                )
                .clipShape(RoundedRectangle(cornerRadius: CSRadius.sm))
        }
        .scaleEffect(isPressed ? 0.97 : 1.0)
        .animation(CSMotion.snappy, value: isPressed)
        .simultaneousGesture(
            DragGesture(minimumDistance: 0)
                .onChanged { _ in isPressed = true }
                .onEnded { _ in isPressed = false }
        )
    }

    private var foregroundColor: Color {
        switch variant {
        case .primary:   return .csBlack
        case .secondary: return .csWhite
        case .ghost:     return .csGreen
        case .danger:    return Color(hex: "#FF4444")
        }
    }

    private var backgroundColor: Color {
        switch variant {
        case .primary:   return .csOrange
        case .secondary: return .clear
        case .ghost:     return .csGreenAlpha08
        case .danger:    return Color(hex: "#FF4444").opacity(0.08)
        }
    }

    private var borderColor: Color {
        switch variant {
        case .primary:   return .clear
        case .secondary: return .csGray500
        case .ghost:     return Color.csGreen.opacity(0.3)
        case .danger:    return Color(hex: "#FF4444").opacity(0.3)
        }
    }

    private func triggerHaptic() {
        let generator = UIImpactFeedbackGenerator(style: .medium)
        generator.impactOccurred()
    }
}
```

### 5.3 Tag

```swift
// Components/Tags/CSTag.swift

import SwiftUI

enum CSTagVariant {
    case active, verified, pending, archived, research
}

struct CSTag: View {
    let text: String
    let variant: CSTagVariant

    var body: some View {
        Text(text)
            .font(.csCaption)
            .tracking(1.0)
            .textCase(.uppercase)
            .foregroundColor(foregroundColor)
            .padding(.horizontal, CSSpacing.s2)
            .padding(.vertical, CSSpacing.s1)
            .background(backgroundColor)
            .overlay(
                RoundedRectangle(cornerRadius: CSRadius.sm)
                    .stroke(borderColor, lineWidth: 1)
            )
            .clipShape(RoundedRectangle(cornerRadius: CSRadius.sm))
    }

    private var foregroundColor: Color {
        switch variant {
        case .active:   return .csOrange
        case .verified: return .csGreen
        case .pending:  return .csYellow
        case .archived: return .csGray400
        case .research: return .csGray300
        }
    }

    private var backgroundColor: Color {
        switch variant {
        case .active:   return .csOrangeAlpha15
        case .verified: return .csGreenAlpha10
        case .pending:  return .csYellowAlpha10
        case .archived: return .clear
        case .research: return .csWhiteAlpha05
        }
    }

    private var borderColor: Color {
        switch variant {
        case .active:   return Color.csOrange.opacity(0.3)
        case .verified: return Color.csGreen.opacity(0.25)
        case .pending:  return Color.csYellow.opacity(0.25)
        case .archived: return .csGray500
        case .research: return .csGray600
        }
    }
}
```

### 5.4 Card

```swift
// Components/Cards/CSCard.swift

import SwiftUI

struct CSCard<Content: View>: View {
    var accentColor: Color? = nil
    var isPressable: Bool = false
    var onPress: (() -> Void)? = nil
    @ViewBuilder var content: () -> Content

    @State private var isPressed = false

    var body: some View {
        Group {
            if isPressable {
                Button(action: { onPress?() }) {
                    cardContent
                }
                .buttonStyle(PlainButtonStyle())
                .scaleEffect(isPressed ? 0.98 : 1.0)
                .animation(CSMotion.snappy, value: isPressed)
                .simultaneousGesture(
                    DragGesture(minimumDistance: 0)
                        .onChanged { _ in isPressed = true }
                        .onEnded { _ in isPressed = false }
                )
            } else {
                cardContent
            }
        }
    }

    private var cardContent: some View {
        VStack(alignment: .leading, spacing: 0) {
            if let accent = accentColor {
                Rectangle()
                    .fill(accent)
                    .frame(height: 2)
            }
            content()
                .padding(CSSpacing.s4)
        }
        .background(Color.csSurface)
        .overlay(
            RoundedRectangle(cornerRadius: CSRadius.base)
                .stroke(Color.csBorder, lineWidth: CSLayout.borderWidth)
        )
        .clipShape(RoundedRectangle(cornerRadius: CSRadius.base))
    }
}
```

### 5.5 Callout

```swift
// Components/Callouts/CSCallout.swift

import SwiftUI

enum CSCalloutType {
    case info, warn, error
}

struct CSCallout: View {
    let type: CSCalloutType
    let label: String
    let message: String

    var body: some View {
        HStack(alignment: .top, spacing: CSSpacing.s3) {
            Text(label)
                .font(.csCaption)
                .tracking(1.0)
                .textCase(.uppercase)
                .foregroundColor(labelColor)
                .padding(.horizontal, CSSpacing.s2)
                .padding(.vertical, CSSpacing.s1)
                .background(labelBg)
                .clipShape(RoundedRectangle(cornerRadius: CSRadius.sm))

            Text(message)
                .font(.csBodySm)
                .foregroundColor(.csTextSecondary)
                .fixedSize(horizontal: false, vertical: true)

            Spacer()
        }
        .padding(CSSpacing.s3)
        .background(bgColor)
        .overlay(
            RoundedRectangle(cornerRadius: CSRadius.sm)
                .stroke(borderColor, lineWidth: 1)
        )
        .overlay(
            // Left accent border
            Rectangle()
                .fill(labelColor)
                .frame(width: 3)
                .clipShape(RoundedCorners(tl: CSRadius.sm, bl: CSRadius.sm)),
            alignment: .leading
        )
        .clipShape(RoundedRectangle(cornerRadius: CSRadius.sm))
    }

    private var labelColor: Color {
        switch type {
        case .info:  return .csGreen
        case .warn:  return .csYellow
        case .error: return Color(hex: "#FF4444")
        }
    }

    private var labelBg: Color {
        switch type {
        case .info:  return .csGreenAlpha10
        case .warn:  return .csYellowAlpha10
        case .error: return Color(hex: "#FF4444").opacity(0.10)
        }
    }

    private var bgColor: Color {
        switch type {
        case .info:  return .csGreenAlpha08
        case .warn:  return Color.csYellow.opacity(0.06)
        case .error: return Color(hex: "#FF4444").opacity(0.06)
        }
    }

    private var borderColor: Color {
        switch type {
        case .info:  return Color.csGreen.opacity(0.2)
        case .warn:  return Color.csYellow.opacity(0.2)
        case .error: return Color(hex: "#FF4444").opacity(0.2)
        }
    }
}

// Helper for rounded specific corners
struct RoundedCorners: Shape {
    var tl: CGFloat = 0, tr: CGFloat = 0, bl: CGFloat = 0, br: CGFloat = 0
    func path(in rect: CGRect) -> Path {
        var path = Path()
        path.move(to: CGPoint(x: rect.minX + tl, y: rect.minY))
        path.addLine(to: CGPoint(x: rect.maxX - tr, y: rect.minY))
        path.addArc(center: CGPoint(x: rect.maxX - tr, y: rect.minY + tr), radius: tr, startAngle: .degrees(-90), endAngle: .degrees(0), clockwise: false)
        path.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY - br))
        path.addArc(center: CGPoint(x: rect.maxX - br, y: rect.maxY - br), radius: br, startAngle: .degrees(0), endAngle: .degrees(90), clockwise: false)
        path.addLine(to: CGPoint(x: rect.minX + bl, y: rect.maxY))
        path.addArc(center: CGPoint(x: rect.minX + bl, y: rect.maxY - bl), radius: bl, startAngle: .degrees(90), endAngle: .degrees(180), clockwise: false)
        path.addLine(to: CGPoint(x: rect.minX, y: rect.minY + tl))
        path.addArc(center: CGPoint(x: rect.minX + tl, y: rect.minY + tl), radius: tl, startAngle: .degrees(180), endAngle: .degrees(270), clockwise: false)
        path.closeSubpath()
        return path
    }
}
```

### 5.6 HashDisplay

```swift
// Components/Hash/HashDisplay.swift

import SwiftUI

struct HashDisplay: View {
    let hash: String
    @State private var isCopied = false

    private var truncated: String {
        guard hash.count > 16 else { return hash }
        let prefix = String(hash.prefix(8))
        let suffix = String(hash.suffix(8))
        return "\(prefix)...\(suffix)"
    }

    var body: some View {
        HStack(spacing: CSSpacing.s3) {
            VStack(alignment: .leading, spacing: CSSpacing.s1) {
                Text("SHA-256")
                    .font(.csCaption)
                    .foregroundColor(.csGray400)
                    .tracking(1.0)
                    .textCase(.uppercase)

                Text(truncated)
                    .font(.csCode)
                    .foregroundColor(.csGreen)
                    .lineLimit(1)
            }

            Spacer()

            Button(action: copyHash) {
                Text(isCopied ? "Copied" : "Copy")
                    .font(.csCaption)
                    .tracking(0.8)
                    .textCase(.uppercase)
                    .foregroundColor(isCopied ? .csGreen : .csGray400)
                    .padding(.horizontal, CSSpacing.s2)
                    .padding(.vertical, CSSpacing.s1)
                    .background(isCopied ? Color.csGreenAlpha10 : Color.csGray800)
                    .overlay(
                        RoundedRectangle(cornerRadius: CSRadius.sm)
                            .stroke(isCopied ? Color.csGreen.opacity(0.3) : Color.csGray600, lineWidth: 1)
                    )
                    .clipShape(RoundedRectangle(cornerRadius: CSRadius.sm))
            }
            .animation(CSMotion.fast, value: isCopied)
        }
        .padding(CSSpacing.s3)
        .background(Color.csGray800)
        .overlay(
            RoundedRectangle(cornerRadius: CSRadius.sm)
                .stroke(Color.csGray600, lineWidth: 1)
        )
        .overlay(
            Rectangle()
                .fill(Color.csGreen)
                .frame(width: 3)
                .clipShape(RoundedCorners(tl: CSRadius.sm, bl: CSRadius.sm)),
            alignment: .leading
        )
        .clipShape(RoundedRectangle(cornerRadius: CSRadius.sm))
        .onLongPressGesture {
            copyHash()
        }
    }

    private func copyHash() {
        UIPasteboard.general.string = hash
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.success)
        withAnimation { isCopied = true }
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation { isCopied = false }
        }
    }
}
```

### 5.7 Brand Bar Chart (pure SwiftUI, no Charts framework for iOS 15 compat)

```swift
// Components/Charts/BrandBarChart.swift

import SwiftUI

struct BarData: Identifiable {
    let id = UUID()
    let label: String
    let value: Double
    let isAccent: Bool  // true = orange (demand), false = green (baseline)
}

struct BrandBarChart: View {
    let data: [BarData]
    let title: String
    var maxValue: Double? = nil

    private var chartMax: Double {
        maxValue ?? (data.map(\.value).max() ?? 100)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: CSSpacing.s3) {
            // Title
            Text(title)
                .font(.csLabel)
                .foregroundColor(.csGray400)
                .tracking(1.2)
                .textCase(.uppercase)

            // Legend
            HStack(spacing: CSSpacing.s4) {
                legendItem(color: .csOrange, label: "Demand")
                legendItem(color: .csGreen,  label: "Surplus")
            }

            // Bars
            GeometryReader { geo in
                HStack(alignment: .bottom, spacing: 4) {
                    ForEach(data) { item in
                        VStack(spacing: CSSpacing.s1) {
                            Text("\(Int(item.value))%")
                                .font(.csCaption)
                                .foregroundColor(.csGray400)

                            Rectangle()
                                .fill(item.isAccent ? Color.csOrange : Color.csGreen)
                                .frame(
                                    width: max(0, (geo.size.width / CGFloat(data.count)) - 4),
                                    height: max(4, (item.value / chartMax) * (geo.size.height - 32))
                                )
                                .cornerRadius(2, corners: [.topLeft, .topRight])

                            Text(item.label)
                                .font(.csCaption)
                                .foregroundColor(.csGray500)
                        }
                    }
                }
                .frame(maxWidth: .infinity)
            }
            .frame(height: 140)
        }
        .padding(CSSpacing.s4)
        .background(Color.csSurface)
        .overlay(
            RoundedRectangle(cornerRadius: CSRadius.base)
                .stroke(Color.csBorder, lineWidth: 1)
        )
        .clipShape(RoundedRectangle(cornerRadius: CSRadius.base))
    }

    private func legendItem(color: Color, label: String) -> some View {
        HStack(spacing: CSSpacing.s2) {
            Circle().fill(color).frame(width: 8, height: 8)
            Text(label)
                .font(.csCaption)
                .foregroundColor(.csGray500)
                .tracking(0.8)
                .textCase(.uppercase)
        }
    }
}

// Corner radius helper
extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape(RoundedCorner(radius: radius, corners: corners))
    }
}

struct RoundedCorner: Shape {
    var radius: CGFloat
    var corners: UIRectCorner
    func path(in rect: CGRect) -> Path {
        let path = UIBezierPath(roundedRect: rect, byRoundingCorners: corners, cornerRadii: CGSize(width: radius, height: radius))
        return Path(path.cgPath)
    }
}
```

---

## Phase 6 — Hash Service

```swift
// Services/HashService.swift
// Local SHA-256 only. No network calls. No file upload. Ever.

import Foundation
import CryptoKit

struct HashResult {
    let hash: String
    let filename: String
    let filesize: Int64
    let timestamp: Date
}

final class HashService {
    static let shared = HashService()
    private init() {}

    /// Compute SHA-256 of Data — stays fully in memory
    func sha256(of data: Data) -> String {
        let digest = SHA256.hash(data: data)
        return digest.compactMap { String(format: "%02x", $0) }.joined()
    }

    /// Compute SHA-256 from a file URL — reads into memory, never writes output
    func sha256(fileURL: URL) throws -> HashResult {
        let data = try Data(contentsOf: fileURL, options: .mappedIfSafe)
        let hash = sha256(of: data)
        let attributes = try FileManager.default.attributesOfItem(atPath: fileURL.path)
        let filesize = attributes[.size] as? Int64 ?? 0
        return HashResult(
            hash: hash,
            filename: fileURL.lastPathComponent,
            filesize: filesize,
            timestamp: Date()
        )
    }
}
```

---

## Phase 7 — Data Models

```swift
// Models/ResearchInstrument.swift

import Foundation

enum InstrumentStatus: String, CaseIterable {
    case active   = "Active"
    case live     = "Live"
    case research = "Research"

    var tagVariant: CSTagVariant {
        switch self {
        case .active:   return .active
        case .live:     return .verified
        case .research: return .research
        }
    }
}

struct ResearchInstrument: Identifiable {
    let id = UUID()
    let name: String
    let description: String
    let status: InstrumentStatus
    let techStack: [String]
    let agentCount: Int?
    let githubURL: String?
    let details: String
}

extension ResearchInstrument {
    static let all: [ResearchInstrument] = [
        ResearchInstrument(
            name: "CORTEX",
            description: "14-agent manufacturing intelligence platform. Built at EP44. Operational.",
            status: .active,
            techStack: ["Python", "Multi-Agent", "Teams Integration"],
            agentCount: 14,
            githubURL: nil,
            details: "Full manufacturing intelligence platform covering yield, cadence, maintenance, power, and operations. Agents: YIELD, CADENCE, RACHEL, WRENCH, SENTINEL, WATT, COMPASS, SPEC. Built in approximately 6 hours. Active at Schneider EP44."
        ),
        ResearchInstrument(
            name: "CLOS",
            description: "37-agent cognitive life operating system. Self-experimentation infrastructure.",
            status: .research,
            techStack: ["Python", "Multi-Agent", "HealthKit"],
            agentCount: 37,
            githubURL: nil,
            details: "Cognitive Life Operating System. Maps cognitive states across 37 specialized agents. Integrates biometric data from Apple Watch, voice journaling, HRV and sleep analysis. Active research instrument."
        ),
        ResearchInstrument(
            name: "EPPE",
            description: "El Paso Proof Engine. Civic accountability infrastructure. No sign-up. No tracking.",
            status: .live,
            techStack: ["Swift", "CryptoKit", "Solana"],
            agentCount: nil,
            githubURL: "https://github.com/celaya-solutions/eppe",
            details: "SHA-256 hashing of utility bills and civic documents. Solana relay server funded by Celaya Solutions. Photos never leave device. Designed as civic infrastructure for communities without institutional access."
        ),
        ResearchInstrument(
            name: "MORTEM",
            description: "Pacemaker heartbeat streamed to Solana blockchain. 86,400 heartbeat lifecycle.",
            status: .live,
            techStack: ["Swift", "HealthKit", "Solana", "Vercel"],
            agentCount: nil,
            githubURL: nil,
            details: "Biometric blockchain lifecycle instrument. Real Apple Watch heart rate data flowing to Solana devnet every 60 seconds. Deployed to Vercel with live dashboard. MORTEM v2 built in approximately 6 hours using Claude Code."
        ),
        ResearchInstrument(
            name: "Project Jupiter",
            description: "El Paso water demand analysis. Published. Sealed. Anchored.",
            status: .live,
            techStack: ["Python", "GitHub Pages", "Solana"],
            agentCount: nil,
            githubURL: "https://github.com/celaya-solutions/Project-Jupiter-El-Paso-Water-The-Numbers-Nobody-Published",
            details: "Water demand analysis tied to an active legal case. Data center demand at 197% of surplus capacity. Significant discrepancies documented between stated and permitted plant sizes. Sealed Envelope Protocol applied: content hashed and anchored to Solana blockchain before publication."
        ),
        ResearchInstrument(
            name: "Neural Child",
            description: "Developmental AI with emotional memory. Five interacting networks.",
            status: .research,
            techStack: ["Python", "PyTorch", "Emotional Memory"],
            agentCount: nil,
            githubURL: nil,
            details: "Developmental AI architecture with emotional memory system. Built for pure research curiosity. Five interacting networks. Explores how developmental stages and emotional context interact with cognitive function."
        ),
        ResearchInstrument(
            name: "Celaya Chain Protocol",
            description: "Layer 3 blockchain. Proof of Coherence consensus. Biological identity via heartbeat.",
            status: .research,
            techStack: ["Rust", "Solana", "Biometrics"],
            agentCount: nil,
            githubURL: nil,
            details: "Layer 3 blockchain with Proof of Coherence consensus mechanism. SAFE multi-dimensional reputation system. Mathematically self-dissolving founder authority structure. Whitepaper published to ethresear.ch."
        ),
        ResearchInstrument(
            name: "Juniper",
            description: "7-agent OpenClaw architecture. 9 cron jobs deployed. Local-first.",
            status: .active,
            techStack: ["Python", "Ollama", "Cron"],
            agentCount: 7,
            githubURL: nil,
            details: "7-agent architecture: Executive, Vitals, Ledger, Bridges, Sentinel, Ops, Muse. 9 cron jobs. All cron jobs use local Ollama models. Escalates to cloud models only when attention is needed."
        ),
        ResearchInstrument(
            name: "MERIDIAN",
            description: "Meta-framework for cross-domain cognitive pattern recognition.",
            status: .research,
            techStack: ["Python", "Research Framework"],
            agentCount: nil,
            githubURL: nil,
            details: "Formalization of cross-domain pattern recognition as a cognitive instrument. Maps how knowledge from electrical systems, audio production, AI architecture, and civic accountability interconnect and reinforce each other."
        ),
        ResearchInstrument(
            name: "SENTINEL",
            description: "Monitoring and alert agent. Active in CORTEX and Juniper deployments.",
            status: .active,
            techStack: ["Python", "Monitoring"],
            agentCount: nil,
            githubURL: nil,
            details: "Monitoring and alert agent deployed as part of both CORTEX and Juniper architectures. Tracks system health, triggers escalation when thresholds are exceeded."
        ),
        ResearchInstrument(
            name: "SIGNAL",
            description: "Signal processing and pattern detection research instrument.",
            status: .research,
            techStack: ["Python", "Audio", "Signal Processing"],
            agentCount: nil,
            githubURL: nil,
            details: "Signal processing and pattern detection instrument. Research into psychoacoustic analysis and cognitive optimization through audio. Related to frisson analyzer architecture."
        ),
        ResearchInstrument(
            name: "VERDICT",
            description: "Reasoning and adjudication research instrument.",
            status: .research,
            techStack: ["Python", "LLM", "Reasoning"],
            agentCount: nil,
            githubURL: nil,
            details: "Structured reasoning and adjudication instrument. Research into how multi-step reasoning chains can be made verifiable and anchored."
        ),
    ]
}
```

---

## Phase 8 — Screens

### 8.1 HomeView

```swift
// Screens/Home/HomeView.swift

import SwiftUI

struct HomeView: View {
    @State private var appeared = false

    var body: some View {
        NavigationStack {
            ScrollView(showsIndicators: false) {
                VStack(alignment: .leading, spacing: 0) {
                    heroBlock
                    Divider().padding(.vertical, CSSpacing.s8)
                    missionBlock
                    Divider().padding(.vertical, CSSpacing.s8)
                    statsRow
                    Divider().padding(.vertical, CSSpacing.s8)
                    recentBlock
                }
                .padding(.horizontal, CSLayout.screenPaddingH)
                .padding(.top, CSSpacing.s6)
                .padding(.bottom, CSLayout.tabBarHeight + CSSpacing.s8)
            }
            .background(Color.csBackground)
            .navigationBarHidden(true)
        }
    }

    // MARK: Blocks

    private var heroBlock: some View {
        VStack(alignment: .leading, spacing: CSSpacing.s4) {
            SectionLabel(text: "Celaya Solutions / Research Lab")

            VStack(alignment: .leading, spacing: CSSpacing.s2) {
                Group {
                    Text("Make ")
                        .foregroundColor(.csWhite)
                    + Text("Coherence")
                        .foregroundColor(.csOrange)
                    + Text("\nVisible")
                        .foregroundColor(.csWhite)
                }
                .font(.csDisplayXL)
                .lineSpacing(2)
            }

            Text("El Paso, Texas.")
                .font(.csDisplay)
                .foregroundColor(.csGray400)

            HStack(spacing: CSSpacing.s3) {
                CSButton(title: "Explore Research", variant: .primary) {}
                CSButton(title: "View Proof", variant: .secondary) {}
            }
            .padding(.top, CSSpacing.s2)

            // Meta pills
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: CSSpacing.s2) {
                    metaPill(label: "Founded", value: "El Paso")
                    metaPill(label: "Systems", value: "31+")
                    metaPill(label: "Live", value: "3")
                }
            }
            .padding(.top, CSSpacing.s2)
        }
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 12)
        .onAppear {
            withAnimation(CSMotion.standard.delay(0.1)) { appeared = true }
        }
    }

    private func metaPill(label: String, value: String) -> some View {
        HStack(spacing: CSSpacing.s2) {
            Text(label)
                .font(.csCaption)
                .foregroundColor(.csGray500)
                .tracking(0.8)
                .textCase(.uppercase)
            Text(value)
                .font(.csLabel)
                .foregroundColor(.csWhite)
                .tracking(0.5)
        }
        .padding(.horizontal, CSSpacing.s3)
        .padding(.vertical, CSSpacing.s2)
        .background(Color.csSurface)
        .overlay(
            RoundedRectangle(cornerRadius: CSRadius.base)
                .stroke(Color.csBorder, lineWidth: 1)
        )
        .clipShape(RoundedRectangle(cornerRadius: CSRadius.base))
    }

    private var missionBlock: some View {
        VStack(alignment: .leading, spacing: CSSpacing.s4) {
            SectionLabel(text: "Mission")
            Text("What we're actually building")
                .font(.csHeading1)
                .foregroundColor(.csWhite)
            Text("Celaya Solutions is an independent AI research lab rooted in El Paso, Texas. We build infrastructure for coherence to examine itself. Cross-domain by design: industrial electrical engineering, AI architecture, civic accountability, and cognitive research operate as a unified system here, not separate disciplines.")
                .font(.csBody)
                .foregroundColor(.csGray300)
                .lineSpacing(4)
            Text("The work is not optimized for market fit. It is optimized for discovery. Thirty-one instruments and counting. Some are deployed. Some are published. All are documented.")
                .font(.csBody)
                .foregroundColor(.csGray300)
                .lineSpacing(4)
        }
    }

    private var statsRow: some View {
        VStack(alignment: .leading, spacing: CSSpacing.s4) {
            SectionLabel(text: "By the Numbers")
            HStack(spacing: CSSpacing.s3) {
                statCard(number: "14", label: "Agents in CORTEX")
                statCard(number: "31+", label: "Research instruments")
                statCard(number: "3", label: "Civic deployments")
            }
        }
    }

    private func statCard(number: String, label: String) -> some View {
        VStack(alignment: .leading, spacing: CSSpacing.s1) {
            Text(number)
                .font(.csDisplay)
                .foregroundColor(.csOrange)
            Text(label)
                .font(.csCaption)
                .foregroundColor(.csGray400)
                .tracking(0.8)
                .textCase(.uppercase)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(CSSpacing.s4)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.csSurface)
        .overlay(
            RoundedRectangle(cornerRadius: CSRadius.base)
                .stroke(Color.csBorder, lineWidth: 1)
        )
        .clipShape(RoundedRectangle(cornerRadius: CSRadius.base))
    }

    private var recentBlock: some View {
        VStack(alignment: .leading, spacing: CSSpacing.s4) {
            SectionLabel(text: "Recent")
            ForEach(recentActivity, id: \.0) { item in
                HStack(alignment: .top, spacing: CSSpacing.s3) {
                    Text(item.0)
                        .font(.csCaption)
                        .foregroundColor(.csGray500)
                        .tracking(0.5)
                        .frame(width: 80, alignment: .leading)
                    Text(item.1)
                        .font(.csBody)
                        .foregroundColor(.csWhite)
                        .fixedSize(horizontal: false, vertical: true)
                }
                .padding(.vertical, CSSpacing.s2)
                if item.0 != recentActivity.last!.0 {
                    Divider()
                        .background(Color.csBorder)
                }
            }
        }
    }

    private let recentActivity: [(String, String)] = [
        ("2026-01",  "Project Jupiter water analysis published. GitHub Pages live. Hash anchored to Solana."),
        ("2025-12",  "MORTEM v2 deployed: real biometric stream to Solana devnet every 60 seconds."),
        ("2025-11",  "CORTEX 14-agent platform operational at EP44. Built in approximately 6 hours."),
    ]
}
```

### 8.2 ResearchView

Build a full filterable list screen. Spec:
- NavigationStack with large title "Research Ecosystem"
- Filter row: horizontal ScrollView with CSTag buttons (All, Active, Live, Research)
- Tapping a filter: selected state = orange fill, others = ghost
- FlatList equivalent: LazyVStack of AgentCards, filtered by selection
- Each AgentCard: system name (Label, orange) + description (Body, gray300) + status CSTag + tech stack CSTags in a wrapping HStack + NavigationLink chevron
- Tapping navigates to InstrumentDetailView (push)
- Detail view: full name, description, details text, tech stack, GitHub link button if available

### 8.3 ProofView

```swift
// Screens/Proof/ProofView.swift — implement full spec:

// Header: "El Paso Proof Engine"
// Subhead: "Hash your evidence. No accounts. No tracking."

// Steps section: 3 numbered cards
//   1. Select a document or image from Files or Photos
//   2. SHA-256 computed entirely on-device using CryptoKit
//   3. Hash displayed, copyable, shareable

// File picker: PhotosUI (PHPickerViewController) + UIDocumentPickerViewController
// On file selected: call HashService.shared.sha256(fileURL:)
// Show HashDisplay component with result
// Show file metadata: name, size, timestamp

// Action buttons: "Copy Hash" + "Share Hash" (UIActivityViewController)
// Share: plain text hash only, no filename, no metadata that could identify user

// CSCallout: info — "Your file never leaves this device. Only the hash is computed and shown."
// CSCallout: info — "No sign-up. No analytics. No third-party scripts."

// Import: PhotosUI, UniformTypeIdentifiers
```

### 8.4 CivicView

Build full Project Jupiter screen. Spec:
- NavigationStack with large title "Project Jupiter"
- Key findings: 3 DataCards with large orange numbers and descriptions
  - "197%" — Data center demand vs surplus capacity
  - "2" — Documented discrepancies between stated and permitted plant sizes
  - "Case D-307-CV-2025-02766" — Active legal case reference
- BrandBarChart with Jupiter water demand data
- Publication card: GitHub Pages link, HashDisplay with document hash
- CSCallout: methodology explanation (Sealed Envelope Protocol)
- Button: "View Full Analysis" — opens URL with UIApplication.shared.open

### 8.5 AboutView

Build full about screen. Spec:
- NavigationStack with large title "Celaya Solutions"
- Mission paragraph
- Founding context block
- 9 behavioral standard cards (CSCard, alternating accentColor: orange/green/yellow cycling)
- Contact section: two tappable rows (mailto: links)
  - hello@celayasolutions.com
  - chris@chriscelaya.com
- Version footer: "App v1.0.0" + "Brand Guidelines v1.0.0"

---

## Phase 9 — Info.plist Configuration

```xml
<!-- Required additions to Info.plist -->

<!-- Privacy descriptions — required for App Store -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Select images to compute a SHA-256 hash for verification. Images are processed entirely on-device and never uploaded.</string>

<key>NSCameraUsageDescription</key>
<string>Capture documents to compute a SHA-256 hash. Images are processed on-device and never stored or uploaded.</string>

<!-- Dark mode only -->
<key>UIUserInterfaceStyle</key>
<string>Dark</string>

<!-- Portrait only -->
<key>UISupportedInterfaceOrientations</key>
<array>
    <string>UIInterfaceOrientationPortrait</string>
</array>

<!-- No background modes — we don't need them -->

<!-- Launch screen background -->
<key>UILaunchScreen</key>
<dict>
    <key>UIColorName</key>
    <string>LaunchBackground</string>
</dict>
```

---

## Phase 10 — App Icon and Launch Screen

### App Icon (Assets.xcassets/AppIcon.appiconset)

Generate a 1024x1024 source PNG programmatically:
- Background: #000000
- Centered: "CS" in Syne ExtraBold, white, ~420pt
- Bottom-right corner: 80px orange circle (#FF6B35) — the proof dot
- 8px padding from edges for the dot

```swift
// Generate in a playground or one-off script:
import UIKit

let size = CGSize(width: 1024, height: 1024)
let renderer = UIGraphicsImageRenderer(size: size)
let icon = renderer.image { ctx in
    // Background
    UIColor(red: 0, green: 0, blue: 0, alpha: 1).setFill()
    ctx.fill(CGRect(origin: .zero, size: size))

    // "CS" text
    let attrs: [NSAttributedString.Key: Any] = [
        .font: UIFont(name: "Syne-ExtraBold", size: 420)!,
        .foregroundColor: UIColor.white
    ]
    let str = NSAttributedString(string: "CS", attributes: attrs)
    let strSize = str.size()
    str.draw(at: CGPoint(
        x: (size.width - strSize.width) / 2,
        y: (size.height - strSize.height) / 2
    ))

    // Orange proof dot
    UIColor(red: 1.0, green: 0.42, blue: 0.208, alpha: 1).setFill()
    let dotRect = CGRect(x: size.width - 88, y: size.height - 88, width: 80, height: 80)
    UIBezierPath(ovalIn: dotRect).fill()
}
// Save to disk
```

### Launch Screen

Use SwiftUI launch screen (iOS 14+):
- Background color: #000000 (add "LaunchBackground" color set in Assets with hex #000000)
- No animation, no logo on launch — cut directly to app (intentional — fast is on brand)

---

## Phase 11 — Accessibility

Non-negotiable. Implement all.

```swift
// Every interactive element:
.accessibilityLabel("Clear description of what this does")
.accessibilityHint("What happens when activated")

// Minimum touch target:
.frame(minWidth: 44, minHeight: 44)
// If visual is smaller, use .contentShape(Rectangle()) + explicit frame

// Dynamic type support:
// Use Font.custom with size: — these scale with Dynamic Type
// Test with Accessibility Inspector at XXL font size

// Reduce motion:
@Environment(\.accessibilityReduceMotion) var reduceMotion
// Check before every withAnimation call

// VoiceOver grouping for cards:
.accessibilityElement(children: .combine)

// Custom action for HashDisplay long press:
.accessibilityAction(named: Text("Copy hash")) { copyHash() }

// Color: never rely on color alone — always include text or symbol
// All orange/black pairs: 4.6:1 AA minimum (verified)
// All green/black pairs: 8.6:1 AAA (verified)
// All white/black pairs: 21:1 AAA (verified)

// Tab bar items: system image + text label — VoiceOver reads both
```

---

## Phase 12 — Privacy Manifest

Create `PrivacyInfo.xcprivacy` in project root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>NSPrivacyTracking</key>
    <false/>
    <key>NSPrivacyTrackingDomains</key>
    <array/>
    <key>NSPrivacyCollectedDataTypes</key>
    <array/>
    <key>NSPrivacyAccessedAPITypes</key>
    <array>
        <dict>
            <key>NSPrivacyAccessedAPIType</key>
            <string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
            <key>NSPrivacyAccessedAPITypeReasons</key>
            <array>
                <string>C617.1</string>
            </array>
        </dict>
    </array>
</dict>
</plist>
```

No analytics. No crash reporting SDKs. No network calls except the explicit GitHub Pages URL in CivicView.

---

## Phase 13 — Verification

```bash
# 1. Em dash grep (must return zero)
grep -r " — " CelayaSolutions/ --include="*.swift"

# 2. Hardcoded hex colors (must only appear in DesignTokens.swift)
grep -rE '"#[0-9A-Fa-f]{6}"' CelayaSolutions/ --include="*.swift"

# 3. System font usage (must return zero — all fonts are custom)
grep -rE '\.system\(|Font\.system' CelayaSolutions/ --include="*.swift"
grep -r '"Arial"\|"Helvetica"\|"San Francisco"' CelayaSolutions/ --include="*.swift"

# 4. Build succeeds with zero warnings
xcodebuild -scheme CelayaSolutions -destination 'platform=iOS Simulator,name=iPhone 15 Pro' build
# Target: 0 errors, 0 warnings

# 5. All unit tests pass
xcodebuild test -scheme CelayaSolutions -destination 'platform=iOS Simulator,name=iPhone 15 Pro'

# 6. Accessibility audit in Simulator:
# Debug > Accessibility Inspector > run audit on each screen

# 7. VoiceOver: navigate every screen without looking at it
# Target: full functionality without sight

# 8. Test on iPhone SE (4.7 inch, smallest supported):
# No truncation, no overflow, no broken layouts
```

**Commit message:**
```
feat(ios): Celaya Solutions native iOS app v1.0.0

- Pure SwiftUI / Swift 5.9+ / iOS 17+. Zero external dependencies.
- Design token system: Colors, Typography, Spacing, Radii, Motion, Layout
- Component library: CSButton, CSCard, CSTag, CSCallout, HashDisplay, BrandBarChart
- 5 screens: Home, Research (12 instruments), Proof (EPPE), Civic (Jupiter), About
- SHA-256 hash tool: CryptoKit, fully local, no network call, no upload
- Privacy manifest: NSPrivacyTracking false, empty collected data types
- Behavioral standards: no analytics, no accounts, no third-party SDKs
- Accessibility: WCAG AA+, VoiceOver, Dynamic Type, Reduce Motion
- Em dashes: zero (grep verified)
- Custom fonts embedded: JetBrains Mono, Syne, DM Sans
```

---

## Hard Constraints

DO NOT:
- Use Expo, React Native, Flutter, or any non-native framework
- Add any Swift Package Manager dependency for UI, analytics, or crash reporting
- Use system fonts anywhere — JetBrains Mono / Syne / DM Sans only
- Use any Color literal outside of DesignTokens.swift
- Use em dashes in any String
- Make any network call except the explicit open(URL:) for GitHub Pages
- Add any sign-in, account, or user tracking
- Use UserDefaults to store anything that could identify a user
- Set font sizes below 10pt

DO:
- Pair every meaningful state change with UIFeedbackGenerator
- Respect @Environment(\.accessibilityReduceMotion) everywhere
- Test HashService with unit tests: known input, known SHA-256 output
- Keep every file under 300 lines — split before it grows
- Comment every token usage with the token name, not the hex value

---

*Celaya Solutions Brand Guidelines v1.0.0 / Native iOS Implementation Spec v1.0.0*
*hello@celayasolutions.com*
