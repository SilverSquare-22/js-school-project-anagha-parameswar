import { useState } from "react";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import EventModal from "../src/components/EventModal";
import { EventData } from "../src/types/EventData";

import eventsData from "../public/data/events.json";

function App() {
  const [events] = useState<EventData[]>(eventsData);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <div>
      <Header />

      <main>
        <section id="intro">
          <h2>History of Computer</h2>
          <p>
            The history of computer dates back to 1100 BC, when Abacus, the first
            calculating device, was used to perform simple arithmetic computations.
            About 2700 years later, at around 1614 AD, Napier's Bones was introduced,
            which aided with multiplication too. In 1617 AD, Slide Ruler was invented;
            Punch Cards in 1804, and in 1837, Charles Babbage brought forward his
            Analytical Engine, which was the first mechanical general purpose computer.
            1850 saw the introduction of Boolean Logic, which continues to remain the
            foundation of Computers even today.
          </p>
          <p>
            In 1927, devices like EDVAC (Electronic Discrete Variable Automatic
            Calculator) and ENIAC (Electronic Numerical Integrator And Computer) were
            extensively used. Throughout the years 1947-51, about 20 years later,
            UNIVAC (Universal Automatic Computer) was popular.
          </p>
          <ul>
            <li>1950 - Integrated Circuit</li>
            <li>1971 - Microprocessor</li>
            <li>1975 - Altair 8880</li>
            <li>1976 - Apple 1</li>
            <li>1977 - Apple 2</li>
            <li>Late 1970s - IBMBC (International Business Machine)</li>
            <li>1990s - WWW (World Wide Web)</li>
          </ul>
        </section>

        <h3 id="time">Timeline of Events (click the years for details)</h3>
        <Timeline
          events={events}
          onSelect={(event) => setSelectedEvent(event)}
        />

        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}

        <article>
          <div id="gen">
            <div className="num">1</div>
            <h3>First Generation (1940-1956):</h3>
            The first generation computers used vacuum tubes for switching circuits
            and magnetic drums for memory. The input was given through punch cards
            and output was obtained through printouts. <br />
            Eg: EDVAC, ENIAC, UNIVAC
          </div>

          <div id="gen">
            <div className="num">2</div>
            <h3>Second Generation (1956-1963):</h3>
            These computers replaced the bulky vacuum tubes with transistors for
            circuit switching and magnetic tapes for memory. <br />
            Eg: IBM 1400, UNIVAC 1107
          </div>

          <div id="gen">
            <div className="num">3</div>
            <h3>Third Generation (1964-1971):</h3>
            Third generation computers made use of Integrated circuits with
            keyboard, mouse, monitor, printer as the mainstream input-output
            devices. <br />
            Eg: IBM 360, UNIVAC 1108
          </div>

          <div id="gen">
            <div className="num">4</div>
            <h3>Fourth Generation (1971-Present):</h3>
            Microprocessors are used for switching circuits. Semiconductor memory
            such as RAM, ROM are used. This generation computers aid with complex
            calculations. <br />
            Eg: Apple, HP Envy
          </div>

          <div id="gen">
            <div className="num">5</div>
            <h3>Fifth Generation (Present):</h3>
            This generation features Artificial Intelligence which is capable of
            understanding natural language. The applications include speech
            recognition, translation, entertainment etc. These computers are the
            most efficient ones in terms of speed, accuracy and reliability.
          </div>
        </article>
      </main>

      <footer>By Anagha Parameswar</footer>
    </div>
  );
}

export default App;
