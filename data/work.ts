export const WORK_STUDIES = [
  {
    "slug": "urmi",
    "title": "Urmi: from availability to confirmed booking",
    "summary": "A code walkthrough of appointment persistence and the notification flow for a salon website.",
    "kind": "Source-based walkthrough",
    "problem": "The site lets customers choose a service and appointment slot, then routes booking information to the salon.",
    "constraints": "The implementation must coordinate an available slot, a persisted booking, and notifications across several external services. This is a constraint visible in the code, not a documented original product brief.",
    "nodes": [
      "Customer booking form",
      "Next.js booking route",
      "Supabase bookings",
      "Email, Telegram & web push"
    ],
    "architecture": "The availability route reads non-cancelled slots for a date. The booking route checks for an existing slot, inserts a confirmed booking, then sends notifications. An admin route lists bookings and updates their status.",
    "decision": "The booking route keeps persistence and notification orchestration together. This makes the sequence easy to follow, but external notification work is coupled to the request. That tradeoff is inferred from the implementation; the original decision rationale has not been recorded.",
    "failure": "A failure mode to test is two simultaneous requests for the same slot: the route checks availability before inserting. A database constraint or transaction would need to enforce exclusivity independently of that check. This is a review finding, not a claim that a production incident occurred.",
    "next": "Proposed next iteration: enforce booking exclusivity in the database, check insert errors before sending confirmations, and make notification delivery independently retryable.",
    "metrics": "No verified booking volume, latency, or uptime measurements are available for publication. The linked routes provide inspectable implementation evidence.",
    "sources": [
      {
        "label": "src/app/api/book/route.ts",
        "url": "https://github.com/Aavash-L/urmi-threading-salon/blob/ee9d31495a8d8ec2cbf6de3e73c37a119a6d3881/src/app/api/book/route.ts"
      },
      {
        "label": "src/app/api/availability/route.ts",
        "url": "https://github.com/Aavash-L/urmi-threading-salon/blob/ee9d31495a8d8ec2cbf6de3e73c37a119a6d3881/src/app/api/availability/route.ts"
      },
      {
        "label": "src/app/api/admin/bookings/route.ts",
        "url": "https://github.com/Aavash-L/urmi-threading-salon/blob/ee9d31495a8d8ec2cbf6de3e73c37a119a6d3881/src/app/api/admin/bookings/route.ts"
      }
    ],
    "repo": "https://github.com/Aavash-L/urmi-threading-salon"
  },
  {
    "slug": "huddle",
    "title": "Huddle: finding a time that works",
    "summary": "A walkthrough of the group-availability ranking function and its test coverage.",
    "kind": "Source-based walkthrough",
    "problem": "Huddle collects availability for group plans and returns candidate time windows, helping a group move from gathering responses toward a decision.",
    "constraints": "The ranking function handles registered users and token-based responders, repeated responses, empty availability, and plans that have already reached a final state.",
    "nodes": [
      "Mobile / web responses",
      "Supabase availability",
      "Convergence Edge Function",
      "Ranked slots & plan status"
    ],
    "architecture": "The function reads a plan and its availability rows, groups available responses by date and slot, deduplicates participant identifiers, and sorts by the number available. It returns the best and runner-up slots. When the configured quorum is reached, it can move the plan from gathering to converging and notify the creator.",
    "decision": "The ranking criterion is participant count per slot. It is straightforward to inspect, but equally populated slots have no explicit secondary ranking criterion. The code demonstrates the rule; it does not establish why it was originally selected.",
    "failure": "The repository includes tests for empty input, unavailable responses, duplicate participants, anonymous responders, and ranking. The convergence tests mirror the algorithm rather than importing the deployed function, so passing them alone would not prove the deployed route behaves identically. No production incident is asserted here.",
    "next": "Proposed next iteration: share a pure ranking function between the route and tests, define a tie-breaking rule, and add integration tests around state changes and notification delivery.",
    "metrics": "The repository contains tests, but this walkthrough does not claim they passed or quantify production traffic. Live usage, latency, and reliability figures remain unverified.",
    "sources": [
      {
        "label": "supabase/functions/convergence/index.ts",
        "url": "https://github.com/Aavash-L/huddle/blob/7bceb74181710073ea270eee47780d137b4c1118/supabase/functions/convergence/index.ts"
      },
      {
        "label": "packages/shared/src/__tests__/convergence.test.ts",
        "url": "https://github.com/Aavash-L/huddle/blob/7bceb74181710073ea270eee47780d137b4c1118/packages/shared/src/__tests__/convergence.test.ts"
      },
      {
        "label": "supabase/migrations/001_initial_schema.sql",
        "url": "https://github.com/Aavash-L/huddle/blob/7bceb74181710073ea270eee47780d137b4c1118/supabase/migrations/001_initial_schema.sql"
      }
    ],
    "repo": "https://github.com/Aavash-L/huddle"
  },
  {
    "slug": "clearforge",
    "title": "ClearForge: synchronizing subscription state",
    "summary": "A walkthrough of Stripe events and business subscription records in the ClearForge repository.",
    "kind": "Source-based walkthrough",
    "problem": "The repository includes a customer-request product for local businesses. Its billing integration updates business access and usage limits from Stripe subscription events.",
    "constraints": "Billing state arrives through multiple event types, including checkout completion, subscription updates, cancellation, and paid invoices. Incoming webhook payloads must be authenticated.",
    "nodes": [
      "Stripe events",
      "Signature verification",
      "Event-specific handler",
      "Supabase businesses"
    ],
    "architecture": "The webhook reads the raw request body and verifies the Stripe signature before handling events. Checkout completion associates a customer and subscription with a business. Subscription updates synchronize status, plan, and request limits; deletion marks the subscription cancelled; paid invoices reset usage.",
    "decision": "One route dispatches by event type and updates the business record. This keeps the mapping between events and application state explicit. It does not by itself provide an event ledger or establish event-ordering guarantees. This is a code interpretation, not a recollection of the original design decision.",
    "failure": "A review scenario is replaying or reordering subscription events: the inspected route has no explicit processed-event ledger, and active subscription updates reset the usage counter. The effect should be tested against the intended billing rules. This is not a reported outage or a claim that idempotency is implemented.",
    "next": "Proposed next iteration: define replay and ordering behavior, record processed event IDs, scope usage resets to the intended billing period, and check database update results before acknowledging success.",
    "metrics": "No verified event volume, delivery success rate, or billing latency is published. Source links show the current behavior directly.",
    "sources": [
      {
        "label": "app/api/stripe/webhook/route.ts",
        "url": "https://github.com/Aavash-L/clearforge-labs/blob/af6506a9c8e749e1645c81525e129b2ffeaf72a5/app/api/stripe/webhook/route.ts"
      },
      {
        "label": "app/api/stripe/checkout/route.ts",
        "url": "https://github.com/Aavash-L/clearforge-labs/blob/af6506a9c8e749e1645c81525e129b2ffeaf72a5/app/api/stripe/checkout/route.ts"
      }
    ],
    "repo": "https://github.com/Aavash-L/clearforge-labs"
  },
  {
    "slug": "rotgen",
    "title": "Rotgen: product overview",
    "summary": "AI-powered short-form video generation for creators.",
    "kind": "Overview \u00b7 technical walkthrough pending",
    "problem": "Rotgen is an AI short-form video platform for creators. Aavash describes his work as development of the product.",
    "constraints": "The original constraints, team responsibilities, and infrastructure have not yet been verified.",
    "nodes": [],
    "architecture": "A technical architecture is intentionally omitted until the implementation can be inspected or confirmed.",
    "decision": "The original decision rationale has not been provided.",
    "failure": "No verified incident account is available.",
    "next": "The next step is to document the generation pipeline, job lifecycle, provider limits, failure recovery, and billing behavior from implementation evidence.",
    "metrics": "$30K MRR is owner-reported business context. It is not an engineering performance metric. No latency, traffic, or uptime claims are made here.",
    "sources": [],
    "repo": null
  }
];
