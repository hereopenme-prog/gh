// Approved copy lives here. Keep the audience order: banks, merchants, customers.
export const contact = { email: 'contact@hereopen.me', phone: '+91 9060038229', whatsapp: 'https://wa.me/919060038229' };

export const bankProblems = [
  ['device','Limited differentiation','Similar sound boxes give merchants few reasons to choose one bank over fintechs and other banks.'],
  ['bank','Underused bank strengths','Banking capabilities do not always translate into daily merchant value.'],
  ['people','Missed merchant acquisition','A weak device proposition can limit new merchant relationships.'],
  ['link','Weak merchant retention','Limited everyday value makes the relationship easier to replace.'],
  ['chart','CASA relationship risk','Losing the merchant touchpoint can weaken deposit relationships.'],
  ['credit','Loan distribution','Intermediated loan distribution can increase acquisition costs.'],
  ['link','Weaker direct relationships',"Third-party channels can distance banks from the merchant's daily business."],
  ['eye','Limited lending context','Fragmented business information can limit the context for credit assessment.']
];

export const merchantProblems = [
  ['people','Trust loss & missed footfall','Uncertain opening times disappoint customers, weaken trust and cost shops potential visits.'],
  ['megaphone','Low visibility & missed updates','Shops are hard to find without a current digital presence. Offers and announcements may not reach nearby customers.'],
  ['shield','Theft and fire worries','Intrusion, fire and smoke can go unnoticed without suitable detection, alerts and a way to respond.']
];

export const customerProblems = [
  ['clock','No real-time certainty','Listed hours may not reflect live shop status. Trips to closed shops waste time, fuel and effort.'],
  ['location','Limited discovery & missed offers','Open nearby shops can be hard to find. Useful offers and announcements may never reach interested customers.'],
  ['bell','Uncertainty in urgent moments','Urgent needs are harder to meet when customers cannot identify an open nearby shop.']
];

export const audiences = {
  banks: { label:'For banks', icon:'bank', title:'Grow together.', intro:'A stronger relationship, built around the merchant’s everyday business.', benefits:[
    ['people','Merchant acquisition','Give local businesses more reasons to choose your bank.'],
    ['chart','Daily transactions','Build relationships around everyday payment activity.'],
    ['credit','Merchant lending','Connect eligible merchants with suitable bank-led credit.'],
    ['credit','Cash-credit opportunities','Give loans directly without paying brokerage fees to fintechs or other intermediaries.'],
    ['link','Direct relationships','Build trust through ongoing merchant engagement.'],
    ['chart','CASA growth potential','Deepen account relationships and deposit engagement.'],
    ['device','A stronger offering','Offer useful services beyond payment confirmation.']
  ]},
  merchants: { label:'For merchants', icon:'shop', title:'More value, every day.', intro:'Stay visible to customers and connected to what matters in your shop.', benefits:[
    ['phone','One-tap shop status','Control the device from your mobile phone. Share your shop’s open or closed status in the public app with a confidence score.'],
    ['location','Local discovery','Help nearby customers find your business.'],
    ['megaphone','Business visibility','Promote your shop through the Here Open network.'],
    ['tag','Direct offers','Share offers and discounts with interested customers.'],
    ['lock','Theft-risk alerts','Stay informed with supported shop-security alerts.'],
    ['fire','Fire & smoke alerts','Receive safety notifications where supported.']
  ]},
  customers: { label:'For customers', icon:'people', title:'Smarter choices. Easier visits.', intro:'Know before you go, with timely information from local businesses.', benefits:[
    ['shop','Live shop status',"Check a shop's reported status before travelling."],
    ['tag','Relevant offers','Discover offers from the businesses you follow.'],
    ['location','Smarter journeys','Plan visits to help save time, fuel and effort.'],
    ['check','More confident visits','Make everyday shopping easier with timely updates.']
  ]}
};

export const workflows = {
  open: { title:'Business Mode', label:'Shop is open', icon:'shop', steps:[
    ['Device starts Business Mode', 'One tap on OPEN tells the connected device your shop is open.'],
    ['Customers see OPEN', 'The public app shows your shop status with recent activity.'],
    ['Share offers with customers', 'Send instant offers and discounts from the Here Open merchant app.']
  ]},
  closed: { title:'Security Mode', label:'Shop is closed', icon:'lock', steps:[
    ['Device starts Security Mode', 'One tap on CLOSED tells the connected device your shop is closed.'],
    ['Customers see CLOSED', 'The public app shows your shop as closed before customers travel.'],
    ['Security alerts reach your mobile', 'Detected intrusion, motion or tampering triggers an instant alert to the merchant.']
  ]}
};

export const faqs = [
  ['Why should banks offer Here Open to their merchants?','Here Open instantly shows customers in the Here Open app whether a shop is OPEN, with live confidence such as “Movement detected 2 minutes ago.” Merchants can also send offers and discounts. When the shop is CLOSED, Security Mode sends instant alerts, while fire and smoke safety monitoring continues 24/7.'],
  ['How is Here Open different from a normal payment sound box?','A normal sound box mainly confirms payments. Here Open adds OPEN/CLOSED status, current offers, and instant safety and security alerts to the merchant’s mobile phone — features standard sound boxes do not offer together.'],
  ['How can Here Open give banks a stronger edge over fintechs?','Here Open goes beyond payment confirmation by solving everyday merchant needs such as customer connection, free advertising, shop visibility, and safety and security worries. As it becomes an essential part of daily business for merchants and customers, it gives banks a stronger edge over fintechs.'],
  ['How can Here Open help banks gain more merchant current accounts?','Only banks partnered with Here Open can offer this device. It solves everyday merchant needs that normal payment devices do not address, giving merchants a strong reason to open a current account with the partner bank and use it for daily business transactions.'],
  ['How can Here Open improve merchant retention and stickiness?','Here Open helps merchants connect with customers through OPEN/CLOSED status, offers and discounts. As customers start expecting these features, demand can grow across more shops. Its low-cost safety and security features give merchants even more reason to keep using the device and stay connected with the bank.'],
  ['How can Here Open create more lending opportunities for banks?','As Here Open becomes part of the merchant’s daily business, it can increase transactions and account activity. This gives banks a stronger direct merchant relationship and more opportunities to offer loans directly to eligible merchants.'],
  ['How does Here Open provide safety and security to merchants?','When the merchant marks the shop CLOSED, the device switches to Security Mode and sends instant security alerts to the merchant’s mobile phone. Fire and smoke safety monitoring continues 24/7.'],
  ['Can banks use their own branding?','Yes. The device and merchant experience can be developed around the partner bank’s brand. The bank manages the merchant relationship, while Here Open provides the technology and device ecosystem.'],
  ['How does a merchant use Here Open?','The merchant controls the device through the Here Open merchant app. Selecting OPEN starts Business Mode, while selecting CLOSED starts Security Mode. Merchants can also send instant offers and discounts to customers through the app.']
];
