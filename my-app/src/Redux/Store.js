import eventsReducer from "./events-reducer";
import rankingsReducer from "./rankings-reducer";

let stor = {
  _state: {
    rankings: {
      fighters: [
        { name: "Mcgregor", id: 1 },
        { name: "Khabib", id: 2 },
        { name: "Diaz", id: 3 },
        { name: "Masvidal", id: 4 },
        { name: "Usman", id: 5 },
      ],
      country: [
        { name: "Ireland", id: 1 },
        { name: "Dagestan", id: 2 },
        { name: "Mexica", id: 3 },
        { name: "Cuba/Usa", id: 4 },
        { name: "Nigeria", id: 5 },
      ],
      newName: "",
    },
    middle: {
      mFighter: [
        {
          name: "Masvidal",
          record: "30-5",
          weight: 77,
          link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2019-07/MASVIDAL_JORGE_L.png?jIj20ceeCeZ4VIh69BJ1UOYlxu7LgZfn&itok=z4WMSP54",
        },

        {
          name: "Usman",
          record: "20-1",
          weight: 77,
          link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-07/USMAN_KAMARU_L_BELT_12-14.png?OuM8S6Z8qBwPrEeJFMYuDd8lvVcgBsyI&itok=L3ZTbg1B",
        },

        {
          name: "McGregor",
          record: "20-4",
          weight: 77,
          link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-01/MCGREGOR_CONOR_L.png?1Q5w9ozzDDdawsoZtVLqsREduo8rIiNQ&itok=PzOsuQxr",
        },
      ],
    },
    light: {
      LightFighter: [
        {
          name: "Diaz",
          age: 34,
          weight: 70,
          src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/image/ufc-fighter-container/68891/profile-galery/fullbodyleft-picture/DIAZ_NATE_L.png?LosLpsLkFCrqLdnFEWlkUoNQ1m6p788M&itok=xWG-pCOI",
        },
        {
          name: "Chandler",
          age: 34,
          weight: 70,
          src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-12/CHANDLER_MICHAEL_L_10-24.png?null&itok=NvpVqgQc",
        },
      ],
    },
    events: {
      first: [{ name: "Diaz" }, { name: "Oliveira" }, { name: "Masvidal" }],
      second: [{ name: "Edvards" }, { name: "Chandler" }, { name: "Usman" }],
      newName: "",
      newName1: "",
    },
  },
  _rerender() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerender = observer;
  },

  dispatch(action) {
    this._state.rankings = rankingsReducer(this._state.rankings, action);
    this._state.events = eventsReducer(this._state.events, action);

    this._rerender(this._state);
  },
};

export default stor;
