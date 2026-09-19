import Icon from './Icon';

// Approved green brand treatment with the owner's latest merchant infographic.
export default function OriginalHero() {
  return <>
    <section id="home" className="original-hero">
      <div className="original-hero-inner">
        <div className="original-hero-copy">
          <h1><span>LOSING THE COMPETITIVE</span><br/><em>EDGE OVER FINTECHS?</em></h1>
          <p className="original-subtitle">Not because the payment sound box is weak.<br/><span>Because the product is the same.</span></p>
          <p className="original-problem-title">Merchants have real problems.</p>
          <p className="original-description">Customers arrive at closed shops and lose trust. Offers don&apos;t reach loyal customers. They worry about theft, fire safety, low customer reach, and advertising costs.</p>
          <p className="original-statement">Our budget-friendly smart device (patent) is not just a payment box. It solves these real problems.</p>
          <p className="original-statement original-conclusion">By offering this device, banks can build stronger, direct relationships with merchants.</p>
          <div className="original-hero-actions"><a href="#contact">PARTNER WITH US<Icon name="arrow"/></a></div>
        </div>
        <figure className="original-hero-art"><a className="original-art-frame" href="/assets/merchant-problems-hero.png" target="_blank" rel="noopener noreferrer" aria-label="View the full merchant problems and benefits image"><img src="/assets/merchant-problems-hero.png" alt="Real problems of merchants and the Here Open device benefits for banks, merchants and customers" width="1774" height="887" fetchPriority="high"/></a><figcaption><a href="/assets/merchant-problems-hero.png" target="_blank" rel="noopener noreferrer">View full image<Icon name="arrow"/></a></figcaption></figure>
      </div>
    </section>
  </>;
}
