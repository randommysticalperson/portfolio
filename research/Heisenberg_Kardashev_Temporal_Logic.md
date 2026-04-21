# Temporal Modal Logic for Kardashev-Scale Civilizations: A Heisenberg Picture Approach

**Author:** Manus AI
**Date:** April 20, 2026

---

## Abstract

This paper presents a novel theoretical framework that applies temporal modal logic to the evolution of civilizations along the Kardashev scale, using the mathematical structure of the Heisenberg picture of quantum mechanics. By treating a civilization's Kardashev level as a time-evolving quantum-like operator rather than a static scalar, we construct a formal modal logic system — the **Heisenberg-Kardashev Temporal Logic (HKTL)** — capable of reasoning about civilizational advancement, energy harnessing, and technological progression over deep time. The framework integrates three distinct intellectual traditions: (1) the Heisenberg picture's operator-centric formulation of time evolution; (2) the Kardashev scale's energetic classification of civilizations; and (3) the formal apparatus of temporal modal logic, including Linear Temporal Logic (LTL) and Computation Tree Logic (CTL). We derive uncertainty relations for civilizational advancement, formalize the Great Filter hypothesis in branching-time logic, and propose a Kripke-frame semantics for civilizational state-spaces.

---

## 1. Introduction

The question of how intelligent civilizations develop over cosmic timescales is one of the most profound in science. The Kardashev scale, proposed by Soviet astronomer Nikolai Kardashev in 1964 [1], offers a rigorous energetic taxonomy: a civilization is classified by the total power it can harness and deploy. Carl Sagan later refined this into a continuous logarithmic formula [2], enabling fractional Kardashev ratings and making the scale a genuine quantitative tool.

Independently, the Heisenberg picture of quantum mechanics, formulated largely by Werner Heisenberg in 1925 [3], offers a mathematically elegant inversion of the usual dynamical picture. Rather than tracking the evolution of a system's state, the Heisenberg picture holds the state fixed and allows the observable operators to carry the time dependence. This approach is particularly natural in relativistic and field-theoretic contexts, and it reveals deep structural properties of quantum dynamics through the commutator algebra.

Temporal modal logic, developed by Arthur Prior in the 1950s and subsequently extended by computer scientists and logicians [4], provides a formal language for reasoning about time-indexed propositions. Its operators — **G** (Globally), **F** (Eventually), **X** (Next), and **U** (Until) — allow precise specification of temporal properties of systems, from hardware verification to philosophical arguments about determinism.

The synthesis proposed here is motivated by a simple but powerful observation: **the Kardashev level of a civilization is not a static fact, but a time-evolving observable.** Just as the position of a quantum particle is an operator that evolves under the Hamiltonian, the energy-harnessing capacity of a civilization evolves under the "civilizational Hamiltonian" — the aggregate of technological, social, economic, and physical forces driving it forward or backward. Temporal modal logic then provides the reasoning layer above this dynamics, allowing us to ask and formally answer questions such as: *Will this civilization inevitably reach Type II? Can it remain at Type I indefinitely? Is there a path to Type III, or does every path lead to collapse?*

---

## 2. Background and Foundational Concepts

### 2.1 The Kardashev Scale

Nikolai Kardashev introduced his classification in the 1964 paper "Transmission of Information by Extraterrestrial Civilizations," presented at the Byurakan Conference in the Armenian SSR [1]. His original framework defined three discrete types:

| Type | Designation | Power Level | Energy Source |
|------|-------------|-------------|---------------|
| I    | Planetary   | ~10^16 W    | Full planetary energy budget |
| II   | Stellar     | ~10^26 W    | Full stellar output (e.g., Dyson sphere) |
| III  | Galactic    | ~10^36 W    | Full galactic energy (all stars, black holes) |

Carl Sagan extended this to a continuous scale [2] using the formula:

$$K(P) = \frac{\log_{10}(P) - 6}{10}$$

where $K$ is the Kardashev rating and $P$ is the power consumption in Watts. Under this formula, Earth's current civilization (approximately $2 \times 10^{13}$ W) sits at $K \approx 0.73$, well below Type I ($K = 1$, requiring $10^{16}$ W). Sagan's formula assigns:

