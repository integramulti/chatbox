  function cfgSet(config)  {
  	console.log('set conifg');
  	console.log(config);
    localStorage.setItem('config', JSON.stringify(config));
  }

  function cfgUpdate(config) {
    const data = localStorage.getItem('config');
    const existingConfig = data ? JSON.parse(data): null ;
    const merged = Object.assign( {}, existingConfig, config );
    localStorage.setItem('config', JSON.stringify(merged));
  }

  function cfgGet(key) {

    const data = localStorage.getItem('config');
    if(key.indexOf('.') !== -1){
      const s = key.split(".")
      console.log(s[0]);
      console.log(s[1]);
      return data && JSON.parse(data)[s[0]] && JSON.parse(data)[s[0]][s[1]] ? JSON.parse(data)[s[0]][s[1]]: null ;
    }else{
      return data && JSON.parse(data)[key] ? JSON.parse(data)[key]: null ;
    }

  }

  function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      let results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  window.chatServer = 'https://chat.multihub.tk';