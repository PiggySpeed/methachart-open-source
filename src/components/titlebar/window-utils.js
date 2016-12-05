const remote = window.require('electron').remote;

const applyWindowFunctions = () => {

  const closeWin = () => {
    const window = remote.getCurrentWindow();
    window.close();
  };

  const maximizeWin = () => {
    const window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  };

  const minimizeWin = () => {
    const window = remote.getCurrentWindow();
    window.minimize();
  };

  return {
    close: closeWin,
    maximize: maximizeWin,
    minimize: minimizeWin
  };

};

export default applyWindowFunctions;