import { LOAD_ROVERS_SUCCESS, LOAD_ROVERS_FAILURE } from "../actionCreators/roversActions";

const initialState = {
  rovers: null,
  // rovers: [
  //   {
  //     name:"Curiosity",
  //     landing_date:"2012-08-06",
  //     launch_date:"2011-11-26",
  //     status:"active",
  //     max_sol:2776,
  //     max_date:"2020-05-28",
  //     total_photos:423246,
  //     photos: [],
  //   },
  //   {
  //     name:"Spirit",
  //     landing_date:"2004-01-04",
  //     launch_date:"2003-06-10",
  //     status:"complete",
  //     max_sol:2208,
  //     max_date:"2010-03-21",
  //     total_photos:124550,
  //     photos: [],
  //   },
  //   {
  //     name:"Opportunity",
  //     landing_date:"2004-01-25",
  //     launch_date:"2003-07-07",
  //     status:"complete",
  //     max_sol:5111,
  //     max_date:"2018-06-11",
  //     total_photos:198439,
  //     photos: [],
  //   }
  // ],
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_ROVERS_SUCCESS: {
      return {
        ...state,
        rovers: action.rovers,
      }
    }
    case LOAD_ROVERS_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return state;
    }
  }
}
