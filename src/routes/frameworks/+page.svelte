<h1>Verschillende soorten frameworks</h1>

<h2>11ty</h2>
<p>
    <a href="https://conf.11ty.dev/">11ty</a> (Eleventy) is een populaire, op JavaScript
    gebaseerde Static Site Generator (SSG) die uitblinkt in snelheid en eenvoud. Het is een
    uitstekende keuze voor websites met veel tekst of blogs, maar minder geschikt voor
    complexe webapplicaties met veel gebruikersinteractie.
</p>

<h3>Pros</h3>
<ul>
    <li><strong>Extreem hoge snelheid:</strong> 11ty genereert statische HTML-bestanden zonder onnodige client-side JavaScript. Hierdoor laden websites razendsnel en scoren ze zeer hoog op SEO en Core Web Vitals.</li>
    <li><strong>Geen framework-lock-in:</strong> Je kunt je favoriete template-taal kiezen, zoals Liquid, Nunjucks, Markdown, Handlebars of gewone HTML. Je bent niet verplicht om React, Vue of een ander zwaar front-end framework te leren.</li>
    <li><strong>Korte leercurve:</strong> Met basiskennis van HTML, CSS en een beetje JavaScript kun je direct aan de slag. De mappenstructuur bepaalt automatisch de URL-structuur van je website.</li>
    <li><strong>Snelle build-tijden:</strong> Zelfs bij duizenden pagina's bouwt 11ty de volledige website in slechts enkele seconden.</li>
    <li><strong>Volledige controle over de output:</strong> 11ty voegt geen eigen code, scripts of CSS-classes toe aan je HTML. Wat je schrijft, is exact wat er in de browser verschijnt.</li>
</ul>

<h3>Cons</h3>
<ul>
    <li><strong>Geen ingebouwd CMS:</strong> 11ty werkt standaard met lokale bestanden (zoals Markdown). Voor niet-technische redacteurs moet je zelf een extern Headless CMS (zoals Decap CMS, Sanity of Contentful) koppelen.</li>
    <li><strong>Beperkte ondersteuning voor dynamische functies:</strong> Als pure statische site generator zijn zaken als gebruikersauthenticatie, winkelwagens of live databases niet standaard ingebouwd. Hiervoor heb je externe API's of serverless functions nodig.</li>
    <li><strong>Handmatige asset-verwerking:</strong> Het optimaliseren van afbeeldingen, bundelen van JavaScript of compileren van Sass/Tailwind CSS werkt niet altijd direct "out-of-the-box". Vaak moet je zelf plugins installeren of build-scripts configureren.</li>
    <li><strong>Minder geschikt voor complexe SPA's:</strong> Voor websites die aanvoelen als een app met veel interactieve onderdelen op één pagina zijn frameworks zoals Next.js, Astro of SvelteKit vaak praktischer.</li>
</ul>