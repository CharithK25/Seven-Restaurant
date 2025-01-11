import React, { useState } from "react";

import "./Menu.css";

const DrinkMenu: React.FC = () => {
  const [isSectionOpen, setIsSectionOpen] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setIsSectionOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const drinkMenuSections = [
    { title: "SEVEN SPECIAL COCKTAILS", key: "signatureServes" },
    { title: "CLASSIC COCKTAILS & MARTINIS", key: "classicCocktails" },
    { title: "WINES", key: "bartenderTwists" },
    { title: "BEERS", key: "tripCBD" },
    { title: "RUM", key: "sharersShotPaddles" },
    { title: "WHISKEY", key: "rose" },
    { title: "VODKA", key: "champagne" },
    { title: "COGNAC", key: "sparkling" },
    { title: "NON ALCOHOLIC DRINKS", key: "nonAlcoholicCocktails" },
  ];

  return (
    <div className="menu-sections-columns">
      <div className="menu-column">
        {drinkMenuSections.map((section) => (
          <div key={section.key} className={`menu-section ${isSectionOpen[section.key] ? "open" : ""}`}>
            <div className="menu-section-header" onClick={() => toggleSection(section.key)}>
              <h2 className="menu-section-title">{section.title}</h2>
              <span className="menu-section-toggle">{isSectionOpen[section.key] ? "-" : "+"}</span>
            </div>
            
            {/* Seven Special Cocktails Content */}
            {isSectionOpen[section.key] && section.key === "signatureServes" && (
                  <div className="menu-section-content">
                    {/* <h3>SEVEN SPECIAL COCKTAILS</h3> */}
                    <ul className="menu-section-list">
                      <li>
                        <span>GIN SLING</span>
                        <span>£9.95</span>
                      </li>
                        <li className="wine-region">Gin, Fresh Ginger & Mint, Sweet & Sour Mix, with a splash of Cranberry Juice</li>
                      <li>
                        <span>MIXED BERRY BLAST</span>
                        <span>£9.95</span>
                      </li>
                     <li className="wine-region">Gin, Cointreau, Mixed Berries, Sweet & Sour Mix, topped with Lemonade</li>
                      <li>
                        <span>STRAWBERRY LIPSTICK</span>
                        <span >£9.95</span>
                        
                      </li>
                      <li className="wine-region">Vodka, Strawberry & Peach Liqueur, Sweet & Sour Mix & Apple Juice</li>
                      <li>
                        <span>CARIBBEAN COOLER</span>
                        <span>£9.95</span>
                      </li>
                      <li className="wine-region">White Rum, Malibu, Sweet & Sour Mix, Pineapple Juice, Top up Lemonade</li>
                      <li>
                        <span>SEVEN SIGNATURE</span>
                        <span>£9.95</span>
                                              </li>
                      <li className="wine-region">Smirnoff, Sweet, Sour Muddle Cucumber, Ginger, Lychee juice</li>
                    </ul>
                  </div>
                )}
                {isSectionOpen[section.key] && section.key === "classicCocktails" && (
  <div className="menu-section-content">
    {/* <h3>CLASSIC COCKTAILS & MARTINIS</h3> */}
    <ul className="menu-section-list">
      <li>
        <span>MOJITO</span>
        <span>£9.95</span>
      </li>
      <li className="cocktail-description">
        (Passion fruit, Strawberry, Raspberry), Rum, Fresh Mint & Lime, Soda & Fresh Fruit
      </li>

      <li>
        <span>MAI TAI</span>
        <span>£9.75</span>
      </li>
      <li className="cocktail-description">
        White Rum, Sweet & Sour Mix, Grenadine & Pineapple Juice
      </li>

      <li>
        <span>COSMOPOLITAN</span>
        <span>£9.95</span>
      </li>
      <li className="cocktail-description">
        Belvedere, Cointreau, Lime & Cranberry
      </li>

      <li>
        <span>WHISKEY SOUR</span>
        <span>£9.95</span>
      </li>
      <li className="cocktail-description">
        Jack Daniel’s, Sweet & Sour Mix with Bitters & Egg White
      </li>

      <li>
        <span>DAIQUIRI</span>
        <span>£9.75</span>
      </li>
      <li className="cocktail-description">
        (Strawberry or Passion fruit) White Rum, Sweet & Sour Mix, Fresh Fruit with Lime Juice
      </li>

      <li>
        <span>PIÑA COLADA</span>
        <span>£9.75</span>
      </li>
      <li className="cocktail-description">
        White Rum, Malibu, Coconut Syrup, Cream & Pineapple Juice
      </li>

      <li>
        <span>OLD FASHIONED</span>
        <span>£9.75</span>
      </li>
      <li className="cocktail-description">
        Bullet Bourbon, Sugar, Augusta bitter
      </li>

      <li>
        <span>PORNSTAR MARTINI</span>
        <span>£9.95</span>
      </li>
      <li className="cocktail-description">
        Vodka, Passo, Vanilla Syrup, Passion Fruit Purée with a shot of Prosecco
      </li>

      <li>
        <span>LYCHEE</span>
        <span>£9.95</span>
      </li>
      <li className="cocktail-description">
        Vodka, Lychee Liqueur, Sweet & Sour Mix, Rose Syrup with a Splash of Lychee Juice
      </li>

      <li>
        <span>ESPRESSO</span>
        <span>£9.95</span>
      </li>
      <li className="cocktail-description">
        Vodka, Kahlúa, Vanilla Syrup and a shot of Espresso
      </li>
    </ul>
  </div>
)}
 
                {isSectionOpen[section.key] && section.key === "bartenderTwists" && (
                  <div className="menu-section-content">
                    <div className="wines-header">
                      <span>175ml</span>
                      <span>250ml</span>
                      <span>Bottle</span>
                    </div>

                    <h3>WHITE WINES</h3>
                    <ul className="menu-section-list">
                      <li>
                        <span>The Seven Harrow Sauvignon Blanc</span>
                        <span>£6.50</span>
                        <span>£7.35</span>
                        <span>£22.95</span>
                      </li>
                      <li className="wine-region">Central Valley, Chile</li>

                      <li>
                        <span>Thirty Three° South Chenin Blanc</span>
                        <span>£6.75</span>
                        <span>£7.75</span>
                        <span>£22.95</span>
                      </li>
                      <li className="wine-region">Western Cape, South Africa</li>

                      <li>
                        <span>Vivolo Pinot Grigio</span>
                        <span>£6.75</span>
                        <span>£8.25</span>
                        <span>£24.95</span>
                      </li>
                      <li className="wine-region">Venezie, Italy</li>

                      <li>
                        <span>Louis Mondeville Chardonnay</span>
                        <span>£7.05</span>
                        <span>£9.15</span>
                        <span>£26.00</span>
                      </li>
                      <li className="wine-region">Languedoc, France</li>

                      <li>
                        <span>Willowglen Gewürztraminer Riesling (Ve)</span>
                        <span>£7.25</span>
                        <span>£8.65</span>
                        <span>£27.95</span>
                      </li>
                      <li className="wine-region">Vegan Friendly – South Australia</li>

                      <li>
                        <span>Wild River "ME" Sauvignon Blanc</span>
                        <span>£9.75</span>
                        <span>£10.75</span>
                        <span>£30.95</span>
                      </li>
                      <li className="wine-region">Marlborough, New Zealand</li>

                      <li>
                        <span>Domaine de la Meulière Chablis</span>
                        <span></span>
                        <span></span>
                        <span>£39.95</span>
                      </li>
                      <li className="wine-region">Vegan Friendly – Burgundy, France</li>
                    </ul>

                    <h3>RED WINES</h3>
                    <ul className="menu-section-list">
                      <li>
                        <span>The Seven Harrow Sauvignon Merlot (V)</span>
                        <span>£6.50</span>
                        <span>£7.50</span>
                        <span>£22.00</span>
                      </li>
                      <li className="wine-region">Central Valley, Chile</li>

                      <li>
                        <span>Wildwood Shiraz</span>
                        <span>£6.25</span>
                        <span>£7.50</span>
                        <span>£22.95</span>
                      </li>
                      <li className="wine-region">California, USA</li>

                      <li>
                        <span>Casa del Marques Rioja Tinto</span>
                        <span>£6.00</span>
                        <span>£8.85</span>
                        <span>£24.95</span>
                      </li>
                      <li className="wine-region">Rioja, Spain</li>

                      <li>
                        <span>Bodega del Fin del Mundo Postales Malbec</span>
                        <span>£7.25</span>
                        <span>£9.45</span>
                        <span>£26.95</span>
                      </li>
                      <li className="wine-region">Patagonia, Argentina</li>

                      <li>
                        <span>Marchese Borgosole Salice Salentino Riserva</span>
                        <span>£9.45</span>
                        <span>£10.45</span>
                        <span>£28.95</span>
                      </li>
                      <li className="wine-region">Puglia, Italy</li>

                      <li>
                        <span>Château du Courlat Lussac Saint-Emilion</span>
                        <span></span>
                        <span></span>
                        <span>£36.95</span>
                      </li>
                      <li className="wine-region">Bordeaux, France</li>
                    </ul>

                    <h3>SPARKLING WINES</h3>
  
                 <ul className="menu-section-list">
                 <li>
    <span>Botter Prosecco Spumante (Ve) (Small)</span>
    <span></span>
    <span></span>
    <span>£10.50</span>
  </li>
  <li className="wine-region">Italy</li>

  <li>
    <span>Prosecco Rosé (Small)</span>
    <span></span>
    <span></span>
    <span>£10.50</span>
  </li>
  <li className="wine-region">Italy</li>

  <li>
    <span>The Seven Harrow "Prosecco Spumante (Ve)"</span>
    <span></span>
    <span></span>
    <span>£30.95</span>
  </li>
  <li className="wine-region">Italy</li>

  <li>
    <span>Bonotto delle Tezze Manzoni Moscato Rosato</span>
    <span></span>
    <span></span>
    <span>£31.95</span>
  </li>
  <li className="wine-region">Italy</li>
                </ul>
            <h3>ROSÉ WINES</h3>
            <ul className="menu-section-list">
         <li>
    <span>The Seven Harrow Pinot Grigio Rosato (Ve)</span>
    <span>£6.75</span>
    <span>£8.45</span>
    <span>£24.95</span>
          </li>
  <li className="wine-region">Veneto, Italy</li>

  <li>
    <span>Water’s Edge White Zinfandel</span>
    <span>£6.75</span>
    <span>£8.45</span>
    <span>£23.95</span>
  </li>
  <li className="wine-region">California, USA</li>

  <li>
    <span>Pinot Noir Rosé (Ve)</span>
    <span>£7.25</span>
    <span>£9.45</span>
    <span>£26.95</span>
  </li>
  <li className="wine-region">Pfalz, Germany</li>
       </ul>
                  </div>
                )}
                 {/* Content for VODKA */}
                 {isSectionOpen[section.key] && section.key === "champagne" && (
                 <div className="menu-section-content">
                   {/* <div></div>  */}
    {/* <h3>VODKA</h3> */}
    <div className="vodka-table">
      <div className="vodka-header">
        {/* <span>Single 25ml</span>
        <span>Double 50ml</span> */}
      </div>
      <ul className="menu-section-list">
        <li>
          <span>Smirnoff</span>
          <span>£4.10</span>
          <span>£7.95</span>
        </li>
        <li>
          <span>Ciroc Original</span>
          <span>£4.80</span>
          <span>£9.00</span>
        </li>
        <li>
          <span>Ciroc Flavours</span>
          <span>£4.80</span>
          <span>£9.00</span>
        </li>
        <li className="vodka-note">
          (Please ask a member of staff for the available flavours)
        </li>
        <li>
          <span>Belvedere Pure</span>
          <span>£4.95</span>
          <span>£8.95</span>
        </li>
        <li>
          <span>Grey Goose</span>
          <span>£4.95</span>
          <span>£8.95</span>
        </li>
      </ul>
    </div>
  </div>
)}
{isSectionOpen[section.key] && section.key === "tripCBD" && (
  <div className="menu-section-content">
    <h3>DRAUGHT BEERS</h3>
    <ul className="menu-section-list">
      <li>
        <span>Fosters</span>
        <span>£2.55</span>
        <span>£4.85</span>
      </li>
      <li>
        <span>Amstel</span>
        <span>£2.75</span>
        <span>£5.25</span>
      </li>
      <li>
        <span>Guinness</span>
        <span>£2.75</span>
        <span>£5.25</span>
      </li>
      <li>
        <span>Orchard Thieves</span>
        <span>£2.75</span>
        <span>£5.25</span>
      </li>
      <li>
        <span>Heineken</span>
        <span>£2.85</span>
        <span>£5.45</span>
      </li>
      <li>
        <span>Birra Moretti</span>
        <span>£3.10</span>
        <span>£5.95</span>
      </li>
      <li>
        <span>Beaver Town Neck Oil</span>
        <span>£3.05</span>
        <span>£6.00</span>
      </li>
    </ul>

    <h3>BOTTLED BEERS</h3>
    <ul className="menu-section-list">
      <li>
        <span>Heineken 0.0% Alcohol Free 330ml</span>
        <span>£3.75</span>
      </li>
      <li>
        <span>Sol 330ml</span>
        <span>£4.10</span>
      </li>
      <li>
        <span>Cobra 330ml / 660ml</span>
        <span>£4.50</span>
        <span>£7.50</span>
      </li>
      <li>
        <span>Doom Bar 500ml</span>
        <span>£4.50</span>
      </li>
    </ul>

    <h3>BOTTLED CIDERS</h3>
    <ul className="menu-section-list">
      <li>
        <span>Bulmers Original</span>
        <span>£4.50</span>
      </li>
      <li>
        <span>Old Mout Kiwi & Lime</span>
        <span>£4.50</span>
      </li>
      <li>
        <span>Old Mout Strawberry & Apple</span>
        <span>£4.50</span>
      </li>
      <li>
        <span>Old Mout Cherries & Berries</span>
        <span>£4.50</span>
      </li>
      <li>
        <span>Bulmers Red Berries & Lime</span>
        <span>£5.55</span>
      </li>
    </ul>
  </div>
)}
{isSectionOpen[section.key] && section.key === "sharersShotPaddles" && (
  <div className="menu-section-content">
    {/* <h3>RUM</h3> */}
    <ul className="menu-section-list">
      <li className="menu-item">
        <span className="menu-name">Bacardi</span>
        <span className="menu-price">£3.80</span>
        <span className="menu-price">£6.80</span>
      </li>
      <li className="menu-item">
        <span className="menu-name">Captain Morgan</span>
        <span className="menu-price">£3.80</span>
        <span className="menu-price">£6.80</span>
      </li>
      <li className="menu-item">
        <span className="menu-name">Captain Morgan Spiced</span>
        <span className="menu-price">£3.80</span>
        <span className="menu-price">£6.80</span>
      </li>
      <li className="menu-item">
        <span className="menu-name">Havana Club 7 Yrs</span>
        <span className="menu-price">£4.00</span>
        <span className="menu-price">£7.80</span>
      </li>
    </ul>
  </div>
)}
{isSectionOpen[section.key] && section.key === "rose" && (
<div className="menu-section-content">
  <h3>WHISKEY</h3>

  {/* Scotch */}
  <h4>Scotch</h4>
  <ul className="menu-section-list">
    <li>
      <span>Famous Grouse</span>
      <span>£3.75</span>
      <span>£6.85</span>
    </li>
    <li>
      <span>Johnnie Walker Black Label</span>
      <span>£4.05</span>
      <span>£7.25</span>
    </li>
    <li>
      <span>Chivas Regal 12Yrs</span>
      <span>£4.05</span>
      <span>£7.25</span>
    </li>
    <li>
      <span>Haig Club</span>
      <span>£5.85</span>
      <span>£10.85</span>
    </li>
  </ul>
 

  {/* Whiskey */}
  <h4>Whiskey</h4>
  <ul className="menu-section-list">
    <li>
      <span>Jack Daniel’s</span>
      <span>£3.85</span>
      <span>£6.85</span>
    </li>
    <li>
      <span>Jack Daniel’s Honey</span>
      <span>£3.85</span>
      <span>£6.85</span>
    </li>
    <li>
      <span>Gentlemen Jack</span>
      <span>£5.35</span>
      <span>£9.85</span>
    </li>
    <li>
      <span>Yamazaki</span>
      <span>£9.90</span>
      <span>£19.95</span>
    </li>
  </ul>

  {/* Irish Whiskey */}
  <h4>Irish Whiskey</h4>
  <ul className="menu-section-list">
    <li>
      <span>Jameson</span>
      <span>£3.30</span>
      <span>£6.40</span>
    </li>
  </ul>

  {/* Single Malt */}
  <h4>Single Malt</h4>
  <ul className="menu-section-list">
    <li>
      <span>Glenmorangie Original</span>
      <span>£4.85</span>
      <span>£8.85</span>
    </li>
    <li>
      <span>Glenfiddich 12Yrs</span>
      <span>£4.85</span>
      <span>£8.85</span>
    </li>
    <li>
      <span>Talisker</span>
      <span>£5.85</span>
      <span>£10.85</span>
    </li>
    <li>
      <span>Balvine</span>
      <span>£5.85</span>
      <span>£10.85</span>
    </li>
    <li>
      <span>Oban</span>
      <span>£5.85</span>
      <span>£10.85</span>
    </li>
    <li>
      <span>Dalmore 12Yrs</span>
      <span>£5.85</span>
      <span>£10.85</span>
    </li>
    <li>
      <span>Lagavulin 12Yrs</span>
      <span>£8.05</span>
      <span>£15.25</span>
    </li>
  </ul>
</div>
 )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default DrinkMenu;