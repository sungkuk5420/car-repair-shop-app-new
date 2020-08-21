import axios from "axios";

const apiURL = "http://localhost:8000";

export const ajaxActions = {
  postAjaxAction(data, cSuccess, cError) {
    console.log(data);
    let options = {
      url() {
        return `${apiURL}/postAjaxAction`;
      }
    };
    let api = axios.create();
    axios
      .all([
        api.post(options.url(), {
          data
        })
      ])
      .then(responses => {
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          console.log("200 response= ", responses[0]);
          cSuccess(responses[0]);
        } else {
          let errmsgs = errors.reduce((memo = "", res) => {
            return memo + `${res.status} : ${res.message} \n`;
          }, "");
          console.warn(errmsgs);
        }
      });
  },
  getAjaxAction(cSuccess, cError) {
    let options = {
      url() {
        return `${apiURL}/getAjaxAction`;
      }
    };
    let api = axios.create();
    console.log("url= ", options.url());
    axios
      .all([api.get(options.url())])
      .then(responses => {
        console.log("response= ", responses);
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          console.log("200 response= ", responses[0].data);
          cSuccess(responses[0].data);
        }
      })
      .catch(error => {
        console.log("error!!!", error);
        cError(error.response);
      });
  }
};