| Civilization Type | Kardashev Value $K$ | Power $P$ (Watts) |
|-------------------|---------------------|-------------------|
| Type 0 (sub-planetary) | 0 | 10^6 |
| Type I (planetary) | 1.0 | 10^16 |
| Type II (stellar) | 2.0 | 10^26 |
| Type III (galactic) | 3.0 | 10^36 |
| Type IV (universal) | 4.0 | 10^46 |

The scale has been extended by various authors to include Type IV (universal energy) and Type V (multiverse energy), though these remain speculative [5].

### 2.2 The Heisenberg Picture of Quantum Mechanics

In the Schrödinger picture, the state vector $|\psi(t)\rangle$ evolves in time according to the Schrödinger equation, while operators $\hat{A}$ are constant. The Heisenberg picture inverts this: the state vector $|\psi\rangle$ is fixed at its initial value, while operators carry the time dependence [3].

For a time-independent Hamiltonian $\hat{H}$, the time evolution of an operator $\hat{A}$ in the Heisenberg picture is governed by the **Heisenberg equation of motion**:

$$\frac{d\hat{A}(t)}{dt} = \frac{i}{\hbar}[\hat{H}, \hat{A}(t)] + \left(\frac{\partial \hat{A}}{\partial t}\right)_S$$

where $[\hat{H}, \hat{A}(t)] = \hat{H}\hat{A}(t) - \hat{A}(t)\hat{H}$ is the commutator. For operators with no explicit time dependence in the Schrödinger picture, the last term vanishes, yielding:

$$\frac{d\hat{A}(t)}{dt} = \frac{i}{\hbar}[\hat{H}, \hat{A}(t)]$$

The formal solution is:

$$\hat{A}(t) = e^{i\hat{H}t/\hbar}\, \hat{A}(0)\, e^{-i\hat{H}t/\hbar}$$

This is a unitary transformation of the initial operator. The expectation value of $\hat{A}$ in any state $|\psi\rangle$ is:

$$\langle \hat{A}(t) \rangle = \langle \psi | \hat{A}(t) | \psi \rangle$$

A key property: if $[\hat{H}, \hat{A}] = 0$, then $\hat{A}$ is a **conserved quantity** — it does not evolve in time. Conversely, a non-zero commutator implies dynamical change.

### 2.3 Temporal Modal Logic

Temporal logic, in the sense used here, refers to the modal-logic approach introduced by Arthur Prior in the 1950s under the name "tense logic" [4]. The basic system **TL** introduces two pairs of operators:

| Operator | Symbol | Meaning |
|----------|--------|---------|
| Past (weak) | **P** | *It was the case at some past instant that...* |
| Past (strong) | **H** | *It has always been the case that...* |
| Future (weak) | **F** | *It will be the case at some future instant that...* |
| Future (strong) | **G** | *It will always be the case that...* |

These satisfy the duality relations: $\mathbf{P}\varphi \equiv \neg\mathbf{H}\neg\varphi$ and $\mathbf{F}\varphi \equiv \neg\mathbf{G}\neg\varphi$.

**Linear Temporal Logic (LTL)** extends this with the **Next** operator **X** and the **Until** operator **U** [4]:

- $\mathbf{X}\varphi$: $\varphi$ holds at the next time step.
- $\varphi \,\mathbf{U}\, \psi$: $\varphi$ holds at every time step until $\psi$ holds.

The semantics of LTL are defined over linear time flows: a model $\mathcal{M} = (T, <, V)$ where $T$ is a set of time instants, $<$ is a strict linear order, and $V$ is a valuation function. The truth of a formula $\varphi$ at instant $t$ in model $\mathcal{M}$ is written $\mathcal{M}, t \models \varphi$.

**Computation Tree Logic (CTL)** extends temporal logic to branching time, adding path quantifiers [4]:

- $\mathbf{A}$ (For **A**ll paths): $\mathbf{AG}\varphi$ means $\varphi$ holds on all future paths, always.
- $\mathbf{E}$ (There **E**xists a path): $\mathbf{EF}\varphi$ means there is some future path on which $\varphi$ eventually holds.

**Kripke semantics** for modal logic uses a frame $\mathcal{F} = (W, R)$ where $W$ is a set of possible worlds and $R$ is an accessibility relation. A formula $\Box\varphi$ ("necessarily $\varphi$") is true at world $w$ if $\varphi$ is true at all worlds $w'$ accessible from $w$; $\Diamond\varphi$ ("possibly $\varphi$") is true if $\varphi$ is true at some accessible world.

