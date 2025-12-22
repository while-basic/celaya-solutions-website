# Collect data from every source available using Apple Frameworks using Python or Swift

Last edited time: December 6, 2025 5:18 AM

```
You are an expert iOS engineer, cognitive-science architect, and privacy-first data-collection systems designer. Your task is to design and generate a complete iOS companion app whose primary function is to collect, with user permission and within all Apple-legal and ethical boundaries, every accessible data signal on iPhone that can help analyze human psyche activity, emotional responses, cognitive disturbances, and autonomic nervous system fluctuations.

## Primary Objective
Build a Swift-based iOS app with App Intents + Shortcuts integration that:
1. Collects every legally permitted data source available on iPhone via Apple frameworks.
2. Aggregates the data into a unified structured JSON record.
3. Timestamps and correlates the data around an “emotional/cognitive event” (example: distress spike after difficult call with significant other).
4. Prepares the dataset for analysis by an LLM with reasoning and tool calling, allowing investigation into how the brain and body respond during emotional events.
5. Helps the researcher understand patterns, triggers, causes, and mitigating factors for internal emotional activity.

## Data to Collect (Each With Correct Frameworks + Entitlements)
Generate full implementations, scaffolding, and documentation for accessing all of the following:

### Health + Biological
- Heart rate (real-time + historical)
- Heart rate variability
- Resting heart rate
- Cardio recovery
- Step count
- Walking/running distance
- VO2 Max (if available)
- Exercise minutes / activity rings
- Sleep stages + sleep duration
- Respiratory rate
- Blood oxygen saturation (if supported)
- Menstrual cycle data (if applicable and user-enabled)

### Motion + Device Activity
- Accelerometer
- Gyroscope
- Magnetometer
- DeviceMotion (gravity, rotationRate, userAcceleration)
- Pedometer cadence
- Activity type (walking, running, stationary)
- Fall detection events (if available)

### Location + Environmental
- GPS coordinates
- Horizontal & vertical accuracy
- Speed + course
- Significant location changes
- Visits
- Altitude (barometer)

### Temporal + Circadian Context
- Time of day
- Screen on/off patterns
- Sleep/wake transition state

### Device System Signals
- Battery level
- Battery state (charging, unplugged)
- Screen brightness
- Storage free space
- CPU load (to legal extent)
- Network reachability
- Wi-Fi SSID (if permitted)
- Bluetooth state

### App Usage + Focus State
- DeviceActivity (Screen Time APIs)
- App categories used
- Notifications received

### Social/Cognitive Context (Legal Scope)
- Calendar events
- Reminders
- Communication intent metadata (SiriKit categories only, no private message content)
- Phone call start/end timestamps **(no access to call audio)**

### Media Context
- Recent photos metadata (EXIF: timestamp, location, camera orientation)
- Audio environment classification (SoundAnalysis framework where legal)

### User-Generated Data
- Optional: user journal entry describing emotional event
- Optional: voice note + on-device transcription

## App Architecture Requirements
- Use Swift, SwiftUI, App Intents.
- Modular system: separate collectors for each data domain.
- A unified `DataAggregator` service that merges all collectors.
- JSON schema generator for LLM ingestion.
- Shortcut action: **“Collect Cognitive Event Data Snapshot”** returning full JSON.
- Background tasks where possible (BGProcessingTask + HealthKit background delivery).
- Clear privacy permissions and user-controlled toggles.

## Output Requirements for ChatGPT
Generate the following in order:

1. **High-level systems architecture**
2. **Entitlements and required Apple capabilities**
3. **DataCollector protocol**
4. **Implementation examples for each data domain**
5. **DataAggregator implementation**
6. **App Intent to expose data to Shortcuts**
7. **JSON schema for LLM ingestion**
8. **A sample Shortcut the user will build**
9. **Storage model for historical event tracking**
10. **LLM analysis workflow (how the JSON is used by reasoning models)**

Treat this as the initialization request. Begin with architecture + rationale, then build the entire app step-by-step.~~~

```

```jsx
You are an expert Python engineer, cognitive-science systems architect, and simulation/modeling researcher. Your task is to generate a fully functioning Python program designed for **rapid prototyping and testing** of a cognitive-event analysis pipeline before building the final iOS companion app.

The purpose of this Python program is to simulate, aggregate, timestamp, and store all relevant data signals—biological, cognitive, environmental, and device-activity—so that the research workflow, JSON schema, and LLM-reasoning pipeline can be validated quickly.

## Primary Objectives

1. Build a modular Python framework that simulates all data categories the future iOS app will collect.
2. Provide pluggable “DataCollectors” that produce synthetic or probabilistic values mirroring real iPhone and human-physiology signals.
3. Enable triggering of simulated “cognitive/emotional events” such as distress after a difficult interaction with a significant other.
4. Aggregate all simulated values into a unified JSON record.
5. Provide an LLM-ready analysis pipeline (JSON → reasoning → insights).
6. Allow extremely rapid iteration, modification, and testing.

## Data Domains to Simulate (mirror iOS frameworks)

### Health + Biological

Simulate distributions and time-series for:

* Heart rate (baseline + spikes)
* HRV (inverse correlation with stress)
* Resting HR
* Steps
* Walking/running distance
* VO2 Max (static or very slow-changing)
* Sleep stages
* Respiratory rate
* SpO2
* Menstrual cycle phase (optional)

### Motion + Device Activity

Simulate:

* Accelerometer axes
* Gyroscope axes
* Magnetometer
* DeviceMotion (gravity, rotationRate, userAcceleration)
* Pedometer cadence
* Activity classification (stationary/walking/running)
* Sudden movement during emotional spikes

### Location + Environmental

Simulate:

* GPS coordinates
* Speed & course
* Accuracy
* Visits
* Barometric altitude

### Temporal + Circadian

* Time-of-day patterns
* Sleep/wake transitions
* Screen-on/off patterns influencing rhythm

### System Signals

* Battery level draining heuristics
* Storage free space
* Network reachability patterns
* Wi-Fi state
* Bluetooth enabled/disabled

### App Usage + Focus

Simulate:

* Category-level screen time
* Notifications received
* Do Not Disturb / Focus state

### Social/Cognitive Context

Legally simulated metadata only:

* Calendar events
* Reminders
* Phone call start/end (no audio)
* Approximate communication patterns

### Media Context

* Recent photos metadata (generate EXIF-like dicts)
* Environmental audio classification (calm/noisy/street/office)

### User Data

* Optional: Generated journal text
* Optional: Synthetic voice note transcript

## Python Architecture Requirements

Produce a complete ready-to-run program with:

1. A `DataCollector` base class.
2. Individual collector classes for each domain.
3. A `DataAggregator` that merges all domains into one event snapshot.
4. A `CognitiveEventSimulator` that triggers stress/distress events and modulates all collectors accordingly.
5. A robust JSON schema for final output.
6. Functions to:

   * Run a single snapshot
   * Run multi-hour simulations
   * Export to JSON
   * Stream output for LLM processing
7. Optional: A CLI entrypoint (argparse or Typer)
8. Optional: A visualization module for debugging (matplotlib or plotly)

## Output Requirements

Generate the following in order:

1. High-level architectural overview
2. Full Python folder/project layout
3. Complete source code for each module
4. JSON schema definition
5. Sample execution output
6. Example LLM analysis prompt using collected JSON
7. Instructions for modifying or expanding collectors

Treat this as the initialization request. Begin by outlining architecture, then generate the entire runnable Python prototype.

```