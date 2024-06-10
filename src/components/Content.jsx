const Content = () => {
    const cards = [
        {
          id: "Classic_Card",
          title: "Classic",
          subheader: "Nuka-cola",
          descrition: `Es el producto estrella de Nuka-Cola Corporation y uno de los símbolos de la cultura de los Estados Unidos. Introducida en 2044, en un elemento básico de la cultura estadounidense.`,
          ml: "350 ml",
          points: ["Classic Nuka-Cola", "Fusion Cola"],
        },
        {
          id: "Quantum_Card",
          title: "Quantum",
          subheader: "Nuka-cola",
          descrition: `Quantum fue creada en octubre de 2076 por la División de Bebidas de Nuka-World. Fue un subproducto del Proyecto Cobalto, bajo el patrocinio militar de Estados Unidos.`,
          ml: "350 ml",
          points: ["Nuka-Cooler", "Nuka-Cide"],
        },
        {
          id: "Sunset_Card",
          title: "Sunset",
          subheader: "Zarzaparrilla",
          descrition: `La Sunset Sarsaparilla es una bebida carbonatada de cerveza de raíz que se encuentra alrededor de New Vegas. Con su fácil disponibilidad y bajo costo, carece de la radiación presente en muchas otras bebidas.`,
          ml: "350 ml",
          points: ["Extreme", "Supervivencia"],
        },
      ];
      return (
        <div className={"labels_container"}>
          <div className={"labels_wrapper"}>
            {cards.map((card) => (
              <div id={card.id} key={card.id} className={"label_card label_card--hidden"}>
                <div>
                  <h1 className={"text_header"}>{card.title}</h1>
                  <p className={"text_subheader"}>{card.subheader}</p>
                  <p className={"text_body"}>{card.descrition}</p>
                </div>
                <div>
                  <h1 className={"text_subheader"}>{card.ml}</h1>
                </div>
                <div>
                  <ul>
                    {card.points.map((point, index) => {
                      if (index === card.points.lenght) {
                        return (
                          <li key={index} className='text_item_des'>
                            <p className={"text_body text_item_des text_item_des_border_top text_item_des_border_bottom"}>
                              {point}
                            </p>
                          </li>
                        );
                      } else {
                        return (
                          <li key={index} className={"text_body text_item_des text_item_des_border_top"}>
                            <p>{point}</p>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Content