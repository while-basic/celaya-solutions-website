# Celaya Solutions Website - Final Corrections

## Apply These 8 Fixes Before Shipping

-----

## 1. HRV Usage Fixed

### Before (Wrong)

```
flow state = low HRV + sustained focus
```

### After (Correct)

```
Flow state detection:
- Primary: Self-reported (post-session binary: yes/no)
- Secondary: Behavioral markers (sustained focus, low context switches)
- Exploratory: HRV-derived features as physiological proxy

Note: HRV directionality varies by individual and context. We use HRV 
features (RMSSD, LF/HF ratio) as exploratory correlates, not definitive 
indicators. "Confirmed flow" requires self-report + behavioral markers.
```

-----

## 2. Pre-Registration Language Fixed

### Before (Wrong)

```
Analysis: Post-hoc (no pre-registration; pre-registration not applicable for N=1)
```

### After (Correct)

```
Analysis: Exploratory, not pre-registered (N=1 studies can be pre-registered 
but this one was not)
```

-----

## 3. Validation Thresholds Reframed

### Before (Wrong - Reads Like Benchmark Promise)

```python
# 5. Validate (2min)
python validate.py predictions/ sample_data/week1/ground_truth.json
# Should show: accuracy ≥65%, precision ≥70%
```

### After (Correct - Shows Example Output)

```python
# 5. Validate on sample data (2min)
python validate.py predictions/ sample_data/week1/ground_truth.json

# Example output from sample dataset:
# Processed: 5 days
# Predictions matched ground truth: 4/5 days
# Files generated: daily_flow_predictions.json, summary_stats.json
#
# Note: Performance on sample data does not generalize. 
# Your results will vary based on data quality and personal patterns.
```

-----

## 4. Human Judgment Constraint Added

### Before (Incomplete)

```
Human judgment preserved = decision points remain explicit, logged, reversible
```

### After (Complete Technical Boundary)

```
Human judgment preserved = decision points remain:
1. Explicit (surfaced in UI, not hidden)
2. Logged (with provenance trace)
3. Reversible (can be undone or revised)
4. Gated (system cannot execute irreversible actions without user-confirm step)

Technical implementation:
- File deletion: requires confirmation dialog
- API calls with side effects: preview + confirm
- Automated commits: review diff before push
- No silent background execution of user-initiated actions
```

-----

## 5. Cloud Automation Critique Reframed

### Before (Reads Like Hit Piece)

```
Current approaches fail because:
• Cloud automation optimizes for removal of decision points
```

### After (Observable Critique with Evidence Link)

```
Working critique under investigation:
• We observe that cloud-dependent automation systems tend to optimize for 
  decision point removal rather than decision support
• [→ Comparative analysis: Cloud vs Local Decision Architecture]

In this analysis we document:
- 15 popular productivity tools (Notion AI, ChatGPT web, Grammarly, etc.)
- Decision points per workflow (email draft, task planning, research)
- Comparison: user choices preserved vs automated away
- Raw data: screen recordings, decision point logs
```

-----

## 6. Data Retention Hierarchy Clarified

### Before (Contradictory)

```
Active study data: Indefinite (research archive)
Post-publication: 10 years minimum
On request: Participants can request deletion
```

### After (Clear Rule Hierarchy)

```
Data Retention Rules (in order of precedence):

1. Aggregated/Published Data
   - Cannot be deleted once published in papers/datasets
   - Covered by CC BY 4.0 license
   - Permanent archive for reproducibility

2. Individual Raw Data (Before Aggregation)
   - Retained: 10 years post-publication minimum
   - Deletion requests: Honored within 30 days
   - Exception: Cannot delete if already aggregated

3. Active Study Data (Ongoing Research)
   - Retained: Until study completion + analysis
   - Deletion requests: Pauses participation, removes future data only
   - Already collected data follows rules #1-2 above

What you can request deleted:
✓ Your raw voice recordings (before transcription)
✓ Your individual transcripts (before aggregation)
✓ Your biometric data (before aggregation)

What cannot be deleted:
✗ Data already published in aggregate form
✗ Data included in shared datasets under open license
✗ Derived statistics that cannot identify you

How to request: [→ Data deletion form]
Processing time: 30 days
Confirmation: You'll receive deletion certificate with timestamp
```

-----

## 7. Security Specifications Added

### Before (Hand-Waving)

```
Transcripts: Local encrypted storage, cloud backup (anonymized)
```

### After (Technically Specified)

```
Transcripts Storage:

Local (Primary):
- Encryption: AES-256 at-rest (macOS FileVault)
- Location: ~/Documents/research/voice-journals/
- Key management: OS-level (FileVault key in Secure Enclave)
- Access: User account only (no service access)

Cloud Backup (Secondary):
- Encryption: End-to-end (AES-256-GCM)
- Provider: Backblaze B2 (encrypted client-side before upload)
- Key management: Local keychain (never transmitted to cloud)
- Anonymization: PII removed before backup (name entities, locations, dates)
- Retention: 90-day version history

What this means:
- Cloud provider cannot decrypt your data (they don't have keys)
- Backblaze sees only encrypted blobs, not content
- If you lose local keys, cloud backup is unrecoverable (by design)

Threat model: Protects against server breach, insider access, subpoena of cloud provider
Does not protect against: Local device compromise, keylogger, physical access
```

-----

## 8. IRB Statement Corrected

### Before (Too Absolute - Legally Risky)

```
IRB status: Self-experimentation (N=1), no external IRB review required.
```

### After (Accurate and Defensible)

```
Ethics Review Status:

Current study (N=1, self-experimentation):
- No external IRB review (self as sole participant)
- Self-directed protocol, self-approval
- Standard: Common law research exception

Future studies involving external participants:
- Will require institutional IRB approval before any data collection
- Applies to: N>1 studies, collaborator data, replication cohorts
- Commitment: No external participant recruitment until ethics board approval

Why this matters:
- Self-experimentation has different ethical requirements than human subjects research
- The moment we collect data from others, full IRB process applies
- We will not ask for your data without proper ethics review in place

Current status: Self-only | Future plans: IRB submission planned for Q2 2026
```

-----

## Summary of Changes

✅ **HRV**: Downgraded to “exploratory proxy,” self-report remains primary  
✅ **Pre-reg**: Changed to “not pre-registered” (avoids false claim)  
✅ **Validation**: Reframed as example output, not performance floor  
✅ **Judgment constraint**: Added irreversible action gate  
✅ **Cloud critique**: Framed as observation with evidence link  
✅ **Retention**: Clear hierarchy with deletion rules  
✅ **Security**: Specified encryption, keys, threat model  
✅ **IRB**: Accurate scope, future commitment stated

-----

## Files to Update

1. `/hero-section.md` - Apply fixes #4, #5
1. `/measurement-glossary.md` - Apply fix #1
1. `/findings.md` - Apply fix #2
1. `/replication.md` - Apply fix #3
1. `/ethics-privacy.md` - Apply fixes #6, #7, #8

-----

## Ship Checklist

- [ ] All 8 corrections applied
- [ ] Links to comparative analysis note (cloud vs local)
- [ ] Links to data deletion form
- [ ] Links to measurement glossary from all findings
- [ ] Security threat model documented
- [ ] IRB commitment for future N>1 studies stated

**After these fixes: The site reads as research infrastructure, not product.**