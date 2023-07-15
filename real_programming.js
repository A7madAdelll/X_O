const app = {
  map: {
    action: document.querySelector('[data-id="actions"]'),
    list: document.querySelector('[data-id="action-list"]'),
    rest: document.querySelector('[data-id="reset"]'),
    new_round: document.querySelector('[data-id="new-round"]'),
    boxes: document.querySelectorAll('[data-id="box"]'),
    topleft: document.querySelector('[data-id="topleft"]'),
    natega: document.querySelector('[data-id="natega"]'),
    natega_Text: document.querySelector('[data-id="natega-text"]'),
    // playagain:document.querySelectorAll('[data-id="play_again"]'),
    playagain: document.getElementById("play_again"),
  },
  state: {
    turn: 0,
    nine: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    End_Game: 0,
  },
  init() {
    this.eventleseners();
  },

  eventleseners() {
    app.map.action.addEventListener("click", () => {
      app.map.list.classList.toggle("hidden");
    }),
      app.map.rest.addEventListener("click", () => {
        console.log("rest");
        app.map.list.classList.toggle("hidden");
      }),
      app.map.new_round.addEventListener("click", () => {
        console.log("new-round");
        app.map.list.classList.toggle("hidden");
      }),
      //       app.map.playagain.forEach((btn)=>{
      //       btn.addEventListener("click",(aa)=>{
      //         console.log("ppp");

      //         app.map.natega.classList.toggle("hidden")
      //         for(let i=1;i<10;i++){
      //          app.state.nine[i]=0 ;
      //         }
      // console.log("!1");

      //         })  })
      app.map.playagain.addEventListener("click", (btn) => {
        console.log("ppp");
        app.map.natega.classList.toggle("hidden");
        for (let i = 1; i < 10; i++) {
          app.state.nine[i] = 0;
        }
        app.map.boxes.forEach((bx) => {
          bx.replaceChildren();
        });

        const icony = document.createElement("i");
        icony.classList.add("fa-solid", "fa-o", "clearbackground");
        const iconx = document.createElement("i");
        iconx.classList.add("fa-solid", "fa-x", "clearbackground");

        const icondiv = document.createElement("div");
        icondiv.classList.add("topleftdiv");
        icondiv.appendChild(iconx);
        const p = document.createElement("p");
        p.classList.add("topleftp");
        p.innerHTML = "player 1 has to play";

        app.map.topleft.replaceChildren();
        app.map.topleft.appendChild(icondiv);
        app.map.topleft.appendChild(p);

        // console.log(element.id);
        // element.replaceChildren(icony);

        app.state.End_Game = 0;
        app.state.turn = 0;
      }),
      app.map.boxes.forEach((element) => {
        element.addEventListener("click", (event) => {
          if (app.state.End_Game == 0) {
            if (app.state.turn == 0 && app.state.nine[element.id] == 0) {
              const iconx = document.createElement("i");
              iconx.classList.add("fa-solid", "fa-x", "clearbackground");
              const icony = document.createElement("i");
              icony.classList.add("fa-solid", "fa-o", "clearbackground");

              const icondiv = document.createElement("div");
              icondiv.classList.add("topleftdiv");
              icondiv.appendChild(icony);
              const p = document.createElement("p");
              p.classList.add("topleftp");
              p.innerHTML = "player 2 has to play";

              app.map.topleft.replaceChildren();
              app.map.topleft.appendChild(icondiv);
              app.map.topleft.appendChild(p);

              console.log(element.id);
              element.replaceChildren(iconx);
              app.state.nine[element.id] = 1;
              app.state.turn = 1;
            } else if (app.state.turn == 1 && app.state.nine[element.id] == 0) {
              const icony = document.createElement("i");
              icony.classList.add("fa-solid", "fa-o", "clearbackground");
              const iconx = document.createElement("i");
              iconx.classList.add("fa-solid", "fa-x", "clearbackground");

              const icondiv = document.createElement("div");
              icondiv.classList.add("topleftdiv");
              icondiv.appendChild(iconx);
              const p = document.createElement("p");
              p.classList.add("topleftp");
              p.innerHTML = "player 1 has to play";

              app.map.topleft.replaceChildren();
              app.map.topleft.appendChild(icondiv);
              app.map.topleft.appendChild(p);

              console.log(element.id);
              element.replaceChildren(icony);

              app.state.nine[element.id] = 2;
              app.state.turn = 0;
            } else {
              console.log("a7aa");
            }

            if (app.chick_for_winner() == 0) {
              console.log("not yet");

              var flag = 0;
              for (i = 1; i < 10; i++) {
                if (app.state.nine[i] == 0) flag = 1;
              }
              console.log(flag);

              if (flag == 0) {
                console.log("tie");
                app.state.End_Game = 1;
                app.map.natega_Text.innerHTML = "no one wins!? tie";

                app.map.natega.classList.toggle("hidden");
              }
            } else {
              console.log(app.chick_for_winner());
              app.state.End_Game = 1;

              app.map.natega_Text.innerHTML =
                "player " + app.chick_for_winner() + " wins!";

              app.map.natega.classList.toggle("hidden");
            }
          } else {
          }
        });
      });
  },
  chick_for_winner() {
    if (
      app.state.nine[1] != 0 &&
      app.state.nine[2] == app.state.nine[1] &&
      app.state.nine[3] == app.state.nine[1]
    )
      return app.state.nine[1];
    if (
      app.state.nine[4] != 0 &&
      app.state.nine[5] == app.state.nine[4] &&
      app.state.nine[6] == app.state.nine[4]
    )
      return app.state.nine[4];
    if (
      app.state.nine[7] != 0 &&
      app.state.nine[8] == app.state.nine[7] &&
      app.state.nine[9] == app.state.nine[7]
    )
      return app.state.nine[7];

    if (
      app.state.nine[1] != 0 &&
      app.state.nine[4] == app.state.nine[1] &&
      app.state.nine[7] == app.state.nine[1]
    )
      return app.state.nine[1];
    if (
      app.state.nine[2] != 0 &&
      app.state.nine[5] == app.state.nine[2] &&
      app.state.nine[8] == app.state.nine[2]
    )
      return app.state.nine[2];
    if (
      app.state.nine[3] != 0 &&
      app.state.nine[6] == app.state.nine[3] &&
      app.state.nine[9] == app.state.nine[3]
    )
      return app.state.nine[3];

    if (
      app.state.nine[1] != 0 &&
      app.state.nine[5] == app.state.nine[1] &&
      app.state.nine[9] == app.state.nine[1]
    )
      return app.state.nine[1];
    if (
      app.state.nine[3] != 0 &&
      app.state.nine[5] == app.state.nine[3] &&
      app.state.nine[7] == app.state.nine[3]
    )
      return app.state.nine[3];

    return 0;
  },
};
window.addEventListener("load", () => app.init());
