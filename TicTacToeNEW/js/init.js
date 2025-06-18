(function () {
    var rcpx1;
    var rcpx2 = function () {};
    var rcpx3 = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
    var rcpx4 = rcpx3.length;
    var rcpx5 = window.console = window.console || {};
    while (rcpx4--) {
      rcpx1 = rcpx3[rcpx4];
      if (!rcpx5[rcpx1]) {
        rcpx5[rcpx1] = rcpx2;
      }
    }
  }());
  function checkContentHeight(rcpx7) {
    var stageHeight = $(window).height();
    var rcpx9 = stageHeight / 2 - rcpx7.height() / 2;
    return rcpx9;
  }
  function checkContentWidth(rcpx7) {
    var stageWidth = $(window).width();
    var rcpxc = stageWidth / 2 - rcpx7.width() / 2;
    return rcpxc;
  }
  function getDeviceVer() {
    var rcpxe = navigator.userAgent;
    var rcpxf;
    if (rcpxe.match(/(iPad|iPhone|iPod touch)/)) {
      userOS = "iOS";
      rcpxf = rcpxe.indexOf("OS ");
    } else {
      if (rcpxe.match(/Android/)) {
        userOS = "Android";
        rcpxf = rcpxe.indexOf("Android ");
      } else {
        userOS = "unknown";
      }
    }
    ;
    if (userOS === "iOS" && rcpxf > -1) {
      userOSver = rcpxe.substr(rcpxf + 3, 3).replace("_", ".");
    } else {
      if (userOS === "Android" && rcpxf > -1) {
        userOSver = rcpxe.substr(rcpxf + 8, 3);
      } else {
        userOSver = "unknown";
      }
    }
    ;
    return Number(userOSver);
  }
  function shuffle(rcpx11) {
    var rcpx12 = rcpx11.length, rcpx13, rcpx14;
    while (0 !== rcpx12) {
      rcpx14 = Math.floor(Math.random() * rcpx12);
      rcpx12 -= 1;
      rcpx13 = rcpx11[rcpx12];
      rcpx11[rcpx12] = rcpx11[rcpx14];
      rcpx11[rcpx14] = rcpx13;
    }
    ;
    return rcpx11;
  }
  function getDistance(rcpx17, rcpx18, rcpx19, rcpx1a) {
    var rcpx1b = Math.sqrt(Math.pow(rcpx17 - rcpx19, 2) + Math.pow(rcpx18 - rcpx1a, 2));
    return rcpx1b;
  }
  function sortOnObject(rcpx11, rcpx1d, rcpx1e) {
    if (rcpx1e) {
      rcpx11.sort(function (rcpx1f, rcpx20) {
        var rcpx21 = rcpx1f[rcpx1d], rcpx22 = rcpx20[rcpx1d];
        if (rcpx21 == rcpx22) {
          return 0;
        }
        ;
        return rcpx21 < rcpx22 ? 1 : -1;
      });
    } else {
      rcpx11.sort(function (rcpx1f, rcpx20) {
        var rcpx21 = rcpx1f[rcpx1d], rcpx22 = rcpx20[rcpx1d];
        if (rcpx21 == rcpx22) {
          return 0;
        }
        ;
        return rcpx21 > rcpx22 ? 1 : -1;
      });
    }
    ;
    return rcpx11;
  }
  function addCommas(rcpx27) {
    rcpx27 += "";
    x = rcpx27.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rcpx28 = /(\d+)(\d{3})/;
    while (rcpx28.test(x1)) {
      x1 = x1.replace(rcpx28, "$1,$2");
    }
    ;
    return x1 + x2;
  }
  function swapArray(rcpx2a, rcpx2b, rcpx2c) {
    var rcpx2d = rcpx2a[rcpx2b];
    rcpx2a[rcpx2b] = rcpx2a[rcpx2c];
    rcpx2a[rcpx2c] = rcpx2d;
  }
  function getCenterPosition(rcpx2f, rcpx30, rcpx31, rcpx32) {
    var rcpx33 = {x: 0, y: 0};
    rcpx33.x = (rcpx2f + rcpx31) / 2;
    rcpx33.y = (rcpx30 + rcpx32) / 2;
    return rcpx33;
  }
  function setRotation(rcpx35, rcpx36, rcpx37, rcpx38) {
    var rcpx39 = 180 / Math.PI;
    var rcpx3a = -Math.atan2(rcpx37 - rcpx35, rcpx38 - rcpx36) * rcpx39;
    return rcpx3a - 90;
  }
  var enableMobileSound = true;
  var soundOn;
  function playSound(rcpx7, rcpx3e) {
    if (soundOn) {
      var rcpx3f;
      if (rcpx3e) {
        rcpx3f = -1;
        createjs.Sound.stop();
        var rcpx40 = (new createjs.PlayPropsConfig).set({interrupt: createjs.Sound.INTERRUPT_NONE, loop: rcpx3f});
        musicLoop = createjs.Sound.play(rcpx7, rcpx40);
        if (musicLoop == null || musicLoop.playState == createjs.Sound.PLAY_FAILED) {
          return;
        } else {
          musicLoop.removeAllEventListeners();
          musicLoop.addEventListener("complete", function (rcpx41) {});
        }
      } else {
        rcpx3f = 0;
        createjs.Sound.play(rcpx7);
      }
    }
  }
  function stopSound() {
    createjs.Sound.stop();
  }
  $.sound = {};
  function playSoundLoop(rcpx44) {
    if (soundOn) {
      if ($.sound[rcpx44] == null) {
        $.sound[rcpx44] = createjs.Sound.play(rcpx44);
        $.sound[rcpx44].removeAllEventListeners();
        $.sound[rcpx44].addEventListener("complete", function () {
          $.sound[rcpx44].play();
        });
      }
    }
  }
  function toggleSoundLoop(rcpx44, rcpx46) {
    if ($.sound[rcpx44] != null) {
      if (rcpx46) {
        $.sound[rcpx44].play();
      } else {
        $.sound[rcpx44].paused = true;
      }
    }
  }
  function stopSoundLoop(rcpx44) {
    if (soundOn) {
      if ($.sound[rcpx44] != null) {
        $.sound[rcpx44].stop();
        $.sound[rcpx44] = null;
      }
    }
  }
  function setSoundVolume(rcpx44, rcpx49) {
    if (soundOn) {
      if ($.sound[rcpx44] != null) {
        $.sound[rcpx44].volume = rcpx49;
      }
    }
  }
  function toggleMute(rcpx46) {
    createjs.Sound.muted = rcpx46;
  }
  var audioQuestion = null;
  function playAudio(rcpx4d) {
    if (audioQuestion == null) {
      audioQuestion = createjs.Sound.play(rcpx4d);
      audioQuestion.removeAllEventListeners();
      audioQuestion.addEventListener("complete", function (rcpx4e) {
        audioQuestion = null;
        playAudioComplete();
      });
    }
  }
  function stopAudio() {
    if (audioQuestion != null) {
      audioQuestion.stop();
      audioQuestion = null;
    }
  }
  var stage;
  var canvasW = 0;
  var canvasH = 0;
  function initGameCanvas(rcpx54, rcpx55) {
    var rcpx56 = document.getElementById("gameCanvas");
    rcpx56.width = rcpx54;
    rcpx56.height = rcpx55;
    canvasW = rcpx54;
    canvasH = rcpx55;
    stage = new createjs.Stage("gameCanvas");
    createjs.Touch.enable(stage);
    stage.enableMouseOver(20);
    stage.mouseMoveOutside = true;
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", tick);
  }
  var guide = false;
  var canvasContainer, mainContainer, gameContainer, instructionContainer, resultContainer, moveContainer, confirmContainer;
  var guideline, bg, logo, buttonOk, result, shadowResult, buttonReplay, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;
  $.players = {};
  function buildGameCanvas() {
    canvasContainer = new createjs.Container;
    mainContainer = new createjs.Container;
    buttonTypeContainer = new createjs.Container;
    buttonPlayerContainer = new createjs.Container;
    mainContainer = new createjs.Container;
    customContainer = new createjs.Container;
    playersContainer = new createjs.Container;
    gameContainer = new createjs.Container;
    timerContainer = new createjs.Container;
    statusContainer = new createjs.Container;
    boardContainer = new createjs.Container;
    boardDesignContainer = new createjs.Container;
    boardIconContainer = new createjs.Container;
    resultContainer = new createjs.Container;
    confirmContainer = new createjs.Container;
    bg = new createjs.Bitmap(loader.getResult("background"));
    bgP = new createjs.Bitmap(loader.getResult("backgroundP"));
    logo = new createjs.Bitmap(loader.getResult("logo"));
    logoP = new createjs.Bitmap(loader.getResult("logoP"));
    buttonClassic = new createjs.Bitmap(loader.getResult("buttonClassic"));
    centerReg(buttonClassic);
    buttonCustom = new createjs.Bitmap(loader.getResult("buttonCustom"));
    centerReg(buttonCustom);
    buttonOnePlayer = new createjs.Bitmap(loader.getResult("buttonOnePlayer"));
    centerReg(buttonOnePlayer);
    buttonTwoPlayer = new createjs.Bitmap(loader.getResult("buttonTwoPlayer"));
    centerReg(buttonTwoPlayer);
    itemCustom = new createjs.Bitmap(loader.getResult("itemPop"));
    itemCustomP = new createjs.Bitmap(loader.getResult("itemPopP"));
    customTitleTxt = new createjs.Text;
    customTitleTxt.font = "60px bpreplaybold";
    customTitleTxt.color = "#13359e";
    customTitleTxt.textAlign = "center";
    customTitleTxt.textBaseline = "alphabetic";
    customTitleTxt.text = textDisplay.customTitle;
    sizeTxt = new createjs.Text;
    sizeTxt.font = "50px bpreplaybold";
    sizeTxt.color = "#13359e";
    sizeTxt.textAlign = "center";
    sizeTxt.textBaseline = "alphabetic";
    sizeTxt.text = textDisplay.share;
    itemNumberSize = new createjs.Bitmap(loader.getResult("itemNumber"));
    centerReg(itemNumberSize);
    itemNumberWin = new createjs.Bitmap(loader.getResult("itemNumber"));
    centerReg(itemNumberWin);
    buttonSizeL = new createjs.Bitmap(loader.getResult("buttonMinus"));
    centerReg(buttonSizeL);
    buttonSizeR = new createjs.Bitmap(loader.getResult("buttonPlus"));
    centerReg(buttonSizeR);
    winTxt = new createjs.Text;
    winTxt.font = "50px bpreplaybold";
    winTxt.color = "#13359e";
    winTxt.textAlign = "center";
    winTxt.textBaseline = "alphabetic";
    winTxt.text = textDisplay.share;
    buttonWinL = new createjs.Bitmap(loader.getResult("buttonMinus"));
    centerReg(buttonWinL);
    buttonWinR = new createjs.Bitmap(loader.getResult("buttonPlus"));
    centerReg(buttonWinR);
    buttonCustomStart = new createjs.Bitmap(loader.getResult("buttonStart"));
    centerReg(buttonCustomStart);
    customContainer.addChild(itemCustom, itemCustomP, customTitleTxt, buttonCustomStart, itemNumberSize, itemNumberWin, buttonSizeL, buttonSizeR, sizeTxt, buttonWinL, buttonWinR, winTxt);
    vsTxt = new createjs.Text;
    vsTxt.font = "80px bpreplaybold";
    vsTxt.color = "#fff";
    vsTxt.textAlign = "center";
    vsTxt.textBaseline = "alphabetic";
    vsTxt.text = textDisplay.vs;
    for (var rcpx6d = 0; rcpx6d < 2; rcpx6d++) {
      $.players["playerContainer" + rcpx6d] = new createjs.Container;
      $.players["playerBg" + rcpx6d] = new createjs.Bitmap(loader.getResult("itemPlayer"));
      centerReg($.players["playerBg" + rcpx6d]);
      $.players["player" + rcpx6d] = new createjs.Text;
      $.players["player" + rcpx6d].font = "25px bpreplaybold";
      $.players["player" + rcpx6d].color = "#012465";
      $.players["player" + rcpx6d].textAlign = "center";
      $.players["player" + rcpx6d].textBaseline = "alphabetic";
      $.players["player" + rcpx6d].text = textDisplay.player1;
      $.players["player" + rcpx6d].x = 0;
      $.players["player" + rcpx6d].y = 70;
      $.players["playerIconContainer" + rcpx6d] = new createjs.Container;
      $.players["playerContainer" + rcpx6d].addChild($.players["playerBg" + rcpx6d], $.players["player" + rcpx6d], $.players["playerIconContainer" + rcpx6d]);
      playersContainer.addChild($.players["playerContainer" + rcpx6d]);
    }
    ;
    buttonPlayersStart = new createjs.Bitmap(loader.getResult("buttonStart"));
    centerReg(buttonPlayersStart);
    buttonPlayersIcon = new createjs.Bitmap(loader.getResult("buttonTheme"));
    centerReg(buttonPlayersIcon);
    buttonPlayersSwitch = new createjs.Bitmap(loader.getResult("buttonSwitch"));
    centerReg(buttonPlayersSwitch);
    playersContainer.addChild(vsTxt, buttonPlayersStart, buttonPlayersIcon, buttonPlayersSwitch);
    itemTimer = new createjs.Bitmap(loader.getResult("itemTimer"));
    centerReg(itemTimer);
    timerTxt = new createjs.Text;
    timerTxt.font = "35px bpreplaybold";
    timerTxt.color = "#012465";
    timerTxt.textAlign = "center";
    timerTxt.textBaseline = "alphabetic";
    timerRedTxt = new createjs.Text;
    timerRedTxt.font = "35px bpreplaybold";
    timerRedTxt.color = "#630202";
    timerRedTxt.textAlign = "center";
    timerRedTxt.textBaseline = "alphabetic";
    timerTxt.y = timerRedTxt.y = 13;
    timerContainer.addChild(itemTimer, timerTxt, timerRedTxt);
    itemStatus = new createjs.Bitmap(loader.getResult("itemStatus"));
    centerReg(itemStatus);
    statusTxt = new createjs.Text;
    statusTxt.font = "35px bpreplaybold";
    statusTxt.color = "#012465";
    statusTxt.textAlign = "center";
    statusTxt.textBaseline = "alphabetic";
    statusTxt.y = 13;
    statusContainer.addChild(itemStatus, statusTxt);
    for (var rcpx6d = 0; rcpx6d < 2; rcpx6d++) {
      $.players["gamePlayerContainer" + rcpx6d] = new createjs.Container;
      $.players["gamePlayerBg" + rcpx6d] = new createjs.Bitmap(loader.getResult("itemGamePlayer"));
      centerReg($.players["gamePlayerBg" + rcpx6d]);
      $.players["gamePlayer" + rcpx6d] = new createjs.Text;
      $.players["gamePlayer" + rcpx6d].font = "25px bpreplaybold";
      $.players["gamePlayer" + rcpx6d].color = "#012465";
      $.players["gamePlayer" + rcpx6d].textAlign = "center";
      $.players["gamePlayer" + rcpx6d].textBaseline = "alphabetic";
      $.players["gamePlayer" + rcpx6d].text = textDisplay.player1;
      $.players["gamePlayer" + rcpx6d].y += 63;
      $.players["gameWin" + rcpx6d] = new createjs.Text;
      $.players["gameWin" + rcpx6d].font = "25px bpreplaybold";
      $.players["gameWin" + rcpx6d].color = "#012465";
      $.players["gameWin" + rcpx6d].textAlign = "center";
      $.players["gameWin" + rcpx6d].textBaseline = "alphabetic";
      $.players["gameWin" + rcpx6d].text = 0;
      $.players["gameWin" + rcpx6d].y += 93;
      $.players["gameTurn" + rcpx6d] = new createjs.Text;
      $.players["gameTurn" + rcpx6d].font = "25px bpreplaybold";
      $.players["gameTurn" + rcpx6d].color = "#fff";
      $.players["gameTurn" + rcpx6d].textAlign = "center";
      $.players["gameTurn" + rcpx6d].textBaseline = "alphabetic";
      $.players["gameTurn" + rcpx6d].text = 0;
      $.players["gameTurn" + rcpx6d].y += 150;
      $.players["gameIconContainer" + rcpx6d] = new createjs.Container;
      $.players["gamePlayerContainer" + rcpx6d].addChild($.players["gamePlayerBg" + rcpx6d], $.players["gameIconContainer" + rcpx6d], $.players["gamePlayer" + rcpx6d], $.players["gameWin" + rcpx6d], $.players["gameTurn" + rcpx6d]);
      gameContainer.addChild($.players["gamePlayerContainer" + rcpx6d]);
    }
    ;
    boardStroke = new createjs.Shape;
    itemResult = new createjs.Bitmap(loader.getResult("itemPop"));
    itemResultP = new createjs.Bitmap(loader.getResult("itemPopP"));
    buttonContinue = new createjs.Bitmap(loader.getResult("buttonContinue"));
    centerReg(buttonContinue);
    resultShareTxt = new createjs.Text;
    resultShareTxt.font = "25px bpreplaybold";
    resultShareTxt.color = "#fff";
    resultShareTxt.textAlign = "center";
    resultShareTxt.textBaseline = "alphabetic";
    resultShareTxt.text = textDisplay.share;
    resultTitleTxt = new createjs.Text;
    resultTitleTxt.font = "60px bpreplaybold";
    resultTitleTxt.color = "#13359e";
    resultTitleTxt.textAlign = "center";
    resultTitleTxt.textBaseline = "alphabetic";
    resultTitleTxt.text = textDisplay.resultTitle;
    resultDescTxt = new createjs.Text;
    resultDescTxt.font = "45px bpreplaybold";
    resultDescTxt.lineHeight = 35;
    resultDescTxt.color = "#fff";
    resultDescTxt.textAlign = "center";
    resultDescTxt.textBaseline = "alphabetic";
    resultDescTxt.text = "";
    buttonFacebook = new createjs.Bitmap(loader.getResult("buttonFacebook"));
    buttonTwitter = new createjs.Bitmap(loader.getResult("buttonTwitter"));
    buttonWhatsapp = new createjs.Bitmap(loader.getResult("buttonWhatsapp"));
    centerReg(buttonFacebook);
    createHitarea(buttonFacebook);
    centerReg(buttonTwitter);
    createHitarea(buttonTwitter);
    centerReg(buttonWhatsapp);
    createHitarea(buttonWhatsapp);
    buttonFullscreen = new createjs.Bitmap(loader.getResult("buttonFullscreen"));
    centerReg(buttonFullscreen);
    buttonSoundOn = new createjs.Bitmap(loader.getResult("buttonSoundOn"));
    centerReg(buttonSoundOn);
    buttonSoundOff = new createjs.Bitmap(loader.getResult("buttonSoundOff"));
    centerReg(buttonSoundOff);
    buttonSoundOn.visible = false;
    buttonExit = new createjs.Bitmap(loader.getResult("buttonExit"));
    centerReg(buttonExit);
    buttonSettings = new createjs.Bitmap(loader.getResult("buttonSettings"));
    centerReg(buttonSettings);
    createHitarea(buttonFullscreen);
    createHitarea(buttonSoundOn);
    createHitarea(buttonSoundOff);
    createHitarea(buttonExit);
    createHitarea(buttonSettings);
    optionsContainer = new createjs.Container;
    optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
    optionsContainer.visible = false;
    itemExit = new createjs.Bitmap(loader.getResult("itemPop"));
    itemExitP = new createjs.Bitmap(loader.getResult("itemPopP"));
    buttonConfirm = new createjs.Bitmap(loader.getResult("buttonConfirm"));
    centerReg(buttonConfirm);
    buttonCancel = new createjs.Bitmap(loader.getResult("buttonCancel"));
    centerReg(buttonCancel);
    popTitleTxt = new createjs.Text;
    popTitleTxt.font = "60px bpreplaybold";
    popTitleTxt.color = "#13359e";
    popTitleTxt.textAlign = "center";
    popTitleTxt.textBaseline = "alphabetic";
    popTitleTxt.text = textDisplay.exitTitle;
    popDescTxt = new createjs.Text;
    popDescTxt.font = "45px bpreplaybold";
    popDescTxt.lineHeight = 50;
    popDescTxt.color = "#fff";
    popDescTxt.textAlign = "center";
    popDescTxt.textBaseline = "alphabetic";
    popDescTxt.text = textDisplay.exitMessage;
    confirmContainer.addChild(itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel);
    confirmContainer.visible = false;
    if (guide) {
      guideline = new createjs.Shape;
      guideline.graphics.setStrokeStyle(2).beginStroke("red").drawRect((stageW - contentW) / 2, (stageH - contentH) / 2, contentW, contentH);
    }
    ;
    buttonTypeContainer.addChild(buttonClassic, buttonCustom);
    buttonPlayerContainer.addChild(buttonOnePlayer, buttonTwoPlayer);
    mainContainer.addChild(logo, logoP, buttonTypeContainer, buttonPlayerContainer);
    boardContainer.addChild(boardDesignContainer, boardIconContainer, boardStroke, statusContainer);
    gameContainer.addChild(boardContainer, timerContainer);
    resultContainer.addChild(itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt);
    if (shareEnable) {
      resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp);
    }
    ;
    canvasContainer.addChild(bg, bgP, mainContainer, customContainer, playersContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings, guideline);
    stage.addChild(canvasContainer);
    changeViewport(viewport.isLandscape);
    resizeGameFunc();
  }
  function changeViewport(rcpx6f) {
    if (rcpx6f) {
      stageW = landscapeSize.w;
      stageH = landscapeSize.h;
      contentW = landscapeSize.cW;
      contentH = landscapeSize.cH;
    } else {
      stageW = portraitSize.w;
      stageH = portraitSize.h;
      contentW = portraitSize.cW;
      contentH = portraitSize.cH;
    }
    ;
    gameCanvas.width = stageW;
    gameCanvas.height = stageH;
    canvasW = stageW;
    canvasH = stageH;
    changeCanvasViewport();
  }
  function changeCanvasViewport() {
    if (canvasContainer != undefined) {
      boardContainer.x = canvasW / 2;
      boardContainer.y = canvasH / 2;
      if (viewport.isLandscape) {
        bg.visible = true;
        bgP.visible = false;
        logo.visible = true;
        logoP.visible = false;
        if (customSettings.enable) {
          buttonClassic.x = canvasW / 2 - 140;
          buttonClassic.y = canvasH / 100 * 75;
          buttonCustom.x = canvasW / 2 + 140;
          buttonCustom.y = canvasH / 100 * 75;
          buttonCustom.visible = true;
        } else {
          buttonClassic.x = canvasW / 2;
          buttonClassic.y = canvasH / 100 * 75;
          buttonCustom.visible = false;
        }
        ;
        buttonOnePlayer.x = canvasW / 2 - 140;
        buttonOnePlayer.y = canvasH / 100 * 75;
        buttonTwoPlayer.x = canvasW / 2 + 140;
        buttonTwoPlayer.y = canvasH / 100 * 75;
        itemCustom.visible = true;
        itemCustomP.visible = false;
        customTitleTxt.x = canvasW / 2;
        customTitleTxt.y = canvasH / 100 * 35;
        buttonCustomStart.x = canvasW / 2;
        buttonCustomStart.y = canvasH / 100 * 68;
        buttonSizeL.x = canvasW / 2 - 200;
        buttonSizeR.x = canvasW / 2 + 200;
        itemNumberSize.x = canvasW / 2;
        sizeTxt.x = canvasW / 2;
        itemNumberSize.y = buttonSizeL.y = buttonSizeR.y = canvasH / 100 * 43;
        sizeTxt.y = itemNumberSize.y + 20;
        buttonWinL.x = canvasW / 2 - 200;
        buttonWinR.x = canvasW / 2 + 200;
        itemNumberWin.x = canvasW / 2;
        winTxt.x = canvasW / 2;
        itemNumberWin.y = buttonWinL.y = buttonWinR.y = canvasH / 100 * 55;
        winTxt.y = itemNumberWin.y + 20;
        vsTxt.x = canvasW / 2;
        vsTxt.y = canvasH / 2;
        $.players.playerContainer0.x = canvasW / 2 - 250;
        $.players.playerContainer1.x = canvasW / 2 + 250;
        $.players.playerContainer0.y = $.players.playerContainer1.y = canvasH / 2;
        buttonPlayersIcon.x = canvasW / 2 - 50;
        buttonPlayersIcon.y = canvasH / 100 * 60;
        buttonPlayersSwitch.x = canvasW / 2 + 50;
        buttonPlayersSwitch.y = canvasH / 100 * 60;
        buttonPlayersStart.x = canvasW / 2;
        buttonPlayersStart.y = canvasH / 100 * 75;
        $.players.gamePlayerContainer0.x = canvasW / 2 - 380;
        $.players.gamePlayerContainer1.x = canvasW / 2 + 380;
        $.players.gamePlayerContainer0.y = $.players.gamePlayerContainer1.y = canvasH / 2;
        itemResult.visible = true;
        itemResultP.visible = false;
        buttonFacebook.x = canvasW / 100 * 43;
        buttonFacebook.y = canvasH / 100 * 55;
        buttonTwitter.x = canvasW / 2;
        buttonTwitter.y = canvasH / 100 * 55;
        buttonWhatsapp.x = canvasW / 100 * 57;
        buttonWhatsapp.y = canvasH / 100 * 55;
        buttonContinue.x = canvasW / 2;
        buttonContinue.y = canvasH / 100 * 68;
        resultShareTxt.x = canvasW / 2;
        resultShareTxt.y = canvasH / 100 * 49;
        resultTitleTxt.x = canvasW / 2;
        resultTitleTxt.y = canvasH / 100 * 35;
        resultDescTxt.x = canvasW / 2;
        resultDescTxt.y = canvasH / 100 * 43;
        itemExit.visible = true;
        itemExitP.visible = false;
        buttonConfirm.x = canvasW / 2 - 140;
        buttonConfirm.y = canvasH / 100 * 68;
        buttonCancel.x = canvasW / 2 + 140;
        buttonCancel.y = canvasH / 100 * 68;
        popTitleTxt.x = canvasW / 2;
        popTitleTxt.y = canvasH / 100 * 35;
        popDescTxt.x = canvasW / 2;
        popDescTxt.y = canvasH / 100 * 45;
      } else {
        boardContainer.x = canvasW / 2;
        boardContainer.y = canvasH / 100 * 37;
        bg.visible = false;
        bgP.visible = true;
        logo.visible = false;
        logoP.visible = true;
        if (customSettings.enable) {
          buttonClassic.x = canvasW / 2;
          buttonClassic.y = canvasH / 100 * 73;
          buttonCustom.x = canvasW / 2;
          buttonCustom.y = canvasH / 100 * 85;
          buttonCustom.visible = true;
        } else {
          buttonClassic.x = canvasW / 2;
          buttonClassic.y = canvasH / 100 * 75;
          buttonCustom.visible = false;
        }
        ;
        buttonOnePlayer.x = canvasW / 2;
        buttonOnePlayer.y = canvasH / 100 * 73;
        buttonTwoPlayer.x = canvasW / 2;
        buttonTwoPlayer.y = canvasH / 100 * 85;
        itemCustom.visible = false;
        itemCustomP.visible = true;
        customTitleTxt.x = canvasW / 2;
        customTitleTxt.y = canvasH / 100 * 38;
        buttonCustomStart.x = canvasW / 2;
        buttonCustomStart.y = canvasH / 100 * 64;
        buttonSizeL.x = canvasW / 2 - 200;
        buttonSizeR.x = canvasW / 2 + 200;
        itemNumberSize.x = canvasW / 2;
        sizeTxt.x = canvasW / 2;
        itemNumberSize.y = buttonSizeL.y = buttonSizeR.y = canvasH / 100 * 45;
        sizeTxt.y = itemNumberSize.y + 20;
        buttonWinL.x = canvasW / 2 - 200;
        buttonWinR.x = canvasW / 2 + 200;
        itemNumberWin.x = canvasW / 2;
        winTxt.x = canvasW / 2;
        itemNumberWin.y = buttonWinL.y = buttonWinR.y = canvasH / 100 * 53;
        winTxt.y = itemNumberWin.y + 20;
        vsTxt.x = canvasW / 2;
        vsTxt.y = canvasH / 2;
        $.players.playerContainer0.x = canvasW / 2 - 180;
        $.players.playerContainer1.x = canvasW / 2 + 180;
        $.players.playerContainer0.y = $.players.playerContainer1.y = canvasH / 2;
        buttonPlayersIcon.x = canvasW / 2 - 50;
        buttonPlayersIcon.y = canvasH / 100 * 60;
        buttonPlayersSwitch.x = canvasW / 2 + 50;
        buttonPlayersSwitch.y = canvasH / 100 * 60;
        buttonPlayersStart.x = canvasW / 2;
        buttonPlayersStart.y = canvasH / 100 * 75;
        $.players.gamePlayerContainer0.x = canvasW / 2 - 150;
        $.players.gamePlayerContainer1.x = canvasW / 2 + 150;
        $.players.gamePlayerContainer0.y = $.players.gamePlayerContainer1.y = canvasH / 100 * 77;
        itemResult.visible = false;
        itemResultP.visible = true;
        buttonFacebook.x = canvasW / 100 * 39;
        buttonFacebook.y = canvasH / 100 * 54;
        buttonTwitter.x = canvasW / 2;
        buttonTwitter.y = canvasH / 100 * 54;
        buttonWhatsapp.x = canvasW / 100 * 61;
        buttonWhatsapp.y = canvasH / 100 * 54;
        buttonContinue.x = canvasW / 2;
        buttonContinue.y = canvasH / 100 * 64;
        resultShareTxt.x = canvasW / 2;
        resultShareTxt.y = canvasH / 100 * 49;
        resultTitleTxt.x = canvasW / 2;
        resultTitleTxt.y = canvasH / 100 * 38;
        resultDescTxt.x = canvasW / 2;
        resultDescTxt.y = canvasH / 100 * 45;
        itemExit.visible = false;
        itemExitP.visible = true;
        buttonConfirm.x = canvasW / 2 - 130;
        buttonConfirm.y = canvasH / 100 * 64;
        buttonCancel.x = canvasW / 2 + 130;
        buttonCancel.y = canvasH / 100 * 64;
        popTitleTxt.x = canvasW / 2;
        popTitleTxt.y = canvasH / 100 * 38;
        popDescTxt.x = canvasW / 2;
        popDescTxt.y = canvasH / 100 * 48;
      }
    }
  }
  function resizeCanvas() {
    if (canvasContainer != undefined) {
      buttonSettings.x = canvasW - offset.x - 50;
      buttonSettings.y = offset.y + 45;
      var rcpx72 = 60;
      if (curPage != "game") {
        buttonExit.visible = false;
        buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
        buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y + rcpx72;
        buttonSoundOn.x = buttonSoundOff.x;
        buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y + rcpx72;
        buttonFullscreen.x = buttonSettings.x;
        buttonFullscreen.y = buttonSettings.y + rcpx72 * 2;
      } else {
        buttonExit.visible = true;
        buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
        buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y + rcpx72;
        buttonSoundOn.x = buttonSoundOff.x;
        buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y + rcpx72;
        buttonFullscreen.x = buttonSettings.x;
        buttonFullscreen.y = buttonSettings.y + rcpx72 * 2;
        buttonExit.x = buttonSettings.x;
        buttonExit.y = buttonSettings.y + rcpx72 * 3;
        timerContainer.x = offset.x + 80;
        timerContainer.y = offset.y + 50;
      }
    }
  }
  function removeGameCanvas() {
    stage.autoClear = true;
    stage.removeAllChildren();
    stage.update();
    createjs.Ticker.removeEventListener("tick", tick);
    createjs.Ticker.removeEventListener("tick", stage);
  }
  function tick(rcpx4e) {
    updateGame();
    stage.update(rcpx4e);
  }
  function centerReg(rcpx76) {
    rcpx76.regX = rcpx76.image.naturalWidth / 2;
    rcpx76.regY = rcpx76.image.naturalHeight / 2;
  }
  function createHitarea(rcpx76) {
    rcpx76.hitArea = new createjs.Shape((new createjs.Graphics).beginFill("#000").drawRect(0, 0, rcpx76.image.naturalWidth, rcpx76.image.naturalHeight));
  }
  var iconsArr = [{o: "assets/icon_o_1.png", x: "assets/icon_x_1.png", oShadow: "assets/icon_o_1_shadow.png", xShadow: "assets/icon_x_1_shadow.png"}, {o: "assets/icon_o_2.png", x: "assets/icon_x_2.png", oShadow: "assets/icon_o_1_shadow.png", xShadow: "assets/icon_x_1_shadow.png"}, {o: "assets/icon_o_3.png", x: "assets/icon_x_3.png", oShadow: "assets/icon_o_1_shadow.png", xShadow: "assets/icon_o_1_shadow.png"}, {o: "assets/icon_o_4.png", x: "assets/icon_x_4.png", oShadow: "assets/icon_o_1_shadow.png", xShadow: "assets/icon_o_1_shadow.png"}, {o: "assets/icon_o_6.png", x: "assets/icon_x_6.png", oShadow: "assets/icon_o_6_shadow.png", xShadow: "assets/icon_x_6_shadow.png"}, {o: "assets/icon_5.png", x: "assets/icon_5.png", oShadow: "assets/icon_o_1_shadow.png", xShadow: "assets/icon_o_1_shadow.png"}];
  var defaultSettings = {twoPlayer: true, size: 3, win: 3, levelMax: 4, timeMax: 1e3};
  var customSettings = {enable: true, twoPlayer: true, sizeMin: 3, sizeMax: 8, winMin: 3, winMax: 5, levelMax: 4, timeMax: 1e3};
  var boardSettings = {width: 100, margin: 20, radius: 15, shadowX: 5, shadowY: 10, size: 5, win: 5, color: "#012465", winColor: "#e2bf30", boardColor: "#0068c6", tweenSpeed: 0.3, tweenScale: 2, tweenOffset: 1.5, strokeEnable: true, strokeNumber: 10, strokeColor: "#fff", timer: 18e4};
  var textDisplay = {customTitle: "Custom Board", customSize: "[NUMBER] x [NUMBER] size", customWin: "[NUMBER] win", vs: "VS", player1: "Player 1", player2: "Player 2", computer: "Computer", userTurn: "Your turn", computerTurn: "Thinking...", gameWin: "[NUMBER] win", draw: "Draw", timeUp: "Time's Up", exitTitle: "Exit Game", exitMessage: "Are you sure you want\nto quit game?", share: "Share your score:", resultTitle: "Game Over", resultDesc: "you won [NUMBER] round"};
  var shareEnable = true;
  var shareTitle = "Highscore on Tic Tac Toe is [SCORE]pts";
  var shareMessage = "[SCORE]pts is mine new highscore on Tic Tac Toe game! Try it now!";
  $.editor = {enable: false};
  var playerData = {score: 0, opponentScore: 0};
  var gameData = {paused: true, moving: false, icon: 0, iconSwitch: false, icons: ["o", "x"], type: "classic", custom: {size: 0, win: 0}, settings: {size: 0, win: 0, level: 0, timer: 0}, turn: 0, player: 0, ai: false, aiMove: false, complete: false};
  var timeData = {enable: false, startDate: null, nowDate: null, timer: 0, oldTimer: 0};
  var strokeData = {x: 0, y: 0};
  var tweenData = {score: 0, tweenScore: 0};
  function buildGameButton() {
    buttonClassic.cursor = "pointer";
    buttonClassic.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      gameData.type = "classic";
      toggleMainButton(true);
    });
    buttonCustom.cursor = "pointer";
    buttonCustom.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      gameData.type = "custom";
      toggleMainButton(true);
    });
    buttonOnePlayer.cursor = "pointer";
    buttonOnePlayer.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      checkGameType(true);
    });
    buttonTwoPlayer.cursor = "pointer";
    buttonTwoPlayer.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      checkGameType(false);
    });
    buttonSizeL.cursor = "pointer";
    buttonSizeL.addEventListener("click", function (rcpx86) {
      playSound("soundButton2");
      toggleCustomSize(false);
    });
    buttonSizeR.cursor = "pointer";
    buttonSizeR.addEventListener("click", function (rcpx86) {
      playSound("soundButton2");
      toggleCustomSize(true);
    });
    buttonWinL.cursor = "pointer";
    buttonWinL.addEventListener("click", function (rcpx86) {
      playSound("soundButton2");
      toggleCustomWin(false);
    });
    buttonWinR.cursor = "pointer";
    buttonWinR.addEventListener("click", function (rcpx86) {
      playSound("soundButton2");
      toggleCustomWin(true);
    });
    buttonCustomStart.cursor = "pointer";
    buttonCustomStart.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      goPage("players");
    });
    buttonPlayersIcon.cursor = "pointer";
    buttonPlayersIcon.addEventListener("click", function (rcpx86) {
      playSound("soundButton2");
      toggleGameIcon();
    });
    buttonPlayersSwitch.cursor = "pointer";
    buttonPlayersSwitch.addEventListener("click", function (rcpx86) {
      playSound("soundButton2");
      toggleGameIconSide();
    });
    buttonPlayersStart.cursor = "pointer";
    buttonPlayersStart.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      goPage("game");
    });
    itemExit.addEventListener("click", function (rcpx86) {});
    buttonContinue.cursor = "pointer";
    buttonContinue.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      goPage("main");
    });
    buttonFacebook.cursor = "pointer";
    buttonFacebook.addEventListener("click", function (rcpx86) {
      share("facebook");
    });
    buttonTwitter.cursor = "pointer";
    buttonTwitter.addEventListener("click", function (rcpx86) {
      share("twitter");
    });
    buttonWhatsapp.cursor = "pointer";
    buttonWhatsapp.addEventListener("click", function (rcpx86) {
      share("whatsapp");
    });
    buttonSoundOff.cursor = "pointer";
    buttonSoundOff.addEventListener("click", function (rcpx86) {
      toggleGameMute(true);
    });
    buttonSoundOn.cursor = "pointer";
    buttonSoundOn.addEventListener("click", function (rcpx86) {
      toggleGameMute(false);
    });
    buttonFullscreen.cursor = "pointer";
    buttonFullscreen.addEventListener("click", function (rcpx86) {
      toggleFullScreen();
    });
    buttonExit.cursor = "pointer";
    buttonExit.addEventListener("click", function (rcpx86) {
      togglePop(true);
      toggleOption();
    });
    buttonSettings.cursor = "pointer";
    buttonSettings.addEventListener("click", function (rcpx86) {
      toggleOption();
    });
    buttonConfirm.cursor = "pointer";
    buttonConfirm.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      togglePop(false);
      stopAudio();
      stopGame();
      goPage("main");
    });
    buttonCancel.cursor = "pointer";
    buttonCancel.addEventListener("click", function (rcpx86) {
      playSound("soundButton");
      togglePop(false);
    });
    gameData.custom.size = customSettings.sizeMin;
    gameData.custom.win = customSettings.winMin;
    checkCustomSettings();
    displayPlayerIcon();
  }
  function toggleMainButton(rcpx46) {
    if (rcpx46) {
      if (gameData.type == "classic") {
        if (!defaultSettings.twoPlayer) {
          checkGameType(true);
          return;
        }
      } else {
        if (!customSettings.twoPlayer) {
          checkGameType(true);
          return;
        }
      }
      ;
      buttonTypeContainer.visible = false;
      buttonPlayerContainer.visible = true;
    } else {
      buttonTypeContainer.visible = true;
      buttonPlayerContainer.visible = false;
    }
  }
  function checkGameType(rcpx46) {
    gameData.ai = rcpx46;
    if (gameData.type == "classic") {
      goPage("players");
    } else {
      goPage("custom");
    }
  }
  function toggleCustomSize(rcpx46) {
    if (rcpx46) {
      gameData.custom.size++;
      gameData.custom.size = gameData.custom.size > customSettings.sizeMax ? customSettings.sizeMax : gameData.custom.size;
    } else {
      gameData.custom.size--;
      gameData.custom.size = gameData.custom.size < customSettings.sizeMin ? customSettings.sizeMin : gameData.custom.size;
    }
    ;
    gameData.custom.win = gameData.custom.win > gameData.custom.size ? gameData.custom.size : gameData.custom.win;
    gameData.custom.win = gameData.custom.win < customSettings.sizeMin ? customSettings.sizeMin : gameData.custom.win;
    checkCustomSettings();
  }
  function toggleCustomWin(rcpx46) {
    if (rcpx46) {
      gameData.custom.win++;
      gameData.custom.win = gameData.custom.win > gameData.custom.size ? gameData.custom.size : gameData.custom.win;
      gameData.custom.win = gameData.custom.win > customSettings.winMax ? customSettings.winMax : gameData.custom.win;
    } else {
      gameData.custom.win--;
      gameData.custom.win = gameData.custom.win < customSettings.winMin ? customSettings.winMin : gameData.custom.win;
    }
    ;
    checkCustomSettings();
  }
  function checkCustomSettings() {
    var rcpx8c = textDisplay.customSize.replace("[NUMBER]", gameData.custom.size);
    rcpx8c = rcpx8c.replace("[NUMBER]", gameData.custom.size);
    sizeTxt.text = rcpx8c;
    winTxt.text = textDisplay.customWin.replace("[NUMBER]", gameData.custom.win);
  }
  function toggleGameIcon() {
    gameData.icon++;
    gameData.icon = gameData.icon > iconsArr.length - 1 ? 0 : gameData.icon;
    displayPlayerIcon();
  }
  function toggleGameIconSide() {
    gameData.iconSwitch = gameData.iconSwitch == true ? false : true;
    if (gameData.iconSwitch) {
      gameData.icons = ["x", "o"];
    } else {
      gameData.icons = ["o", "x"];
    }
    ;
    displayPlayerIcon();
  }
  function displayPlayerIcon() {
    for (var rcpx6d = 0; rcpx6d < 2; rcpx6d++) {
      $.players["playerIconContainer" + rcpx6d].removeAllChildren();
      var rcpx90 = "icon" + gameData.icon + gameData.icons[rcpx6d];
      $.players["playerIcon" + rcpx6d] = new createjs.Bitmap(loader.getResult(rcpx90));
      centerReg($.players["playerIcon" + rcpx6d]);
      $.players["playerIconShadow" + rcpx6d] = new createjs.Bitmap(loader.getResult(rcpx90 + "Shadow"));
      centerReg($.players["playerIconShadow" + rcpx6d]);
      $.players["playerIcon" + rcpx6d].y = -20;
      $.players["playerIconShadow" + rcpx6d].x = $.players["playerIcon" + rcpx6d].x + boardSettings.shadowX;
      $.players["playerIconShadow" + rcpx6d].y = $.players["playerIcon" + rcpx6d].y + boardSettings.shadowY;
      $.players["playerIconContainer" + rcpx6d].addChild($.players["playerIconShadow" + rcpx6d], $.players["playerIcon" + rcpx6d]);
    }
  }
  function togglePop(rcpx46) {
    confirmContainer.visible = rcpx46;
  }
  var curPage = "";
  function goPage(rcpx94) {
    curPage = rcpx94;
    mainContainer.visible = false;
    customContainer.visible = false;
    playersContainer.visible = false;
    gameContainer.visible = false;
    resultContainer.visible = false;
    var rcpx95 = null;
    switch (rcpx94) {
      case "main":
        rcpx95 = mainContainer;
        toggleMainButton(false);
        break;
      case "custom":
        customContainer.visible = true;
        break;
      case "players":
        playersContainer.visible = true;
        if (gameData.ai) {
          $.players.player1.text = textDisplay.computer;
        } else {
          $.players.player1.text = textDisplay.player2;
        }
        ;
        break;
      case "game":
        gameContainer.visible = true;
        startGame();
        break;
      case "result":
        rcpx95 = resultContainer;
        stopGame();
        togglePop(false);
        playSound("soundResult");
        tweenData.tweenScore = 0;
        TweenMax.to(tweenData, 0.5, {tweenScore: playerData.score, overwrite: true, onUpdate: function () {
          resultDescTxt.text = textDisplay.resultDesc.replace("[NUMBER]", Math.floor(tweenData.tweenScore));
        }});
        saveGame(playerData.score);
        break;
    }
    ;
    if (rcpx95 != null) {
      rcpx95.visible = true;
      rcpx95.alpha = 0;
      TweenMax.to(rcpx95, 0.5, {alpha: 1, overwrite: true});
    }
    ;
    resizeCanvas();
  }
  function startGame() {
    gameData.paused = false;
    gameData.complete = false;
    gameData.turn = 0;
    gameData.player = 0;
    gameData.moving = false;
    buildPlayers();
    if (gameData.type == "classic") {
      gameData.settings = {size: defaultSettings.size, win: defaultSettings.win, level: defaultSettings.levelMax, timer: defaultSettings.timeMax};
    } else {
      gameData.settings = {size: gameData.custom.size, win: gameData.custom.win, level: customSettings.levelMax, timer: customSettings.timeMax};
    }
    ;
    timeData.oldTimer = -1;
    timeData.countdown = boardSettings.timer;
    timerTxt.text = timerRedTxt.text = millisecondsToTime(timeData.countdown);
    timerRedTxt.alpha = 0;
    statusContainer.alpha = 0;
    buildBoard();
    toggleGameTimer(true);
  }
  function stopGame() {
    boardDesignContainer.removeAllChildren();
    boardIconContainer.removeAllChildren();
    gameData.paused = true;
    TweenMax.killAll(false, true, false);
  }
  function saveGame(rcpx99) {
    if (typeof toggleScoreboardSave == "function") {
      $.scoreData.score = rcpx99;
      if (typeof type != "undefined") {
        $.scoreData.type = type;
      }
      ;
      toggleScoreboardSave(true);
    }
  }
  function buildPlayers() {
    for (var rcpx6d = 0; rcpx6d < 2; rcpx6d++) {
      $.players["gameIconContainer" + rcpx6d].removeAllChildren();
      if (rcpx6d == 1) {
        if (gameData.ai) {
          $.players.gamePlayer1.text = textDisplay.computer;
        } else {
          $.players.gamePlayer1.text = textDisplay.player2;
        }
      }
      ;
      $.players["gameTurn" + rcpx6d].text = "";
      var rcpx90 = "icon" + gameData.icon + gameData.icons[rcpx6d];
      $.players["gameIcon" + rcpx6d] = new createjs.Bitmap(loader.getResult(rcpx90));
      centerReg($.players["gameIcon" + rcpx6d]);
      $.players["gameIconShadow" + rcpx6d] = new createjs.Bitmap(loader.getResult(rcpx90 + "Shadow"));
      centerReg($.players["gameIconShadow" + rcpx6d]);
      $.players["gameIcon" + rcpx6d].y = -35;
      $.players["gameIconShadow" + rcpx6d].x = $.players["gameIcon" + rcpx6d].x + boardSettings.shadowX;
      $.players["gameIconShadow" + rcpx6d].y = $.players["gameIcon" + rcpx6d].y + boardSettings.shadowY;
      $.players["gameIconContainer" + rcpx6d].addChild($.players["gameIconShadow" + rcpx6d], $.players["gameIcon" + rcpx6d]);
    }
    ;
    playerData.score = 0;
    playerData.opponentScore = 0;
    displayPlayerScore();
  }
  function buildBoard() {
    playSound("soundStart");
    statusContainer.alpha = 0;
    boardDesignContainer.removeAllChildren();
    boardIconContainer.removeAllChildren();
    boardStroke.graphics.clear();
    gameData.complete = false;
    gameData.aiMove = false;
    gameData.board = [];
    var rcpx9c = (boardSettings.width + boardSettings.margin / 2) * gameData.settings.size;
    var rcpx9d = (boardSettings.width + boardSettings.margin / 2) * gameData.settings.size;
    rcpx9c += boardSettings.margin / 2;
    rcpx9d += boardSettings.margin / 2;
    var rcpx9e = new createjs.Shape;
    rcpx9e.graphics.beginFill(boardSettings.boardColor).drawRoundRectComplex(-(rcpx9c / 2), -(rcpx9d / 2), rcpx9c, rcpx9d, boardSettings.radius, boardSettings.radius, boardSettings.radius, boardSettings.radius);
    boardDesignContainer.addChild(rcpx9e);
    var rcpx9f = {x: 0, y: 0, sX: 0, sY: 0};
    rcpx9f.sX = -((boardSettings.width + boardSettings.margin / 2) * (gameData.settings.size - 1) / 2);
    rcpx9f.sY = -((boardSettings.width + boardSettings.margin / 2) * (gameData.settings.size - 1) / 2);
    rcpx9f.x = rcpx9f.sX;
    rcpx9f.y = rcpx9f.sY;
    var rcpxa0 = 0;
    for (var rcpxa1 = 0; rcpxa1 < gameData.settings.size; rcpxa1++) {
      gameData.board.push([]);
      for (var rcpxa2 = 0; rcpxa2 < gameData.settings.size; rcpxa2++) {
        var rcpxa3 = new createjs.Shape;
        rcpxa3.graphics.beginFill(boardSettings.winColor).drawRoundRectComplex(-(boardSettings.width / 2), -(boardSettings.width / 2), boardSettings.width, boardSettings.width, boardSettings.radius, boardSettings.radius, boardSettings.radius, boardSettings.radius);
        rcpxa3.alpha = 0;
        gameData.board[rcpxa1][rcpxa2] = new createjs.Shape;
        gameData.board[rcpxa1][rcpxa2].graphics.beginFill(boardSettings.color).drawRoundRectComplex(-(boardSettings.width / 2), -(boardSettings.width / 2), boardSettings.width, boardSettings.width, boardSettings.radius, boardSettings.radius, boardSettings.radius, boardSettings.radius);
        gameData.board[rcpxa1][rcpxa2].hitArea = new createjs.Shape((new createjs.Graphics).beginFill("#000").drawRect(-(boardSettings.width / 2), -(boardSettings.width / 2), boardSettings.width, boardSettings.width));
        gameData.board[rcpxa1][rcpxa2].bgWin = rcpxa3;
        boardDesignContainer.addChild(gameData.board[rcpxa1][rcpxa2], rcpxa3);
        gameData.board[rcpxa1][rcpxa2].x = rcpxa3.x = rcpx9f.x;
        gameData.board[rcpxa1][rcpxa2].y = rcpxa3.y = rcpx9f.y;
        rcpx9f.x += boardSettings.width + boardSettings.margin / 2;
        gameData.board[rcpxa1][rcpxa2].row = rcpxa1;
        gameData.board[rcpxa1][rcpxa2].column = rcpxa2;
        gameData.board[rcpxa1][rcpxa2].id = rcpxa0;
        gameData.board[rcpxa1][rcpxa2].player = -1;
        gameData.board[rcpxa1][rcpxa2].cursor = "pointer";
        gameData.board[rcpxa1][rcpxa2].addEventListener("click", function (rcpx86) {
          if (gameData.paused) {
            return;
          }
          ;
          if (gameData.complete) {
            return;
          }
          ;
          if (gameData.moving) {
            return;
          }
          ;
          if (gameData.ai) {
            if (gameData.player == 1) {
              return;
            }
            ;
            gameData.aiMove = true;
          }
          ;
          if (rcpx86.target.player == -1) {
            placeIcon(rcpx86.target.row, rcpx86.target.column, gameData.player);
          }
        });
        rcpxa0++;
      }
      ;
      rcpx9f.x = rcpx9f.sX;
      rcpx9f.y += boardSettings.width + boardSettings.margin / 2;
    }
    ;
    statusContainer.y = rcpx9d / 2 + 10;
    boardContainer.scaleX = boardContainer.scaleY = 1;
    var rcpxa4 = 500;
    if (rcpx9d > rcpxa4) {
      var rcpxa5 = rcpxa4 / rcpx9d;
      boardContainer.scaleX = boardContainer.scaleY = rcpxa5;
    }
    ;
    if (gameData.player == 1 && gameData.ai) {
      moveAI();
    }
    ;
    displayPlayerTurn();
  }
  function displayPlayerTurn() {
    for (var rcpx6d = 0; rcpx6d < 2; rcpx6d++) {
      var rcpxa7 = "";
      if (rcpx6d == gameData.player && !gameData.complete) {
        rcpxa7 = textDisplay.userTurn;
        if (rcpx6d == 1 && gameData.ai) {
          rcpxa7 = textDisplay.computerTurn;
        }
      }
      ;
      $.players["gameTurn" + rcpx6d].text = rcpxa7;
      TweenMax.killTweensOf($.players["gameTurn" + rcpx6d]);
      if (rcpxa7 != "") {
        animatePlayerTurn($.players["gameTurn" + rcpx6d]);
      }
    }
  }
  function animatePlayerTurn(rcpx76) {
    rcpx76.alpha = 0.3;
    var rcpxa9 = 0.2;
    TweenMax.to(rcpx76, rcpxa9, {alpha: 1, overwrite: true, onComplete: function () {
      TweenMax.to(rcpx76, rcpxa9, {alpha: 0.3, overwrite: true, onComplete: animatePlayerTurn, onCompleteParams: [rcpx76]});
    }});
  }
  function animateTimer() {
    timerRedTxt.alpha = 0;
    TweenMax.to(timerRedTxt, 0.5, {alpha: 1, overwrite: true});
  }
  function showGameStatus(rcpx46) {
    if (rcpx46 == "timer") {
      statusTxt.text = textDisplay.timeUp;
    } else {
      statusTxt.text = textDisplay.draw;
    }
    ;
    statusContainer.alpha = 0;
    TweenMax.to(statusContainer, 0.5, {alpha: 1, overwrite: true});
  }
  function displayPlayerScore() {
    for (var rcpx6d = 0; rcpx6d < 2; rcpx6d++) {
      if (rcpx6d == 0) {
        $.players["gameWin" + rcpx6d].text = textDisplay.gameWin.replace("[NUMBER]", playerData.score);
      } else {
        $.players["gameWin" + rcpx6d].text = textDisplay.gameWin.replace("[NUMBER]", playerData.opponentScore);
      }
    }
  }
  function placeIcon(rcpxa1, rcpxa2, rcpxae) {
    var rcpxaf = Math.floor(Math.random() * 3);
    playSound("soundDrop" + (rcpxaf + 1));
    var rcpx90 = rcpxae == 0 ? "icon" + gameData.icon + gameData.icons[0] : "icon" + gameData.icon + gameData.icons[1];
    var rcpxb0 = new createjs.Bitmap(loader.getResult(rcpx90));
    centerReg(rcpxb0);
    var rcpxb1 = new createjs.Bitmap(loader.getResult(rcpx90 + "Shadow"));
    centerReg(rcpxb1);
    gameData.board[rcpxa1][rcpxa2].player = rcpxae;
    gameData.board[rcpxa1][rcpxa2].icon = rcpxb0;
    rcpxb0.x = gameData.board[rcpxa1][rcpxa2].x * boardSettings.tweenOffset;
    rcpxb0.y = gameData.board[rcpxa1][rcpxa2].y * boardSettings.tweenOffset;
    rcpxb1.x = gameData.board[rcpxa1][rcpxa2].x + boardSettings.shadowX;
    rcpxb1.y = gameData.board[rcpxa1][rcpxa2].y + boardSettings.shadowY;
    rcpxb0.scaleX = rcpxb0.scaleY = boardSettings.tweenScale;
    boardIconContainer.addChild(rcpxb1, rcpxb0);
    rcpxb1.alpha = 0;
    TweenMax.to(rcpxb1, boardSettings.tweenSpeed, {alpha: 1, scaleX: 1, scaleY: 1, ease: Expo.easeOut, overwrite: true});
    TweenMax.to(rcpxb0, boardSettings.tweenSpeed, {scaleX: 1, scaleY: 1, x: gameData.board[rcpxa1][rcpxa2].x, y: gameData.board[rcpxa1][rcpxa2].y, ease: Expo.easeOut, overwrite: true, onComplete: function () {
      togglePlayer();
      checkAnyPlayersWin(rcpxa1, rcpxa2, rcpxae);
      displayPlayerTurn();
      gameData.moving = false;
    }});
  }
  function togglePlayer() {
    gameData.player = gameData.player == 0 ? 1 : 0;
  }
  function checkAnyPlayersWin(rcpxa1, rcpxa2, rcpxae) {
    var rcpxb4 = 2.5;
    var rcpxb5 = winLine(bdSimple(), rcpxa1, rcpxa2, rcpxae);
    if (rcpxb5.length > 0) {
      gameData.complete = true;
      if (rcpxae == 0) {
        playerData.score++;
      } else {
        playerData.opponentScore++;
      }
      ;
      displayPlayerScore();
      animateWinBoard(rcpxb5);
      playSound("soundComplete");
    } else {
      if (gameOverQ(bdSimple())) {
        rcpxb4 = 1.5;
        gameData.complete = true;
        showGameStatus("draw");
        playSound("soundDraw");
      } else {
        if (gameData.aiMove) {
          gameData.aiMove = false;
          moveAI();
        }
      }
    }
    ;
    if (gameData.complete) {
      gameData.turn = gameData.turn == 1 ? 0 : 1;
      gameData.player = gameData.turn;
      TweenMax.to(gameContainer, rcpxb4, {overwrite: true, onComplete: function () {
        buildBoard();
      }});
    }
  }
  function animateWinBoard(rcpxb5) {
    if (boardSettings.strokeEnable) {
      boardStroke.graphics.setStrokeStyle(boardSettings.strokeNumber, "round").beginStroke(boardSettings.strokeColor);
      boardStroke.rotation = setRotation(gameData.board[rcpxb5[0][0]][rcpxb5[0][1]].x, gameData.board[rcpxb5[0][0]][rcpxb5[0][1]].y, gameData.board[rcpxb5[rcpxb5.length - 1][0]][rcpxb5[rcpxb5.length - 1][1]].x, gameData.board[rcpxb5[rcpxb5.length - 1][0]][rcpxb5[rcpxb5.length - 1][1]].y);
      var rcpxb7 = [0, 90, 180, 270];
      var rcpxb8 = boardSettings.width * gameData.settings.win;
      var rcpxb9 = getCenterPosition(gameData.board[rcpxb5[0][0]][rcpxb5[0][1]].x, gameData.board[rcpxb5[0][0]][rcpxb5[0][1]].y, gameData.board[rcpxb5[rcpxb5.length - 1][0]][rcpxb5[rcpxb5.length - 1][1]].x, gameData.board[rcpxb5[rcpxb5.length - 1][0]][rcpxb5[rcpxb5.length - 1][1]].y);
      boardStroke.x = rcpxb9.x;
      boardStroke.y = rcpxb9.y;
      if (rcpxb7.indexOf(Math.abs(boardStroke.rotation)) == -1) {
        rcpxb8 += boardSettings.width * 1.2;
      }
      ;
      boardStroke.graphics.mt(-(rcpxb8 / 2), 0);
      strokeData.x = -(rcpxb8 / 2);
      strokeData.y = 0;
      TweenMax.to(strokeData, 0.5, {x: rcpxb8 / 2, y: 0, overwrite: true, onUpdate: function () {
        boardStroke.graphics.lt(strokeData.x, strokeData.y);
      }});
    }
    ;
    for (var rcpx6d = 0; rcpx6d < rcpxb5.length; rcpx6d++) {
      var rcpxba = gameData.board[rcpxb5[rcpx6d][0]][rcpxb5[rcpx6d][1]].bgWin;
      var rcpxbb = gameData.board[rcpxb5[rcpx6d][0]][rcpxb5[rcpx6d][1]].icon;
      TweenMax.to(rcpxba, 0.5, {alpha: 1, overwrite: true});
      animateWinIcon(rcpxbb);
    }
  }
  function animateWinIcon(rcpx76) {
    TweenMax.to(rcpx76, 0.5, {scaleX: 1.2, scaleY: 1.2, ease: Expo.easeIn, overwrite: true, onComplete: function () {
      TweenMax.to(rcpx76, 0.5, {scaleX: 1, scaleY: 1, ease: Expo.easeOut, overwrite: true});
    }});
  }
  function moveAI() {
    gameData.moving = true;
    TweenMax.to(gameContainer, 0.5, {overwrite: true, onComplete: function () {
      var rcpxbe = moveAIBest(bdSimple(), 1);
      TweenMax.to(gameContainer, 0.5, {overwrite: true, onComplete: function () {
        if (rcpxbe.length > 0) {
          placeIcon(rcpxbe[0], rcpxbe[1], 1);
        } else {
          var rcpxbf = Math.floor(Math.random() * (gameData.settings.size - 1 - 0 + 1) + 0);
          var rcpxc0 = Math.floor(Math.random() * (gameData.settings.size - 1 - 0 + 1) + 0);
          placeIcon(rcpxbf, rcpxc0, 1);
        }
      }});
    }});
  }
  function moveAIBest(rcpxc2, rcpxae) {
    gameData.settings.choice = [];
    gameData.settings.aiplayer = rcpxae;
    gameData.settings.stt = performance.now();
    alphaBetaMinimax(rcpxc2, 0, [0, 0], rcpxae, -Infinity, +Infinity);
    return gameData.settings.choice;
  }
  function bdSimple() {
    var rcpxc2 = [];
    for (var rcpxa1 = 0; rcpxa1 < gameData.settings.size; rcpxa1++) {
      rcpxc2[rcpxa1] = [];
      for (var rcpxa2 = 0; rcpxa2 < gameData.settings.size; rcpxa2++) {
        rcpxc2[rcpxa1][rcpxa2] = gameData.board[rcpxa1][rcpxa2].player;
      }
    }
    ;
    return rcpxc2;
  }
  function alphaBetaMinimax(rcpxc2, rcpxc5, rcpxbe, rcpxae, rcpxc6, rcpxc7) {
    var rcpxc8 = 1 - rcpxae;
    var rcpxb5 = winLine(rcpxc2, rcpxbe[0], rcpxbe[1], rcpxc8);
    if (rcpxb5.length > 0) {
      if (rcpxc8 == gameData.settings.aiplayer) {
        return 20 - rcpxc5;
      } else {
        return rcpxc5 - 20;
      }
    }
    ;
    if (rcpxc5 > gameData.settings.level) {
      return Math.floor(Math.random() * 11 + -5);
    }
    ;
    var rcpxc9 = performance.now() - gameData.settings.stt;
    if (rcpxc5 > 3 && rcpxc9 > gameData.settings.timer) {
      return 0;
    }
    ;
    rcpxc5 += 1;
    var rcpxca = getAvailableMoves(rcpxc2);
    if (rcpxca.length == 0) {
      return Math.floor(Math.random() * 11 + -5);
    }
    ;
    var rcpxbe, result;
    if (rcpxae === gameData.settings.aiplayer) {
      for (var rcpxcb = 0; rcpxcb < rcpxca.length; rcpxcb++) {
        rcpxbe = rcpxca[rcpxcb];
        rcpxc2[rcpxbe[0]][rcpxbe[1]] = rcpxae;
        result = alphaBetaMinimax(rcpxc2, rcpxc5, rcpxbe, 1 - rcpxae, rcpxc6, rcpxc7);
        rcpxc2[rcpxbe[0]][rcpxbe[1]] = -1;
        if (result > rcpxc6) {
          rcpxc6 = result;
          if (rcpxc5 == 1) {
            gameData.settings.choice = rcpxbe;
          }
        } else {
          if (rcpxc6 >= rcpxc7) {
            return rcpxc6;
          }
        }
      }
      ;
      return rcpxc6;
    } else {
      for (var rcpxcb = 0; rcpxcb < rcpxca.length; rcpxcb++) {
        rcpxbe = rcpxca[rcpxcb];
        rcpxc2[rcpxbe[0]][rcpxbe[1]] = rcpxae;
        result = alphaBetaMinimax(rcpxc2, rcpxc5, rcpxbe, 1 - rcpxae, rcpxc6, rcpxc7);
        rcpxc2[rcpxbe[0]][rcpxbe[1]] = -1;
        if (result < rcpxc7) {
          rcpxc7 = result;
          if (rcpxc5 == 1) {
            gameData.settings.choice = rcpxbe;
          }
        } else {
          if (rcpxc7 <= rcpxc6) {
            return rcpxc7;
          }
        }
      }
      ;
      return rcpxc7;
    }
  }
  function getAvailableMoves(rcpxc2) {
    var rcpxcd = [];
    if (gameData.settings.size <= 5) {
      for (var rcpxa1 = 0; rcpxa1 < gameData.settings.size; rcpxa1++) {
        for (var rcpxa2 = 0; rcpxa2 < gameData.settings.size; rcpxa2++) {
          if (rcpxc2[rcpxa1][rcpxa2] == -1) {
            rcpxcd.push([rcpxa1, rcpxa2]);
          }
        }
      }
    } else {
      for (var rcpxa1 = 0; rcpxa1 < gameData.settings.size; rcpxa1++) {
        for (var rcpxa2 = 0; rcpxa2 < gameData.settings.size; rcpxa2++) {
          if (rcpxc2[rcpxa1][rcpxa2] == -1) {
            if (bdNear(rcpxc2, rcpxa1, rcpxa2, 2)) {
              rcpxcd.push([rcpxa1, rcpxa2]);
            }
          }
        }
      }
    }
    ;
    return rcpxcd;
  }
  function bdNear(rcpxc2, rcpxa1, rcpxa2, rcpx6d) {
    var rcpxcf = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
    for (var rcpxd0 = 0; rcpxd0 < rcpxcf.length; rcpxd0++) {
      var rcpxd1 = rcpxcf[rcpxd0];
      for (var rcpxd2 = 1; rcpxd2 <= rcpx6d; rcpxd2++) {
        if (bdPlayer(rcpxc2, rcpxa1 + rcpxd1[0] * rcpxd2, rcpxa2 + rcpxd1[1] * rcpxd2) != -1) {
          return true;
        }
      }
    }
    ;
    return false;
  }
  function winLine(rcpxc2, rcpxa1, rcpxa2, rcpxae) {
    var rcpxcf = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (var rcpxcb = 0; rcpxcb < rcpxcf.length; rcpxcb++) {
      var rcpxd1 = rcpxcf[rcpxcb];
      for (var rcpxd4 = 1 - gameData.settings.win; rcpxd4 < gameData.settings.win; rcpxd4++) {
        var rcpxd5 = rcpxa1 + rcpxd1[0] * rcpxd4;
        var rcpxd6 = rcpxa2 + rcpxd1[1] * rcpxd4;
        var rcpxd7 = true;
        var rcpxb5 = [];
        for (var rcpxd0 = 0; rcpxd0 < gameData.settings.win; rcpxd0++) {
          var rcpxd8 = rcpxd5 + rcpxd1[0] * rcpxd0;
          var rcpxd9 = rcpxd6 + rcpxd1[1] * rcpxd0;
          rcpxb5.push([rcpxd8, rcpxd9]);
          if (bdPlayer(rcpxc2, rcpxd8, rcpxd9) != rcpxae) {
            rcpxd7 = false;
            continue;
          }
        }
        ;
        if (rcpxd7) {
          return rcpxb5;
        }
      }
    }
    ;
    return [];
  }
  function bdPlayer(rcpxc2, rcpxa1, rcpxa2) {
    if (rcpxa1 < 0) {
      return -1;
    }
    ;
    if (rcpxa2 < 0) {
      return -1;
    }
    ;
    if (rcpxa1 >= gameData.settings.size) {
      return -1;
    }
    ;
    if (rcpxa2 >= gameData.settings.size) {
      return -1;
    }
    ;
    return rcpxc2[rcpxa1][rcpxa2];
  }
  function gameOverQ(rcpxc2) {
    for (var rcpxa1 = 0; rcpxa1 < gameData.settings.size; rcpxa1++) {
      for (var rcpxa2 = 0; rcpxa2 < gameData.settings.size; rcpxa2++) {
        if (bdPlayer(rcpxc2, rcpxa1, rcpxa2) == -1) {
          return false;
        }
      }
    }
    ;
    return true;
  }
  function toggleGameTimer(rcpx46) {
    if (rcpx46) {
      timeData.startDate = new Date;
    } else {}
    ;
    timeData.enable = rcpx46;
  }
  function updateGame() {
    if (!gameData.paused) {
      if (timeData.enable) {
        timeData.nowDate = new Date;
        timeData.elapsedTime = Math.floor(timeData.nowDate.getTime() - timeData.startDate.getTime());
        timeData.timer = Math.floor(timeData.countdown - timeData.elapsedTime);
        if (timeData.oldTimer == -1) {
          timeData.oldTimer = timeData.timer;
        }
        ;
        if (timeData.timer <= 0) {
          showGameStatus("timer");
          endGame();
        } else {
          if (timeData.oldTimer - timeData.timer > 1e3) {
            if (timeData.timer < 1e3) {
              animateTimer();
              playSound("soundCountdownEnd");
            } else {
              if (timeData.timer < 6e3) {
                animateTimer();
                playSound("soundCountdown");
              }
            }
            ;
            timeData.oldTimer = timeData.timer;
          }
          ;
          timerTxt.text = timerRedTxt.text = millisecondsToTime(timeData.timer);
        }
      }
    }
  }
  function endGame() {
    gameData.paused = true;
    toggleGameTimer(false);
    TweenMax.to(gameContainer, 2, {overwrite: true, onComplete: function () {
      goPage("result");
    }});
  }
  function millisecondsToTime(rcpxe0) {
    var rcpxe1 = rcpxe0 % 1e3;
    var rcpxe2 = Math.floor(rcpxe0 / 1e3 % 60);
    var rcpxe3 = Math.floor(rcpxe0 / 6e4 % 60);
    if (rcpxe2 < 10) {
      rcpxe2 = "0" + rcpxe2;
    }
    ;
    if (rcpxe3 < 10) {
      rcpxe3 = "0" + rcpxe3;
    }
    ;
    return rcpxe3 + ":" + rcpxe2;
  }
  function toggleOption() {
    if (optionsContainer.visible) {
      optionsContainer.visible = false;
    } else {
      optionsContainer.visible = true;
    }
  }
  function toggleGameMute(rcpx46) {
    buttonSoundOff.visible = false;
    buttonSoundOn.visible = false;
    toggleMute(rcpx46);
    if (rcpx46) {
      buttonSoundOn.visible = true;
    } else {
      buttonSoundOff.visible = true;
    }
  }
  function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        } else {
          if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else {
            if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          }
        }
      }
    } else {
      if (document.eritFullscreen) {
        document.eritFullscreen();
      } else {
        if (document.msEritFullscreen) {
          document.msEritFullscreen();
        } else {
          if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else {
            if (document.webkitEritFullscreen) {
              document.webkitEritFullscreen();
            }
          }
        }
      }
    }
  }
  function share(rcpxe8) {
    gtag("event", "click", {event_category: "share", event_label: rcpxe8});
    var rcpxe9 = location.href;
    rcpxe9 = rcpxe9.substring(0, rcpxe9.lastIndexOf("/") + 1);
    var rcpxea = "";
    var rcpxeb = "";
    rcpxea = shareTitle.replace("[SCORE]", playerData.score);
    rcpxeb = shareMessage.replace("[SCORE]", playerData.score);
    var rcpxec = "";
    if (rcpxe8 == "twitter") {
      rcpxec = "https://twitter.com/intent/tweet?url=" + rcpxe9 + "&text=" + rcpxeb;
    } else {
      if (rcpxe8 == "facebook") {
        rcpxec = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(rcpxe9 + "share.php?desc=" + rcpxeb + "&title=" + rcpxea + "&url=" + rcpxe9 + "&thumb=" + rcpxe9 + "share.jpg&width=590&height=300");
      } else {
        if (rcpxe8 == "google") {
          rcpxec = "https://plus.google.com/share?url=" + rcpxe9;
        } else {
          if (rcpxe8 == "whatsapp") {
            rcpxec = "whatsapp://send?text=" + encodeURIComponent(rcpxeb) + " - " + encodeURIComponent(rcpxe9);
          }
        }
      }
    }
    ;
    window.open(rcpxec);
  }
  var stageW = 1280;
  var stageH = 768;
  var contentW = 1024;
  var contentH = 576;
  var viewport = {isLandscape: true};
  var landscapeSize = {w: stageW, h: stageH, cW: contentW, cH: contentH};
  var portraitSize = {w: 768, h: 1024, cW: 576, cH: 900};
  function initMain() {
    if (!$.browser.mobile || !isTablet) {
      $("#canvasHolder").show();
    }
    ;
    initGameCanvas(stageW, stageH);
    buildGameCanvas();
    buildGameButton();
    if (typeof buildScoreBoardCanvas == "function") {
      buildScoreBoardCanvas();
    }
    ;
    goPage("main");
    checkMobileOrientation();
    resizeCanvas();
  }
  var windowW = windowH = 0;
  var scalePercent = 0;
  var offset = {x: 0, y: 0, left: 0, top: 0};
  function resizeGameFunc() {
    setTimeout(function () {
      $(".mobileRotate").css("left", checkContentWidth($(".mobileRotate")));
      $(".mobileRotate").css("top", checkContentHeight($(".mobileRotate")));
      windowW = window.innerWidth;
      windowH = window.innerHeight;
      scalePercent = windowW / contentW;
      if (contentH * scalePercent > windowH) {
        scalePercent = windowH / contentH;
      }
      ;
      scalePercent = scalePercent > 1 ? 1 : scalePercent;
      if (windowW > stageW && windowH > stageH) {
        if (windowW > stageW) {
          scalePercent = windowW / stageW;
          if (stageH * scalePercent > windowH) {
            scalePercent = windowH / stageH;
          }
        }
      }
      ;
      var rcpxf9 = stageW * scalePercent;
      var rcpxfa = stageH * scalePercent;
      offset.left = 0;
      offset.top = 0;
      if (rcpxf9 > windowW) {
        offset.left = -(rcpxf9 - windowW);
      } else {
        offset.left = windowW - rcpxf9;
      }
      ;
      if (rcpxfa > windowH) {
        offset.top = -(rcpxfa - windowH);
      } else {
        offset.top = windowH - rcpxfa;
      }
      ;
      offset.x = 0;
      offset.y = 0;
      if (offset.left < 0) {
        offset.x = Math.abs(offset.left / scalePercent / 2);
      }
      ;
      if (offset.top < 0) {
        offset.y = Math.abs(offset.top / scalePercent / 2);
      }
      ;
      $("canvas").css("width", rcpxf9);
      $("canvas").css("height", rcpxfa);
      $("canvas").css("left", offset.left / 2);
      $("canvas").css("top", offset.top / 2);
      $(window).scrollTop(0);
      resizeCanvas();
      if (typeof resizeScore == "function") {
        resizeScore();
      }
    }, 100);
  }
  var resizeTimer;
  function checkMobileEvent() {
    if ($.browser.mobile || isTablet) {
      $(window).off("orientationchange").on("orientationchange", function (rcpx4e) {
        $("#canvasHolder").hide();
        $("#rotateHolder").hide();
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkMobileOrientation, 1e3);
      });
      checkMobileOrientation();
    }
  }
  function checkMobileOrientation() {
    var rcpx6f = false;
    if (window.innerWidth > window.innerHeight) {
      rcpx6f = true;
    }
    ;
    if ($.editor.enable) {
      viewport.isLandscape = edit.isLandscape;
    } else {
      viewport.isLandscape = rcpx6f;
    }
    ;
    changeViewport(viewport.isLandscape);
    resizeGameFunc();
    $("#canvasHolder").show();
  }
  function toggleRotate(rcpx46) {
    if (rcpx46) {
      $("#rotateHolder").fadeIn();
    } else {
      $("#rotateHolder").fadeOut();
    }
    ;
    resizeGameFunc();
  }
  function initPreload() {
    toggleLoader(true);
    checkMobileEvent();
    $(window).resize(function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobileOrientation, 1e3);
    });
    resizeGameFunc();
    loader = new createjs.LoadQueue(false);
    manifest = [{src: "assets/background.png", id: "background"}, {src: "assets/background_p.png", id: "backgroundP"}, {src: "assets/logo.png", id: "logo"}, {src: "assets/logo_p.png", id: "logoP"}, {src: "assets/button_classic.png", id: "buttonClassic"}, {src: "assets/button_custom.png", id: "buttonCustom"}, {src: "assets/button_oneplayer.png", id: "buttonOnePlayer"}, {src: "assets/button_twoplayer.png", id: "buttonTwoPlayer"}, {src: "assets/button_start.png", id: "buttonStart"}, {src: "assets/button_plus.png", id: "buttonPlus"}, {src: "assets/button_minus.png", id: "buttonMinus"}, {src: "assets/button_theme.png", id: "buttonTheme"}, {src: "assets/button_switch.png", id: "buttonSwitch"}, {src: "assets/item_player.png", id: "itemPlayer"}, {src: "assets/item_gameplayer.png", id: "itemGamePlayer"}, {src: "assets/item_number.png", id: "itemNumber"}, {src: "assets/item_timer.png", id: "itemTimer"}, {src: "assets/item_status.png", id: "itemStatus"}, {src: "assets/button_facebook.png", id: "buttonFacebook"}, {src: "assets/button_twitter.png", id: "buttonTwitter"}, {src: "assets/button_whatsapp.png", id: "buttonWhatsapp"}, {src: "assets/button_continue.png", id: "buttonContinue"}, {src: "assets/item_pop.png", id: "itemPop"}, {src: "assets/item_pop_p.png", id: "itemPopP"}, {src: "assets/button_confirm.png", id: "buttonConfirm"}, {src: "assets/button_cancel.png", id: "buttonCancel"}, {src: "assets/button_fullscreen.png", id: "buttonFullscreen"}, {src: "assets/button_sound_on.png", id: "buttonSoundOn"}, {src: "assets/button_sound_off.png", id: "buttonSoundOff"}, {src: "assets/button_exit.png", id: "buttonExit"}, {src: "assets/button_settings.png", id: "buttonSettings"}];
    for (var rcpx6d = 0; rcpx6d < iconsArr.length; rcpx6d++) {
      manifest.push({src: iconsArr[rcpx6d].x, id: "icon" + rcpx6d + "x"});
      manifest.push({src: iconsArr[rcpx6d].o, id: "icon" + rcpx6d + "o"});
      manifest.push({src: iconsArr[rcpx6d].xShadow, id: "icon" + rcpx6d + "xShadow"});
      manifest.push({src: iconsArr[rcpx6d].oShadow, id: "icon" + rcpx6d + "oShadow"});
    }
    ;
    if (typeof addScoreboardAssets == "function") {
      addScoreboardAssets();
    }
    ;
    soundOn = true;
    if ($.browser.mobile || isTablet) {
      if (!enableMobileSound) {
        soundOn = false;
      }
    }
    ;
    if (soundOn) {
      manifest.push({src: "assets/sounds/sound_click.ogg", id: "soundButton"});
      manifest.push({src: "assets/sounds/sound_click_2.ogg", id: "soundButton2"});
      manifest.push({src: "assets/sounds/sound_drop_1.ogg", id: "soundDrop1"});
      manifest.push({src: "assets/sounds/sound_drop_2.ogg", id: "soundDrop2"});
      manifest.push({src: "assets/sounds/sound_drop_3.ogg", id: "soundDrop3"});
      manifest.push({src: "assets/sounds/sound_draw.ogg", id: "soundDraw"});
      manifest.push({src: "assets/sounds/sound_complete.ogg", id: "soundComplete"});
      manifest.push({src: "assets/sounds/sound_result.ogg", id: "soundResult"});
      manifest.push({src: "assets/sounds/sound_timer.ogg", id: "soundCountdown"});
      manifest.push({src: "assets/sounds/sound_timer_end.ogg", id: "soundCountdownEnd"});
      manifest.push({src: "assets/sounds/sound_start.ogg", id: "soundStart"});
      createjs.Sound.alternateExtensions = ["mp3"];
      loader.installPlugin(createjs.Sound);
    }
    ;
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("fileload", fileComplete);
    loader.addEventListener("error", handleFileError);
    loader.on("progress", handleProgress, this);
    loader.loadManifest(manifest);
  }
  function fileComplete(rcpx86) {
    var rcpx101 = rcpx86.item;
  }
  function handleFileError(rcpx86) {
    console.log("error ", rcpx86);
  }
  function handleProgress() {
    $("#mainLoader span").html(Math.round(loader.progress / 1 * 100) + "%");
  }
  function handleComplete() {
    toggleLoader(false);
    initMain();
  }
  function toggleLoader(rcpx46) {
    if (rcpx46) {
      $("#mainLoader").show();
    } else {
      $("#mainLoader").hide();
    }
  }
  var stageWidth, stageHeight = 0;
  var isLoaded = false;
  $(function () {
    var rcpx107 = function () {
      try {
        if (createjs.WebAudioPlugin.context.state === "suspended") {
          createjs.WebAudioPlugin.context.resume();
          window.removeEventListener("click", rcpx107);
        }
      } catch (e) {
        console.error("There was an error while trying to resume the SoundJS Web Audio context...");
        console.error(e);
      }
    };
    window.addEventListener("click", rcpx107);
    if (window.location.protocol.substr(0, 4) === "file") {
      alert("To install the game just upload folder 'game' to your server. The game won't run locally with some browser like Chrome due to some security mode.");
    }
    ;
    $(window).resize(function () {
      resizeLoaderFunc();
    });
    resizeLoaderFunc();
    checkBrowser();
  });
  function resizeLoaderFunc() {
    stageWidth = $(window).width();
    stageHeight = $(window).height();
    $("#mainLoader").css("left", checkContentWidth($("#mainLoader")));
    $("#mainLoader").css("top", checkContentHeight($("#mainLoader")));
  }
  var browserSupport = false;
  var isTablet;
  function checkBrowser() {
    isTablet = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase());
    deviceVer = getDeviceVer();
    var rcpx10c = document.createElement("canvas");
    if (rcpx10c.getContext) {
      browserSupport = true;
    }
    ;
    if (browserSupport) {
      if (!isLoaded) {
        isLoaded = true;
        initPreload();
      }
    } else {
      $("#notSupportHolder").show();
    }
  }
  