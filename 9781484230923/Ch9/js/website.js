var headermenu = [
  { name: 'Categories', link: '#' },
  { name: 'Services', link: '#' },
  { name: 'Blog', link: '#' },
  { name: 'Write', link: '#' },
  { name: 'Shop', link: '#' }
];

var catlist = [
  { name: 'Apple & iOS' },
  { name: 'Big Data & Analytics' }, 
  { name: 'Business Databases Enterprise Software' }, 
  { name: 'Game Development' }, 
  { name: 'Graphics' },
  { name: 'Hardware & Maker' }, 
  { name: 'Java' }, 
  { name: 'Machine Learning' }, 
  { name: 'Microsoft & .NET' }, 
  { name: 'Mobile Networking & Cloud' }, 
  { name: 'Open Source Programming' }, 
  { name: 'Python' }, 
  { name: 'Security' }, 
  { name: 'Web Development' }
];

var website = `
  <header>
    <div id="top"><img src="img/logo.svg"></div>
    <p class="search"><input type="text" name="search" placeholder="Search"></p>

    <nav>
      <ul id="menu">
        {{#each menu}}
          <li class="item"><a href="{{link}}">{{name}}</a></li>
        {{/each}}

        <!--<li class="item"><a href="{{menu[0].link}}">{{menu[0].name}}</a></li>
        <li class="item"><a href="{{menu[1].link}}">{{menu[1].name}}</a></li>
        <li class="item"><a href="{{menu[2].link}}">{{menu[2].name}}</a></li>
        <li class="item"><a href="{{menu[3].link}}">{{menu[3].name}}</a></li>
        <li class="shop"><a href="{{menu[4].link}}">{{menu[4].name}}</a></li>-->
      </ul>
    </nav>
    
    <section id="head-img">
      <div>
        <h1>{{title}}</h1>
        <h2>{{strapline}}</h2>
        
        <a href="#">{{about}}</a>
      </div>
    </section>
  </header>
  
  <section id="highlights">
    <h3>Highlights</h3>
    <ul>
     {{#each books}}
        <li class="item">
          <div class="book"><img src="{{img}}"></div>
          <div class="info">{{author}}</div>
          <div class="format">{{format}}</div>
          <div class="info">from <b>{{price}}</b></div>
        </li>
      {{/each}}
      <li id="daily">
        <h3>Daily Deal</h3>
        <div class="info">{{daily.title}}</div>
        <div class="discount">{{daily.discount}}</div>
        <div class="oldprice">{{daily.oldprice}}</div>
        <div class="book"><img src="{{daily.img}}"></div>
      </li>
    </ul>      
  </section>

  <section id="categories">
    <h3>Browse our categories</h3>
    <ul>
    {{#each categories}}
      <li class="item">{{name}}</li>
    {{/each}}  
    </ul>
  </section>

  <APPublish />
  <APSubscribe />
  <APFooter />
`;


/* Components for website */

/* Publish */
const APPublish = Ractive.extend({
  template: `
    <section id="publish">
      <h3>{{title}}</h3>
      <p class="info">{{info}}</p>
      <p class="proposal"><a href="#">{{proposal}}</a></p>
    </section>
  `,
  css: `
    #publish { background-color: #f7f7f7; background: url(img/publish.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover; position: relative; height: 225px; }
    #publish h3 { color: #fff; font-size: 1.51429rem; margin-left: 1.875rem; line-height: 1.25rem; width: 25rem; position: absolute; margin-top: 2.8125rem; margin-left: 1.875rem; font-weight: 300; }
    #publish .info { color: #fff; width: 39.375rem; position: absolute; margin-top: 4.6875rem; margin-left: 1.875rem; }
    #publish .proposal a { padding: 10px; padding-top: 0.4375rem; background-color: #ffcc00; border-radius: 2.375rem; display: block; width: 9.6875rem; text-align: center; text-decoration: none; padding-bottom: 0.4375rem; margin-left: 1.875rem; position: absolute; margin-top: 9.6875rem; }
  `,
  data: {
    title: 'Publishing with Apress',
    info: 'We build strong partnerships with our authors. Apress offers authors the chance to work with a publisher with the marketing, distribution, and commercial weight of a major player while maintaining the spirit of an independent publishing house.',
    proposal: 'Submit a proposal'
  }
});


