"use client";

import { FormEvent, useMemo, useState } from "react";

import { createClient } from "@supabase/supabase-js";

import { CurriculumTimeline } from "@/components/curriculum/CurriculumTimeline";
import { CommitmentContextSection } from "@/components/sections/CommitmentContextSection";
import { CoordinatorContactSection } from "@/components/sections/CoordinatorContactSection";
import { CourseOverviewSection } from "@/components/sections/CourseOverviewSection";
import { LearningOutcomesSection } from "@/components/sections/LearningOutcomesSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { ToolsShowcaseSection } from "@/components/sections/ToolsShowcaseSection";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const supabase = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !anonKey) {
      return null;
    }

    return createClient(url, anonKey);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase) {
      setSubmitState("error");
      setSubmitMessage(
        "Registration service is not configured. Please contact the coordinators directly.",
      );
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    const { error } = await supabase
      .from("registrations")
      .insert([{ name, email, phone }]);

    if (error) {
      setSubmitState("error");
      setSubmitMessage("We could not submit your registration right now. Please try again.");
      return;
    }

    setSubmitState("success");
    setSubmitMessage("Registration submitted successfully. We will reach out soon.");
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <main className="page-shell">
      <div className="backdrop-orb orb-one" aria-hidden="true" />
      <div className="backdrop-orb orb-two" aria-hidden="true" />
      <div className="content-stack">
        <CourseOverviewSection />
        <CurriculumTimeline />
        <TargetAudienceSection />
        <ToolsShowcaseSection />
        <LearningOutcomesSection />
        <CommitmentContextSection />
        <section className="panel panel-accent" aria-labelledby="registration-title">
          <h2 id="registration-title">Register Interest</h2>
          <p>Submit your details to receive enrollment guidance for FullStackX.</p>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </label>

            <button type="submit" disabled={submitState === "submitting"}>
              {submitState === "submitting" ? "Submitting..." : "Submit Registration"}
            </button>
          </form>

          {submitState === "success" ? (
            <p role="status" className="success-text">
              {submitMessage}
            </p>
          ) : null}

          {submitState === "error" ? (
            <p role="alert" className="error-text">
              {submitMessage}
            </p>
          ) : null}
        </section>
        <CoordinatorContactSection />
      </div>
    </main>
  );
}