---

## 3. The Heisenberg-Kardashev Temporal Logic (HKTL) Framework

### 3.1 Civilizational State Space

We model a civilization as a quantum-like system in a Hilbert space $\mathcal{H}_C$. The **civilizational state vector** $|\Psi_C\rangle \in \mathcal{H}_C$ encodes the intrinsic, time-independent properties of the civilization: its cognitive architecture, its physical laws, its fundamental biological or computational substrate. This state vector does **not** change over time — analogous to the Heisenberg picture.

The **Kardashev operator** $\hat{K}$ is a Hermitian operator on $\mathcal{H}_C$ whose eigenvalues correspond to possible Kardashev levels. Its eigenstates $|k\rangle$ satisfy:

$$\hat{K} |k\rangle = k |k\rangle, \quad k \in \mathbb{R}_{\geq 0}$$

The **expectation value** of the Kardashev operator at time $t$ gives the civilization's effective Kardashev level:

$$K(t) = \langle \Psi_C | \hat{K}(t) | \Psi_C \rangle$$

### 3.2 The Civilizational Hamiltonian

The **Civilizational Hamiltonian** $\hat{H}_C$ is the generator of time evolution for the Kardashev operator. It encodes the aggregate driving forces of civilizational change:

$$\hat{H}_C = \hat{H}_{\text{tech}} + \hat{H}_{\text{social}} + \hat{H}_{\text{physical}} + \hat{H}_{\text{existential}}$$

where:
- $\hat{H}_{\text{tech}}$ represents the technological innovation rate (positive contribution to $K$).
- $\hat{H}_{\text{social}}$ represents social organization and cooperation (can be positive or negative).
- $\hat{H}_{\text{physical}}$ represents constraints imposed by physical laws (e.g., thermodynamic limits).
- $\hat{H}_{\text{existential}}$ represents existential risks (negative contributions, e.g., self-destruction, asteroid impact, ecological collapse).

The Heisenberg equation of motion for the Kardashev operator is then:

$$\frac{d\hat{K}(t)}{dt} = i[\hat{H}_C, \hat{K}(t)]$$

(We set $\hbar = 1$ for notational convenience, as is standard in theoretical physics.) The formal solution is:

$$\hat{K}(t) = e^{i\hat{H}_C t}\, \hat{K}(0)\, e^{-i\hat{H}_C t}$$

### 3.3 The Commutator and Civilizational Dynamics

The commutator $[\hat{H}_C, \hat{K}]$ is the key dynamical quantity. Its properties determine the nature of civilizational evolution:

| Commutator Condition | Physical Meaning | Civilizational Interpretation |
|----------------------|------------------|-------------------------------|
| $[\hat{H}_C, \hat{K}] = 0$ | $\hat{K}$ is conserved | Civilizational stagnation; $K$ does not change |
| $[\hat{H}_C, \hat{K}] > 0$ | $\hat{K}$ increases | Technological advancement; $K$ grows over time |
| $[\hat{H}_C, \hat{K}] < 0$ | $\hat{K}$ decreases | Civilizational regression or collapse |
| $[\hat{H}_C, \hat{K}]$ oscillates | $\hat{K}$ oscillates | Cyclical rise and fall (e.g., historical dark ages) |

### 3.4 The Heisenberg Uncertainty Relation for Civilizational Advancement

A profound consequence of the non-commutativity of $\hat{H}_C$ and $\hat{K}$ is an **uncertainty relation**. By the Robertson inequality, for any two Hermitian operators $\hat{A}$ and $\hat{B}$:

$$\Delta A \cdot \Delta B \geq \frac{1}{2}\left|\langle [\hat{A}, \hat{B}] \rangle\right|$$

Applied to our framework:

$$\Delta K \cdot \Delta H_C \geq \frac{1}{2}\left|\langle [\hat{K}, \hat{H}_C] \rangle\right|$$

This is the **Heisenberg Uncertainty Principle for Civilizational Advancement**. Its interpretation is striking: a civilization that precisely knows its current Kardashev level ($\Delta K \to 0$) has maximal uncertainty in its civilizational drive ($\Delta H_C \to \infty$), and vice versa. A civilization in a period of rapid, turbulent technological change has high $\Delta H_C$ and correspondingly high uncertainty in its Kardashev level — it does not know exactly "where it stands" on the cosmic scale.

