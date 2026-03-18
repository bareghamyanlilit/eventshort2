"use client";

import { Envelop } from "./Envelop";
import { useState } from "react";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);

  return (
    <Envelop openEnvelope={openEnvelope} setOpenEnvelope={setOpenEnvelope} />
  );
}
