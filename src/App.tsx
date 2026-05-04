/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { ProblemAgitation } from './components/ProblemAgitation';
import { Story } from './components/Story';
import { Possibility } from './components/Possibility';
import { Mechanism } from './components/Mechanism';
import { Offer } from './components/Offer';
import { SafetyDecision } from './components/SafetyDecision';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  return (
    <main className="font-sans text-gray-200 bg-[#0a0a0a] antialiased selection:bg-green-700 selection:text-white pb-28">
      <Hero />
      <ProblemAgitation />
      <Story />
      <Possibility />
      <Mechanism />
      <Offer />
      <SafetyDecision />
      <StickyCTA />
    </main>
  );
}
