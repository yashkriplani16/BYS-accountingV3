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
    slug: "bys-expands-advisory-services",
    image: blog3,
    title: "BYS Accounting Expands Advisory Services",
    date: "March 1, 2026",
    category: "Firm News",
    excerpt: "We're excited to announce the expansion of our business advisory division with new strategic planning offerings.",
    body: [
      "We are delighted to announce a significant expansion of BYS Accounting's business advisory division, effective March 2026. This expansion reflects our commitment to offering clients more than compliance — we want to be a genuine partner in building the future of your business.",
      "The new offerings include dedicated strategic planning workshops, designed to help business owners map out three to five-year growth trajectories with financial modelling to back every assumption. These sessions are facilitated by our senior advisory team and result in a written strategic roadmap tailored to your business.",
      "We are also launching a CFO-on-demand service for small and medium-sized businesses that benefit from senior financial leadership without the cost of a full-time executive. This includes monthly reporting, board-level presentations, capital raising support, and ongoing financial mentorship for founding teams.",
      "In addition, we have strengthened our mergers and acquisitions capability, with dedicated advisors now available to assist with due diligence, business valuations, and deal structuring for clients looking to buy, sell, or merge. This service has been in high demand as market consolidation continues across several industries we serve.",
      "To support these expanded offerings, we have invested in new analytical tools and deepened our technology partnerships, allowing us to deliver faster, more data-driven advice. Clients will also benefit from an upgraded client portal offering real-time visibility into their financial position.",
      "If you would like to learn more about our expanded advisory services or discuss whether any of these offerings are right for your business, please reach out to your relationship manager or contact us directly. We look forward to supporting your growth journey.",
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
    slug: "bys-welcomes-new-partners",
    image: serviceAdvisory,
    title: "BYS Welcomes Two New Senior Partners",
    date: "January 20, 2026",
    category: "Firm News",
    excerpt: "Our growing team welcomes David Nguyen and Emma Clarke as new senior partners in audit and advisory.",
    body: [
      "BYS Accounting is proud to announce the appointment of two new senior partners: David Nguyen, who joins our audit and assurance practice, and Emma Clarke, who strengthens our business advisory division. Both appointments reflect the firm's continued growth and our commitment to delivering the highest standard of professional service.",
      "David Nguyen brings over 18 years of experience in external audit, financial reporting, and risk advisory. He has led audit engagements for ASX-listed companies, not-for-profit organisations, and Commonwealth-regulated entities. David's expertise in complex financial statement preparation and assurance will be invaluable as we expand our corporate client base.",
      "Emma Clarke joins us with a background in CFO roles across the technology and professional services sectors, where she was responsible for financial strategy, investor relations, and corporate governance for businesses at various stages of growth. Emma's hands-on executive experience makes her an exceptional advisor for founders and business owners navigating significant transitions.",
      "Both David and Emma share BYS Accounting's belief that great financial advice is built on deep relationships and honest, forward-looking guidance. Their appointments are part of a broader investment in talent that positions the firm for continued growth into 2027 and beyond.",
      "Existing clients will be introduced to David and Emma as relevant to their service needs, and new clients seeking audit, assurance, or advisory services are encouraged to request an introductory meeting. We are confident that their expertise will create significant value across the firm.",
      "On behalf of the entire BYS team, we extend a warm welcome to David and Emma. We look forward to the contributions they will make to our clients, our people, and the ongoing success of the firm.",
    ],
  },
];
