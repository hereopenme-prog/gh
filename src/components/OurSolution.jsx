import Icon from './Icon';

const features = [
  ['shop', 'OPEN / CLOSED status', 'Customers can see live shop status in the public app.'],
  ['tag', 'Offers & discounts', 'Merchants can send instant offers and discounts.'],
  ['clock', 'Live confidence', 'Movement detected 2 minutes ago.'],
  ['shield', 'Security alerts', 'Instant security alerts to the merchant’s mobile phone.'],
  ['fire', '24/7 fire & smoke safety', 'Continuous safety monitoring and alerts.'],
  ['phone', 'Merchant app control', 'Control the device from the Here Open merchant app.']
];

export default function OurSolution() {
  return <section id="our-solution" className="solution-intro" aria-labelledby="solution-intro-title">
    <div className="container comparison-container">
      <h2 className="section-label" id="solution-intro-title">OUR SOLUTION</h2>
      <figure className="solution-artwork">
        <a href="/assets/our-solution.png" target="_blank" rel="noopener noreferrer" aria-label="View the full Here Open Smart Device image in a new tab">
          <img src="/assets/our-solution.png" width="1536" height="1024" loading="lazy" alt="Here Open Smart Device displaying Your Bank QR Code, surrounded by live shop status, offers, movement confidence, security alerts, 24/7 fire and smoke monitoring, and merchant app control."/>
        </a>
        <figcaption>One device. Better visibility. Better protection. Better connection.<a href="/assets/our-solution.png" target="_blank" rel="noopener noreferrer">View full image<Icon name="arrow"/></a></figcaption>
      </figure>
      <details className="solution-details">
        <summary>Read the six features<Icon name="plus"/></summary>
        <div className="solution-feature-list">{features.map(([icon,title,description])=><article key={title}><span className="item-icon"><Icon name={icon}/></span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        <div className="solution-details-summary"><p>Here Open does more than confirm payments. It helps merchants connect with customers, promote their businesses, improve shop visibility, and manage safety and security needs.</p><p>As these features become part of daily business for merchants and customers, the device gives banks a stronger edge over fintechs.</p></div>
      </details>
    </div>
  </section>;
}
