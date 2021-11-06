AFRAME.registerComponent('change-scene', {
  schema: {
    from: { type: 'string' },
    to: { type: 'string' }
  },

  init: function () {
    // Do something when component first attached.
    const el = this.el;
    const to = this.data.to;
    const from = this.data.from;
    const mySky = document.querySelector("#my-sky");
    let currentScene = from;
    let followingScene = to;
    el.addEventListener("mouseenter", function () {
      console.log("followingScene", followingScene)
      mySky.setAttribute("material", "src", followingScene);
      const followingSceneTillNow = followingScene;
      followingScene = currentScene;
      currentScene = followingSceneTillNow;
    });
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});