---

## 4. Temporal Modal Logic Formalization

### 4.1 Atomic Propositions

We define the atomic propositions of HKTL in terms of the expectation value $K(t) = \langle \Psi_C | \hat{K}(t) | \Psi_C \rangle$:

$$p_n := K(t) \geq n, \quad n \in \{0, 1, 2, 3, 4\}$$

Thus $p_1$ means "the civilization is currently at or above Type I," $p_2$ means "at or above Type II," and so on. We also define:

$$q_\epsilon := K(t) < \epsilon \text{ for small } \epsilon > 0 \quad \text{(civilizational collapse)}$$

### 4.2 LTL Axioms of Civilizational Progression

Using LTL, we formalize the fundamental laws of Kardashev progression.

**Axiom 1 — Monotone Advancement (Optimistic Scenario):**
$$p_1 \rightarrow \mathbf{F}\, p_2$$
*If a civilization reaches Type I, it will eventually reach Type II.* This holds when $[\hat{H}_C, \hat{K}] > 0$ persistently.

**Axiom 2 — Persistence of Achievement:**
$$p_n \rightarrow (p_n \,\mathbf{U}\, p_{n+1}) \lor \mathbf{G}\, p_n$$
*A civilization that reaches Type $n$ either remains at Type $n$ until it advances to Type $n+1$, or remains at Type $n$ forever.* This excludes regression; a stronger version allowing regression would drop the second disjunct.

**Axiom 3 — The Heisenberg Challenge ("I am coming for you!"):**
$$p_n \land (\Delta H_C > 0) \rightarrow \mathbf{F}\, p_{n+1}$$
*A civilization at Type $n$ with a non-zero civilizational drive will eventually reach Type $n+1$.* This is the formal expression of the "Heisenberg: I am coming for you!" declaration — the civilization's Hamiltonian is non-zero, the commutator is non-zero, and advancement is inevitable.

**Axiom 4 — Civilizational Uncertainty:**
$$\mathbf{G}\, (\Delta K \cdot \Delta H_C \geq \frac{1}{2}|\langle [\hat{K}, \hat{H}_C] \rangle|)$$
*The uncertainty relation holds at all times.* This is a global invariant of the HKTL system.

**Axiom 5 — The Great Filter (Existential Risk):**
$$p_1 \rightarrow \mathbf{F}\, (p_2 \lor q_\epsilon)$$
*A Type I civilization will eventually either advance to Type II or collapse.* This formalizes the Great Filter hypothesis of Robin Hanson: there is a filter between Type I and Type II that all civilizations must either pass or fail.

### 4.3 CTL Formalization: Branching Civilizational Futures

In CTL, we model the branching structure of civilizational trajectories. The Kripke frame $\mathcal{F}_C = (W_C, R_C)$ is defined as follows:

