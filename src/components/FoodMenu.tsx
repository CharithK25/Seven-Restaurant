import React, { useState } from "react";

import "./Menu.css";

const FoodMenu: React.FC = () => {
  const [isSectionOpen, setIsSectionOpen] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setIsSectionOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const drinkMenuSections = [
    { title: "SNACKS, CHAAT & SIDES", key: "scs" },
    { title: "VEGETARIAN STARTERS", key: "vegs" },
    { title: "NON VEGETARIAN STARTERS", key: "nonvegs" },
    { title: "VEGETARIAN CURRIES", key: "vegscur" },
    { title: "NON VEGETARIAN CURRIES", key: "nonvegscur" },
    { title: "NAAN'S", key: "breads" },
    { title: "BIRYANI & RICE", key: "rce" },
    { title: "DESSERTS", key: "des" },
    // { title: "NON ALCOHOLIC DRINKS", key: "nonAlcoholicCocktails" },
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
            {isSectionOpen[section.key] && section.key === "scs" && (
  <div className="menu-section-content">
    <h3>SMALL SNACKS</h3>
    <ul className="menu-section-list">
      <li>
        <span>THE SEVEN BOMBAY MIX (V)(N)</span>
        <span>£4.50</span>
      </li>
      <li>
        <span>POPPADOM WITH CHUTNEY (V)(D)</span>
        <span>£3.75</span>
      </li>
      <li>
        <span>CHILLI PEANUT MIX (V)(N)</span>
        <span>£3.25</span>
      </li>
    </ul>

    <h3>CHAAT CORNER</h3>
    <ul className="menu-section-list">
      <li>
        <span>ALOO TIKKI CHAAT (V)(D)(G)</span>
        <span>£7.99</span>
      </li>
      <li className="wine-region">Potato patty on a bed of chickpeas, with tamarind, yoghurt & mint sauce</li>

      <li>
        <span>SAMOSA CHAAT (V)(D)(G)</span>
        <span>£7.99</span>
      </li>
      <li className="wine-region">Punjabi samosa on a bed of chickpeas with yoghurt and tamarind chutney</li>

      <li>
        <span>BOMBAY BHEL (VE)(G)</span>
        <span>£7.99</span>
      </li>
      <li className="wine-region">Puffed rice with onions, seasoned potatoes, chilli & chutneys</li>

      <li>
        <span>PANI POORI (6pcs) (VE)(G)</span>
        <span>£6.99</span>
      </li>
      <li className="wine-region">Semolina shells filled with spiced potatoes, chickpea & mint flavoured water</li>
      <li className="wine-region">– with vodka <span>£2.50</span></li>
    </ul>

    <h3>SIDES</h3>
    <ul className="menu-section-list">
      <li>
        <span>CHIPS (V)</span>
        <span>£5.50</span>
      </li>
      <li>
        <span>MASALA CHIPS (V)(G)</span>
        <span>£6.50</span>
      </li>
      <li>
        <span>CHILLI MARI CHIPS</span>
        <span>£6.50</span>
      </li>
      <li>
        <span>MIXED SALAD (V)</span>
        <span>£4.99</span>
      </li>
      <li className="wine-region">Mixed leaves with cucumber, onion, tomato, chilli and a lemon dressing</li>

      <li>
        <span>RAITA (V)(D)</span>
        <span>£3.99</span>
      </li>
      <li className="wine-region">(Cucumber and carrot)</li>

      <li>
        <span>ONION, CHILLI & LEMON (V)</span>
        <span>£3.99</span>
      </li>
    </ul>
  </div>
)}
                {isSectionOpen[section.key] && section.key === "vegs" && (
  <div className="menu-section-content">
   <h3>VEGETARIAN STARTERS</h3>
    <ul className="menu-section-list">
      <li>
        <span>VEGETABLE PLATTER (V)(D)(G)</span>
        <span>£15.99</span>
      </li>
      <li className="wine-region">Paneer tikka, dumpling, crispy bhajia, soya tikka and samosa, served with a chutney selection</li>

      <li>
        <span>VEGETABLE SAMOSAS (3pcs) (VE)(D)(G)</span>
        <span>£4.99</span>
      </li>
      <li className="wine-region">Minced potatoes and vegetables cooked with spices, wrapped in filo pastry, deep fried</li>

      <li>
        <span>MO MO VEGETABLE DUMPLINGS (VE)(D)(G)</span>
        <span>£7.50</span>
      </li>
      <li className="wine-region">Deep fried dumplings served with chilli soy sauce</li>

      <li>
        <span>CHILLI PANEER (V)(D)(G)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Crispy batter fried cottage cheese, tossed with garlic, chilli and tangy sauce</li>

      <li>
        <span>PANEER TIKKA SHASHLIK (V)(D)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Cottage cheese cubes marinated with yoghurt, spices, onions, peppers and served with mint sauce</li>

      <li>
        <span>CRISPY BHINDI (G)(V)</span>
        <span>£8.99</span>
      </li>
      <li className="wine-region">Fresh Okra fried with chef’s special masala</li>

      <li>
        <span>CRISPY BHAJIA (VE)(G)</span>
        <span>£8.50</span>
      </li>
      <li className="wine-region">Sliced potato dipped in gram flour batter and deep fried served with a chilli chutney</li>

      <li>
        <span>MOGO (V)(G)</span>
        <span>£8.50</span>
      </li>
      <li className="wine-region">Masala mogo or chilli garlic mogo</li>

      <li>
        <span>SOYA TIKKA (VE)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Soya chaap marinated with tandoori spices and served with a chutney selection</li>

      <li>
        <span>CHILLI GARLIC MUSHROOM (VE)(G)</span>
        <span>£9.50</span>
      </li>
      <li className="wine-region">Indo-Chinese flavoured battered mushrooms toasted with garlic, chilli and peppers</li>

      <li>
        <span>SALT & PEPPER CRISPY VEGETABLES (VE)(G)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Crispy fried mixed vegetables tossed with a generous sum of garlic, chilli and spring onions</li>

      <li>
        <span>CHILLI MARI MOGO (VE)</span>
        <span>£8.50</span>
      </li>
      <li className="wine-region">Casava chips fried and roasted with chilli and mari</li>

      <li>
        <span>SHANGHAI VEGETABLE (VE)(G)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Crispy fried mix vegetables tossed in a very hot Szechuan paste</li>

      <li>
        <span>SALT & PEPPER TOFU (VE)</span>
        <span>£10.50</span>
      </li>
      <li className="wine-region">Tofu tossed with pepper, onion & garlic</li>

      <li>
        <span>CHILLI TOFU (G)(VE)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Crispy batter fried tofu tossed in garlic & chilli sauce</li>

      <li>
        <span>TANDOORI BROCCOLI (D)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Broccoli marinated in yoghurt & chef’s special spices, with cheese cooked in our tandoor</li>

      <li>
        <span>HARA BHARA KEBAB (4pcs) (G)(V)</span>
        <span>£8.99</span>
      </li>
      <li className="wine-region">Veg kebab made with spinach, green peas, capsicum, potato, roll with breadcrumbs and garnished with salad</li>

      <li>
        <span>BOMBAY STYLE MOCK POP CORN CHICKEN (G)(VE)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Plant based pop corn chicken tossed with onion, capsicum and chilli sauce</li>
    </ul>
  </div>
)}

 
{isSectionOpen[section.key] && section.key === "nonvegs" && (
  <div className="menu-section-content">
    <h3>NON VEGETARIAN STARTERS</h3>
    <ul className="menu-section-list">
      <li>
        <span>THE SEVEN PLATTER (D)</span>
        <span>£18.99</span>
      </li>
      <li className="wine-region">Marinated chicken tikka, chicken wings, chops and kebabs, served with a selection of chutneys</li>

      <li>
        <span>TANDOORI WINGS (5pcs) (D)</span>
        <span>£9.50</span>
      </li>
      <li className="wine-region">Chicken wings marinated with hot and spicy tandoori masala, served with a chilli chutney</li>

      <li>
        <span>SEEKH KEBAB (4pcs)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Mince Lamb marinated with herbs and spices, served with a minted mango chutney</li>

      <li>
        <span>CHILLI CHICKEN (G)</span>
        <span>£9.50</span>
      </li>
      <li className="wine-region">Crispy chicken breast pieces sautéed with Chinese spices, onion and peppers</li>

      <li>
        <span>GARLIC CHILLI FISH (G)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Tilapia fish pieces sautéed with Chinese spices, onion and peppers</li>

      <li>
        <span>MEAT SAMOSA (3pcs) (G)</span>
        <span>£6.50</span>
      </li>
      <li className="wine-region">Minced lamb cooked with spices, wrapped in filo pastry then deep fried</li>

      <li>
        <span>CHICKEN TIKKA (5pcs) (D)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Chicken breast pieces marinated with yoghurt, Kashmiri chilli, tandoori spices and served with chutney</li>

      <li>
        <span>LAMB CHOPS (4pcs) (D)</span>
        <span>£12.99</span>
      </li>
      <li className="wine-region">Lamb marinated with chilli, ginger, garlic, yoghurt and served with a mint chutney</li>

      <li>
        <span>TANDOORI PRAWNS (4pcs) (D)</span>
        <span>£15.50</span>
      </li>
      <li className="wine-region">King Prawns marinated with hot and spicy tandoori masala, served with chutney</li>

      <li>
        <span>CHICKEN 65 (G)</span>
        <span>£9.50</span>
      </li>
      <li className="wine-region">Chicken pieces marinated with cornflour and South Indian special spices</li>

      <li>
        <span>JEERA CHICKEN</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Chicken niblets on bone marinated with cumin and chef’s special spices</li>

      <li>
        <span>HARILIYALI CHICKEN TIKKA (D)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Chicken pieces made with a green masala made from mint leaves and coriander with an array of spice powders</li>

      <li>
        <span>CHAT PATA TANDOORI WINGS (G)(D)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Chicken wings tossed with garlic and chilli sauce</li>

      <li>
        <span>JEERA FISH TIKKA</span>
        <span>£12.50</span>
      </li>
      <li className="wine-region">Traditional tandoori fish (Tilapia Fish) flavoured with cumin and chef spices cooked in tandoor</li>
    </ul>
  </div>
)}
              {isSectionOpen[section.key] && section.key === "vegscur" && (
  <div className="menu-section-content">
    <h3>VEGETARIAN CURRIES</h3>
    <ul className="menu-section-list">
      <li>
        <span>SEVEN VEGETABLE CURRY (V)(N)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">A medley of vegetables cooked in our chef’s special blend of spices & herbs</li>

      <li>
        <span>DAL TADKA (V)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">A medley of yellow lentils tempered with tomatoes, cumin, garlic and curry leaf</li>

      <li>
        <span>CHANNA MASALA (V)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Chick peas cooked with tomatoes and onion masala</li>

      <li>
        <span>PANEER BUTTER MASALA (V)(N)(D)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Diced cottage cheese cooked with rich creamy tomato sauce, finished with butter</li>

      <li>
        <span>SAAG ALOO (V)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Fresh potatoes cooked with spinach, tomatoes, spices and a dash of cream</li>

      <li>
        <span>DAL MAKHANI (D)(V)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Slow cooked fenugreek, butter flavoured black lentil and red kidney beans finished with cream</li>

      <li>
        <span>BOMBAY ALOO (VE)(N)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Fresh potatoes cooked with onions, tomatoes and spices</li>

      <li>
        <span>BHINDI MASALA (VE)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Okra pieces cooked with tomatoes and onion masala</li>

      <li>
        <span>PANEER TIKKA MASALA (V)(N)(D)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Paneer tikka cooked with tomatoes, onions and spices, finished with a dash of cream</li>

      <li>
        <span>PALAK PANEER (V)(D)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Diced cottage cheese, cooked with spinach, onion, tomato and a dash of cream</li>

      <li>
        <span>VEG KEEMA (V)(D)(N)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Vegetable mince cooked with home made masala</li>

      <li>
        <span>ALOO BAIGAN (VE)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Potato & Aubergines cooked in chef special tangy sauce</li>

      <li>
        <span>METHI CORN MALAI (V)(D)(N)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Sweet corn cooked with fenugreek in a creamy sauce</li>

      <li>
        <span>KADHAI PANEER (V)(D)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Paneer cooked in a freshly prepared gravy made with mixed peppers and onions</li>

      <li>
        <span>EGG CURRY (N)(D)</span>
        <span>£9.99</span>
      </li>
      <li className="wine-region">Cooked in a rich gravy with curry leaves and mustard seeds</li>

      <li>
        <span>SEVEN HARROW MOCK LAMB (G)(VE)</span>
        <span>£10.99</span>
      </li>
      <li className="wine-region">Plant based roast lamb cooked in deep rich chef special sauce</li>

      <li>
        <span>SEVEN MOCK CHICKEN JALFREZI (G)(VE)</span>
        <span>£10.50</span>
      </li>
      <li className="wine-region">Plant based Chicken pieces cooked with peppers, onions and aromatic spices</li>
    </ul>
  </div>
)}
{isSectionOpen[section.key] && section.key === "nonvegscur" && (
  <div className="menu-section-content">
        <h3>NON VEGETARIAN CURRIES</h3>
  <ul className="menu-section-list">
    <li>
      <span>THE SEVEN CHICKEN CURRY (N)</span>
      <span>£10.50</span>
    </li>
    <li className="dish-description">
      Chicken breast pieces cooked with medium chef spices
    </li>

    <li>
      <span>CHICKEN BHUNA (D)(N)</span>
      <span>£10.50</span>
    </li>
    <li className="dish-description">
      Served in a rich sauce with added flavours of onion and pepper
    </li>

    <li>
      <span>CHICKEN DOPAYAZA</span>
      <span>£10.50</span>
    </li>
    <li className="dish-description">
      Cooked with onion, garlic, tomato, dried fenugreek, and chef special spices
    </li>

    <li>
      <span>CHICKEN MADARAS</span>
      <span>£10.50</span>
    </li>
    <li className="dish-description">
      Fairly hot, prepared using traditional South Indian recipe, mustard seeds, and curry leaf
    </li>

    <li>
      <span>KADHAI LAMB</span>
      <span>£10.99</span>
    </li>
    <li className="dish-description">
      Lamb marinated in spices and cooked in our popular karahi gravy
    </li>

    <li>
      <span>BUTTER CHICKEN (N)(D)</span>
      <span>£10.99</span>
    </li>
    <li className="dish-description">
      Chicken breast diced in a rich, creamy tomato sauce finished with butter
    </li>

    <li>
      <span>KASHMIRI ROGAN GHOSH</span>
      <span>£10.99</span>
    </li>
    <li className="dish-description">
      Tender lamb diced in tomatoes and Kashmiri chillies with medium spicy curry
    </li>

    <li>
      <span>SAAG CHICKEN (D)</span>
      <span>£10.50</span>
    </li>
    <li className="dish-description">
      Chicken pieces cooked with methi, tomatoes, onion, aromatic spices, and a dash of cream
    </li>

    <li>
      <span>KARAHI CHICKEN (N)</span>
      <span>£10.50</span>
    </li>
    <li className="dish-description">
      Chicken marinated in Indian spices and cooked in our popular Karahi gravy
    </li>

    <li>
      <span>CHICKEN TIKKA MASALA (N)(D)</span>
      <span>£10.99</span>
    </li>
    <li className="dish-description">
      Chicken diced in tomatoes and onions in a rich, creamy sauce
    </li>

    <li>
      <span>SAAG KA GHOSH (D)</span>
      <span>£10.99</span>
    </li>
    <li className="dish-description">
      Tender lamb pieces cooked with spinach, tomatoes, onions, aromatic spices, and a dash of cream
    </li>

    <li>
      <span>MASALA FISH CURRY (G)(N)</span>
      <span>£11.99</span>
    </li>
    <li className="dish-description">
      Tilapia fish cooked with onions, tomatoes, and mustard seeds in a thick sauce
    </li>

    <li>
      <span>TANDOORI KING PRAWN MASALA (N)</span>
      <span>£15.99</span>
    </li>
    <li className="dish-description">
      Prawns marinated in Indian masala and cooked in our popular Karahi gravy
    </li>
  </ul>
</div>
)}
{isSectionOpen[section.key] && section.key === "breads" && (
  <div className="menu-section-content">
            <h3>NAAN'S & ROTI</h3>
    <ul className="menu-section-list">
      <li>
        <span>NAAN (G)</span>
        <span>£3.00</span>
      </li>

      <li>
        <span>BUTTER NAAN (G)</span>
        <span>£3.50</span>
      </li>

      <li>
        <span>GARLIC NAAN (G)</span>
        <span>£3.99</span>
      </li>

      <li>
        <span>CHILLI NAAN (G)</span>
        <span>£3.99</span>
      </li>

      <li>
        <span>LACHHA PARATHA (G)</span>
        <span>£3.99</span>
      </li>

      <li>
        <span>PESHWARI NAAN (C)(N)</span>
        <span>£4.50</span>
      </li>

      <li>
        <span>GARLIC & CHILLI NAAN (G)</span>
        <span>£3.99</span>
      </li>

      <li>
        <span>TANDOORI ROTI (G)</span>
        <span>£3.50</span>
      </li>

      <li>
        <span>CHEESE NAAN (G)(D)</span>
        <span>£4.50</span>
      </li>
    </ul>
  </div>
)}
{isSectionOpen[section.key] && section.key === "rce" && (
  <div className="menu-section-content">
    {/* Hyderabadi Dum Biryani Section */}
    <h3>HYDERABADI DUM BIRYANI</h3>
    <p>Saffron flavoured basmati rice prepared with aromatic whole spices and served with a carrot and cucumber raita</p>
    <ul className="menu-section-list">
      <li>
        <span>VEGETARIAN BIRYANI (V)</span>
        <span>£11.50</span>
      </li>
      <li>
        <span>CHICKEN BIRYANI</span>
        <span>£12.50</span>
      </li>
      <li>
        <span>LAMB BIRYANI</span>
        <span>£13.50</span>
      </li>
    </ul>

    {/* Rice Section */}
    <h3>RICE</h3>
    <ul className="menu-section-list">
      <li>
        <span>PLAIN RICE (V)</span>
        <span>£4.50</span>
      </li>
      <li>
        <span>PILAU RICE (V)</span>
        <span>£4.99</span>
      </li>
      <li>
        <span>JEERA RICE (V)</span>
        <span>£4.99</span>
      </li>
    </ul>
  </div>
)}
{isSectionOpen[section.key] && section.key === "des" && (
  <div className="menu-section-content">
    {/* Desserts Section */}
    <h3>DESSERTS</h3>
    <ul className="menu-section-list">
      <li>
        <span>HONEYCOMBE CHEESE CAKE (G)(D)</span>
        <span>£7.50</span>
      </li>
      <li>
        <span>CHOCOLATE FUDGE CAKE (G)(D) Egg</span>
        <span>£7.99</span>
      </li>
      <li>
        <span>GULAB JAMUN (G)(D)</span>
        <span>£6.75</span>
      </li>
      <li>
        <span>RICH CHOCOLATE & MINT ICE CREAM (G)(N)(D)</span>
        <span>£7.45</span>
        </li>
        <li className="wine-region">Infused with a thick Belgian sauce</li>

        {/* <p>Infused with a thick Belgian sauce</p> */}
     
      <li>
        <span>CHOCOLATE HAZELNUT ICE CREAM (G)(N)(D)</span>
        <span>£7.45</span>
        </li>
        <li className="wine-region">Infused with a mix of roasted hazelnuts and chocolate topped with a Chocolate Hazelnut ball</li>
        {/* <p>Infused with a mix of roasted hazelnuts and chocolate topped with a Chocolate Hazelnut ball</p> */}
     
      <li>
        <span>KULFI ICE CREAM – 2 Scoops (D)</span>
        <span>£4.95</span>
        </li>
        <li className="wine-region">FLAVOURS: MALAI, PISTACHIO, MANGO</li>
        {/* <p>FLAVOURS: MALAI, PISTACHIO, MANGO</p> */}
      
    </ul>
  </div>
)}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FoodMenu;