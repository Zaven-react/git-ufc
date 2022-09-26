// const ESH = "ESH"

let initialState =   {
    mFighter: [
      {
        name: "Jorge Masvidal",
        record: "30-5",
        weight: 77,
        age:37,
        link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2019-07/MASVIDAL_JORGE_L.png?jIj20ceeCeZ4VIh69BJ1UOYlxu7LgZfn&itok=z4WMSP54",
      },

      {
        name: "Camaru Usman",
        record: "20-2",
        weight: 77,
        age:37,
        link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-07/USMAN_KAMARU_L_BELT_12-14.png?OuM8S6Z8qBwPrEeJFMYuDd8lvVcgBsyI&itok=L3ZTbg1B",
      },

      {
        name: "Conor McGregor",
        record: "20-4",
        weight: 77,
        age:33,
        link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-01/MCGREGOR_CONOR_L.png?1Q5w9ozzDDdawsoZtVLqsREduo8rIiNQ&itok=PzOsuQxr",
      },
      {
        name: "Nate Diaz",
        record: "22-13",
        weight: 70,
        age:36,
        link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/image/ufc-fighter-container/68891/profile-galery/fullbodyleft-picture/DIAZ_NATE_L.png?LosLpsLkFCrqLdnFEWlkUoNQ1m6p788M&itok=xWG-pCOI",
      },
      {
        name: "Michael Chandler",
        record: "20-5",
        weight: 70,
        age:34,
        link: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-12/CHANDLER_MICHAEL_L_10-24.png?null&itok=NvpVqgQc",
      },
    ]
  }

const fighterReducer = (state = initialState,action)=>{
  switch (action.type){
    // case ESH:
    // state.mFighter[0].name = "urish"
    //   return state;
      default:
        return state
  }
}

// export const EshAC =()=>({
//   type: ESH,
// })

export default fighterReducer