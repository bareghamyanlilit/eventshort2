"use client"

import { Envelop } from "./Envelop";
import { useState } from "react";
import { Event } from "./Event";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);

  return (
    <main>

    <Envelop openEnvelope={openEnvelope} setOpenEnvelope={setOpenEnvelope}/>
    <Event openEnvelope={openEnvelope} />
    </main>
  );
}