/* Subscribe */
const APSubscribe = Ractive.extend({
  template: `
    <section id="subscribe">
      <h3>{{title}}</h3>
      <p class="intro">{{intro}}</p>
      <form id="subscribe-form">
        <label>Email Address:
          <input type="email" value="">
          <input type="submit" class="signup" value={{signup}}>
        </label>
      </form>
    </section>
  `,
  css: `
    #subscribe { background-image: url(img/advert.jpg); width: 29.375rem; height: 16.125rem; margin: 0.9375rem; background-size: cover; background-position: center; background-color: #333333; }
    #subscribe h3 { color: #1a1a1a; font-size: 1.51429rem; margin-left: 1.875rem; line-height: 1.25rem; float: left; position: absolute; padding-left: 31.25rem; margin-top; 3.125rem; width: 40rem; margin-bottom: 0.5rem; }
    #subscribe .intro { margin-left: 1.875rem; margin-top: 7.8125rem; line-height: 1.25rem; float: left; position: absolute; padding-left: 31.25rem; width: 15.625rem; }
    #subscribe label { margin-left: 1.875rem; float: left; position: absolute; padding-left: 31.25rem; width: 15.625rem; margin-top: 3.125rem; margin-top: 3.625rem; }
    #subscribe label input { margin-top: 0.3125rem; }
    #subscribe input[type=submit] { margin-left: 1.875rem; line-height: 1.25rem; float: left; position: absolute; padding: 0.625rem; padding-top: 0.4375rem; background-color: #ffcc00; border-radius: 2.375rem; display: block; width: 6.25rem; text-align: center; text-decoration: none; padding-bottom: 0.4375rem; margin-left: 12.0625rem; margin-top: -2rem; color: #6e6e6e; }
  `,
  data: {
    title:  'Subscribe to our newsletter',
    intro: 'Stay up to date on daily deals, discount promotions, events & new releases. Save up to 90% on eBook purchases.',
    signup: 'Sign up now'
  }
});


/* Footer */
const APFooter = Ractive.extend({
  template: `
    <footer>
      <p><img src="img/logo.svg"></p>
      <p>{{message}}</p>
    </footer>
  `,
  css: `
    footer { background-color: #000; line-height: 2.375rem; padding-left: 1.25rem; color: #6e6e6e; }
    footer p { width: 23.75rem; display: inline-block;}
    footer p:nth-child(1) { width: 10rem; }
    footer p img { vertical-align: middle; padding-right: 2.1875rem; }
  `,
  data: { message: '© Apress 2017 | Terms & Conditions | Privacy Policy' }
});



var ractive = new Ractive({
	target: '#container',
  template: website,
  components: { APFooter, APPublish, APSubscribe },
  data: {
    title: 'Welcome to Apress Publishing',
    strapline: 'The publisher dedicated to meeting the information needs of IT professionals, developers, and tech enthusiasts worldwide',
    about: 'Learn more',
    menu: headermenu,
    books: [{
      img: "img/highlight1.jpg",
      author: "Dannen, C. (2017)",
      format: "eBook, Softcover",
      price: "£21.99",      
    },{
      img: "img/highlight2.jpg",
      author: "Freeman, A. (2017)",
      format: "eBook, Softcover",
      price: "£26.99",       
    },{
      img: "img/highlight3.jpg",
      author: "Sarkar, D. (2016)",
      format: "eBook, Softcover",
      price: "£23.99",       
    }],
    categories: catlist,
    daily: {
      img: "img/daily.jpg",
      title: "Test Driven Development in Ruby",
      discount: "£9.99",
      oldprice: "£23.99"
    }
  }
});


