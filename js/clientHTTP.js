const clientHttp = (()=> {

    const _get = (url,fnExito,fnFallo) => {
        fetch(url).
        then((resp) => resp.json()).
        then(fnExito).catch(fnFallo);
    };

    const _post = (url, payload, fnExito, fnFallo) => {
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((resp) => resp.json())
          .then(fnExito)
          .catch(fnFallo);
      };

      const _put = (url, payload, fnExito, fnFallo) => {
        fetch(url, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((resp) => resp.json())
          .then(fnExito)
          .catch(fnFallo);
      };

      const _delete = (url, fnExito, fnFallo) => {
        fetch(url, {
          method: "DELETE",
          
        })
          .then((resp) => resp.json())
          .then(fnExito).catch(fnFallo);
      };
      return {
        
        post:_post,
        get: _get,
        put:_put,
        delete:_delete
        //postAsync:_postAsync

    };
})();