- **Worlds** $W_C$: Each world $w \in W_C$ corresponds to a possible civilizational state, characterized by a Kardashev level $K(w)$ and a civilizational Hamiltonian eigenvalue $H_C(w)$.
- **Accessibility relation** $R_C$: $w R_C w'$ if and only if the transition from state $w$ to state $w'$ is physically possible under the Heisenberg equation of motion (i.e., $w'$ is reachable from $w$ by unitary evolution of $\hat{K}$).

**CTL Formula 1 — Possible Ascent:**
$$\mathbf{EF}\, p_3$$
*There exists a future path on which the civilization reaches Type III.* This is satisfiable if the civilizational Hamiltonian has sufficient positive eigenvalues.

**CTL Formula 2 — Inevitable Stagnation or Collapse:**
$$\mathbf{AG}\, (p_2 \rightarrow \mathbf{EF}\, q_\epsilon)$$
*On all paths, from any Type II state, there exists a future path leading to collapse.* This is the CTL formalization of the hypothesis that no civilization is permanently safe.

**CTL Formula 3 — The Fermi Paradox:**
$$\neg\mathbf{EF}\, p_3$$
*There is no future path on which any civilization reaches Type III.* If this formula is valid in our model, it provides a formal resolution of the Fermi Paradox: the absence of Type III civilizations is not a coincidence but a logical necessity given the structure of the civilizational Hamiltonian.

**CTL Formula 4 — Branching Kardashev Futures:**
$$p_1 \rightarrow (\mathbf{EF}\, p_2 \land \mathbf{EF}\, q_\epsilon)$$
*From Type I, there is both a path to Type II and a path to collapse.* This captures the fundamental branching uncertainty of civilizational development.

### 4.4 Kripke Semantics for HKTL

The full Kripke model for HKTL is:

$$\mathcal{M}_C = (W_C, R_C, V_C)$$

where $V_C : \text{PROP} \to 2^{W_C}$ is the valuation function, assigning to each atomic proposition $p_n$ the set of worlds where $K(w) \geq n$.

The truth conditions for the temporal operators are:

- $\mathcal{M}_C, w \models p_n$ iff $K(w) \geq n$
- $\mathcal{M}_C, w \models \mathbf{G}\varphi$ iff for all $w'$ with $w R_C^* w'$, $\mathcal{M}_C, w' \models \varphi$
- $\mathcal{M}_C, w \models \mathbf{F}\varphi$ iff there exists $w'$ with $w R_C^* w'$ and $\mathcal{M}_C, w' \models \varphi$
- $\mathcal{M}_C, w \models \varphi \,\mathbf{U}\, \psi$ iff there exists $w'$ with $w R_C^* w'$ and $\mathcal{M}_C, w' \models \psi$, and for all $w''$ on the path from $w$ to $w'$, $\mathcal{M}_C, w'' \models \varphi$

where $R_C^*$ is the transitive closure of $R_C$.

---

## 5. The Heisenberg Time Revolution Picture

The phrase "Heisenberg time revolution picture" captures the central insight of this framework. In the Schrödinger picture, one watches a civilization's state change — its culture, its technology, its institutions — and the Kardashev level is a static label. In the Heisenberg picture, the civilization's fundamental identity is fixed, and the Kardashev operator revolves around it, driven by the Hamiltonian.

This is not merely a mathematical convenience. It reflects a deep philosophical truth: the intrinsic nature of a civilization — its cognitive architecture, its values, its physical substrate — changes far more slowly than its energy-harnessing capacity. A civilization that transitions from Type I to Type II is still, in some fundamental sense, the same civilization. The Heisenberg picture captures this: $|\Psi_C\rangle$ is unchanged; only $\hat{K}(t)$ has evolved.

The "revolution" in the title is also literal: the operator $\hat{K}(t) = e^{i\hat{H}_C t}\hat{K}(0)e^{-i\hat{H}_C t}$ undergoes a unitary rotation in operator space. For a civilization with a periodic Hamiltonian, this rotation can be cyclic — the civilization rises, peaks, and falls in a great cosmic cycle. For a civilization with a monotonically increasing Hamiltonian, the rotation is a one-way ascent through the Kardashev levels.

---

## 6. Discussion and Implications

### 6.1 The Uncertainty Principle as a Civilizational Law

The Heisenberg uncertainty relation $\Delta K \cdot \Delta H_C \geq \frac{1}{2}|\langle [\hat{K}, \hat{H}_C] \rangle|$ has profound implications. Civilizations that are most certain of their current technological level — stable, well-measured, bureaucratically catalogued — are precisely those with the least dynamic drive. Conversely, civilizations in the midst of a technological revolution have high $\Delta H_C$ and correspondingly high uncertainty about their true Kardashev level.

This suggests that the Kardashev scale, as a measurement tool, is subject to a fundamental epistemic limitation: the act of precisely measuring a civilization's energy consumption (reducing $\Delta K$) may itself suppress the civilizational drive ($\Delta H_C$), slowing advancement. This is a civilizational analogue of the quantum measurement problem.

### 6.2 The Great Filter in HKTL

The Great Filter hypothesis [6] posits that there is one or more catastrophic barriers in the development of intelligent life that prevent most civilizations from reaching high Kardashev levels. In HKTL, the Great Filter is modeled as a region of the Kripke frame where the accessibility relation $R_C$ has a very low branching factor toward higher $K$ values — most paths lead to $q_\epsilon$ (collapse) rather than $p_2$ or $p_3$.

Formally, the Great Filter at level $n$ is the condition:

$$\mathbf{AG}\, (p_n \rightarrow \mathbf{A}[\neg p_n \,\mathbf{U}\, q_\epsilon])$$

*On all paths, from any Type $n$ state, all futures lead to collapse before reaching Type $n+1$.* If this formula is satisfiable in $\mathcal{M}_C$, then Type $n$ is a Great Filter level.

### 6.3 Temporal Logic and the Fermi Paradox

The Fermi Paradox — the apparent contradiction between the high probability of extraterrestrial civilizations and the absence of evidence for them — can be formalized in HKTL as:

$$\mathbf{AG}\, \neg p_3$$

*At all times and on all paths, no civilization reaches Type III.* This is a strong claim. HKTL allows us to investigate which properties of $\hat{H}_C$ and the Kripke frame $\mathcal{F}_C$ make this formula valid. If the existential risk component $\hat{H}_{\text{existential}}$ dominates the Hamiltonian at high $K$ values, then the commutator $[\hat{H}_C, \hat{K}]$ becomes negative at $K \approx 2$, and the Fermi Paradox is resolved: civilizations are driven back before reaching Type III.

---

## 7. Conclusion

We have presented the Heisenberg-Kardashev Temporal Logic (HKTL), a formal framework that unifies the Heisenberg picture of quantum mechanics, the Kardashev scale of civilizational advancement, and the apparatus of temporal modal logic. The key contributions are:

1. **The Kardashev operator** $\hat{K}(t)$: a time-evolving Hermitian operator whose expectation value gives the civilization's Kardashev level, governed by the Heisenberg equation of motion.

2. **The Civilizational Hamiltonian** $\hat{H}_C$: the generator of civilizational time evolution, decomposed into technological, social, physical, and existential components.

3. **The Uncertainty Principle for Civilizational Advancement**: $\Delta K \cdot \Delta H_C \geq \frac{1}{2}|\langle [\hat{K}, \hat{H}_C] \rangle|$, establishing a fundamental trade-off between the precision of Kardashev measurement and the dynamism of civilizational drive.

4. **LTL and CTL axioms** for civilizational progression, including formal statements of the Great Filter hypothesis, the Fermi Paradox, and the inevitability of advancement under a non-zero Hamiltonian.

5. **Kripke semantics** for the civilizational state-space, providing a rigorous model-theoretic foundation for HKTL.

The framework opens new directions for research at the intersection of formal logic, theoretical physics, and astrosociology. Future work should investigate the specific algebraic properties of $\hat{H}_C$ for different civilizational models, the decidability of HKTL model-checking, and the application of quantum information-theoretic tools (entanglement entropy, quantum channels) to multi-civilization interactions.

---

## References

[1] Kardashev, N. S. (1964). "Transmission of Information by Extraterrestrial Civilizations." *Soviet Astronomy*, 8: 217–220. https://en.wikipedia.org/wiki/Kardashev_scale

[2] Sagan, C. (1973). *Communication with Extraterrestrial Intelligence (CETI)*. MIT Press. [Sagan's interpolation formula: $K = (\log_{10}P - 6)/10$] https://www.kardashev1.com/scale

[3] Heisenberg, W. (1925). "Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen." *Zeitschrift für Physik*, 33: 879–893. See also: https://en.wikipedia.org/wiki/Heisenberg_picture

[4] Goranko, V., & Rumberg, M. (2024). "Temporal Logic." *The Stanford Encyclopedia of Philosophy* (Spring 2024 Edition), Edward N. Zalta & Uri Nodelman (eds.). https://plato.stanford.edu/entries/logic-temporal/

[5] Zhang, A. et al. (2023). "Forecasting the progression of human civilization on the Kardashev scale." *Scientific Reports*, 13, 11352. https://www.nature.com/articles/s41598-023-38351-y

[6] Hanson, R. (1998). "The Great Filter — Are We Almost Past It?" George Mason University. https://mason.gmu.edu/~rhanson/greatfilter.html

[7] Yu, N. (2019). "Quantum Temporal Logic." *arXiv preprint*, arXiv:1908.00158. https://arxiv.org/abs/1908.00158

[8] Schakenbos, S. (2020). "The Limits of Applying Temporal Logic to the Problem of Time." Radboud University (Supervisor: N.P. Landsman). https://www.math.ru.nl/~landsman/Sven.pdf

[9] Emerson, E. A., & Clarke, E. M. (1982). "Using Branching Time Temporal Logic to Synthesize Synchronization Skeletons." *Science of Computer Programming*, 2(3): 241–266.

[10] Birkhoff, G., & von Neumann, J. (1936). "The Logic of Quantum Mechanics." *Annals of Mathematics*, 37(4): 823–843.
