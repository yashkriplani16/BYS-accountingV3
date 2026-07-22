import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import serviceBookkeeping from "@/assets/service-bookkeeping.jpg";
import serviceTax from "@/assets/service-tax.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";

export type Category = "All" | "Articles" | "Tax Updates" | "Firm News";

export interface Post {
  slug: string;
  image: string;
  title: string;
  date: string;
  category: Exclude<Category, "All">;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "2026-tax-updates",
    image: blog1,
    title: "2026 Tax Updates: What Your Business Needs to Know",
    date: "March 28, 2026",
    category: "Tax Updates",
    excerpt: "Stay ahead of the latest changes to tax legislation and understand how they impact your business this financial year.",
    body: [
      "The 2026 financial year brings a number of significant legislative changes that Australian businesses need to understand and prepare for. From revised instant asset write-off thresholds to updated superannuation guarantee rates, the landscape is shifting in ways that will directly affect your bottom line.",
      "One of the most impactful changes is the increase in the small business income tax offset for sole traders and partnerships, now rising to 16 cents in the dollar — up from 13 cents. This provides meaningful relief for smaller operators, but requires careful planning to fully capture the benefit.",
      "The ATO has also introduced stricter documentation requirements for work-related deductions. Businesses and individuals alike must ensure records are kept contemporaneously, as claims made without supporting evidence are increasingly being flagged in compliance reviews. Digital record-keeping tools can make this significantly easier.",
      "Superannuation guarantee contributions are set to rise to 11.5% from July 1, 2026. Employers must factor this into payroll projections from now, as underpayments carry significant penalties and reputational risk. For businesses with a large workforce, this can represent a material increase in employment costs.",
      "Finally, the expanded loss carry-back provisions continue to offer relief for businesses that experienced losses during the post-COVID recovery period. Eligible entities can apply losses against prior-year tax paid, generating refundable tax offsets. Our advisory team can model whether this applies to your circumstances.",
      "If any of these changes affect your situation, we recommend scheduling a strategy session with one of our tax advisors before the end of the financial year. Proactive planning now can result in material tax savings and ensure full compliance going forward.",
    ],
  },
  {
    slug: "financial-habits-small-business",
    image: blog2,
    title: "5 Financial Habits of Successful Small Businesses",
    date: "March 15, 2026",
    category: "Articles",
    excerpt: "Discover the key financial practices that separate thriving small businesses from those that struggle.",
    body: [
      "What separates a small business that thrives from one that merely survives often comes down to a handful of core financial disciplines. After working with hundreds of businesses across Australia, we have identified five habits that appear consistently in the most financially resilient organisations.",
      "The first is maintaining a cash flow forecast — not just a budget, but a rolling 13-week projection of actual cash in and out. Many profitable businesses fail because they run out of cash at the wrong moment. A reliable forecast allows you to anticipate shortfalls well in advance and make informed decisions about timing, borrowing, or collections.",
      "The second habit is separating personal and business finances completely. This sounds obvious, but it is one of the most common issues we see. Blended accounts make tax time painful, obscure true profitability, and create liability risks. A dedicated business bank account and credit card are non-negotiable from day one.",
      "Third, successful small businesses reconcile their accounts weekly — not monthly, not quarterly. Weekly reconciliation means errors are caught quickly, fraud is harder to sustain, and you always know your real position. With modern cloud accounting tools, this takes minutes rather than hours.",
      "Fourth, they work with an accountant as a strategic partner, not just a tax lodgement service. The most valuable conversations we have with clients happen outside of tax season — when we are reviewing pricing strategy, assessing a new hire's real cost, or stress-testing a growth plan. An engaged advisor pays for itself many times over.",
      "Fifth and finally, they set aside tax and superannuation from every dollar of revenue — before it is spent. Treating these obligations as non-negotiable from the start avoids the painful scenario of owing a large ATO liability with no funds to cover it. Even a simple sub-account earmarked for tax can transform your financial hygiene.",
    ],
  },
  {
    slug: "bys-launches-india-operations",
    image: blog3,
    title: "BYS Accounting Launches Dedicated India Operations",
    date: "March 1, 2026",
    category: "Firm News",
    excerpt: "We're excited to announce dedicated India operations, bringing full-service accounting and advisory support to businesses in India.",
    body: [
      "We are delighted to announce the launch of BYS Accounting's dedicated India operations. Building on experience gained supporting clients internationally, we are now offering the same standard of financial guidance directly to businesses based in India.",
      "Our India practice provides full-cycle management accounting, tax planning and compliance, business advisory, and financial reporting — the same comprehensive service model our clients have come to expect, tailored to the regulatory and business environment here in India.",
      "This launch does not change anything for our existing clients in Australia. Those relationships continue as before, supported by the same team and the same commitment to precision and responsiveness that has always defined how we work.",
      "What it does mean is that businesses in India now have direct access to a firm built around genuine partnership rather than transactional service — one that combines strong technical expertise with the kind of close, hands-on attention that growing businesses need.",
      "We are investing in our team and our tools to make sure that promise holds as we grow, with cloud-based accounting systems that give clients real-time visibility into their financial position, wherever they are.",
      "If your business is based in India and you are looking for a dependable accounting and advisory partner, we would welcome the opportunity to talk. Reach out to our team to learn more about how we can support you.",
    ],
  },
  {
    slug: "cloud-accounting-switch",
    image: serviceBookkeeping,
    title: "Cloud Accounting: Why Your Business Should Make the Switch",
    date: "February 18, 2026",
    category: "Articles",
    excerpt: "The shift to cloud-based accounting offers real-time insights, better collaboration, and significant time savings.",
    body: [
      "Cloud accounting has moved from a novelty to a necessity for competitive businesses over the past decade. Yet a surprising number of Australian small businesses still rely on desktop software or manual spreadsheets to manage their finances. If you are one of them, this article is for you.",
      "The most immediate benefit of cloud accounting is real-time visibility. With a cloud platform, your financial position updates automatically as transactions occur — no more waiting until month-end to understand how the business is performing. This allows faster, more confident decision-making at every level of the organisation.",
      "Collaboration is the second major advantage. When your accountant, bookkeeper, and internal team all work from the same live data, errors caused by version conflicts and file transfers disappear. Your advisor can flag issues as they emerge rather than discovering them weeks later during a review.",
      "The time savings compound significantly over a year. Automated bank feeds eliminate manual data entry, smart categorisation rules reduce reconciliation time, and digital invoicing accelerates debtor collections. Many clients report saving between five and ten hours per month after making the switch.",
      "Security is often cited as a concern, but reputable cloud platforms invest far more in data protection than most businesses can achieve independently. Enterprise-grade encryption, automated backups, and multi-factor authentication are standard features — something desktop software or local servers cannot reliably match.",
      "Our team has helped hundreds of businesses migrate to cloud accounting platforms. We manage the entire process — data migration, configuration, staff training, and ongoing support — so the transition is seamless. If you are ready to modernise your financial management, get in touch and we will guide you through the options.",
    ],
  },
  {
    slug: "ato-focus-areas-2026",
    image: serviceTax,
    title: "ATO Focus Areas for 2026: Prepare Your Business",
    date: "February 5, 2026",
    category: "Tax Updates",
    excerpt: "The ATO has outlined key compliance focus areas for the year. Here's what you need to know to stay compliant.",
    body: [
      "Each year, the Australian Taxation Office signals where it intends to focus its compliance activity, and 2026 is no exception. Understanding these priority areas allows businesses and individuals to review their own positions and address any vulnerabilities before they attract scrutiny.",
      "The ATO has flagged trust distributions as a primary focus, particularly arrangements where distributions to beneficiaries are used to minimise tax in ways the Commissioner considers inconsistent with the intent of the law. Businesses using discretionary trusts should review their distribution minutes and ensure they reflect genuine commercial reasoning.",
      "Work-from-home deductions remain under close review. With hybrid work now standard for many Australians, the ATO is scrutinising claims that appear inflated relative to actual usage. The revised fixed rate method has specific requirements around record-keeping, and taxpayers who cannot substantiate their claims are being asked to amend returns.",
      "The ATO has also emphasised its focus on the shadow economy — particularly businesses dealing in cash that under-report income. Data-matching technology now allows the ATO to cross-reference lifestyle indicators, third-party data, and reported income with unprecedented precision. Unexplained wealth is increasingly difficult to conceal.",
      "Cryptocurrency and digital assets remain a high-priority area. The ATO receives data from digital exchanges and is actively contacting taxpayers who have not declared gains from crypto disposals. If you have traded, exchanged, or gifted digital assets without declaring them, we strongly recommend reviewing your lodgements.",
      "Our tax team monitors ATO communications and rulings closely throughout the year. If any of these focus areas are relevant to your situation, we recommend a proactive review now. Acting before an audit is initiated is almost always less costly — financially and in management time — than responding to one.",
    ],
  },
  {
    slug: "gst-compliance-essentials",
    image: serviceAdvisory,
    title: "GST Compliance Essentials for Growing Businesses",
    date: "January 20, 2026",
    category: "Tax Updates",
    excerpt: "GST compliance is one of the most common areas where growing businesses in India run into avoidable trouble. Here's what to get right.",
    body: [
      "For businesses operating in India, GST compliance is one of the most frequent — and most avoidable — sources of financial and regulatory risk. Getting the fundamentals right early saves significant time, cost, and stress as a business scales.",
      "Timely registration is the starting point. As turnover grows, businesses need to monitor their position against applicable thresholds and register promptly, since operating without registration when required can lead to penalties and disrupted input tax credit claims.",
      "Consistent, on-time return filing is just as important as registration itself. Missed or late filings compound quickly — they affect your compliance rating, can restrict your ability to claim input tax credits, and create unnecessary friction with vendors and customers who rely on your filings being accurate and current.",
      "Input tax credit reconciliation deserves particular attention. Mismatches between your purchase records and your suppliers' filings are one of the most common triggers for compliance notices. A regular reconciliation process — rather than a scramble at year-end — keeps this risk under control.",
      "Digital and e-invoicing requirements continue to expand, and businesses that treat this as a compliance formality rather than a process to get right often find themselves reworking invoices after the fact. Building compliant invoicing into your day-to-day systems from the outset avoids this entirely.",
      "If GST compliance feels like it's consuming more time and attention than it should, that's usually a sign your processes need tightening rather than a reflection of how complicated it needs to be. Our team can review your current approach and help build a system that keeps you compliant without the last-minute scramble.",
    ],
  },
];
