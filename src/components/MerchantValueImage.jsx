import Icon from './Icon';

export default function MerchantValueImage() {
  return <section id="merchant-overview" className="merchant-value-overview" aria-labelledby="merchant-overview-title">
    <div className="container comparison-container">
      <h2 className="section-label" id="merchant-overview-title">SMART DEVICE</h2>
      <figure className="solution-artwork merchant-value-artwork">
        <a href="/assets/merchant-value-overview.png" target="_blank" rel="noopener noreferrer" aria-label="View the full bank, merchant and customer benefits image in a new tab">
          <img src="/assets/merchant-value-overview.png" width="1536" height="1024" loading="lazy" alt="One device. Three stronger relationships. A device displaying Your Bank’s QR Code connects three circles: banks gain accounts, lending opportunities and stronger relationships; merchants gain shop visibility, offers and safety alerts; customers find open shops and offers and avoid wasted trips."/>
        </a>
        <figcaption><span>One device. Three stronger relationships.</span><div><a href="#solution">Read the benefits below<Icon name="arrow"/></a><a href="/assets/merchant-value-overview.png" target="_blank" rel="noopener noreferrer">View full image<Icon name="arrow"/></a></div></figcaption>
      </figure>
    </div>
  </section>;
}
