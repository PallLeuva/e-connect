// Curated public sources, checked October 20, 2026. These are not partner listings.
export const SOURCES = {
 aurora: {name:'City of Aurora · Recycling',url:'https://www.aurora.il.us/City-Services/Environment-and-Sustainability/Recycling'},
 electronics:{name:'City of Naperville · Electronics',url:'https://www.naperville.il.us/services/garbage-and-recycling/electronics-recycling/'},
 hhw:{name:'City of Naperville · Household hazardous waste',url:'https://www.naperville.il.us/services/garbage-and-recycling/household-hazardous-waste-facility/'},
 textiles:{name:'City of Naperville · Textiles',url:'https://www.naperville.il.us/services/garbage-and-recycling/clothing-and-textile-recycling/'},
 curbside:{name:'City of Naperville · Curbside recycling',url:'https://www.naperville.il.us/services/garbage-and-recycling/curbside-recycling-program/'},
 goodwill:{name:'Goodwill Greater Milwaukee & Chicago · Donation guidelines',url:'https://www.goodwillgreatermc.org/donate/donate-items/donor-guidelines'},
 habitat:{name:'Habitat Northern Fox Valley · Donation guidelines',url:'https://habitatnfv.org/restores-northern-fox-valley/donate/'},
 compost:{name:'City of Naperville · Food scraps',url:'https://www.naperville.il.us/services/garbage-and-recycling/food-scrap-compost/'},
 battery:{name:'US EPA · Used household batteries',url:'https://www.epa.gov/recycle/used-household-batteries'}
};
export const CITIES = [{id:'aurora',name:'Aurora, IL'},{id:'naperville',name:'Naperville, IL'},{id:'foxvalley',name:'Elsewhere in the Fox Valley, IL'},{id:'other',name:'Outside this area'}];
export const ITEMS = [
 {id:'laptop',name:'Laptop',group:'Electronics',icon:'laptop',words:'computer notebook macbook chromebook',kind:'electronic',idea:'Still working? Give it a new job as a dedicated study or recipe computer.'},
 {id:'phone',name:'Mobile phone',group:'Electronics',icon:'phone',words:'cell smartphone iphone android tablet ipad',kind:'electronic',idea:'A working, supported phone can become a dedicated music player.'},
 {id:'monitor',name:'TV or monitor',group:'Electronics',icon:'monitor',words:'television screen display',kind:'electronic',idea:'Ask a friend or local group whether they could use a working screen.'},
 {id:'cables',name:'Cables & chargers',group:'Electronics',icon:'plug',words:'cable cord wire charger adapter keyboard mouse',kind:'electronic',idea:'Label working cables and keep only the ones that match your devices.'},
 {id:'clothing',name:'Clothing & shoes',group:'Textiles',icon:'shirt',words:'shirt jeans tshirt clothes shoe coat fabric textile towel socks',kind:'textile',idea:'Turn a clean, worn cotton T-shirt into reusable cleaning cloths.'},
 {id:'books',name:'Books',group:'Home & everyday',icon:'book',words:'book textbook novel paperback',kind:'reusable',idea:'Start a book swap with friends or neighbors. Ask before leaving books at a library.'},
 {id:'furniture',name:'Furniture',group:'Home & everyday',icon:'chair',words:'chair couch sofa desk table dresser shelf',kind:'furniture',idea:'Refresh sound furniture with new handles or a washable cover.'},
 {id:'glass',name:'Glass bottle or jar',group:'Packaging',icon:'bottle',words:'glass jar mason bottle container',kind:'packaging',idea:'Use a clean, unchipped jar to organize pencils, buttons, or craft supplies.'},
 {id:'plastic',name:'Plastic bottle or jug',group:'Packaging',icon:'bottle',words:'plastic bottle jug milk water soda container',kind:'packaging',idea:'Keep a refillable bottle handy to avoid the next disposable one.'},
 {id:'cardboard',name:'Cardboard box',group:'Packaging',icon:'box',words:'cardboard box carton packaging paper',kind:'packaging',idea:'Save a sturdy, dry box for your next donation trip or parcel.'},
 {id:'battery',name:'Household batteries',group:'Special handling',icon:'battery',words:'battery batteries lithium aa aaa rechargeable powerbank',kind:'hazard',idea:null},
 {id:'oilpaint',name:'Oil-based paint',group:'Special handling',icon:'paint',words:'oil paint stain varnish solvent',kind:'hazard',idea:null},
 {id:'latexpaint',name:'Latex / water-based paint',group:'Special handling',icon:'paint',words:'latex paint water acrylic',kind:'paint',idea:'Keep labeled leftover paint for small touch-ups, following the label’s storage directions.'},
 {id:'bulb',name:'Fluorescent bulb / CFL',group:'Special handling',icon:'bulb',words:'fluorescent cfl bulb light tube mercury',kind:'hazard',idea:null},
 {id:'food',name:'Fruit & vegetable scraps',group:'Food & garden',icon:'leaf',words:'food compost peel vegetable fruit coffee grounds scraps',kind:'organic',idea:'Plan one meal around what you already have before the next grocery trip.'}
];
export const PLACES = [
 {id:'ewaste',name:'Electronics drop-off',org:'Naperville Environmental Collection Campus',address:'156 Fort Hill Drive, Naperville, IL',type:'Recycle',icon:'plug',items:['laptop','phone','monitor','cables'],source:'electronics',hours:'Mon–Fri · 7 am–3 pm; holiday closures',accepts:'Computers, phones, screens, cables and listed electronics.',note:'Fees apply to TVs and monitors. No loose batteries or large appliances. Confirm current fees before visiting.',eligibility:'Residential electronics; no business waste.'},
 {id:'hhw',name:'Household hazardous waste',org:'Naperville Environmental Collection Campus',address:'156 Fort Hill Drive, Naperville, IL',type:'Special handling',icon:'battery',items:['battery','oilpaint','bulb'],source:'hhw',hours:'Sat–Sun · 9 am–2 pm; holiday closures',accepts:'Household batteries, oil-based paint and unbroken fluorescent bulbs.',note:'No latex paint or broken bulbs. Contact the facility first for damaged batteries or leaking containers.',eligibility:'All Illinois residents · no fee · no business waste.'},
 {id:'textiles',name:'Clothing & textile drop-off',org:'Naperville Environmental Collection Campus',address:'156 Fort Hill Drive, Naperville, IL',type:'Recycle',icon:'shirt',items:['clothing'],source:'textiles',hours:'Mon–Fri · 7 am–3 pm; holiday closures',accepts:'Dry clothing and listed textiles, including worn items.',note:'No wet or heavily soiled textiles. Remove hangers and sharp objects; leave bags untied.',eligibility:'Check the program page for the complete list.'},
 {id:'goodwill',name:'Give useful things another home',org:'Goodwill Greater Milwaukee & Chicago',address:'Use the official store finder for your nearest location',type:'Donate',icon:'heart',items:['clothing','books','laptop','monitor'],source:'goodwill',finder:'https://www.goodwillgreatermc.org/locations',hours:'Hours vary by store',accepts:'Clothing, books, laptops and flat-screen monitors.',note:'No furniture or CRT screens. Confirm condition and acceptance with the chosen store.',eligibility:'Donation is subject to inspection and acceptance.'},
 {id:'habitat',name:'Furniture donation',org:'Habitat for Humanity of Northern Fox Valley ReStore',address:'800 N. State Street, Elgin, IL',type:'Donate',icon:'chair',items:['furniture'],source:'habitat',hours:'Check the ReStore’s current donation hours',accepts:'Eligible clean furniture, subject to condition and store approval.',note:'Elgin is a regional option, not an Aurora drop-off. Send photos or call before arranging transport.',eligibility:'Pickup availability depends on service area and approval.'}
];
export const PHOTO_MAP={'laptop':['laptop'],'cell phone':['phone'],'tv':['monitor'],'keyboard':['cables'],'mouse':['cables'],'book':['books'],'chair':['furniture'],'couch':['furniture'],'dining table':['furniture'],'bottle':['glass','plastic']};
