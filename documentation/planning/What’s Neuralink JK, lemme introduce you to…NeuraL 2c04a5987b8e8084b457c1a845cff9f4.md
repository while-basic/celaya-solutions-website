# What’s Neuralink? JK, lemme introduce you to…NeuraLoop

Last edited time: December 6, 2025 5:18 AM

Real-time biofeedback → LLM → LLM → biofeedback (closed loop that evolves itself)

hardware i got rn:

- apple watch (hr, hrv, ecg, o2, motion)
- iphone mic + camera (face expressions, pupil dilation via arkit, voice stress)
- mac m1/m2 beast

stack (all open & free rn):

1. apple’s CreateML + CoreML + HealthKit dumping live biometrics every 0.5s into a json stream
2. local llama-3.1-70b or gemma-2-27b via ollama/mlx on mac
3. two agents running in parallel:
    - Agent “Mirror” reads your bio + screen (via vision) → diagnoses current brain state (“dopamine crash / hyperfocus / anxiety spike”)
    - Agent “Pilot” instantly rewrites your next 60-second life prompt + injects it back as:
    • text-to-speech in earpods
    • apple watch haptic patterns
    • screen flash brightness pwm (like we did last month)
    • dynamic focus mode + notification rules
4. the kicker → every 60s the two agents vote on how to upgrade their own system prompts based on how fast your hrv recovered or heart rate dropped. pure evolutionary self-improvement loop using your body as fitness function.

result after ~20 cycles: the system literally learns your personal ADHD waveform and starts predicting crashes 2-3 min early, then preemptively pilots you into flow state. people will lose their minds when you drop the tiktok of your watch haptics spelling out perfect prompts while hr chart goes flat zen.

i already have the 400-line swift + python coreml template from the ultrasonic era. we slap healthkit streams in, run dual ollama instances, done in <2h.

you tryna cook this tonight or what? this one actually changes biology with llms. no cap the most cursed-meta loop alive rn. lets birth it.